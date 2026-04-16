/**
 * Storage Module
 * Handles localStorage persistence with auto-save
 */

const Storage = (() => {
  let autosaveTimer = null;

  /**
   * Save data to localStorage
   * @param {Array} data - Pages data
   * @param {boolean} isAutosave - Whether this is an autosave
   */
  const save = (data, isAutosave = false) => {
    try {
      const key = isAutosave ? CONFIG.STORAGE_KEY_AUTOSAVE : CONFIG.STORAGE_KEY;
      localStorage.setItem(key, JSON.stringify({
        version: CONFIG.VERSION,
        timestamp: Date.now(),
        data: data
      }));
      
      if (!isAutosave) {
        Utils.showToast(I18N.t('saved'), 'success');
      }
      
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      Utils.showToast(I18N.t('errorSavingData'), 'error');
      return false;
    }
  };

  /**
   * Load data from localStorage
   * @param {boolean} fromAutosave - Whether to load from autosave
   * @returns {Array|null} Pages data or null
   */
  const load = (fromAutosave = false) => {
    try {
      const key = fromAutosave ? CONFIG.STORAGE_KEY_AUTOSAVE : CONFIG.STORAGE_KEY;
      const stored = localStorage.getItem(key);
      
      if (!stored) return null;
      
      const parsed = JSON.parse(stored);
      return parsed.data;
    } catch (error) {
      console.error('Load error:', error);
      return null;
    }
  };

  /**
   * Export data as JSON file
   * @param {Array} data - Pages data
   */
  const exportData = (data) => {
    const exportObj = {
      app: CONFIG.APP_NAME,
      version: CONFIG.VERSION,
      exported: new Date().toISOString(),
      clientName: document.getElementById('clientName')?.value || '',
      projectName: document.getElementById('projectName')?.value || '',
      data: data
    };
    
    const dataStr = JSON.stringify(exportObj, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `furniture-spec-${Date.now()}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    Utils.showToast(I18N.t('exported'), 'success');
  };

  /**
   * Import data from JSON file
   * @param {File} file - JSON file
   * @returns {Promise<Array>} Imported data
   */
  const importData = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const parsed = JSON.parse(e.target.result);
          
          if (!parsed.data || !Array.isArray(parsed.data)) {
            throw new Error('Invalid format');
          }
          
          // Update meta fields if present
          if (parsed.clientName) {
            document.getElementById('clientName').value = parsed.clientName;
          }
          if (parsed.projectName) {
            document.getElementById('projectName').value = parsed.projectName;
          }
          
          Utils.showToast(I18N.t('imported'), 'success');
          resolve(parsed.data);
        } catch (error) {
          console.error('Import error:', error);
          Utils.showToast(I18N.t('errorInvalidFile'), 'error');
          reject(error);
        }
      };
      
      reader.onerror = () => {
        Utils.showToast(I18N.t('errorLoadingFile'), 'error');
        reject(reader.error);
      };
      
      reader.readAsText(file);
    });
  };

  /**
   * Start auto-save timer
   */
  const startAutosave = (getDataFn) => {
    if (!CONFIG.FEATURES.AUTOSAVE) return;
    
    stopAutosave();
    autosaveTimer = setInterval(() => {
      const data = getDataFn();
      save(data, true);
    }, CONFIG.AUTOSAVE_INTERVAL);
  };

  /**
   * Stop auto-save timer
   */
  const stopAutosave = () => {
    if (autosaveTimer) {
      clearInterval(autosaveTimer);
      autosaveTimer = null;
    }
  };

  /**
   * Clear all storage
   */
  const clear = () => {
    localStorage.removeItem(CONFIG.STORAGE_KEY);
    localStorage.removeItem(CONFIG.STORAGE_KEY_AUTOSAVE);
    localStorage.removeItem(CONFIG.STORAGE_KEY_SETTINGS);
  };

  /**
   * Save settings
   * @param {Object} settings - Settings object
   */
  const saveSettings = (settings) => {
    localStorage.setItem(CONFIG.STORAGE_KEY_SETTINGS, JSON.stringify(settings));
  };

  /**
   * Load settings
   * @returns {Object} Settings object
   */
  const loadSettings = () => {
    try {
      const stored = localStorage.getItem(CONFIG.STORAGE_KEY_SETTINGS);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  };

  return {
    save,
    load,
    exportData,
    importData,
    startAutosave,
    stopAutosave,
    clear,
    saveSettings,
    loadSettings
  };
})();
