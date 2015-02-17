function display(hash) {
  $(hash).addClass("active");
}
$(function(){
  if ( !location.hash )
    location.hash = "0";
  display(location.hash);
});
$(function(){
  $(window).on('hashchange', function(){
    display(location.hash);
  });
});
