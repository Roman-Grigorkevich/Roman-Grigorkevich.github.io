const input=document.getElementById('in')
const output=document.getElementById('out')
const number=document.getElementById('n1')

let a=0
let y=0
let i=0
let letter
let inText
let outText
let text=""
let num
const letters=[
   "а","б","в","г","д","е","ё",
   "ж","з","и","й","к","л","м",
   "н","о","п","р","с","т","у",
   "ф","х","ц","ч","ш","щ","ъ",
   "ы","ь","э","ю","я",

   "а","б","в","г","д","е","ё",
   "ж","з","и","й","к","л","м",
   "н","о","п","р","с","т","у",
   "ф","х","ц","ч","ш","щ","ъ",
   "ы","ь","э","ю","я"
 ]
 function big() {
   while (y<1000) {
        if (text.length<inText.length) {

        }
   }
 }

function gen() {
  text=""
  inText=input.value
  num=number.value*1
  while (y<1000) {
    if (text.length<inText.length) {
      if (inText[a]===" ") {
        text+=" "
        a++
      }
      if (inText[a]===",") {
        text+=","
        a++
      }
      if (inText[a]===".") {
        text+="."
        a++
      }
      if (inText[a]===letters[i]) {
        letter=letters[i+num]
        text+=letter
        a++
        i=0
        console.log(text);
        // console.log(1);
      }else {
          i++
      }
    }
    y++
  }
  console.log(a,i);
  output.value=text
  y=0
  a=0
  // i=0

}
