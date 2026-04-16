/**
 * History Module - Undo/Redo functionality
 */

const History = (() => {
  let history = [];
  let currentIndex = -1;
  let enabled = CONFIG.FEATURES.HISTORY;

  const push = (state) => {
    if (!enabled) return;
    
    // Remove any redo history
    history = history.slice(0, currentIndex + 1);
    
    // Add new state
    history.push(Utils.deepClone(state));
    
    // Limit history size
    if (history.length > CONFIG.MAX_HISTORY_STEPS) {
      history.shift();
    } else {
      currentIndex++;
    }
    
    updateButtons();
  };

  const undo = () => {
    if (!canUndo()) return null;
    currentIndex--;
    updateButtons();
    return Utils.deepClone(history[currentIndex]);
  };

  const redo = () => {
    if (!canRedo()) return null;
    currentIndex++;
    updateButtons();
    return Utils.deepClone(history[currentIndex]);
  };

  const canUndo = () => currentIndex > 0;
  const canRedo = () => currentIndex < history.length - 1;

  const clear = () => {
    history = [];
    currentIndex = -1;
    updateButtons();
  };

  const updateButtons = () => {
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    
    if (undoBtn) undoBtn.disabled = !canUndo();
    if (redoBtn) redoBtn.disabled = !canRedo();
  };

  return { push, undo, redo, canUndo, canRedo, clear };
})();
