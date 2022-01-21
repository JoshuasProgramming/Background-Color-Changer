//"#" + Math.floor(Math.random()*16777215).toString(16)

const body = document.getElementById('body');
const output = document.getElementById('output');


const btn = document.getElementById('btn').addEventListener("click", (e)=>{
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    body.style.background = (randomColor);

    output.innerHTML = "Background Color: " + "<span>" + (randomColor) + "</span>";
    const span = document.getElementsByTagName("span");
    span.style.color = "rgb(255, 188, 20)";
});