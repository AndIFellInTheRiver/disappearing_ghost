$(".hide-button").click(function() {
  $(".ghost-image").hide();
});
$(".show-button").click(function() {
  $(".ghost-image").show();
});
$(".update-img-button").click(function() {
  $(".ghost-image").attr(
    "src",
    "https://media.tenor.com/images/dfa2a4af878da14382a73fd774122718/tenor.gif"
  );
});
$(".message-button").click(function() {
  let message = $(".input").val();
  $(".message").append("<br>" + message);
  
});
$(".name-button").click(function(){
  let name = $(".input").val();
  $(".head").text(name);
});