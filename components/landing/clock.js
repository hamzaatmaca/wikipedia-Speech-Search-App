const template = document.createElement("template")
template.innerHTML=`
<style>
#clock{
	font-size:30px;
	color:rgba(0,255,255,1);
	font-weight:bold;
	text-shadow:0 0 3px black;
	letter-spacing:4px;

}

</style>

<div id="clock">
<div id="day"></div>
<div id="hour"></div>

</div>
`;
class Clock extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({ mode : 'open'})
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.date = new Date;
		this.day = this.date.getDate();
		this.minute = this.date.getMinutes();
		this.hour = this.date.getHours();
		this.year = this.date.getFullYear();
		this.month = this.date.getMonth();
		this.second = this.date.getSeconds();
		this.setClock();
		
	}
	setClock(){

		this.shadowRoot.getElementById('day').innerHTML = ("0" + this.day).slice(-2) + ' / ' + ("0" + this.month+1).slice(-2) + ' / ' + this.year
		this.shadowRoot.getElementById('hour').innerHTML = ("0" + this.hour).slice(-2) + ' : ' + ("0" + this.minute).slice(-2)+ ' : ' + ("0" + this.second).slice(-2)

	}
	connectedCallback(){
		setInterval(()=>{
			this.second++
			if(this.second >= 60){

				this.second = 0
				this.minute++

				if(this.minute >= 60){

					this.minute = 0;
					this.hour++

					if(this.hour >= 24){

						this.hour = 0
					}
				}
			}
			

			this.setClock();

		},1000)

	}
	disconnectedCallback(){
		
	}
}

window.customElements.define('digital-clock',Clock);