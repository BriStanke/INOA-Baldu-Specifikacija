/**
 * Utility Functions
 */

const Utils = (() => {
  /**
   * Generate unique ID
   * @returns {string} Unique ID
   */
  const generateId = (prefix = 'id') => {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  /**
   * Debounce function
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {Function} Debounced function
   */
  const debounce = (func, wait = CONFIG.DEBOUNCE_DELAY) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  /**
   * Show toast notification
   * @param {string} message - Toast message
   * @param {string} type - Toast type (success, error, info)
   * @param {number} duration - Duration in milliseconds
   */
  const showToast = (message, type = 'info', duration = CONFIG.TOAST_DURATION) => {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
      success: '✓',
      error: '✕',
      info: 'ℹ'
    };
    
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || icons.info}</span>
      <span class="toast-message">${message}</span>
      <button class="toast-close">&times;</button>
    `;
    
    container.appendChild(toast);
    
    const closeBtn = toast.querySelector('.toast-close');
    const removeToast = () => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    };
    
    closeBtn.addEventListener('click', removeToast);
    setTimeout(removeToast, duration);
  };

  /**
   * Show/hide loading overlay
   * @param {boolean} show - Show or hide
   * @param {string} message - Loading message
   */
  const showLoading = (show, message = I18N.t('loading')) => {
    const overlay = document.getElementById('loadingOverlay');
    if (!overlay) return;
    
    if (show) {
      overlay.querySelector('.loading-text').textContent = message;
      overlay.style.display = 'flex';
    } else {
      overlay.style.display = 'none';
    }
  };

  /**
   * Format currency
   * @param {number} amount - Amount
   * @param {string} currency - Currency code
   * @returns {string} Formatted currency
   */
  const formatCurrency = (amount, currency = CONFIG.DEFAULT_CURRENCY) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  /**
   * Calculate total price from pages
   * @param {Array} pages - Pages array
   * @returns {number} Total price
   */
  const calculateTotal = (pages) => {
    return pages
      .filter(p => p.type === 'content')
      .flatMap(p => p.items || [])
      .reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);
  };

  /**
   * Scroll element into view smoothly
   * @param {string|HTMLElement} element - Element or selector
   */
  const scrollToElement = (element) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /**
   * Deep clone object
   * @param {*} obj - Object to clone
   * @returns {*} Cloned object
   */
  const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };

  /**
   * Get all images from pages
   * @param {Array} pages - Pages array
   * @returns {Array} Array of image URLs
   */
  const getAllImages = (pages) => {
    const images = [];
    
    pages.forEach(page => {
      if (page.coverImg) images.push(page.coverImg);
      if (page.sectionImg) images.push(page.sectionImg);
      if (page.tyImg) images.push(page.tyImg);
      
      if (page.items) {
        page.items.forEach(item => {
          if (item.img) images.push(item.img);
        });
      }
    });
    
    return images.filter(Boolean);
  };

  /**
   * Download file
   * @param {string} content - File content
   * @param {string} filename - File name
   * @param {string} mimeType - MIME type
   */
  const downloadFile = (content, filename, mimeType = 'text/plain') => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return {
    generateId,
    debounce,
    showToast,
    showLoading,
    formatCurrency,
    calculateTotal,
    scrollToElement,
    deepClone,
    getAllImages,
    downloadFile
  };
})();
