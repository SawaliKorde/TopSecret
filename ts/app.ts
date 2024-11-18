var i: number;
var canvas = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");
var container: {circle: geometry.particle}[] = [];
var animate = true;
var textInstance = new geometry.text(context);

for(i=0; i<3000; i++){
    var particle = new geometry.particle(context);
    particle.vx = Math.random()*2+1;
    container.push({circle: particle})
}


anim();

function anim(){
    // context.clearRect(0,0,window.innerWidth, window.innerHeight); //clears canvas
    
    context.save();
    context.beginPath();
    context.rect(0,40,1600,400);
    context.fillStyle="rgba(0,0,0,2)";
    context.fill();
    context.lineWidth=3;
    context.strokeStyle = "black";
    context.stroke();
    context.restore();

    for(i=0; i<3000;i++){
        container[i].circle.draw();
    }
    if(animate){
        window.requestAnimationFrame(anim);
    }
    textInstance.show_words();

}

function stop(){
    animate = false;

}

function start(){
    animate = true;
    anim();
}