/* ============================================================
   IIMS Role Script — FDI (Food & Drug Inspector – Border/Trade)
   Injected into every page inside /main/fdi/
   ============================================================ */
(function () {
  'use strict';

  var ROLE = {
    id: 'fdi',
    name: 'Food & Drug Inspector',
    subtitle: 'Colombo Port Entry',
    badge: 'FDI',
    color: '#8B5CF6',
    colorLight: '#F5F3FF',
    nav: [
      { type: 'cap', label: 'Home' },
      { type: 'link', icon: 'ti ti-layout-dashboard',    label: 'Dashboard',           href: './iims-dashboard.html' },
      { type: 'link', icon: 'ti ti-search',              label: 'Import Inspection',   href: './iims-import-inspection.html' },

      { type: 'cap', label: 'Import Control' },
      { type: 'link', icon: 'ti ti-package-import',      label: 'Import Pipeline',     href: './iims-import-control.html' },
      { type: 'link', icon: 'ti ti-file-invoice',        label: 'Pre-Import Entry',    href: './iims-import-entry.html' },
      { type: 'link', icon: 'ti ti-shield-check',        label: 'Border Inspection',   href: './iims-do-import-inspection.html' },

      { type: 'cap', label: 'Export Control' },
      { type: 'link', icon: 'ti ti-package-export',      label: 'Export Control',      href: './iims-export-control.html' },
      { type: 'link', icon: 'ti ti-certificate',         label: 'Health Certificate',  href: './iims-export-app.html' },
      { type: 'link', icon: 'ti ti-building-factory-2',  label: 'Exporter Registry',   href: './iims-exporter-registration.html' },

      // { type: 'cap', label: 'Salt Manufacturing' },
      // { type: 'link', icon: 'ti ti-salt',                label: 'Salt Overview',       href: './iims-salt-manufacturing.html' },
      // { type: 'link', icon: 'ti ti-file-plus',           label: 'Salt Registration',   href: './iims-salt-registration-form.html' },
      // { type: 'link', icon: 'ti ti-refresh',             label: 'Salt Renewal',        href: './iims-salt-renewal.html' },
      // { type: 'link', icon: 'ti ti-edit',                label: 'Salt Amendment',      href: './iims-salt-amendment.html' },

      // { type: 'cap', label: 'Bottled Water' },
      // { type: 'link', icon: 'ti ti-bottle',              label: 'Water Overview',      href: './iims-bottled-water.html' },
      // { type: 'link', icon: 'ti ti-droplet',             label: 'Water Registration',  href: './iims-water-registration-form.html' },
      // { type: 'link', icon: 'ti ti-tag',                 label: 'Brand Registration',  href: './iims-water-brands.html' },

      { type: 'cap', label: 'Laboratory' },
      { type: 'link', icon: 'ti ti-test-pipe',           label: 'Sample Management',   href: './iims-sample-management.html' },

      { type: 'cap', label: 'Compliance' },
      { type: 'link', icon: 'ti ti-message-report',      label: 'Complaints Ledger',   href: './iims-complaints.html' },
      { type: 'link', icon: 'ti ti-gavel',               label: 'Enforcement',         href: './iims-enforcement.html' },
      { type: 'link', icon: 'ti ti-lock',                label: 'Seizure Order',       href: './iims-seizure-order.html' },
      { type: 'link', icon: 'ti ti-scale',               label: 'Prosecution Form',    href: './iims-prosecution-form.html' },
      { type: 'link', icon: 'ti ti-user-off',           label: 'Arrested List',       href: './iims-arrested-list.html' },

      { type: 'cap', label: 'System' },
      { type: 'link', icon: 'ti ti-bell-ringing',        label: 'Alerts',              href: './iims-alerts.html' }
    ]
  };

  function buildNav() {
    var cur = window.location.pathname.split('/').pop() || 'iims-dashboard.html';
    return ROLE.nav.map(function (item) {
      if (item.type === 'cap') {
        return '<li class="nav-small-cap">' +
               '<i class="ti ti-dots nav-small-cap-icon fs-4"></i>' +
               '<span class="hide-menu">' + item.label + '</span></li>';
      }
      var active = (cur === item.href.replace('./', '')) ? ' active' : '';
      return '<li class="sidebar-item">' +
             '<a class="sidebar-link' + active + '" href="' + item.href + '">' +
             '<span><i class="' + item.icon + '"></i></span>' +
             '<span class="hide-menu">' + item.label + '</span></a></li>';
    }).join('');
  }

  function injectStyles() {
    var s = document.createElement('style');
    s.textContent = [
      '.role-banner{background:linear-gradient(135deg,' + ROLE.color + '18,' + ROLE.color + '08);',
      'border-radius:8px;',
      'padding:8px 12px;margin:8px 16px 2px;display:flex;align-items:center;gap:8px;}',
      '.role-badge{background:' + ROLE.color + ';color:#fff;font-size:10px;font-weight:700;',
      'padding:2px 8px;border-radius:4px;letter-spacing:.5px;text-transform:uppercase;}',
      '.role-label{font-size:11px;font-weight:600;color:' + ROLE.color + ';}',
      '.sidebar-link.active{background-color:#5D87FF !important;color:#fff !important;}',
      '.sidebar-link.active i{color:#fff !important;}'
    ].join('');
    document.head.appendChild(s);
  }

  function init() {
    injectStyles();

    var brand = document.querySelector('.brand-logo');
    if (brand) {
      var banner = document.createElement('div');
      banner.className = 'role-banner';
      banner.innerHTML = '<span class="role-badge">' + ROLE.badge + '</span>' +
                         '<span class="role-label">' + ROLE.name + '</span>';
      brand.insertAdjacentElement('afterend', banner);
    }

    var nav = document.getElementById('sidebarnav');
    if (nav) nav.innerHTML = buildNav();

    var ph6 = document.querySelector('.fixed-profile h6');
    var psub = document.querySelector('.fixed-profile span.fs-2');
    if (ph6) ph6.textContent = ROLE.name;
    if (psub) psub.textContent = ROLE.subtitle;

    var topbar = document.querySelector('.topbar');
    if (topbar) topbar.style.borderBottom = '2px solid ' + ROLE.color + '55';

    /* sign-out button → login page */
    var logoutBtn = document.querySelector('[aria-label="logout"]');
    if (logoutBtn) {
      logoutBtn.style.cursor = 'pointer';
      logoutBtn.addEventListener('click', function () {
        window.location.href = '../iims-login.html';
      });
    }

    /* top-right avatar icon → login page */
    var topAvatar = document.getElementById('drop1');
    if (topAvatar) {
      topAvatar.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = '../iims-login.html';
      });
    }

    /* inject visible Sign Out button into topbar */
    var navList = document.querySelector('.navbar-nav.flex-row.ms-auto');
    if (!navList) {
      var navbar = document.querySelector('.topbar nav.navbar');
      if (navbar) {
        navList = document.createElement('ul');
        navList.className = 'navbar-nav flex-row ms-auto align-items-center justify-content-center';
        navbar.appendChild(navList);
      }
    }
    if (navList && !navList.querySelector('a[href*="iims-login"]')) {
      var signOutLi = document.createElement('li');
      signOutLi.className = 'nav-item';
      signOutLi.innerHTML =
        '<a href="../iims-login.html" ' +
        '   style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;' +
        '          color:' + ROLE.color + ';padding:6px 12px;border:1.5px solid ' + ROLE.color + '55;' +
        '          border-radius:8px;margin-left:8px;text-decoration:none;transition:all .2s;' +
        '          cursor:pointer;" ' +
        '   onmouseover="this.style.background=\'' + ROLE.color + '15\'" ' +
        '   onmouseout="this.style.background=\'transparent\'">' +
        '  <i class="ti ti-logout" style="font-size:15px;"></i>' +
        '  <span>Sign Out</span>' +
        '</a>';
      navList.appendChild(signOutLi);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
