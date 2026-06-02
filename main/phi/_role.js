/* ============================================================
   IIMS Role Script — PHI (Public Health Inspector)
   Injected into every page inside /main/phi/
   ============================================================ */
(function () {
  'use strict';

  var ROLE = {
    id: 'phi',
    name: 'PHI Officer',
    subtitle: 'Colombo West Division',
    badge: 'PHI',
    color: '#3B82F6',
    colorLight: '#EFF6FF',
    nav: [
      { type: 'cap', label: 'Home' },
      { type: 'link', icon: 'ti ti-layout-dashboard', label: 'Dashboard',          href: './iims-dashboard.html' },

      { type: 'cap', label: 'Inspection' },
      { type: 'link', icon: 'ti ti-clipboard-check',  label: 'H-800 Digital Form', href: './iims-inspection-form.html' },
      { type: 'link', icon: 'ti ti-calendar-event',   label: 'Inspection Calendar',href: './iims-inspection-calendar.html' },
      { type: 'link', icon: 'ti ti-certificate',      label: 'Inspection Result',  href: './iims-inspection-result.html' },

      { type: 'cap', label: 'Premises' },
      { type: 'link', icon: 'ti ti-building-store',   label: 'Premises Registry',  href: './iims-premises-list.html' },

      { type: 'cap', label: 'Laboratory' },
      { type: 'link', icon: 'ti ti-test-pipe',        label: 'Sample Management',  href: './iims-sample-management.html' },

      { type: 'cap', label: 'Compliance' },
      { type: 'link', icon: 'ti ti-message-report',   label: 'Complaints Ledger',  href: './iims-complaints.html' },
      { type: 'link', icon: 'ti ti-filter',           label: 'Complaint Triage',   href: './iims-complaint-triage.html' },
      { type: 'link', icon: 'ti ti-gavel',            label: 'Enforcement',        href: './iims-enforcement.html' },
      { type: 'link', icon: 'ti ti-lock',             label: 'Seizure Order',      href: './iims-seizure-order.html' },
      { type: 'link', icon: 'ti ti-scale',            label: 'Prosecution Form',   href: './iims-prosecution-form.html' },
      { type: 'link', icon: 'ti ti-user-cancel',      label: 'Arrested Register',  href: './iims-arrested-list.html' },

      { type: 'cap', label: 'System' },
      { type: 'link', icon: 'ti ti-bell-ringing',     label: 'Alerts',             href: './iims-alerts.html' }
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
  });
})();
