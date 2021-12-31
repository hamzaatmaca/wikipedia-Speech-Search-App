const template = document.createElement("template")
template.innerHTML=`
	
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	
	<style>
	::-webkit-scrollbar {
	  width: 2px;
	}

	/* Track */
	::-webkit-scrollbar-track {
	  box-shadow: inset 0 0 2px grey;
	  border-radius: 1px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
	  background: rgba(0,200,200);
	  border-radius: 2px;
	}
		.container, .row, .col-sm-12,#searchForm{
			display:flex;
			justify-content:center;
			align-items:center;
			
		}
		
		#searchArea{
			margin-top:20px;
			width:50vw;
			overflow-y: scroll;
			height:90vh;
			background:rgba(0, 100, 100, 0.8);
			padding:10px;
			border-top-left-radius:10px;
			border-bottom-left-radius:10px;
			margin:10px;
			
		}
		.searchItem{
			display:flex;
			justify-content:left;
			flex-direction:column;
			align-items:center;
			width:100%;
			margin-top:5px;


		}
		.searchItem p{
			font-size:14px;
			line-height:1.7;
			font-family:arial;
			color:white;
			text-shadow:0 0 5px black;
		}
		.searchItemTop{
			width:100%;
			display:flex;
			justify-content:left;
			align-items:center;
			flex-direction:row
		}
		#searchBar{
			width:60vw;
			border-radius:20px;
			border:none;
			outline:none;
			height:40px;
			padding-left:30px

		}
		input{
			opacity:.8;
			text-align:center;
			letter-spacing:4px;
			box-shadow:0 0 3px rgba(0,200,200,1);
		}
	</style>

	<div class="container">
		<div class="row mt-5">
			<form id="searchForm">
				<input value="a" placeholder="AI - Search Engine" id="searchBar" type="text">
			</form>
			<div id="searchArea">
			<div>
		</div>
	</div>
`;
class Search extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({ mode : 'open'})
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.searchBar = this.shadowRoot.getElementById('searchBar');
		this.shadowRoot.querySelector('#searchBar').value = this.getAttribute('val');
		
	}
	
	SearchData(){
		const getData = async ()=>{
			try{
			const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${this.searchBar.value}&gsrlimit=20&prop=pageimages|extracts&exchars=500&exintro&explaintext&exlimit=max&format=json&origin=*`)
			const data = await res.json();
			
			Object.values(data.query.pages).forEach(key=>{

					let el = document.createElement('div')
					el.innerHTML=`
						<div class="searchItem">
							<div class="searchItemTop">
								<img src="${key.hasOwnProperty("thumbnail") ? key.thumbnail.source : null}">
								<p style="margin-left:20px">${key.title}</p>
							</div>
							<p class="mt-2">${key.extract}</p>
						</div>
					`
					this.shadowRoot.getElementById('searchArea').appendChild(el)
			})

			}
			catch(err){
				console.log(err)
			}
		}
		getData();
	}
	connectedCallback(){
		
		this.SearchData();
	}
	
}

window.customElements.define('search-engine',Search);