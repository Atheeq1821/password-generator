const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
function getRan(){
    let r = Math.floor(Math.random()*91)
    return r
}
let p1 =document.getElementById("child1")
let p2= document.getElementById("child2")
function getValue()
{
    let input = document.getElementById("inp").value
    generate1(parseInt(input))
    generate2(parseInt(input))
}
function generate1(num){
    let result=""
    for(let i=0;i<num;i++)
    {
        result+=characters[getRan()]
    }
    p1.textContent=result
}
function generate2(num){
    let result=""
    for(let i=0;i<num;i++)
    {
        result+=characters[getRan()]
    }
    p2.textContent=result
}
