// add active class dynamically to navlinks based on current url

$(function(){
  // returns basePath ignoring extra links i.e. /reviews/~~new-page~~
  var basePath = '/' + window.location.pathname.split('/', 2).filter(Boolean).join('/') + '/';
  // adds active class to items w/ corresponding url
  $('li#nav-item a[href="' + basePath + '"]').addClass('active');
})