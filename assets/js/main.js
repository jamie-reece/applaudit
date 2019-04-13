// add active class dynamically to nav-items based on current url

$(function addActiveCLass() {
  // returns basePath ignoring extra links i.e. /reviews/~~new-page~~
  var basePath = '/' + window.location.pathname.split('/', 3).filter(Boolean).join('/') + '/';
  // adds active class to items w/ corresponding url
  $('li#nav-item a[href="' + basePath + '"]').parent('li').addClass('active');
});

//

$(function toggleSidenav() {
  $('a#menu-trigger').click(function() {
    $('div#side-nav-container').toggleClass('is-expanded');
    $('div#page-content-container').toggleClass('has-overlay');
  });
});