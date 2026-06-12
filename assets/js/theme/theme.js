document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // =================================
  // Tooltip
  // =================================
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // =================================
  // Popover
  // =================================
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
  // =================================
  // Hide preloader
  // =================================
  var preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
  // =================================
  // Increment & Decrement
  // =================================
  var quantityButtons = document.querySelectorAll(".minus, .add");
  if (quantityButtons) {
    quantityButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var qtyInput = this.closest("div").querySelector(".qty");
        var currentVal = parseInt(qtyInput.value);
        var isAdd = this.classList.contains("add");

        if (!isNaN(currentVal)) {
          qtyInput.value = isAdd
            ? ++currentVal
            : currentVal > 0
            ? --currentVal
            : currentVal;
        }
      });
    });
  }
  // =================================
  // Fixed header
  // =================================
  window.addEventListener("scroll", function () {
    var topbar = document.querySelector(".topbar");
    if (topbar) {
      if (window.scrollY >= 60) {
        topbar.classList.add("shadow-sm");
      } else {
        topbar.classList.remove("shadow-sm");
      }
    }
  });

  // =================================
  // Dynamic Fallback Sign Out Button
  // =================================
  const headerNavbar = document.querySelector('.topbar nav.navbar');
  if (headerNavbar) {
    const isSubDir = window.location.pathname.includes('/phi/') || 
                     window.location.pathname.includes('/moh/') || 
                     window.location.pathname.includes('/admin/') || 
                     window.location.pathname.includes('/fdi/') || 
                     window.location.pathname.includes('/lab/') || 
                     window.location.pathname.includes('/fbo/') || 
                     window.location.pathname.includes('/trader/') || 
                     window.location.pathname.includes('/salt/') || 
                     window.location.pathname.includes('/water/') ||
                     window.location.pathname.includes('/rd/') ||
                     window.location.pathname.includes('/ab/');
    if (!isSubDir) {
      let topbarNavList = headerNavbar.querySelector('.navbar-nav.flex-row.ms-auto');
      if (!topbarNavList) {
        topbarNavList = document.createElement('ul');
        topbarNavList.className = 'navbar-nav flex-row ms-auto align-items-center justify-content-center';
        headerNavbar.appendChild(topbarNavList);
      }
      const hasSignOut = Array.from(topbarNavList.querySelectorAll('a')).some(el => {
        const href = el.getAttribute('href') || '';
        return el.textContent.includes('Sign Out') || href.includes('iims-login.html');
      });
      if (!hasSignOut) {
        const loginUrl = './iims-login.html';
        const defaultColor = '#5D87FF';
        
        const signOutLi = document.createElement('li');
        signOutLi.className = 'nav-item';
        signOutLi.innerHTML = 
          '<a href="' + loginUrl + '" ' +
          '   style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;' +
          '          color:' + defaultColor + ';padding:6px 12px;border:1.5px solid ' + defaultColor + '55;' +
          '          border-radius:8px;margin-left:8px;text-decoration:none;transition:all .2s;' +
          '          cursor:pointer;" ' +
          '   onmouseover="this.style.background=\'' + defaultColor + '15\'" ' +
          '   onmouseout="this.style.background=\'transparent\'">' +
          '  <i class="ti ti-logout" style="font-size:15px;"></i>' +
          '  <span>Sign Out</span>' +
          '</a>';
        topbarNavList.appendChild(signOutLi);
      }
    }
  }
});
