console.log("background script working");
var t = null;
// var l = null;
let a = {};

xp = location.href;
if (xp.includes("meet.google.com")) {
    setTimeout(joinmeeting, 1000);
}

function joinmeeting() {
    if (document.readyState == "complete") {
        try {
            // Mic Button
            window.document.querySelectorAll(".U26fgb")[0].click();
            // Webcam Button
            window.document.querySelectorAll(".U26fgb")[1].click();
            window.document.querySelector(".NPEfkd").click();
        } catch (err) {
            console.log("EROOR");
        }
    }
}

function rtntime() {
    var myDate = new Date();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    if (hours < 10) { hours = "0" + hours };
    if (minutes < 10) { minutes = "0" + minutes; }
    var timetrigger = (hours + ":" + minutes);
    return timetrigger;
}


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "tickbtnclicked") {
            a = request.object;
            console.log(a);

            if (t != null) {
                clearTimeout(t);
                t = null;
            }
            // if (l != null) {
            //     clearTimeout(l);
            //     l = null;
            // }

            checker();
            // if(a.checkbox=="true"){
            //     leavetime=a.time
            //     leaver();
            // }

        }
        if (request.message === "stopbtnclicked") {
            console.log("Stop btn clicked");
        }
    }

);


function checker() {
    location.replace(a.link);
    joinmeeting();
    setTimeout(checker, (60 - new Date().getSeconds()) * 1000);
    console.log("check");
}

// function leaver() {
//     try {
//         if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText < 10) {
//             console.log("i did it");
//             //leave btn
//             try {
//                 window.document.querySelector(".FbBiwc").click();
//             } catch {
//                 console.log("ERROR");
//             }

//         }
//     } catch {
//         console.log("Error");
//     }
    
// }