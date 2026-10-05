var font = document.getElementById("font_selector");
var text2 = document.getElementById("text2");
var text1 = document.getElementById("text1");



text1.addEventListener('input', x = () => {

    text2.value = text1.value;
    console.log("ok");




});


var fontChange = () => {
    text2.style.fontFamily = "'" + font.value + "'";
}


