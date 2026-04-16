/**
 * Application initialization
 */

(function() {
  'use strict';

  // Initialize when DOM is ready
  function init() {
    console.log('%c✨ INOA Furniture Spec Pro v2.0', 'font-size: 16px; font-weight: bold; color: #c8a882;');
    console.log('%cModular Edition - All features enabled', 'font-size: 12px; color: #888;');
    
    // Initialize I18N
    I18N.init();
    
    // Initialize UI
    UI.init();
    
    // Initial render
    Render.renderPages();
    Render.renderNavigation();
    Render.updateBudget();
    
    // Start autosave
    Storage.startAutosave(() => Data.getPages());
    
    // Check for saved data
    const savedData = Storage.load(true); // Load from autosave
    if (savedData) {
      console.log('Autosaved data restored');
    }
    
    // Listen for page unload to save
    window.addEventListener('beforeunload', () => {
      Storage.save(Data.getPages(), true);
    });
  }

  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
