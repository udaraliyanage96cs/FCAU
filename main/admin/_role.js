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
      { type: 'link', icon: 'ti ti-layout-dashboard', label: 'Dashboard',          href: './iims-dashboard.html' },
      { type: 'link', icon: 'ti ti-notes',            label: 'MOH Reviews',        href: './iims-moh-reviews.html' },
      { type: 'link', icon: 'ti ti-user-circle',      label: 'Exporter Profiles',  href: './iims-exporter-profiles.html' },

      { type: 'cap', label: 'Administration' },
      { type: 'link', icon: 'ti ti-users',            label: 'Access Control',     href: './iims-user-management.html' },
      { type: 'link', icon: 'ti ti-activity',         label: 'Activity Management',href: './iims-activity-management.html' },
      {
        type: 'link-parent',
        icon: 'ti ti-file-text',
        label: 'Grading & Form',
        children: [
          { label: 'Food Classifications', href: './iims-food-classifications.html' },
          { label: 'Criteria Domains',     href: './iims-criteria-domains.html' },
          { label: 'Criteria Config',      href: './iims-criteria-config.html' },
          { label: 'Master Config',        href: './iims-master-config.html' },
          { label: 'Frequency Rules',      href: './iims-frequency-rules.html' },
          { label: 'H800 Forms',           href: './iims-h800-forms.html' }
        ]
      }
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
      if (item.type === 'link-parent') {
        var isOpen = item.children.some(function(child) {
          return cur === child.href.replace('./', '');
        });
        var activeClass = isOpen ? ' active' : '';
        var showClass = isOpen ? ' show' : '';
        var expanded = isOpen ? 'true' : 'false';
        
        var submenuHtml = item.children.map(function(child) {
          var childActive = (cur === child.href.replace('./', '')) ? ' active' : '';
          return '<li class="sidebar-item">' +
                 '<a href="' + child.href + '" class="sidebar-link' + childActive + '">' +
                 '<div class="round-16 d-flex align-items-center justify-content-center">' +
                 '<i class="ti ti-circle" style="font-size: 8px;"></i>' +
                 '</div>' +
                 '<span class="hide-menu">' + child.label + '</span>' +
                 '</a>' +
                 '</li>';
        }).join('');
        
        return '<li class="sidebar-item">' +
               '<a class="sidebar-link has-arrow' + activeClass + '" href="javascript:void(0)" aria-expanded="' + expanded + '">' +
               '<span><i class="' + item.icon + '"></i></span>' +
               '<span class="hide-menu">' + item.label + '</span>' +
               '</a>' +
               '<ul aria-expanded="' + expanded + '" class="collapse first-level' + showClass + '">' +
               submenuHtml +
               '</ul>' +
               '</li>';
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
