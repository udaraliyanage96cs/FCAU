/* ============================================================
   IIMS Role Script — PUBLIC (Anonymous Citizen Portal)
   Injected into every page inside /main/public/
   No sidebar on public pages — script is a no-op for layout.
   ============================================================ */
(function () {
  'use strict';
  /* The public portal (iims-public-complaint.html) is a standalone
     page without a sidebar. This file is a safe no-op placeholder
     so the injected <script> tag does not cause a 404 error. */
  document.addEventListener('DOMContentLoaded', function () {
    // Update page title badge if any role indicator exists
    var roleIndicator = document.querySelector('[data-role-badge]');
    if (roleIndicator) roleIndicator.textContent = 'Public Portal';
  });
})();
