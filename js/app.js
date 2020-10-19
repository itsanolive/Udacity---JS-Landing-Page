/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
let sections = document.getElementsByTagName('section');
let menuItems = [];
let navMenu_List = document.querySelector('#navbar__list');
let currentScrollPos = 0;
let scrollHeights = [];

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// Set section start and end scroll heights
function setSectionScroll() {
  for (section of sections) {
    let start = window.pageYOffset || section.scrollTop;
    console.log('start: ', start);
    let end = start + section.offsetHeight;
    console.log('end: ', end);
    scrollHeights.push({
      start: start,
      end: end,
      section: section
    });
  }
}

// Add active state to menu items if scroll offset falls on corresponding section
function scrollActive(event) {
  currentScrollPos = window.scrollY;
  for (scrollHeight of scrollHeights) {
    if (currentScrollPos >= scrollHeight.start || currentScrollPos <= scrollHeight.end) {
      // TO-DO: ADD ACTIVE STATE TO MENU ITEMS AND SECTIONS
    }
  }
  console.log(window.scrollY);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
  // Load page section ids and data-nav attributes as objects into menuItems array
  for (section of sections) {
    let id = '#' + section.id;
    let label = section.getAttribute('data-nav');
    menuItems.push({
      id: id,
      label: label
    });
  }
  // Build nav items and links from menuItems array
  for (menuItem of menuItems) {
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.setAttribute('data-nav', menuItem.id);
    if (menuItems.indexOf(menuItem) === 0) {
      navLink.setAttribute('class', 'menu__link active');
    } else {
      navLink.setAttribute('class', 'menu__link');
    }
    navLink.textContent = menuItem.label;
    navItem.appendChild(navLink);
    navMenu_List.appendChild(navItem);
  }
}

// Add class 'active' to section when near top of viewport
function addActive(event) {
  let activeEls = document.querySelectorAll('.active');
  let sectionActive = document.querySelector(event.target.getAttribute('data-nav'));
  for (activeEl of activeEls) {
    activeEl.className = activeEl.className.replace('active','');
  }
  event.target.classList += ' active';
  sectionActive.classList += 'active';
}

// Scroll to anchor ID using scrollTO event
function scrollAnchor(event) {
  let anchorEl = document.getElementById(event.target.getAttribute('data-nav').replace('#',''));
  console.log(event.target);
  anchorEl.scrollIntoView({
    behavior: 'smooth'
  })
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu from sections on page
window.onload = function() {
  buildNav();
  setSectionScroll();
}

// Scroll to section on link click
navMenu_List.addEventListener('click', scrollAnchor, false);

// Set sections and links as active on click
navMenu_List.addEventListener('click', addActive);



// Set sections and links as active on scroll, show scroll to top button below the fold
window.addEventListener('scroll', function(e) {
  currentScrollPos = window.scrollY;
  if (currentScrollPos > window.height) {
    showScrollToTop();
  }
  // TO-DO: Add setSectionScroll() and figure out extra parameter based on https://www.html5rocks.com/en/tutorials/speed/animations/
});
