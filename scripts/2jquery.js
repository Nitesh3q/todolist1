$("#cdelete").click(function(){
    console.log("Delete button clicked");
    var p = $(this).parent().attr('class');
    console.log(p);
    p.remove();
  });