class LandingSettingsCommands{
	constructor(){
		this.moon;
		this.count = 0;
		this.body = document.body.style
		this.images = [

			'./assets/img/background1.jpg',
			'./assets/img/background2.jpg',
			'./assets/img/background3.jpg'

			]
	}

	backgroundIMG(){
		this.count++;
		
		if(this.count >= this.images.length){
			this.count = 0;
		}
		this.body.backgroundImage = `url('${this.images[this.count]}')`;
		this.body.backgroundPosition = 'center';
		this.body.backgroundRepeat = "no-repeat";
		this.body.backgroundSize = "cover";

		this.moon.style.display="none";
	}
	darkMode(){

		this.body.background = 'black';
		this.moon = document.createElement('div');
		this.moon.innerHTML =`

			<img id="moonLight" width="50" height="50" src="./assets/img/moon.webp">

		`
		this.moon.classList.add('moon');
		this.moon.style.display="block";
		

		document.querySelector('.row').appendChild(this.moon)
	}
}


let landingSetCommands = new LandingSettingsCommands();

export default landingSetCommands;
