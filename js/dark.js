(function () { 
  var prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  var toggle = document.querySelector('.darkmode-toggle');
  var html = document.querySelector('html');

  html.dataset.dark = localStorage.dark || prefersDarkMode.matches;

  toggle.addEventListener('click', () => {
    localStorage.dark = !(html.dataset.dark == 'true');
    html.dataset.dark = localStorage.dark;
  });
})()
