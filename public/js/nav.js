(function () {
   var hamburger = {
      navToggle: document.querySelector('.navbar-burger'),
      nav: document.querySelector('.navbar-menu'),
      doToggle: function (e) {
         e.preventDefault();
         this
            .navToggle
            .classList
            .toggle('is-active');
         this
            .nav
            .classList
            .toggle('is-active');
      }
   };
   hamburger
      .navToggle
      .addEventListener('click', function (e) {
         hamburger.doToggle(e);
      });
   hamburger
      .nav
      .addEventListener('click', function (e) {
         hamburger.doToggle(e);
      });
}());