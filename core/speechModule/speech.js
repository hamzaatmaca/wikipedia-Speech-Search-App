import landingSetCommands from './landingSettingsCommands.js';
import searchSetCommands from './searchSettingsCommands.js';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

recognition.addEventListener('result',(e)=>{
	const text = Array.from(e.results)
	.map(result => result[0])
	.map(result => result.transcript)
	.join('');

	//console.log(text)
	searchSetCommands.initSearch(text)
	/***** Send Speak to search class***/

	
	/*********************************************************/
	
/***************************** COMMAND SECTION ***************************/

	let commands = ['change background','Merhaba','black','new','find me','close search'];

	let currentCommand = commands.filter((e)=>{
		if(e == text){
			return e;
		}
	})

	//console.log(currentCommand[0])

	if(e.results[0].isFinal){

		if(text.includes(currentCommand[0])){
			
			switch(currentCommand[0]){

				/******************* LANDING PAGE COMMANDS *********************/

					case 'change background':
						landingSetCommands.backgroundIMG();
					break;
					case 'black':
						landingSetCommands.darkMode();
					break;
					case 'new':
						location.reload();
					break;

				/******************* SEARCH PAGE COMMANDS *****************/

					case 'find me':
						searchSetCommands.initSearch(text);
					break;
					case 'close search':
						location.reload();
					break;
			
				/**********************************************************/

				default:
				console.log('status');
			}
		}
	}
});

recognition.addEventListener('end',()=>{
	recognition.start();
})

recognition.start();

