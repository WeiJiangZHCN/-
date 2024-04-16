import { main } from "./answer";

setTimeout(function () {
    document.getElementById("ctlNext").click();
},20000)
setTimeout(main,2000);

function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
   }
deleteAllCookies();
// localStorage.setItem("questions_info", JSON.stringify(questions_info));
