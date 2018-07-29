var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const axios = require('axios')

app.use(bodyParser.json()) // for parsing application/json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
) // for parsing application/x-www-form-urlencoded

//This is the route the API will call
app.post('/new-message', function(req, res) {
  const { message } = req.body

  //Each message contains "text" and a "chat" object, which has an "id" which is the chat id
/*
  if (message.text.toLowerCase().indexOf('300') < 0) {
  // If we've gotten this far, it means that we have received a message containing the word "marco".
  // Respond by hitting the telegram bot API and responding to the approprite chat_id with the word "Polo!!"
  // Remember to use your own API toked instead of the one below  "https://api.telegram.org/bot<your_api_token>/sendMessage"
  axios
    .post(
      'https://api.telegram.org/bot646843854:AAE5N-7_QqU3I5a2bkMkH5HiKFwVVH8ftfM/sendMessage',
      {
        chat_id: message.chat.id,
        text: 'otsosi u tractorista!!'
      }
    )
    .then(response => {
      // We get here if the message was successfully posted
      console.log('Message posted')
      res.end('ok')
    })
    .catch(err => {
      // ...and here if it was not
      console.log('Error :', err)
      res.end('Error :' + err)
    })
  }
})
*/

  if(message.text.toLowerCase().indexOf("/start")!== -1){
      telegram.sendMessage(message.chat.id, "WARNING!\nThis Bot is being tested, please do not make any operation here!");
      telegram.sendMessage(message.chat.id, "AVISO!\nEsse robô está sendo testado, por favor não realize nenhuma operação aqui!");
      telegram.sendMessage(message.chat.id, "Oi, tudo bem? Pode me dizer seu CEP?");
  }
  else if(message.text.toLowerCase().indexOf("88050")!== -1){
      telegram.sendMessage(message.chat.id, "Legal! Atendemos nessa região :)\nO que você gostaria de pedir?");
  }
  else if(message.text.toLowerCase().indexOf("pizza")!== -1){
    telegram.sendMessage(message.chat.id, "Pode me dizer o sabor da pizza? ");
    }
  else if(message.text.toLowerCase().indexOf("calabresa")!== -1){
    sabor=message.text.toLowerCase();
    telegram.sendMessage(message.chat.id, "Qual o tamanho?");
  }
  else if(message.text.toLowerCase().indexOf("grande")!== -1){
    tamanho=message.text.toLowerCase();
    telegram.sendMessage(message.chat.id, "Refrigerante?");
  }
  else if (message.text.toLowerCase().indexOf("sim")!== -1){
    if (acompanhamento==''){
    telegram.sendMessage(message.chat.id, "Qual?");
    }
    else{
      mandarPedido(tamanho, sabor, acompanhamento, preco, message.chat.id);
    }
  }
  else if (message.text.toLowerCase().indexOf("não")!== -1 || message.text.toLowerCase().indexOf("nao")!== -1){
    telegram.sendMessage(message.chat.id, "Desculpe :(\n O que você gostaria de pedir então?");    
    preco=0;
    sabor='';
    tamanho='';
    acompanhamento='';
  }
  else if (message.text.toLowerCase().indexOf("coca")!== -1){
      acompanhamento='Coca-cola';
      telegram.sendMessage(message.chat.id, "Entendi!\nTemos as seguintes pizzarias:\n1 - Pizzaria da Mama (R$2,00)\n2 - Don Guaianases (R$35,00) \n3 - Cadiolli (R$70,00)\n\nSelecione a que desejar!");    
  }
  else if (message.text.toLowerCase().indexOf("1")!== -1){
      if (acompanhamento==''){
        var mensagem="Confirma pra mim então:\n 1 - Pizza "+tamanho+" de "+sabor;
        preco=100;
        telegram.sendMessage(message.chat.id, mensagem);    
      }
      else{
        preco=200;
        telegram.sendMessage(message.chat.id, "Confirma pra mim então:\n1 - Pizza "+tamanho+" de "+sabor+"\n2 - "+acompanhamento);
      }
    telegram.sendMessage(message.chat.id, "É isso mesmo?!");
  }
  else if (message.text.toLowerCase().indexOf("2")!== -1){
      if (acompanhamento=''){
        preco=3000;
        telegram.sendMessage(message.chat.id, "Confirma pra mim então:\n1 - Pizza "+tamanho+" de "+sabor);    
      }
      else{
        preco=3500;
        telegram.sendMessage(message.chat.id, "Confirma pra mim então:\n1 - Pizza "+tamanho+" de "+sabor+"\n2 - "+acompanhamento);
      }
    telegram.sendMessage(message.chat.id, "É isso mesmo?!");      
  }
  else if (message.text.toLowerCase().indexOf("3")!== -1){
      if (acompanhamento=''){
        preco=6500;
        telegram.sendMessage(message.chat.id, "Confirma pra mim então:\n1 - Pizza "+tamanho+" de "+sabor);    
      }
      else{
        preco=7000;
        telegram.sendMessage(message.chat.id, "Confirma pra mim então:\n1 - Pizza "+tamanho+" de "+sabor+"\n2 - "+acompanhamento);
      }
    telegram.sendMessage(message.chat.id, "É isso mesmo?!");      
  }
  else if (message.text.toLowerCase().indexOf("/stop")!== -1){
    new StopController()
  }
  else{
    telegram.sendMessage(message.chat.id, "Desculpe, não entendi o que quis dizer :("); 
  }
  
})


// Finally, start our server
app.listen(3000, function() {
  console.log('Telegram app listening on port 3000!')
})