$(document).ready(function(){

  $('.red').hover(function() {
    $(this).toggleClass('green');
  });

  $('#btn-bg').click(function() {
    $('body').toggleClass('bg');
  });

  $(window).dblclick(function() {
    alert('Page has been double clicked');
  });

  $('#hotdog').click(function() {
    for(var i=0; i<1000; i++) {
      $("#hotdog").clone().appendTo(this.parentElement);
    }
  });

  $('#up').click(function() {
    $('p').slideUp();
  });

  $('#list').click(function() {
    $($(this).children()[0]).css('color', 'red');
    $($(this).children()[1]).css('color', 'green');
    $($(this).children()[2]).css('color', 'blue');
  });

  $('#random').click(function() {
    var colors = ['green', 'red', 'blue', 'purple', 'orange', 'pink'];
    var color = colors[Math.floor(Math.random()*colors.length)];
    $(this).css('color', color);
  });

  $('#number').click(function() {
    $(this).replaceWith("<div id='number'>8. <strong></strong></div>")
    for(i=0; i<50; i++) {
      var number = Math.floor(Math.random() * 1000) + 1;
      $('#number').append(number + ' ');
    }
  });

});
