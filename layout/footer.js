export { addCopyright };

// ELEMENT REFERENCES -----------------------------------------------------------
const footerEl = document.getElementById('footer');

// FUNCTION CALLS ------------------------------------------------------------------
addCopyright();

function addCopyright() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  footerEl.innerHTML = `<p>&copy; ${currentYear} GoodCorp. All rights reserved.</p>`;
}
