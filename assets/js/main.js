// add active class dynamically to nav-items based on current url

$(function addActiveCLass() {
  // returns basePath ignoring extra links i.e. /reviews/~~new-page~~
  var basePath = '/' + window.location.pathname.split('/', 3).filter(Boolean).join('/') + '/';
  // adds active class to items w/ corresponding url
  $('li#nav-item a[href="' + basePath + '"]').parent('li').addClass('active');
});

// sidenav function

$(function toggleSidenav() {
  $('a#menu-trigger').click(function() {
    $('div#side-nav-container').toggleClass('is-expanded');
    $('div#page-content-container').toggleClass('has-overlay');
    $('img.nav-icon:nth-child(2)').toggleClass('is-responsive-closed');
    $('img.nav-icon:last-child').toggleClass('is-responsive-closed');
    $('div.has-overlay').click(function() {
      $(this).removeClass('has-overlay');
      $('div#side-nav-container').removeClass('is-expanded');
      $('img.nav-icon:nth-child(2)').toggleClass('is-responsive-closed');
      $('img.nav-icon:last-child').toggleClass('is-responsive-closed');
    });
  });
});

// function to expand posts on /reviews/ page

$(function showMorePosts() {
  $('button#expand-posts').click(function() {
  $('div.post-is-hidden').toggleClass('post-is-hidden');
  });
});