import './style.css';
import { hamburger, openMenu, closeMenu } from './modules/mobile-menu.js';
import {
  logoandnameNav,
  navMenuMobileLinks,
  navDesktopLinks,
  bookASessionBtn,
  logoandnameFooter1,
  logoandnameFooter2,
} from './modules/variable-declarations.js';
import {
  renderHomeSectionMobile,
  renderHomeSectionDesktop
} from './modules/render-home-section-for-logos.js';
import renderHomeSection  from './modules/render-home-section-nav.js';
import renderAboutSection from './modules/render-about-section-nav';
import renderBookingSection from './modules/render-booking-section-nav';
import highlightNavLinks from './modules/highlight-nav-links.js';

/* Clicking on the ministry logo & name in navbar (for all screens) shows the homepage */
logoandnameNav.addEventListener('click', () => {
  // For mobile & tablets
  renderHomeSectionMobile();

  // For Desktops
  renderHomeSectionDesktop();
});

// Open Nav Menu for click
hamburger.addEventListener('click', openMenu);

// Close Nav Menu for click
document.querySelectorAll('.nav-link-mobile').forEach((n) => n.addEventListener('click', closeMenu));

// Clicking on the navbar mobile menu links to show specific sections
navMenuMobileLinks.forEach((link, i) => {
  link.addEventListener('click', () => {
    // Clicking the Home nav mobile menu link shows the homepage section
    if (i === 0) {
      navMenuMobileLinks[i + 1].style.removeProperty('border-bottom'); // Booking navbar mobile link
      navMenuMobileLinks[i + 1].style.removeProperty('padding-bottom');
      navMenuMobileLinks[i + 2].style.removeProperty('border-bottom'); // About navbar mobile link
      navMenuMobileLinks[i + 2].style.removeProperty('padding-bottom');
      link.classList.add('active-1'); // Home navbar mobile link
      renderHomeSection();
    } else if (i === 1) { // Clicking the Booking nav mobile menu link shows the booking section
      navMenuMobileLinks[i - 1].classList.remove('active-1'); // Home navbar mobile link
      navMenuMobileLinks[i + 1].style.removeProperty('border-bottom'); // About navbar mobile link
      navMenuMobileLinks[i + 1].style.removeProperty('padding-bottom');
      link.style.borderBottom = '2px solid black'; // Booking navbar mobile link
      link.style.paddingBottom = '7px';
      renderBookingSection();
    } else if (i === 2) { // Clicking the About Us nav mobile menu link shows the About section
      navMenuMobileLinks[i - 2].classList.remove('active-1'); // Home navbar mobile link
      navMenuMobileLinks[i - 1].style.removeProperty('border-bottom'); // Booking navbar mobile link
      navMenuMobileLinks[i - 1].style.removeProperty('padding-bottom');
      link.style.borderBottom = '2px solid black'; // About navbar mobile link
      link.style.paddingBottom = '7px';
      renderAboutSection();
    }
  });
});

// Clicking on the navbar desktop links to show specific sections
navDesktopLinks.forEach((link, j) => {
  link.addEventListener('click', () => {
    if (j === 0) {
      navDesktopLinks[j + 1].style.removeProperty('border'); // Booking navbar desktop button
      navDesktopLinks[j + 1].style.removeProperty('color');
      navDesktopLinks[j + 2].style.removeProperty('border'); // About navbar desktop button
      navDesktopLinks[j + 2].style.removeProperty('color');
      link.classList.add('active-1'); // Home navbar desktop button
      renderHomeSection();
    } else if (j === 1) {
      navDesktopLinks[j - 1].classList.remove('active-1'); // Home navbar desktop button
      navDesktopLinks[j + 1].style.removeProperty('border'); // About navbar desktop button
      navDesktopLinks[j + 1].style.removeProperty('color');
      link.style.border = '2px solid yellow'; // Booking navbar desktop button
      link.style.color = 'yellow';
      renderBookingSection();
    } else if (j === 2) {
      navDesktopLinks[j - 2].classList.remove('active-1'); // Home navbar desktop button
      navDesktopLinks[j - 1].style.removeProperty('border'); // Booking navbar desktop button
      navDesktopLinks[j - 1].style.removeProperty('color');
      link.style.border = '2px solid yellow'; // About navbar desktop button
      link.style.color = 'yellow';
      renderAboutSection();
    }
  });
});

// Clicking the Book a Session button links to the Booking Section
bookASessionBtn.addEventListener('click', () => {
  highlightNavLinks();
  renderBookingSection();
});

// Clicking on the ministry logo & name in footer 1 of
// homepage/about sections (for all screens) shows the homepage
logoandnameFooter1.addEventListener('click', () => {
  // For mobile & tablets
  renderHomeSectionMobile();

  // For Desktops
  renderHomeSectionDesktop();
});

// Clicking on the ministry logo & name in footer 2 for
// booking section (for all screens) shows the homepage
logoandnameFooter2.addEventListener('click', () => {
  // For mobile & tablets
  renderHomeSectionMobile();

  // For Desktops
  renderHomeSectionDesktop();
});
