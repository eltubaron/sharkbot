//CREDITOS PARA >> https://github.com/BrunoSobrino

let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
//let pp = gataVidMenu.getRandom()
//let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 50  
    //////////////

    if (/^bot$/i.test(m.text) && chat.audios) {  
        if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
        let vn = './media/olasharkbot.mp3'
        this.sendPresenceUpdate('recording', m.chat)   
        this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   
    ////////////

if (/^Vou desligar o bot$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let vn = './media/A bueno adios master.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

// BEM VINDO, FIGURINHA . ÁUDIO \\

function getRandomSticker(stickerFiles) {
    const randomIndex = Math.floor(Math.random() * stickerFiles.length);
    return stickerFiles[randomIndex];
  }
  
  if (chat.audios && m.text.match(/(bienveni|bem vind)/gi)) {
    let vn = './media/Bienvenido.mp3';
    let stickerFiles = [
      './media/bemvind.webp',
      './media/bemvindo2.webp',
      // Adicione mais figurinhas aqui, se desejar
    ];
  
    this.sendPresenceUpdate('recording', m.chat);
  
    setTimeout(async () => {
      conn.sendMessage(m.chat, {
        audio: { url: vn },
        contextInfo: {
          "externalAdReply": {
            "title": wm,
            "body": `𝙏𝙐𝘽𝘼𝙍𝚯𝙉🦈҈᪳`,
            "previewType": "PHOTO",
            "thumbnailUrl": null,
            "thumbnail": imagen1,
            "sourceUrl": `https://sticker.ly/user/tubaron_`,
            "showAdAttribution": true
          } 
        },
        ptt: true,
        mimetype: 'audio/mpeg',
        fileName: `error.mp3`
      }, { quoted: m });
    }, 1000);
  
    let randomSticker = getRandomSticker(stickerFiles);
  
    await this.sendFile(m.chat, randomSticker, 'sticker.webp', '', m);
  }
  
  

//////////////// \\\\\\\\\\\\\\\\\

if (/^tomar sua cu|vai tomar sua cu$/i.test(m.text) && chat.audios) {  
    if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
    let vn = './media/tomarsuacu.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   
////////////////////

if (/^nossa bb$/i.test(m.text) && chat.audios) {  
    if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
    let vn = './media/nossa-bb.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   
    
    //////////////////////////////
    if (/^chora não bb|chora não bebê|chora não$/i.test(m.text) && chat.audios) {  
        if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
        let vn = './media/chorabb.mp3'
        this.sendPresenceUpdate('recording', m.chat)   
        this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

    ////

if (chat.audios && m.text.match(/(vira homem porra|vira homem)/gi)) {
    let vn = './media/vira-homem-porra.mp3';
    let sticker = './media/virahomem.webp';

    this.sendPresenceUpdate('recording', m.chat);

    setTimeout(async () => {
        conn.sendMessage(m.chat, {
            audio: { url: vn },
            contextInfo: {
                "externalAdReply": {
                    "title": wm,
                    "body": `𝙏𝙐𝘽𝘼𝙍𝚯𝙉🦈҈᪳`,
                    "previewType": "PHOTO",
                    "thumbnailUrl": null,
                    "thumbnail": imagen1,
                    "sourceUrl": `https://sticker.ly/user/tubaron_`,
                    "showAdAttribution": true
                }
            },
            ptt: true,
            mimetype: 'audio/mpeg',
            fileName: `error.mp3`
        }, { quoted: m });
    }, 1000);

    await this.sendFile(m.chat, sticker, 'sticker.webp', '', m);
}






////////
if (chat.audios && m.text.match(/(tubarão|tubaron)/gi)) {
    let vn = './media/tubarao.mp3';
    let sticker = './media/tubarao.webp';

    // Envia a figurinha
    await this.sendFile(m.chat, sticker, 'sticker.webp', '', m);

    // Aguarda um intervalo de tempo (por exemplo, 1 segundo)
    await new Promise(resolve => setTimeout(resolve, 1000));

    await this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
        type: 'audioMessage',
        ptt: true
    });
}


///////////////\\\\\\\\\\\\\\\

    
if (chat.audios && m.text.match(/(Bom dia grupo)/gi)) {    
let vn = './media/bomdiagrupo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
 
/////////////////////////////////

if (chat.audios && m.text.match(/(Porra de bom dia|bom dia porra|bom dia carai|bom dia minha pica)/gi)) {    
    let vn = './media/bomdia.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


////////////////////////////////


if (chat.audios && m.text.match(/(bts|cala a boca fã de bts)/gi)) {
    let vn = './media/bts.mp3';
    let sticker = './media/btss.webp';
    
    // Envia a figurinha
    await this.sendFile(m.chat, sticker, 'error.webp', '', m);

    // Aguarda um intervalo de tempo (por exemplo, 1 segundo)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Envia o áudio
    await this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
        mimetype: 'audio/mp4',
        ptt: true
    });
}

///////////////////////////////

if (chat.audios && m.text.match(/(oie|oiê)/gi)) {    
    let vn = './media/oie.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


//////////////////////////////

if (chat.audios && m.text.match(/(sonhei com você|sonhei contigo|sonhei com vc|sonhei com voce)/gi)) {    
    let vn = './media/sonhei.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

////////////

if (/^la ele|lá ele$/i.test(m.text) && chat.audios) {   
    let vn = './media/laele.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


//////////

if (chat.audios && m.text.match(/(flamengo|mengão)/gi)) {    
    let vn = './media/flamengo.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

/////////

if (chat.audios && m.text.match(/(me perdoa|me desculpa)/gi)) {    
    let vn = './media/perdoa.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

////////////

if (chat.audios && m.text.match(/(medo de você|medo de quem)/gi)) {    
    let vn = './media/medo.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

///////////////////////////

if (/^👀$/i.test(m.text) && chat.audios) {  
    if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
    let vn = './media/olhinho.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

///////////////////////////

function getRandomAudio(excludedAudios, audioFiles) {
    const availableAudios = audioFiles.filter((audio) => !excludedAudios.includes(audio));
    const randomIndex = Math.floor(Math.random() * availableAudios.length);
    return availableAudios[randomIndex];
  }
  
  if (/^oi linda|você é muito bonita|muito linda|linda|gado|vem pv|muito gado$/i.test(m.text) && chat.audios) {   
    let audioFiles = [
      './media/teaquieta.mp3',
      './media/rei.mp3',
      './media/vidadegado.mp3',
      // Adicione mais arquivos de áudio aqui, se desejar
    ];
  
    let vn1 = '';
    let excludedAudios = [vn1];
    let vn2 = getRandomAudio(excludedAudios, audioFiles);
    excludedAudios.push(vn2);
  
    this.sendPresenceUpdate('recording', m.chat);   
    this.sendFile(m.chat, vn1, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    this.sendFile(m.chat, vn2, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true });
  }
  
  
  

//////////////////////////

if (chat.audios && m.text.match(/(esse grupo é foda|grupo foda|aqui só os fortes ficam)/gi)) {    
    let vn = './media/grupofoda.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


/////////////////////////////

if (chat.audios && m.text.match(/(Neymar)/gi)) {    
    let vn = './media/neymar.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


////////////////////////////

if (chat.audios && m.text.match(/(manda foto do cu|manda foto do teu cu|foto do cu)/gi)) {    
    let vn = './media/mandafotodocu.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


////////////////////////////

    
//////////////////////////  
    
if (chat.audios && m.text.match(/(Nico Nico)/gi)) {    
let vn = './media/Nico Nico.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
 
////////////////////////

    
if (chat.audios && m.text.match(/(Porque ta tite|pq ta tite|Por que ta tite|🥺|😕|😟|😞|😔)/gi)) {    
let vn = './media/pqtatite.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
 //////////////////////   
    
if (chat.audios && m.text.match(/(buenas noches|Buenas noches)/gi)) {    
let vn = './media/buenasnoches.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  //////////////////////////  

    
if (chat.audios && m.text.match(/(giagnosticadocongay|diagnosticado con gay|diagnosticado gay|te diagnóstico con gay|diagnóstico gay|te diagnostico con gay|te diagnóstico con gay|te diagnosticó con gay|te diagnostico con gay)/gi)) {    
let vn = './media/DiagnosticadoConGay.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  ///////////////////////////

    
if (chat.audios && m.text.match(/(Cheguei família)/gi)) {    
let vn = './media/entrada-epica-al-chat.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
////////////
          
if (chat.audios && m.text.match(/(Fino señores|fino señores|Fino senhores|🍷🗿|🗿🍷)/gi)) {    
let vn = './media/fino-senores.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

/////////////////////////////////////////


if (chat.audios && m.text.match(/(estou atrasado|Já estou indo)/gi)) {    
let vn = './media/flash.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
 
///////////////////////////////

if (chat.audios && m.text.match(/(boa segunda-feira|boa segunda|segunda-feira|segunda feira)/gi)) {    
    let vn = './media/segunda.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


///////

if (chat.audios && m.text.match(/(quer ser modelo)/gi)) {    
let vn = './media/quer-ser-modelo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
   
////////////////////////
    
if (chat.audios && m.text.match(/(Nyapasu)/gi)) {    
let vn = './media/otaku.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

//////////////////////////////////

if (chat.audios && m.text.match(/(coca é fanta)/gi)) {    
let vn = './media/cocafanta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
//////////////////////////////

if (chat.audios && m.text.match(/(onichan)/gi)) {    
let vn = './media/Onichan.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
  
/////////////////////////

if (/^pica|picachu|pika|pikachu$/i.test(m.text) && chat.audios) {  
    if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
    let vn = './media/pikachu.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

/////

if (chat.audios && m.text.match(/(sempai|hablame|Habla me|Hablame|habla me|Háblame|háblame)/gi)) {    
let vn = './media/sempai.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
/////////////////

if (chat.audios && m.text.match(/(calma maria do bairro)/gi)) {    
let vn = './media/calma.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

/////////////////////////

if (chat.audios && m.text.match(/(siiiuuu|cr7)/gi)) {
    let vn = './media/siu.mp3';
    let sticker = './media/cr7.webp';
    
    // Envia a figurinha
    await this.sendFile(m.chat, sticker, 'error.webp', '', m);

    // Aguarda um intervalo de tempo (por exemplo, 1 segundo)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Envia o áudio
    await this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
        mimetype: 'audio/mp4',
        ptt: true
    });
}
  

///////////////////////////



/////////////

  
if (chat.audios && m.text.match(/(como é amigo)/gi)) {    
let vn = './media/como-e-amigo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

////////////////////////////////////

if (chat.audios && m.text.match(/(hoje comeremos cu|comeremos cu)/gi)) {    
    let vn = './media/comeremoscu.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}

///////////////////////////////

if (/^Lula|lula$/i.test(m.text) && chat.audios) {  
    let vn = './media/Lulafeijao.mp3';
    let sticker = './media/lulaa.webp';
    
    // Envia a figurinha
    await this.sendFile(m.chat, sticker, 'error.webp', '', m);

    // Aguarda um intervalo de tempo (por exemplo, 1 segundo)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Envia o áudio
    await this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
        mimetype: 'audio/mp4',
        ptt: true
    });
}

/////////////
if (chat.audios && m.text.match(/(Bolsonaro)/gi)) {
    let vn = './media/imbroxavel.mp3';
    let sticker = './media/bolsonaro.webp';
    
    // Envia a figurinha
    await this.sendFile(m.chat, sticker, 'error.webp', '', m);

    // Aguarda um intervalo de tempo (por exemplo, 1 segundo)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Envia o áudio
    await this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
        mimetype: 'audio/mp4',
        ptt: true
    });
}



return !0 }
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
