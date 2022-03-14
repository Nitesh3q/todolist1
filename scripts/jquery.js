// M.AutoInit();
$(document).ready(function () {
  // $('.collapsible').collapsible();
  // $('.collapsible').collapsible('open',1);
  // $('.scrollspy').scrollSpy();
  // $('.sidenav').sidenav();
  // $('.fixed-action-btn').floatingActionButton();
  // $('.fixed-action-btn').floatingActionButton('hoverEnabled',true);
  // $('.modal').modal();
  var app = {
    selectedTasks: []
  };


  $("#btnadd").click(function () {
    // console.log("button clicked");
    $('.modal').modal();
    // open a new form take a name and add it to the new list
  });

  $("#addclick").click(function () {
    var task_title = document.getElementById("icon_title").value.toString();
    var task_descrip = document.getElementById("icon_descrip").value.toString();
    // console.log(task_title);

    var t = '<li class="collection-item avatar"><i class="material-icons circle">work</i><div>' + task_title +'<p>'+task_descrip+ '</p><a href="#!" class="secondary-content"><i class="material-icons" id="cedit">edit</i><i class="material-icons cdel" id="cdelete">delete</i></a></div></li>';
    $(".collection").append(t);
    app.selectedTasks.push({
      task_title: task_title,
      task_descrip: task_descrip
    });
    var selectedTasks = JSON.stringify(app.selectedTasks);
    localStorage.selectedTasks = selectedTasks;
    // console.log("local storage done");
  });

  // $("#cdelete").click(function () {
  //   console.log("Delete button clicked");
  //   var p = $(this).parent().attr('class');
  //   console.log(p);
  //   $(this).parent().parent().parent().remove();
  // });

  $(document).on("click", "i.cdel", function () {
    var p = $(this).parent().parent()['0']['firstChild']['data'];
    var sel = [];
    app.selectedTasks.forEach(function(element){
      console.log(element['task_title']);
      if (element['task_title']!=p)
        sel.push(element);
    });
    app.selectedTasks = sel;
    var selectedTasks = JSON.stringify(app.selectedTasks);
    localStorage.selectedTasks = selectedTasks;    
    $(this).parent().parent().parent().remove();
  });

});