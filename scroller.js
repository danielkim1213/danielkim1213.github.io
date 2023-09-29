document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetFieldset = document.getElementById(targetId);

    if (targetFieldset) {
      window.scrollTo({
        top: targetFieldset.offsetTop,
        behavior: 'smooth' 
      });
    }
  });
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}