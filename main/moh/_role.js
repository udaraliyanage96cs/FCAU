/* ============================================================
   IIMS Role Script — MOH (Medical Officer of Health)
   Injected into every page inside /main/moh/
   ============================================================ */
(function () {
  'use strict';

  var ROLE = {
    id: 'moh',
    name: 'Medical Officer of Health',
    subtitle: 'Colombo District',
    badge: 'MOH',
    color: '#14B8A6',
    colorLight: '#F0FDFA',
    nav: [
      { type: 'cap', label: 'Home' },
      { type: 'link', icon: 'ti ti-layout-dashboard', label: 'Dashboard',            href: './iims-dashboard.html' },
      { type: 'link', icon: 'ti ti-user',             label: 'My Profile',           href: './iims-profile.html' },

      { type: 'cap', label: 'Supervision' },
      { type: 'link', icon: 'ti ti-eye-check',        label: 'Supervisory Review',   href: './iims-inspection-review.html' },
      { type: 'link', icon: 'ti ti-building-store',   label: 'Premises Registry',    href: './iims-premises-list.html' },
      { type: 'link', icon: 'ti ti-filter',           label: 'Complaint Triage',     href: './iims-complaint-triage.html' },
      { type: 'link', icon: 'ti ti-scale',            label: 'Grievance & Appeals',  href: './iims-appeals.html' },

      { type: 'cap', label: 'Laboratory' },
      { type: 'link', icon: 'ti ti-microscope',       label: 'Reception Triage',     href: './iims-lab-triage.html' },
      { type: 'link', icon: 'ti ti-file-analytics',   label: 'Manual Result Entry',  href: './iims-lab-report-form.html' },
      { type: 'link', icon: 'ti ti-test-pipe',        label: 'Sample Management',    href: './iims-sample-management.html' },

      { type: 'cap', label: 'Analytics' },
      { type: 'link', icon: 'ti ti-chart-bar',        label: 'Reports',              href: './iims-reports.html' },
      { type: 'link', icon: 'ti ti-map-2',            label: 'Risk Heatmaps',        href: './iims-risk-heatmaps.html' },

      { type: 'cap', label: 'Enforcement' },
      { type: 'link', icon: 'ti ti-gavel',            label: 'Enforcement',          href: './iims-enforcement.html' },

      { type: 'cap', label: 'System' },
      { type: 'link', icon: 'ti ti-bell-ringing',     label: 'Alerts',               href: './iims-alerts.html' }
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

    /* top-right avatar icon → profile page */
    var topAvatar = document.getElementById('drop1');
    if (topAvatar) {
      topAvatar.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = './iims-profile.html';
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
    if (navList) {
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
  });
})();
