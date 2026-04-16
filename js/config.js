/**
 * Furniture Specification Pro - Configuration
 * Central configuration for the application
 */

const CONFIG = {
  // Application info
  APP_NAME: 'INOA Furniture Specification Pro',
  VERSION: '2.0.0',
  
  // Storage keys
  STORAGE_KEY: 'inoa-furniture-spec',
  STORAGE_KEY_SETTINGS: 'inoa-furniture-spec-settings',
  STORAGE_KEY_AUTOSAVE: 'inoa-furniture-spec-autosave',
  
  // Auto-save interval (milliseconds)
  AUTOSAVE_INTERVAL: 30000, // 30 seconds
  
  // Image settings
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_IMAGE_WIDTH: 1920,
  MAX_IMAGE_HEIGHT: 1920,
  IMAGE_QUALITY: 0.85,
  
  // History settings
  MAX_HISTORY_STEPS: 50,
  
  // UI settings
  TOAST_DURATION: 3000,
  DEBOUNCE_DELAY: 300,
  
  // Zoom settings
  MIN_ZOOM: 0.5,
  MAX_ZOOM: 2.0,
  ZOOM_STEP: 0.1,
  
  // Currency
  DEFAULT_CURRENCY: 'EUR',
  CURRENCIES: ['EUR', 'USD', 'GBP', 'PLN', 'SEK'],
  
  // Supported languages
  SUPPORTED_LANGUAGES: ['lt', 'en'],
  DEFAULT_LANGUAGE: 'lt',
  
  // Page types
  PAGE_TYPES: {
    COVER: 'cover',
    INDEX: 'index',
    SECTION: 'sectionTitle',
    CONTENT: 'content',
    THANKS: 'thankYou'
  },
  
  // Themes
  THEMES: ['light', 'warm', 'neutral', 'dark'],
  DEFAULT_THEME: 'neutral',
  
  // Feature flags
  FEATURES: {
    AUTOSAVE: true,
    TEMPLATES: true,
    HISTORY: true,
    SEARCH: true,
    GALLERY: true,
    EXPORT: true,
    PRICING: true,
    PDF_GENERATION: true
  }
};

// Freeze the config to prevent modifications
Object.freeze(CONFIG);
Object.freeze(CONFIG.FEATURES);
Object.freeze(CONFIG.PAGE_TYPES);
