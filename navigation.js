$(document).ready(function() {
  $(".select").on("mouseover" , function() {
    $(".select").addClass("select1");
    $("#down").hide();
  });
  $(".select").mouseleave(function() {
    $("#down").show();
    $(".select").attr("class" , "select");
  });
});
