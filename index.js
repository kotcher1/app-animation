window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  console.log(window.pageYOffset, document.body.offsetHeight, window.innerHeight)
}, false);

$('body').waitForImages(function() {
  document.body.classList.add('loaded');
});