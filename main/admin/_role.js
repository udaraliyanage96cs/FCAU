/* ============================================================
   IIMS Role Script — ADMIN (System Administrator)
   Injected into every page inside /main/admin/
   ============================================================ */
(function () {
  'use strict';

  var ROLE = {
    id: 'admin',
    name: 'System Administrator',
    subtitle: 'FCAU Head Office',
    badge: 'ADMIN',
    color: '#6366F1',
    colorLight: '#EEF2FF',
    nav: [
      { type: 'cap', label: 'Home' },
      { type: 'link', icon: 'ti ti-layout-dashboard', label: 'Dashboard',               href: './iims-dashboard.html' },
      { type: 'link', icon: 'ti ti-map-2',            label: 'Risk Heatmaps',           href: './iims-risk-heatmaps.html' },

      { type: 'cap', label: 'User Management' },
      { type: 'link', icon: 'ti ti-users',            label: 'User Directory',          href: './iims-user-management.html' },
      { type: 'link', icon: 'ti ti-user-plus',        label: 'Add New User',            href: './iims-add-user.html' },
      { type: 'link', icon: 'ti ti-user-check',       label: 'User Sign-up',            href: './iims-user-signup.html' },

      { type: 'cap', label: 'System Config' },
      { type: 'link', icon: 'ti ti-settings',         label: 'Inspection Config',       href: './iims-inspection-config.html' },
      { type: 'link', icon: 'ti ti-mail-opened',      label: 'Notification Templates',  href: './iims-notification-templates.html' },

      { type: 'cap', label: 'Analytics' },
      { type: 'link', icon: 'ti ti-chart-bar',        label: 'Reports & Analytics',     href: './iims-reports.html' },
      { type: 'link', icon: 'ti ti-bell-ringing',     label: 'Alerts Center',           href: './iims-alerts.html' },

      { type: 'cap', label: 'Help' },
      { type: 'link', icon: 'ti ti-book',             label: 'Prototype Guide',         href: './iims-guide.html' }
    ]
  };

  /* ---- helpers ---- */
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
      'border-left:3px solid ' + ROLE.color + ';border-radius:8px;',
      'padding:8px 12px;margin:8px 16px 2px;display:flex;align-items:center;gap:8px;}',
      '.role-badge{background:' + ROLE.color + ';color:#fff;font-size:10px;font-weight:700;',
      'padding:2px 8px;border-radius:4px;letter-spacing:.5px;text-transform:uppercase;}',
      '.role-label{font-size:11px;font-weight:600;color:' + ROLE.color + ';}',
      '.sidebar-link.active{color:' + ROLE.color + ' !important;}',
      '.sidebar-link.active i{color:' + ROLE.color + ' !important;}'
    ].join('');
    document.head.appendChild(s);
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectStyles();

    /* role banner below brand logo */
    var brand = document.querySelector('.brand-logo');
    if (brand) {
      var banner = document.createElement('div');
      banner.className = 'role-banner';
      banner.innerHTML = '<span class="role-badge">' + ROLE.badge + '</span>' +
                         '<span class="role-label">' + ROLE.name + '</span>';
      brand.insertAdjacentElement('afterend', banner);
    }

    /* rebuild sidebar nav */
    var nav = document.getElementById('sidebarnav');
    if (nav) nav.innerHTML = buildNav();

    /* update profile chip */
    var ph6 = document.querySelector('.fixed-profile h6');
    var psub = document.querySelector('.fixed-profile span.fs-2');
    if (ph6) ph6.textContent = ROLE.name;
    if (psub) psub.textContent = ROLE.subtitle;

    /* topbar accent line */
    var topbar = document.querySelector('.topbar');
    if (topbar) topbar.style.borderBottom = '2px solid ' + ROLE.color + '55';
  });
})();
