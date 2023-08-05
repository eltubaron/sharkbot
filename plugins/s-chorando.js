import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '𝗦𝗵𝗮𝗿𝗸 𝗕𝚯𝗧🦈҈᪳'
let nombre2 = ''
 
const s = [
'https://telegra.ph/file/2309d0475dbc6cfe6ea02.mp4',
'https://media.tenor.com/K61LBZu_g70AAAPo/cry-dog.mp4',
'https://media.tenor.com/6uIlQAHIkNoAAAAM/cry.gif',
'https://media.tenor.com/ThL6AWqlRAsAAAPo/cry.mp4',
'https://media.tenor.com/2n3JKWyP5sMAAAPo/choro-sad.mp4',
'https://media.tenor.com/U0VntQovugsAAAPo/hamster-cry.mp4',
'https://media.tenor.com/KuJYgHddE4AAAAPo/spiderman-crying.mp4',
'https://media.tenor.com/eXUSr78yUAYAAAPo/tulla-luana-crying.mp4',
'https://media.tenor.com/DgFI-D5vXhkAAAPo/cry.mp4',
'https://media.tenor.com/xOxGfEENJwoAAAPo/homestuck-printers.mp4',
'https://media.tenor.com/Fa3jCXxTWnoAAAAC/sad.gif',
'https://media.tenor.com/hDW43kcPob8AAAAi/depressed-sad.gif',
'https://telegra.ph/file/0c483e07bf7cd6aa8c772.mp4',
'https://telegra.ph/file/1392925e147dd11b0ce22.mp4'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(0 * 0)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `😭😭😭😭😭`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
}
handler.customPrefix = /chorar|chorando|triste/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))