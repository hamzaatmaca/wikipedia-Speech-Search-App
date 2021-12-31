/*
		<user-card name="John Doesss" avatar="./assets/img/background.jpg">
			<div slot="email">a@a</div>
			<div slot="phone">1</div>
		</user-card>
		
		<user-card name="John" avatar="./assets/img/background.jpg">
			<div slot="email">b@b</div>
			<div slot="phone">1245</div>
		</user-card>

		console.log(Object.is('a','b'));
		console.log(Object('b'));
		console.log(Object('c'));
		console.log(Array('b','d','e'));	

*/
const template = document.createElement('template');
template.innerHTML=`
	
	<style>

		h3{
			color:coral;
		}

	</style>
	<div class="user-card">
		<h3></h3>
		
			<div class="info">
				<p><slot name="email" /></p>
				<p><slot name="phone" /></p>
				<button id="toggle-info">Hide ınfo</button>
			</div>
		
	</div>

`

class UserCard extends HTMLElement{
	constructor(){
		super();

		this.attachShadow({mode : 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		//this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
	}
	toggleInfo(){
		alert()
	}
	connectedCallback(){
		this.shadowRoot.querySelector('#toggle-info').
		addEventListener('click',()=>this.toggleInfo())
	}
	disconnectedCallback(){
		this.shadowRoot.querySelector('#toggle-info').
		removeEventListener();
	}
}

window.customElements.define('user-card', UserCard);

