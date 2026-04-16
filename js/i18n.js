/**
 * Internationalization Module
 * Handles multi-language support
 */

const I18N = (() => {
  let currentLang = CONFIG.DEFAULT_LANGUAGE;
  
  const translations = {
    lt: {
      // Sidebar
      clientName: 'Kliento vardas',
      projectName: 'Projektas',
      docDate: 'Data',
      preparedBy: 'Dizaineris',
      totalBudget: 'Iš viso',
      showPrices: 'Rodyti kainas',
      hidePrices: 'Slėpti kainas',
      search: 'Ieškoti...',
      pages: 'Puslapiai',
      addPage: 'Pridėti puslapį',
      addContentPage: '+ Turinio puslapis',
      addSectionPage: '+ Skyriaus titulas',
      addIndexPage: '+ Turinys',
      addThankYouPage: '+ Padėkos puslapis',
      
      // Actions
      print: 'Spausdinti',
      generatePDF: 'Generuoti PDF',
      save: '💾 Išsaugoti',
      load: '📂 Įkelti',
      export: '⬇️ Eksportuoti',
      import: '⬆️ Importuoti',
      newDoc: 'Naujas dokumentas',
      
      // Toolbar
      templates: 'Šablonai',
      gallery: 'Galerija',
      
      // Page types
      cover: 'Viršelis',
      index: 'Turinys',
      section: 'Skyrius',
      content: 'Turinys',
      thanks: 'Padėka',
      
      // Content
      addItem: '+ Pridėti prekę',
      editItem: 'Redaguoti prekę',
      deleteItem: 'Ištrinti prekę',
      deletePage: 'Ištrinti puslapį',
      
      // Spec labels
      collection: 'Kolekcija',
      material: 'Medžiaga',
      colour: 'Spalva',
      dimensions: 'Matmenys',
      care: 'Priežiūra',
      link: 'Nuoroda',
      notes: 'Pastabos',
      price: 'Kaina',
      
      // Modals
      chooseTemplate: 'Pasirinkite šabloną',
      imageGallery: 'Nuotraukų galerija',
      
      // Messages
      loading: 'Kraunama...',
      saving: 'Išsaugoma...',
      saved: 'Išsaugota!',
      exported: 'Eksportuota!',
      imported: 'Importuota!',
      error: 'Klaida',
      success: 'Sėkmingai',
      confirmDelete: 'Ar tikrai norite ištrinti?',
      confirmNewDoc: 'Pradėti naują dokumentą? Neišsaugoti pakeitimai bus prarasti.',
      
      // Templates
      modernLiving: 'Modernūs gyvenamasios baldai',
      minimalistBedroom: 'Minimalistinis miegamasis',
      luxuryKitchen: 'Prabangios virtuvės',
      scandinavianStyle: 'Skandinaviškas stilius',
      
      // Errors
      errorLoadingFile: 'Klaida įkeliant failą',
      errorSavingData: 'Klaida išsaugant duomenis',
      errorInvalidFile: 'Netinkamas failo formatas',
      errorImageTooLarge: 'Nuotrauka per didelė (maks. 5MB)',
      
      // Cover page
      coverEyebrow: 'Baldų specifikacija — Klientų perdavimo dokumentas',
      coverTagline: 'Šiame dokumente pateikiama visa informacija apie pasirinktus baldus, apšvietimą ir apdailos medžiagas.',
      
      // Image placeholders
      addImage: 'Pridėti nuotrauką',
      changeImage: 'Keisti nuotrauką',
      clickToAddImage: 'Spustelėkite, kad pridėtumėte nuotrauką',
      
      // Thank you page
      thankYouTitle: 'Ačiū.',
      thankYouBody: 'Džiaugiamės, kad galėjome dirbti su jumis šiame projekte. Tikimės, kad jūsų namai taps vieta, kurioje kiekviena detalė atspindės jūsų asmenybę ir gyvenimo būdą.\n\nDėl bet kokių klausimų susisiekite su mumis.'
    },
    
    en: {
      // Sidebar
      clientName: 'Client Name',
      projectName: 'Project',
      docDate: 'Date',
      preparedBy: 'Prepared By',
      totalBudget: 'Total',
      showPrices: 'Show Prices',
      hidePrices: 'Hide Prices',
      search: 'Search...',
      pages: 'Pages',
      addPage: 'Add Page',
      addContentPage: '+ Content Page',
      addSectionPage: '+ Section Title',
      addIndexPage: '+ Index',
      addThankYouPage: '+ Thank You Page',
      
      // Actions
      print: 'Print',
      generatePDF: 'Generate PDF',
      save: '💾 Save',
      load: '📂 Load',
      export: '⬇️ Export',
      import: '⬆️ Import',
      newDoc: 'New Document',
      
      // Toolbar
      templates: 'Templates',
      gallery: 'Gallery',
      
      // Page types
      cover: 'Cover',
      index: 'Index',
      section: 'Section',
      content: 'Content',
      thanks: 'Thanks',
      
      // Content
      addItem: '+ Add Item',
      editItem: 'Edit Item',
      deleteItem: 'Delete Item',
      deletePage: 'Delete Page',
      
      // Spec labels
      collection: 'Collection',
      material: 'Material',
      colour: 'Colour',
      dimensions: 'Dimensions',
      care: 'Care',
      link: 'Link',
      notes: 'Notes',
      price: 'Price',
      
      // Modals
      chooseTemplate: 'Choose Template',
      imageGallery: 'Image Gallery',
      
      // Messages
      loading: 'Loading...',
      saving: 'Saving...',
      saved: 'Saved!',
      exported: 'Exported!',
      imported: 'Imported!',
      error: 'Error',
      success: 'Success',
      confirmDelete: 'Are you sure you want to delete this?',
      confirmNewDoc: 'Start a new document? Unsaved changes will be lost.',
      
      // Templates
      modernLiving: 'Modern Living Room',
      minimalistBedroom: 'Minimalist Bedroom',
      luxuryKitchen: 'Luxury Kitchen',
      scandinavianStyle: 'Scandinavian Style',
      
      // Errors
      errorLoadingFile: 'Error loading file',
      errorSavingData: 'Error saving data',
      errorInvalidFile: 'Invalid file format',
      errorImageTooLarge: 'Image too large (max 5MB)',
      
      // Cover page
      coverEyebrow: 'Furniture Specification — Client Handover Document',
      coverTagline: 'This document contains all information about selected furniture, lighting and finishing materials.',
      
      // Image placeholders
      addImage: 'Add Image',
      changeImage: 'Change Image',
      clickToAddImage: 'Click to add image',
      
      // Thank you page
      thankYouTitle: 'Thank You.',
      thankYouBody: 'We are delighted to have worked with you on this project. We hope your home becomes a place where every detail reflects your personality and lifestyle.\n\nFor any questions, please contact us.'
    }
  };
  
  /**
   * Get translation for a key
   * @param {string} key - Translation key
   * @param {string} [lang] - Language code (defaults to current language)
   * @returns {string} Translated text
   */
  const t = (key, lang = currentLang) => {
    return translations[lang]?.[key] || translations[CONFIG.DEFAULT_LANGUAGE]?.[key] || key;
  };
  
  /**
   * Set current language
   * @param {string} lang - Language code
   */
  const setLanguage = (lang) => {
    if (!CONFIG.SUPPORTED_LANGUAGES.includes(lang)) {
      console.warn(`Unsupported language: ${lang}`);
      return;
    }
    
    currentLang = lang;
    localStorage.setItem('inoa-lang', lang);
    updateDOM();
  };
  
  /**
   * Get current language
   * @returns {string} Current language code
   */
  const getLanguage = () => currentLang;
  
  /**
   * Update DOM with current translations
   */
  const updateDOM = () => {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key);
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    
    // Trigger custom event
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
  };
  
  /**
   * Initialize i18n system
   */
  const init = () => {
    // Load saved language or detect from browser
    const savedLang = localStorage.getItem('inoa-lang');
    const browserLang = navigator.language.split('-')[0];
    
    const lang = savedLang || 
                 (CONFIG.SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : CONFIG.DEFAULT_LANGUAGE);
    
    setLanguage(lang);
    
    // Setup language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
      });
    });
  };
  
  return {
    t,
    setLanguage,
    getLanguage,
    updateDOM,
    init
  };
})();
