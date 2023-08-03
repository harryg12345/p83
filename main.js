canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
lastTouchX="";
lastTouchY="";
pencolour="red";
penwidth=3;

if(screen.width<992){
    canvas.width=screen.width-70;
    canvas.height=screen.height-300;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    lastTouchX=e.touches[0].clientX-canvas.offsetLeft;
    lastTouchY=e.touches[0].clientY-canvas.offsetTop;
pencolour=document.getElementById("pen_colour").value;
penwidth=document.getElementById("line_width").value;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    current_TouchX=e.touches[0].clientX-canvas.offsetLeft;
    current_TouchY=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=pencolour;
        ctx.lineWidth= penwidth;
        ctx.moveTo(lastTouchX ,lastTouchY);
        ctx.lineTo(current_TouchX ,current_TouchY);
        ctx.stroke();
    
    lastTouchX=current_TouchX;
    lastTouchY=current_TouchY;
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}