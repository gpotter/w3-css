/*Don't forget to add jQuery into your site or page BEFORE this script*/
$(document).ready(function(){
 console.log("Hello world, and hello to you. Thanks for coming by. Script is loaded.");
  /*
  NavButtons:
    w3-closenav
    w3-opennav
  NavContainers
    w3-sidenav
    w3-topnav
    */
  $(".w3-opennav").click(function(){
    $("#main").css('margin-left': '25%');
    $(".w3-sidenav").css('width': '25%', 'display': 'block');
    $(".w3-open").css('display': 'none');
  });
  $(".w3-closenav").click(function(){
    $("#main").css('margin-left': '0%');
    $(".w3-sidenav").css('display': 'none');
    $(".w3-opennav").css('display': 'inline-block');
  });
});
