// document.addEventListener('keydown' ,(e) =>
// {
//  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'f')
//  {
//  alert("Ctl+Sft+f");
// }
// }
// );


var character_count1 = document.getElementById('character_count1');
var word_count1 = document.getElementById('word_count1');

var character_count2 = document.getElementById('character_count2');
var word_count2 = document.getElementById('word_count2');



var font = document.getElementById("font_selector");
var text2 = document.getElementById("text2");
var text1 = document.getElementById("text1");

var special = document.getElementsByClassName('chars')[0];
var special_btn = special.getElementsByTagName('button');


for (let i = 0; i < special_btn.length; i++) {
    special_btn[i].addEventListener(
        'click', async (e) => {

            // console.log(special_btn[i].innerHTML)
            try {
                navigator.clipboard.writeText(special_btn[i].innerHTML);
            }
            catch (err) {
                console.log("SHIT !!!");
            }
        }

    )
}

text1.addEventListener('input', x = () => {

    var textVal1 = text1.value 
    text2.value = text1.value;
    character_count1.innerHTML = text1.value.length;
    word_count1.innerHTML = textVal1.match(/ /g).length;


    var textVal2 = text2.value 
    // // text2.value = text1.value;
    character_count2.innerHTML = text2.value.length;
        if(textVal1.match(/ /g) === 0)
            {
                alert("0 Worlds")
            }
        else
        {
            word_count2.innerHTML = textVal2.match(/ /g).length;
        }
});

text2.addEventListener('input', x = () => {

    var textVal2 = text2.value 
    // // text2.value = text1.value;
    character_count2.innerHTML = text2.value.length;

    word_count2.innerHTML = textVal2.match(/ /g).length;
});





var fontChange = () => {
    text2.style.fontFamily = "'" + font.value + "'";
}