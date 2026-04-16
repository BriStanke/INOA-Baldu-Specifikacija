/**
 * Image Utilities - Compression and handling
 */

const ImageUtils = (() => {
  const compressImage = (file, maxWidth = CONFIG.MAX_IMAGE_WIDTH, quality = CONFIG.IMAGE_QUALITY) => {
    return new Promise((resolve, reject) => {
      if (file.size > CONFIG.MAX_IMAGE_SIZE) {
        Utils.showToast(I18N.t('errorImageTooLarge'), 'error');
        reject(new Error('Image too large'));
        return;
      }

      const reader = new FileReader();
      
      reader.onload = (e) => {
        const img = new Image();
        
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
          
          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob((blob) => {
            const reader2 = new FileReader();
            reader2.onload = (e2) => resolve(e2.target.result);
            reader2.readAsDataURL(blob);
          }, 'image/jpeg', quality);
        };
        
        img.onerror = () => reject(new Error('Failed to load image'));
        img.src = e.target.result;
      };
      
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const readImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  return { compressImage, readImage };
})();
