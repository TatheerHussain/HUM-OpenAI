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

function typeText(element, text){
  let index = 0;

  let interval = aetInterval(()=>{
  if(index < text.length){  // user is still typing 
    element.innerHTML += text.chartAt(index);
    index++;
  }else{
    clearInterval(interval); 
  }
  }, 20)
}

// we have to generate unique id for every single message to map over them

function generateUniqueId(){
  // generation unqiue id 
  const timestamp = Date.now();


  // to make it more unique lets generate another number
  const randomNumber = Math.eandom();
  // we can make it more random by making it a hexadecimal 
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;

}



// writing chatStripe 

function chatStripe(isAi, value, uniqueId){
  return (
    `
    <div class="wrapper ${isAi && 'ai'}">
      <div class="chat">
        <div className= "profile">
          <img src="${isAi ? bot : user}" 
           alt="${isAi ? 'bot' : 'user'}"
          />
        </div>
        <div class="message" id="${uniqueId}">${value}</div>
      </div>
    </div>
    `
  )

}


// handle submit function, which is going to be the trigger for the chat bot

const  handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  // user chatstrip 
  chatContainer.innerHTML += chatStripe(false, data.get('prompt'));

  form.reset();

  // bots chatstrip 

  const uniqueId = generateUniqueId();;
  chatContainer.innerHTML += chatStripe(true, ' ', uniqueId);


  chatContainer.scrollTop = chatContainer.scrollHeight;

  const messageDiv = document.getElementById(uniqueId);
  
  loader(messageDiv);
}


// event listener

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e)=>{
  if(e.keyCode === 13){
    handleSubmit(e);
  }

})
    