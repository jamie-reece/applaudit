---
---

// add active class dynamically to navlinks based on current url

$(function(){
  var current = location.pathname;
  var permalink = "{{ page.permalink }}"
  $('#nav-item a').each(function(){
      var $this = $(this);
      // if the current path is like this link, make it active
      if($this.attr('href').indexOf(current) !== -1){
          $this.addClass('active');
      }
  })
})