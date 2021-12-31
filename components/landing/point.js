//General variables
let canvas = document.createElement('canvas');
let contact = document.getElementById('contact')
let ctx = canvas.getContext('2d');
let width = 200;
let height = 200;
contact .insertBefore(canvas,contact.childNodes[0])

//Coordinate Variables
let dx = width/2;
let dy = height/2 ;


//Clear Page
function clearPage(){
	
	ctx.clearRect(0,0,canvas.width,canvas.height);

}

//Draw War Area
class Canvas{
	constructor(){

	}
	draw(){

		canvas.width = width;
		canvas.height = height;
		canvas.style.borderRadius = 20 + 'px';

		ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
		ctx.fillRect(0,0,canvas.width,canvas.height)
	}
}


//Create Commando
class Commando{

	constructor(dx,dy,r,s,c){
		this.color = c;
		this.dx = dx;
		this.dy = dy;
		this.s = s;
		this.r = r;
		this.bx;
		this.by;
		this.rx;
		this.ry;

		//Random route Core
		setInterval(()=>{

			this.rx = Math.floor(Math.random() * 2);
			this.ry = Math.floor(Math.random() * 2);

		},3000)

		
	}

	route(){	
		
		//Random router find
		if(this.rx == 1){
			
			this.dx = this.dx + this.s;

		}
		if(this.rx == 0){
			
			this.dx = this.dx - this.s
		}

		if(this.ry == 1){
			
			this.dy = this.dy + this.s
		}
		if(this.ry == 0){
			
			this.dy = this.dy-this.s
		}

		//Collision to Edge
		if(this.dy + this.r > height){
			
			this.ry = 0
		}
		if(this.dy - this.r < 0){
			
			this.ry = 1
		}

		if(this.dx + this.r > width){
			
			this.rx = 0
		}

		if(this.dx - this.r < 0){
			
			this.rx = 1
			
		}
		
		
	}

	

	draw(){

		this.route();
		ctx.beginPath();
		ctx.fillStyle=ctx.fillStyle = this.color;
		ctx.arc(this.dx, this.dy, this.r, 0, 2 * Math.PI);
		ctx.fill();
		ctx.closePath();

	}

}

//Stuff
let area = new Canvas();
let soldier = new Commando(dx,dy,10,3,"rgba(0, 200, 200, .5)");
let soldier2 = new Commando(dx,dy,10,6,"rgba(0, 200, 200, .5)");
let soldier3 = new Commando(dx,dy,10,4,"rgba(0, 200, 200, .5)");
let soldier4 = new Commando(dx,dy,10,2,"rgba(0, 200, 200, .5)");
let soldier5 = new Commando(dx,dy,10,7,"rgba(0, 200, 200, .5)");
let soldier6 = new Commando(dx,dy,10,5,"rgba(0, 200, 200, .5)");
let soldier7 = new Commando(dx,dy,10,8,"rgba(0, 200, 200, .5)");
let soldier8 = new Commando(dx,dy,10,9,"rgba(0, 200, 200, .5)");
let soldier9 = new Commando(dx,dy,10,4,"rgba(0, 200, 200, .5)");
let soldier10 = new Commando(dx,dy,10,3,"rgba(0, 200, 200, .5)");
let soldier11 = new Commando(dx,dy,10,2,"rgba(0, 200, 200, .5)");
let soldier12 = new Commando(dx,dy,10,8,"rgba(0, 200, 200, .5)");
let soldier13 = new Commando(dx,dy,10,4,"rgba(0, 200, 200, .5)");

function engine(){
	
	clearPage();
	area.draw();
	soldier.draw();
	soldier2.draw();
	soldier3.draw();
	soldier4.draw();
	soldier5.draw();
	soldier6.draw();
	soldier7.draw();
	soldier8.draw();
	soldier9.draw();
	soldier10.draw();
	soldier11.draw();
	soldier12.draw();
	soldier13.draw();

	requestAnimationFrame(engine);

}



engine()


