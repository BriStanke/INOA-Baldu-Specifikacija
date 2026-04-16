/**
 * Data Module - Data model and state management
 */

const Data = (() => {
  // Initial default data
  let pages = [
    {
      id: 'p_cover',
      type: CONFIG.PAGE_TYPES.COVER,
      headline: 'BALDŲ\nSPECIFIKACIJA.',
      tagline: 'Šiame dokumente pateikiama visa informacija apie pasirinktus baldus, apšvietimą ir apdailos medžiagas.',
      coverImg: ''
    },
    {
      id: 'p_index',
      type: CONFIG.PAGE_TYPES.INDEX,
      items: [
        { name: 'Apžvalga', page: '1' },
        { name: 'Gyvenamasis kambarys', page: '3' }
      ]
    }
  ];

  let showPrices = false;

  const getPages = () => pages;
  const setPages = (newPages) => {
    pages = newPages;
    History.push(pages);
  };

  const addPage = (page, position = pages.length) => {
    pages.splice(position, 0, page);
    History.push(pages);
  };

  const deletePage = (pageId) => {
    if (pageId === 'p_cover') return false;
    pages = pages.filter(p => p.id !== pageId);
    History.push(pages);
    return true;
  };

  const getPage = (pageId) => pages.find(p => p.id === pageId);

  const updatePage = (pageId, updates) => {
    const page = getPage(pageId);
    if (page) {
      Object.assign(page, updates);
      History.push(pages);
    }
  };

  const togglePrices = () => {
    showPrices = !showPrices;
    return showPrices;
  };

  const getPricesVisibility = () => showPrices;

  const searchPages = (query) => {
    if (!query) return [];
    
    const results = [];
    const lowerQuery = query.toLowerCase();
    
    pages.forEach(page => {
      if (page.type === CONFIG.PAGE_TYPES.CONTENT && page.items) {
        page.items.forEach(item => {
          const searchText = [
            item.supplier,
            item.name,
            item.collection,
            item.material,
            item.colour
          ].join(' ').toLowerCase();
          
          if (searchText.includes(lowerQuery)) {
            results.push({ pageId: page.id, itemId: item.id, page });
          }
        });
      }
      
      if (page.room && page.room.toLowerCase().includes(lowerQuery)) {
        results.push({ pageId: page.id, page });
      }
    });
    
    return results;
  };

  return {
    getPages,
    setPages,
    addPage,
    deletePage,
    getPage,
    updatePage,
    togglePrices,
    getPricesVisibility,
    searchPages
  };
})();
