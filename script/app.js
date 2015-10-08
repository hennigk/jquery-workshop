

$("img").click(function(){
  var src = ($(this).attr("src"))
  var closeButton = $("<button class='xButton'>X</button>");
  var image = "<img src='" + src + "'>"
  var overlay = $('<div class="overlay"></div>');
  var imageBox= $('<div class="image"></div>');
  var alt = ($(this).attr("alt"));
  var text = ('<figcaption>' + alt + '</figcaption>');
  $(closeButton).appendTo(imageBox);
  $(image).appendTo(imageBox);
  $(text).appendTo(imageBox);
  $(imageBox).appendTo(overlay);
  $(overlay).appendTo(document.body);
  $(".xButton").click(function(){
    $(overlay).remove();
})
})
