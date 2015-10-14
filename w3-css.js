/*Don't forget to add jQuery into your site or page BEFORE this script*/
$(document).ready(function(){
 /* $('navBtn').click(function(){
    $('w3-topnav').fadeToggle("fast");
  });*/
  /*w3-closenav
    w3-opennav*/
  $("w3-opennav").click(function(){
    $("#main").css('margin-left': '25%');
    $("w3-sidenav").css('width': '25%', 'display': 'block');
    $("w3-open").css('display': 'none');
  });
  $("w3-closenav").click(function(){
    $("#main")
    
  })
    
  }
});
