'use strict';

import { loadComponents } from './modules/loader.js';
import { initSidebar } from './modules/sidebar.js';
import { initModal } from './modules/modal.js';
import { initPortfolioFilter } from './modules/portfolio.js';
import { initContactForm } from './modules/contact.js';
import { initNavigation } from './modules/navigation.js';

// Load HTML components first, then initialize all JS features
document.addEventListener('DOMContentLoaded', async () => {
  await loadComponents();

  initSidebar();
  initModal();
  initPortfolioFilter();
  initContactForm();
  initNavigation();
});