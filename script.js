// document.addEventListener('keydown' ,(e) =>
// {
//  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'f')
//  {
//  alert("Ctl+Sft+f");
// }
// }
// );



var font = document.getElementById("font_selector");
var text2 = document.getElementById("text2");
var text1 = document.getElementById("text1");

var special = document.getElementsByClassName('chars')[0];
var special_btn = special.getElementsByTagName('button');


for (let i = 0; i < special_btn.length; i++) {
    special_btn[i].addEventListener(
        'click', async (e) => {

            // console.log(special_btn[i].innerHTML)
            try
                {
                 navigator.clipboard.writeText(special_btn[i].innerHTML);
                }
                catch(err)
                {
                    console.log("SHIT !!!");
                }
        }

    )
}

text1.addEventListener('input', x = () => {

    text2.value = text1.value;
    console.log("ok");

});

var fontChange = () => {
    text2.style.fontFamily = "'" + font.value + "'";
}
