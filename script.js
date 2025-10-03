// Smooth scroll for Explore Menu button
document.querySelector('.btn').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});
