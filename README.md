# Udacity - JS Landing Page

## Sections
- Located in index.html
- Dynamically added to nav
- Must include a 'data-nav' attribute, as this will be used in nav links and scrolling functions to identify sections
- Identified on load for scroll start/end and for use in nav build

## Nav
Based on section object array, menu list items added and labeled according to 'data-nav' attribute.

On click, function finds corresponding section with matching 'data-nav' value and scrolls that section into view.

## Scroll
Scroll start and end of each section assessed on page load and add to object array. 

Event listener for scroll sets new scroll position variable that also accounts for the page header.

Based on scroll position value, active class added to visible section and corresponding nav link, removed from no longer active sections and links.
