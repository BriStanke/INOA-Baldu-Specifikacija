/**
 * Render Module - DOM rendering functions
 */

const Render = (() => {
  const renderPage = (page, index) => {
    const pageNum = index + 1;
    
    if (page.type === CONFIG.PAGE_TYPES.COVER) {
      return `
        <div class="page" data-page-id="${page.id}">
          <div class="cover">
            <div class="cover-top">
              <div class="cover-eyebrow">${I18N.t('coverEyebrow')}</div>
              <div class="cover-headline" contenteditable="true" data-page-id="${page.id}" data-field="headline">${page.headline || ''}</div>
              <div class="cover-tagline" contenteditable="true" data-page-id="${page.id}" data-field="tagline">${page.tagline || ''}</div>
            </div>
            <div class="cover-image-strip" data-page-id="${page.id}" data-field="coverImg">
              ${page.coverImg ? `<img src="${page.coverImg}" alt="Cover">` : `<span class="img-placeholder-big">${I18N.t('addImage')}</span>`}
              <div class="img-overlay">${I18N.t('changeImage')}</div>
              <input type="file" accept="image/*" data-target="coverImg">
            </div>
            <div class="cover-bottom">
              <div class="cover-meta-item">
                <label>${I18N.t('clientName')}</label>
                <span class="cover-meta-value" id="coverClient">-</span>
              </div>
              <div class="cover-meta-item">
                <label>${I18N.t('projectName')}</label>
                <span class="cover-meta-value" id="coverProject">-</span>
              </div>
              <div class="cover-meta-item">
                <label>${I18N.t('docDate')}</label>
                <span class="cover-meta-value" id="coverDate">-</span>
                <div class="cover-prepared" id="coverPrepared">-</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    
    return '';
  };

  const renderPages = () => {
    const container = document.getElementById('pagesContainer');
    if (!container) return;

    const pages = Data.getPages();
    container.innerHTML = pages.map((page, index) => renderPage(page, index)).join('');
    
    updateCoverMeta();
  };

  const renderNavigation = () => {
    const navList = document.getElementById('navList');
    if (!navList) return;

    const pages = Data.getPages();
    
    navList.innerHTML = pages.map((page, index) => {
      const pageTypes = {
        [CONFIG.PAGE_TYPES.COVER]: 'cover',
        [CONFIG.PAGE_TYPES.INDEX]: 'index',
        [CONFIG.PAGE_TYPES.SECTION]: 'section',
        [CONFIG.PAGE_TYPES.CONTENT]: 'content',
        [CONFIG.PAGE_TYPES.THANKS]: 'thanks'
      };
      
      const dotClass = pageTypes[page.type] || 'content';
      const pageName = page.headline || page.room || I18N.t(page.type) || 'Page';
      const pageNum = index + 1;
      
      return `
        <div class="nav-pill" data-page-id="${page.id}">
          <span class="nav-dot ${dotClass}"></span>
          <span class="nav-pill-name">${pageName.substring(0, 30)}</span>
          <span class="nav-pill-pg">${pageNum}</span>
          ${page.type !== CONFIG.PAGE_TYPES.COVER ? `<button class="nav-pill-del" data-page-id="${page.id}">&times;</button>` : ''}
        </div>
      `;
    }).join('');
  };

  const updateCoverMeta = () => {
    const clientEl = document.getElementById('coverClient');
    const projectEl = document.getElementById('coverProject');
    const dateEl = document.getElementById('coverDate');
    const preparedEl = document.getElementById('coverPrepared');
    
    if (clientEl) clientEl.textContent = document.getElementById('clientName')?.value || '-';
    if (projectEl) projectEl.textContent = document.getElementById('projectName')?.value || '-';
    if (dateEl) dateEl.textContent = document.getElementById('docDate')?.value || '-';
    if (preparedEl) preparedEl.textContent = document.getElementById('preparedBy')?.value || '-';
  };

  const updateBudget = () => {
    const budgetEl = document.getElementById('budgetTotal');
    if (!budgetEl) return;
    
    const total = Utils.calculateTotal(Data.getPages());
    budgetEl.textContent = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(total);
  };

  return {
    renderPages,
    renderNavigation,
    updateCoverMeta,
    updateBudget
  };
})();
