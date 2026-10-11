const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = path.resolve('index.html');

// Let's create a temporary test runner script that evaluates elements in browser
const runEval = () => {
  const runner = `
    const brand = document.querySelector('.navbar-brand');
    const img = document.querySelector('.brand-logo-img');
    const toggler = document.querySelector('.navbar-toggler');
    const container = document.querySelector('.navbar-container');
    const nav = document.querySelector('#mainNavbar');
    console.log(JSON.stringify({
      viewportWidth: window.innerWidth,
      bodyScrollWidth: document.body.scrollWidth,
      brandRect: brand ? brand.getBoundingClientRect() : null,
      imgRect: img ? img.getBoundingClientRect() : null,
      togglerRect: toggler ? toggler.getBoundingClientRect() : null,
      togglerDisplay: toggler ? window.getComputedStyle(toggler).display : null,
      togglerVisibility: toggler ? window.getComputedStyle(toggler).visibility : null,
      containerRect: container ? container.getBoundingClientRect() : null,
      navRect: nav ? nav.getBoundingClientRect() : null
    }));
  `;
  // We can write a tiny wrapper html or run via chrome
};
