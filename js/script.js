function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  
  const btn = document.getElementById("modeToggle");
  const btn2 = document.getElementById("modeToggle2");
  const themeIcons = document.querySelectorAll(".icon");
  const currentTheme = localStorage.getItem("theme");
  
  if (currentTheme === "dark") {
    setDarkMode();
  }
  
  btn.addEventListener("click", function () {
    setTheme();
  });
  
  btn2.addEventListener("click", function () {
    setTheme();
  });
  
  function setTheme() {
    let currentTheme = document.body.getAttribute("theme");
  
    if (currentTheme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  }
  
  
  function setDarkMode() {
    var r = document.querySelector(':root');
    r.style.setProperty('--cursor-blend-mode', 'hard-light');

    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
  
    themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-dark");
    });

    var menuBackground = document.getElementById('menu-background');
    menuBackground.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
  }
  
  function setLightMode() {
    var r = document.querySelector(':root');
    r.style.setProperty('--cursor-blend-mode', 'multiply');

    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");
  
    themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-light");
    });

    var menuBackground = document.getElementById('menu-background');
    menuBackground.style.backgroundColor = 'rgba(255, 255, 255, 0.878)';
  }
  