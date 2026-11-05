# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents


  - [The challenge](#the-challenge)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page


## Links

- Solution URL: [Intro section with dropdown navigation.](https://github.com/AmmaraSirkhot/frontend-mentor-challenge-intro-section-with-dropdown-navigation)
- Live Site URL: [Intro section with dropdown navigation.](https://ammarasirkhot.github.io/frontend-mentor-challenge-intro-section-with-dropdown-navigation/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox for layout
- Mobile-first workflow
- Vanilla JavaScript (for responsive state management, dropdown behavior, and mobile drawer toggles)


### What I learned

Working on this project was a great exercise in handling responsive layouts such as transforming a slide-out drawer menu into a static top navigation bar.

A key technical challenge solved in this project was creating a unified navigation container that toggles between independent dropdown behaviors on mobile and accordion behavior (closing other open dropdowns) on desktop:

```css
.menu-btn-area {
        position: static;
        width: auto;
        height: auto;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: transparent;
        padding: 0;
        box-shadow: none;
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        flex-grow: 1;
        margin-left: 5rem;
    }
```
```js
// Example of handling desktop vs mobile logic in JS
const parentLi = this.parentElement;
const isAlreadyOpen = parentLi.classList.contains('open');
const isMobile = window.innerWidth < 768;

// On desktop, close all other open dropdowns first (accordion behavior)
    if (!isMobile) {
      closeAllDropdowns();
    }

    // If the clicked dropdown was already open, close it. Otherwise, open it.
    if (isAlreadyOpen) {
      parentLi.classList.remove('open');
      this.setAttribute('aria-expanded', 'false');
    } else {
      parentLi.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
    }
```
I also gained deeper practice writing accessible code using aria-expanded states to ensure screen reader compatibility for interactive dropdown buttons.

### Continued development
In future projects, I want to focus on transitioning my vanilla JavaScript projects to React, leveraging its component-based architecture, state management hooks, and modern ecosystem libraries to build scalable, component-driven web applications. Specifically, I want to practice:

- Structuring reusable components and managing application state efficiently.

- Utilizing React libraries for enhanced routing, UI styling, and animations.

- Improving code modularity and performance in single-page applications.# frontend-mentor-challenge-intro-section-with-dropdown-navigation
