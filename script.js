import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = docuement.querySelector('#chat_container')

let loadInterbval;


// code block to show the loading in chat box

function loader(element){
  element.textContent ='';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....'){
      element.textContent = '';
    }
  }, 300)
}



// code block for showing answer in a typing style like humans type
//  this is just a way to imporve user experience 

function typeText()