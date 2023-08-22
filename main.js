var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var largura = 2;

var mouseX;
var mouseY;

canvas.addEventListener("mousedown", desenhar);

function desenhar(e){
    color = document.getElementById("cor").value;
    largura = document.getElementById("number").value;
    mouseX = e.clientX-canvas.offsetLeft;
    mouseY = e.clientY-canvas.offsetTop;
    circulo(mouseX, mouseY);
}

function circulo(){
    var x = mouseX;
    var y = mouseY;

    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=largura;
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=largura;
    ctx.arc(x+90,y,40,0,2*Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=largura;
    ctx.arc(x+180,y,40,0,2*Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=largura;
    ctx.arc(x+135,y+50,40,0,2*Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth=largura;
    ctx.arc(x+45,y+50,40,0,2*Math.PI);
    ctx.stroke();
}