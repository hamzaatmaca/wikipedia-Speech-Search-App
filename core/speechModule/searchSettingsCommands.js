class SearchSettingsCommands{
	
	constructor(){
		this.text;
		
	}	
	initSearch(text){

		this.text = text
		
		document.querySelector('.container').innerHTML = `<search-engine val="${this.text}"></search-engine>`;
	}
}


let searchSetCommands = new SearchSettingsCommands();
 
export default searchSetCommands