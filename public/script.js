const RESPONSE_DONE=4
const satus_ok=200



window.onload=getactivetodoajax();
window.onload+=getcompletedtodoajax();
window.onload+=getdeletedtodoajax();

function addtodoajax() {

    console.log(document.getElementById("addtodo").value);

    if (!document.getElementById("addtodo").value) {
        window.alert("plz enter any todo");
    }

    else {
       var r = new XMLHttpRequest();

      var da =document.getElementById("addtodo").value;
         r.onreadystatechange = function () {
             if (this.readyState == RESPONSE_DONE && this.status == satus_ok) {
                 console.log(r.responseText);
             }
         };

        r.open("POST",  "/api/todos", true);
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        r.send("todo_title="+da);
        window.load=getactivetodoajax();

    }
}

function getactivetodoajax() {
    console.log("below are all todos");

    var r = new XMLHttpRequest();
    r.open("GET", "/api/todos/active", true);
    r.onreadystatechange = function () {
        if (this.readyState == RESPONSE_DONE && this.status == satus_ok) {
            console.log(r.responseText);
            var v = JSON.parse(r.responseText);
            var str = "";

            Object.keys(v).forEach(function (t) {
                console.log(t);

                str += "<tr  ><td><input type='checkbox' onchange=addtocomplete("+t+")></td><td>" + v[t].title + "</td><td  onclick=addtodelete("+t+") style='color: #ff2d11; cursor: pointer'>X </td></tr>";
                }
            );
            document.getElementById("activetodolist").innerHTML = str;
        }



    }
    r.send(data = null);
}
function addtodelete(idd)
{

    console.log(idd);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (this.readyState == RESPONSE_DONE && this.status == satus_ok) {
            console.log(r.responseText);
        }
    };


    r.open("DELETE",  "/api/todos/delete", true);
    r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    r.send("idd="+idd);
    window.load=getactivetodoajax();
    window.load=getcompletedtodoajax();
    window.load=getdeletedtodoajax();
}

function addtocomplete(idd)
{

    console.log(idd);

         var r = new XMLHttpRequest();

        r.onreadystatechange = function () {
            if (this.readyState == RESPONSE_DONE && this.status == satus_ok) {
                console.log(r.responseText);
            }
        };

        r.open("PUT","/api/todos/complete/"+idd, true);
        //r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        r.send(data=null);
        window.load=getactivetodoajax();
        window.load=getcompletedtodoajax();
}

function getcompletedtodoajax() {
    console.log("below are all todos");

    var r = new XMLHttpRequest();
    r.open("GET", "/api/todos/complete", true);
    r.onreadystatechange = function () {
        if (this.readyState == RESPONSE_DONE && this.status == satus_ok) {
            console.log(r.responseText);
            var v = JSON.parse(r.responseText);
            var str = "";

            Object.keys(v).forEach(function (t) {
                    console.log(t);


                    str += ("<tr><td><input onchange=addtoactive("+t+") type='checkbox' checked></td><td style='text-decoration: line-through; color: #51d23f'>"+v[t].title  + "</td><td onclick=addtodelete("+t+")  style='color: #ff2d11; cursor: pointer'>X </td></tr>");

                }
            );
            document.getElementById("completedtodolist").innerHTML = str;
        }



    }
    r.send(data = null);
}


function addtoactive(idd)
{

    console.log(idd);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (this.readyState == RESPONSE_DONE && this.status == satus_ok) {
            console.log(r.responseText);
        }
    };

    r.open("PUT","/api/todos/active/"+idd, true);
    //r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    r.send(data=null);
    window.load=getactivetodoajax();
    window.load=getcompletedtodoajax();
}


function getdeletedtodoajax() {
    console.log("below are all todos");

    var r = new XMLHttpRequest();
    r.open("GET", "/api/todos/deleted", true);
    r.onreadystatechange = function () {
        if (this.readyState == RESPONSE_DONE && this.status == satus_ok) {
            console.log(r.responseText);
            var v = JSON.parse(r.responseText);
            var str = "";

            Object.keys(v).forEach(function (t) {
                    console.log(t);


                    str += ("<tr><td style='text-decoration:line-through; color: #ff2d11'>"+v[t].title  + "</td></tr>");

                }
            );
            document.getElementById("Deletedtodolist").innerHTML = str;
        }



    }
    r.send(data = null);
}



function functionhideshowc()
{
    var x = document.getElementById('completedtodolist');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        x.style="padding-left:100px; padding-top: 20px; width=500px";
        document.getElementById("hideo").innerHTML="<a><u >Hide Completed Items</u></a>";

    } else {

        x.style.display = 'none';

        document.getElementById("hideo").innerHTML="<a><u >Show Completed Items</u></a>";
    }
}

function functionhideshowd()
{
    var x = document.getElementById('Deletedtodolist');
    if (x.style.display === 'none') {
        x.style.display = 'block';

        document.getElementById("hided").innerHTML="<a><u >Hide Deleted Todos</u></a>";
    } else {
        x.style.display = 'none';

        document.getElementById("hided").innerHTML="<a><u >Show Deleted Todos</u></a>";
    }
}

