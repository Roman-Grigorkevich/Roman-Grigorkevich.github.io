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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y"
 ]

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
        console.log(text);
        a++
        i=0
        // console.log(1);
      }else {
        if (inText[a]===" ") {
          text+=" "
          a=+2
          i=0
        }else {
          i++
        }
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
