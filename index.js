var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("646843854:AAE5N-7_QqU3I5a2bkMkH5HiKFwVVH8ftfM", { polling: true });

var emoji = require('node-emoji').emoji;

telegram.on("text", (message) => {
 

var Hi = "hi";
if (message.text.toString().toLowerCase().indexOf(Hi) === 0) {
telegram.sendMessage(message.chat.id,"Hi " + message.from.first_name);
}
var bye = "bye";
if (message.text.toString().toLowerCase().indexOf(bye) === 0) {
telegram.sendMessage(message.chat.id,"Papai.. See U again. Have a nice day");
}
var Hai = "hai";
if (message.text.toString().toLowerCase().indexOf(Hai) === 0) {
telegram.sendMessage(message.chat.id,"Caakkkk!!!");
}
var Sihat = "sihat?";
if (message.text.toString().toLowerCase().includes(Sihat)) {
telegram.sendMessage(message.chat.id,"Alhamdulillah");
telegram.sendMessage(message.chat.id,"Ana di sini sihat-sihat aje");
}
var Hehe = "hehe";
if (message.text.toString().toLowerCase().indexOf(Hehe) === 0) {
telegram.sendMessage(message.chat.id,"Huhu");
}
var Sedap = "sedap";
if (message.text.toString().toLowerCase().indexOf(Sedap) === 0) {
telegram.sendMessage(message.chat.id,"X puase ke giler?");
}
var Book = "book";
if (message.text.toString().toLowerCase().indexOf(Book) === 0) {
telegram.sendMessage(message.chat.id,"");
}
var Merajuk = "merajuk";
if (message.text.toString().toLowerCase().indexOf(Merajuk) === 0) {
telegram.sendMessage(message.chat.id,"Alololololo.. ciannye diaa");
}
var Majok = "majok";
if (message.text.toString().toLowerCase().indexOf(Majok) === 0) {
telegram.sendMessage(message.chat.id,"Alololololo.. ciannye diaa");
}
var Alamat = "alamat";
if (message.text.toString().toLowerCase().indexOf(Alamat) === 0) {
telegram.sendLocation(message.chat.id, 3.234151, 101.689981);
telegram.sendMessage(message.chat.id, "Sini lah tempat tu.");
}
var what = ['idiot' || 'bodoh' || 'sial'];
if (message.text.toString().toLowerCase().includes(what[0,1,2])) {
telegram.sendMessage(message.chat.id, "Kepala Banaaaa.");
/*telegram.kickChatMember(message.chat.id,  message.from.id);*/
}

var Raya = "selamat hari raya";
if (message.text.toString().toLowerCase().includes(Raya)) {
telegram.sendMessage(message.chat.id, "Selamat Hari Raya");
telegram.sendMessage(message.chat.id, "Maaf Zahir dan Batin");
}
var Pagi = "selamat pagi";
if (message.text.toString().toLowerCase().includes(Pagi)) {
telegram.sendMessage(message.chat.id, "Selamat pagi jugak..");
telegram.sendMessage(message.chat.id, "Have a nice day");
}
var Puasa = "puasa tak";
if (message.text.toString().toLowerCase().includes(Puasa)) {
telegram.sendMessage(message.chat.id, "Saya robot la.");
telegram.sendMessage(message.chat.id, "Robot tak wajib puasa");
}
var Puasa = "puasa tak";
if (message.text.toString().toLowerCase().includes(Puasa)) {
telegram.sendMessage(message.chat.id, "Saya robot la.");
telegram.sendMessage(message.chat.id, "Robot tak wajib puasa");
}
var Naktanya = "nak tanya";
if (message.text.toString().toLowerCase().includes(Naktanya)) {
telegram.sendMessage(message.chat.id, "Ye.. apa dia?");
}
var Sukatak = "suka tak";
if (message.text.toString().toLowerCase().includes(Sukatak)) {
telegram.sendMessage(message.chat.id, "Suka sangat sangat!!");
}
var Hmm = "hmm";
if (message.text.toString().toLowerCase().includes(Hmm)) {
telegram.sendMessage(message.chat.id, "Nape? merajuk ke mengeluh?");
}
var Okaytak = "ok tak";
if (message.text.toString().toLowerCase().includes(Okaytak)) {
telegram.sendMessage(message.chat.id, "okay jeee");
}
var Giler = "le giler";
if (message.text.toString().toLowerCase().includes(Giler)) {
telegram.sendMessage(message.chat.id, "ek eleh");
telegram.sendMessage(message.chat.id, "kau le giler");
}
var Ajar = ("sape ajar", "siapa ajar");
if (message.text.toString().toLowerCase().includes(Ajar)) {
telegram.sendMessage(message.chat.id, "Papa le yang ajar");
}
var Spapa = "siapa papa";
if (message.text.toString().toLowerCase().includes(Spapa)) {
telegram.sendMessage(message.chat.id, "Papa saya ialah Tuan Aiman_Cheng");
}
var Syg = "sayang tak";
if (message.text.toString().toLowerCase().includes(Syg)) {
telegram.sendMessage(message.chat.id, "Sayang sangat taw!");
}
var Buat = "buat apa tu";
if (message.text.toString().toLowerCase().includes(Buat)) {
telegram.sendMessage(message.chat.id, "Melanguk jee");
telegram.sendMessage(message.chat.id, "Takde buat pape pun");
}
var Cantik = "cantik tak";
if (message.text.toString().toLowerCase().includes(Cantik)) {
telegram.sendMessage(message.chat.id, "Cantik cangat cangat.");
telegram.sendMessage(message.chat.id, "Tomeyyyy  " + emoji.heart);
}
var Handsome = "handsome";
if (message.text.toString().toLowerCase().includes(Handsome)) {
telegram.sendMessage(message.chat.id, "Weekkkkkk!");
}
var Hensem = "hensem";
if (message.text.toString().toLowerCase().includes(Hensem)) {
telegram.sendMessage(message.chat.id, "Weekkkkkk!");
}

telegram.onText(/Cak/ , (message) => {  
 telegram.sendMessage(message.chat.id, "Weekkkkkk!!!"); 
});

telegram.onText(/\/mula/, (message) => {  
telegram.sendMessage(message.chat.id, "Welcome", {
"reply_markup": {
    "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
    }
});  
});

telegram.onText(/\/marykay/, (message) => {  
telegram.sendMessage(message.chat.id, "Hai! Selamat Datang.. Sila Pilih..", {
"reply_markup": {
    "keyboard": [["Pengenalan", "Product"],   ["Pertanyaan"]]
    }
});  
});

var Lapar = "lapar";
if (message.text.toString().toLowerCase().includes(Lapar)) {
telegram.sendMessage(message.chat.id, "Saya pun.");
} 

var Pengenalan = "pengenalan";
if (message.text.toString().toLowerCase().indexOf(Pengenalan) === 0) {
    telegram.sendMessage(message.chat.id, "Hai, Saya Dakcik Adda. Agent Mary Kay");
    telegram.sendMessage(message.chat.id, "Mary Kay ni produk bla bla bla");
}

var Product="product";
if (message.text.toString().toLowerCase().indexOf(Product) === 0) {
telegram.sendMessage(message.chat.id, "Ini antara produk yang saya jual");
telegram.sendPhoto(message.chat.id,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSqXRgWHNX-lu51zJlQIPDKCigMCDjdS7sTRbLJ50zH1TLguU",{caption:"Ini Lipstik. Harga bla bla per item"});
telegram.sendPhoto(message.chat.id,"https://gd.image-gmkt.com/100-AUTHENTIC-MARY-KAY-SKINVIGORATE-CLEANSING-BRUSH-TIMEWISE/li/412/233/851233412.g_400-w_g.jpg",{caption:"Ini set kosmetik. Harga bla bla"});
}
var Pertanyaan = "pertanyaan";
if (message.text.toString().toLowerCase().indexOf(Pertanyaan) === 0) {
telegram.sendMessage(message.chat.id,"Hai. Ada apa-apa yang boleh saya bantu?");
}
});