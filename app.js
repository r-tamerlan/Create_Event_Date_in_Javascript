let box1 = document.getElementById("boxs1");
let box2 = document.getElementById("boxs2");
let box3 = document.getElementById("boxs3");
let box4 = document.getElementById("boxs4");
let getDate = document.getElementById("getDate");
let getTime = document.getElementById("getTime");
let btn = document.getElementById("btn");

// let girilenVaxtTest = new Date(getDate.value + " " + getTime.value).getTime();
// let indiTest = new Date().getTime();
// let ferqTest = girilenVaxtTest - indiTest;
// // if (ferqTest < 0) {
// //     clearInterval(zaman);
// //     alert("⚠️Ötən tarixdən bir gün təyin etdiniz. Növbəti günlərdən birin təyin edin!")

// // }

document.querySelector("body").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        get();
    }
});

btn.addEventListener("click", get);

function get() {
    let girilenVaxtTest = new Date(getDate.value + " " + getTime.value).getTime();
    let indiTest = new Date().getTime();
    let ferqTest = girilenVaxtTest - indiTest;
    if (ferqTest < 0) {
        alert("⚠️Ötən tarixdən bir gün təyin etdiniz. Növbəti günlərdən birin təyin edin!");
        return;
    }

    var girilenVaxt = new Date(getDate.value + " " + getTime.value).getTime();


    var zaman = window.setInterval(function() {

        var indi = new Date().getTime();

        var ferq = girilenVaxt - indi;


        var days = Math.floor(ferq / (1000 * 60 * 60 * 24));
        var hours = Math.floor((ferq % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((ferq % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((ferq % (1000 * 60)) / 1000);

        box1.innerHTML = days;
        box2.innerHTML = hours;
        box3.innerHTML = minutes;
        box4.innerHTML = seconds;
        if (ferq < 0) {
            clearInterval(zaman);
            document.getElementById("basliq").innerHTML = "✅ EXPIRED";
            box1.innerHTML = "";
            box2.innerHTML = "";
            box3.innerHTML = "";
            box4.innerHTML = "";
        }
    }, 1000)
};