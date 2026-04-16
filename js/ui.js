/**
 * UI Module - User interface interactions
 */

const UI = (() => {
  let currentZoom = 1.0;

  const init = () => {
    setupThemeSwitcher();
    setupLanguageSwitcher();
    setupToolbar();
    setupSidebar();
    setupKeyboardShortcuts();
    setupMetaInputs();
  };

  const setupThemeSwitcher = () => {
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.body.setAttribute('data-theme', btn.dataset.theme);
        Storage.saveSettings({ theme: btn.dataset.theme });
      });
    });

    const settings = Storage.loadSettings();
    if (settings.theme) {
      document.body.setAttribute('data-theme', settings.theme);
      document.querySelector(`[data-theme="${settings.theme}"]`)?.classList.add('active');
    }
  };

  const setupLanguageSwitcher = () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        I18N.setLanguage(btn.dataset.lang);
        Render.renderPages();
        Render.renderNavigation();
      });
    });
  };

  const setupToolbar = () => {
    document.getElementById('undoBtn')?.addEventListener('click', () => {
      const state = History.undo();
      if (state) {
        Data.setPages(state);
        Render.renderPages();
        Render.renderNavigation();
      }
    });

    document.getElementById('redoBtn')?.addEventListener('click', () => {
      const state = History.redo();
      if (state) {
        Data.setPages(state);
        Render.renderPages();
        Render.renderNavigation();
      }
    });

    document.getElementById('zoomIn')?.addEventListener('click', () => {
      if (currentZoom < CONFIG.MAX_ZOOM) {
        currentZoom = Math.min(CONFIG.MAX_ZOOM, currentZoom + CONFIG.ZOOM_STEP);
        updateZoom();
      }
    });

    document.getElementById('zoomOut')?.addEventListener('click', () => {
      if (currentZoom > CONFIG.MIN_ZOOM) {
        currentZoom = Math.max(CONFIG.MIN_ZOOM, currentZoom - CONFIG.ZOOM_STEP);
        updateZoom();
      }
    });
  };

  const setupSidebar = () => {
    document.getElementById('saveBtn')?.addEventListener('click', () => {
      Storage.save(Data.getPages());
    });

    document.getElementById('loadBtn')?.addEventListener('click', () => {
      const data = Storage.load();
      if (data) {
        Data.setPages(data);
        Render.renderPages();
        Render.renderNavigation();
      }
    });

    document.getElementById('exportBtn')?.addEventListener('click', () => {
      Storage.exportData(Data.getPages());
    });

    document.getElementById('importBtn')?.addEventListener('click', () => {
      document.getElementById('importFileInput')?.click();
    });

    document.getElementById('importFileInput')?.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          const data = await Storage.importData(file);
          Data.setPages(data);
          Render.renderPages();
          Render.renderNavigation();
        } catch (error) {
          console.error('Import failed:', error);
        }
      }
      e.target.value = '';
    });

    document.getElementById('printBtn')?.addEventListener('click', () => {
      window.print();
    });

    document.getElementById('newDocBtn')?.addEventListener('click', () => {
      if (confirm(I18N.t('confirmNewDoc'))) {
        Data.setPages([
          {
            id: Utils.generateId('p'),
            type: CONFIG.PAGE_TYPES.COVER,
            headline: 'BALDŲ\nSPECIFIKACIJA.',
            tagline: I18N.t('coverTagline'),
            coverImg: ''
          }
        ]);
        Render.renderPages();
        Render.renderNavigation();
      }
    });

    document.getElementById('budgetToggle')?.addEventListener('click', (e) => {
      const showing = Data.togglePrices();
      e.target.textContent = I18N.t(showing ? 'hidePrices' : 'showPrices');
      e.target.classList.toggle('active', showing);
    });

    // Mobile sidebar
    document.getElementById('sidebarToggle')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.toggle('open');
      document.getElementById('sidebarOverlay')?.classList.toggle('active');
    });

    document.getElementById('sidebarOverlay')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.remove('open');
      document.getElementById('sidebarOverlay')?.classList.remove('active');
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    searchInput?.addEventListener('input', Utils.debounce((e) => {
      const query = e.target.value.trim();
      searchClear.style.display = query ? 'block' : 'none';
      
      if (query) {
        const results = Data.searchPages(query);
        highlightSearchResults(results);
      } else {
        clearSearchHighlights();
      }
    }, 300));

    searchClear?.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.style.display = 'none';
      clearSearchHighlights();
    });
  };

  const setupKeyboardShortcuts = () => {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 's') {
          e.preventDefault();
          Storage.save(Data.getPages());
        } else if (e.key === 'z') {
          e.preventDefault();
          const state = History.undo();
          if (state) {
            Data.setPages(state);
            Render.renderPages();
            Render.renderNavigation();
          }
        } else if (e.key === 'y' || (e.shiftKey && e.key === 'Z')) {
          e.preventDefault();
          const state = History.redo();
          if (state) {
            Data.setPages(state);
            Render.renderPages();
            Render.renderNavigation();
          }
        } else if (e.key === 'p') {
          e.preventDefault();
          window.print();
        }
      } else if (e.key === 'Escape') {
        clearSearchHighlights();
        document.getElementById('searchInput').value = '';
        document.getElementById('searchClear').style.display = 'none';
      }
    });
  };

  const setupMetaInputs = () => {
    ['clientName', 'projectName', 'docDate', 'preparedBy'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', Utils.debounce(() => {
        Render.updateCoverMeta();
      }, 500));
    });
  };

  const updateZoom = () => {
    const container = document.getElementById('pagesContainer');
    const zoomLevel = document.getElementById('zoomLevel');
    
    if (container) {
      container.style.transform = `scale(${currentZoom})`;
    }
    if (zoomLevel) {
      zoomLevel.textContent = `${Math.round(currentZoom * 100)}%`;
    }
  };

  const highlightSearchResults = (results) => {
    clearSearchHighlights();
    results.forEach(result => {
      const pill = document.querySelector(`[data-page-id="${result.pageId}"]`);
      pill?.classList.add('highlight');
    });
  };

  const clearSearchHighlights = () => {
    document.querySelectorAll('.nav-pill.highlight').forEach(pill => {
      pill.classList.remove('highlight');
    });
  };

  return { init };
})();
