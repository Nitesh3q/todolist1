(function () {
    'use strict';
    var app = {
        selectedtasks: []
    };

    app.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems, {
            direction: 'left',
            hoverEnabled: false
        });
    });

    app.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.modal');
        var options = {}
        var instances = M.Modal.init(elems, options);
    });

    app.getElementById("#addclick").addEventListener("click",function(){
        var first_name = document.getElementById("first_name").value;
        console.log(first_name);
        var t = '<li class="collection-item"><div>' + first_name + '<a href="#!" class="secondary-content"><i class="material-icons" id="cedit">edit</i><i class="material-icons cdel" id="cdelete">delete</i></a></div></li>';
        $(".collection").append(t);
    });


});