(() => {
  'use strict';
  /*
   * Email address protection
   *
   * The address is intentionally not stored as plain text in the
   * HTML or JavaScript source. It is reconstructed only when the
   * visitor actually clicks a contact link.
   *
   * This protects against simple email harvesting bots.
   * It is obfuscation, not a security boundary.
   */
  const address = [
    104, 101, 108, 108, 111,
    64,
    97, 118, 105, 111, 111,
    46,
    97, 112, 112
  ];
  const getAddress = () =>
    String.fromCharCode(...address);
  document.querySelectorAll('.protected-email').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href =
        'mai' + 'lto:' + getAddress();
    });
  });
})();
