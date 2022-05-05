document.querySelector('.mobile__menu').onclick = function() {
   document.querySelector('.header').classList.toggle('active');
}

$(document).ready(function() {
   $('.accordion-item__trigger').click(function() {
      $(this).next('.accordion-item__content').slideToggle(200);
   });
});