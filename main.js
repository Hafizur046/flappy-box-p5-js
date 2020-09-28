   
let vel = 3;
let yaxis = 0;
let alive = true;
let fall;
let passed = 0;
function object(w , h , x , g){
    this.w = w;
    this.h = h;
    this.x = x;
    this.g = g;
    vel += g;
    this.y = yaxis + vel;
    yaxis += vel;
    this.show = function show(){
        if(fall.y < 275){
        rect(this.x , this.y , this.w , this.h);
        fill(0 , 255 , 255);
        console.log("show")
        }
    }
}
class faller{
    constructor(w , h , x , g){
        this.w = w;
        this.h = h;
        this.x = x;
        this.g = g;
        vel += g;
        this.y = yaxis + vel;
        yaxis += vel;
    }
    show(){
        if(this.y < 290){
        console.log(this.y);
        rect(this.x , this.y , this.w , this.h);
        fill(0 , 255 , 255);
        console.log("show")
        }else{
            noLoop();
            alive = false;
        }
    }
}
function keyPressed(){
    if(key == " " ){
        vel = -3; 
    }
}
function touchStarted(){
    vel = -3;
}
// function draw(){
//     let fall = new object(30 , 30 , 60 , 0.05);
//     if(fall.y < 275){
//     background(100 , 50 , 85);
//     fill(0 , 255 , 255);
//     console.log(fall);
//     }
// }
let count = 0;
    class walls{
        constructor(a , b , frm , fall){
            this.top_y = 0;
            this.top_h = b;
            if(frm> -10){
            this.x = frm;
            }
            this.btm_h = 500 - (a + b);
            this.btm_y = b + a;
        }
        show(){
            fill(random(0 , 255) , random(0 , 255) , random(0 , 255));
            rect(this.x , this.top_y , 20 , this.top_h);
            rect(this.x , this.btm_y , 20 , this.btm_h);
            if(this.x  <= fall.x+20 && this.x >= fall.x-20 ){
                console.log("work")
                if(fall.y <= this.top_h || fall.y+20 >=   this.btm_y){
                    noLoop();
                }
            }
            if(this.x+20 < fall.x){
                    console.log("passed");
                    //noLoop();
                if(count === 0){
                    console.log("it is also working")
                    count++;
                    passed++;
                }
            } 
            console.log(fall);
        }
    }
let xvalues = [300 , 400 , 500 , 600 , 700  ];
function setup(){
    createCanvas(500 , 300);
}
let hvalues = [
    {
    a: 0,
    b: 0,
},{
    a: 0,
    b: 0,
},{
    a: 0,
    b: 0,
},{
    a: 0,
    b: 0,
},{
    a: 0,
    b: 0,
},{
    a: 0,
    b: 0,
},
];  
function draw(){
    if(frameCount == 1){
        for(i = 0; i < 5; i++){
    hvalues[i].a = random(85, 110);
    hvalues[i].b = random(0, 190);
        }
    }
    background(0, 200 , 300);
    fall = new faller(20 , 20 , 60 , 0.1  );
     fall.show();
    console.log(fall);
    for(i = 0; i<5 ; i++){
    if(xvalues[i] > 0){
        xvalues[i] -= 0.7;
    console.log(xvalues[i]);
    let wl = new walls(hvalues[i].a , hvalues[i].b , xvalues[i] , fall);
    wl.show();
    }else{
       xvalues[i] = 500 ;
        hvalues[i].a = random(75, 110);
        hvalues[i].b = random(0, 190);
        count = 0; 
    }
    push();
    fill(0);
    stroke(0);
    text(`Score: ${passed.toString()}` , 10 , 20);
    pop();
}  
}
