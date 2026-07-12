document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const mainIndex = window.location.pathname.indexOf('/main/');
  const basePath = mainIndex !== -1 ? window.location.pathname.substring(0, mainIndex + 5) : '/main';


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
    const isSubDir = /\/main\/[^/]+\//.test(window.location.pathname);
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
        const loginUrl = basePath + '/iims-login.html';
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

  // =================================
  // Dynamic Profile Avatar Link
  // =================================
  const profileAvatar = document.querySelector(
    '.topbar img[src*="images/profile/user-1.jpg"]'
  );

  if (profileAvatar) {
    let profileLink = profileAvatar.closest('a');

    // Wrap plain profile images with a clickable link
    if (!profileLink) {
      profileLink = document.createElement('a');
      profileAvatar.parentNode.insertBefore(profileLink, profileAvatar);
      profileLink.appendChild(profileAvatar);
    }

    // MOH has its own profile page; other roles use the shared PHI profile
    const profileUrl = window.location.pathname.includes('/main/moh/')
      ? basePath + '/moh/iims-profile.html'
      : basePath + '/phi/iims-profile.html';

    profileLink.classList.add('nav-link', 'pe-0');
    profileLink.setAttribute('href', profileUrl);
    profileLink.setAttribute('aria-label', 'View profile');
    profileLink.style.cursor = 'pointer';

    // Prevent older role scripts from redirecting the avatar to login
    profileLink.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.href = profileUrl;
    }, true);
  }

  // =================================
  // Dynamic Alert Icon
  // =================================
  const alertNavList = document.querySelector(
    '.topbar .navbar-nav.flex-row.ms-auto'
  );

  if (alertNavList && !alertNavList.querySelector('.ti-bell-ringing')) {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const mainIndex = pathParts.indexOf('main');

    const roleFolder =
      mainIndex >= 0 && pathParts.length > mainIndex + 2
        ? pathParts[mainIndex + 1]
        : '';

    const rolesWithAlertPage = [
      'admin',
      'authority',
      'ddg',
      'dg',
      'fcau',
      'fdi',
      'lab',
      'moh',
      'phi',
      'salt',
      'salt-ad',
      'salt-cao',
      'salt-dfdi',
      'salt-dg',
      'salt-dir'
    ];

    const alertUrl = rolesWithAlertPage.includes(roleFolder)
      ? basePath + '/' + roleFolder + '/iims-alerts.html'
      : basePath + '/iims-alerts.html';

    const alertItem = document.createElement('li');

    alertItem.className =
      'nav-item nav-icon-hover-bg rounded-circle';

    alertItem.innerHTML =
      '<a class="nav-link position-relative" href="' + alertUrl + '" ' +
      'aria-label="Alerts and notifications">' +
      '<i class="ti ti-bell-ringing"></i>' +
      '<div class="notification bg-primary rounded-circle"></div>' +
      '</a>';

    const profileItem = Array.from(alertNavList.children).find(
      function (item) {
        return item.querySelector(
          'img[src*="images/profile/user-1.jpg"]'
        );
      }
    );

    if (profileItem) {
      alertNavList.insertBefore(alertItem, profileItem);
    }
    else {
      alertNavList.prepend(alertItem);
    }
  }
});



