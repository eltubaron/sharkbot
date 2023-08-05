import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0

let nombre = '𝗦𝗵𝗮𝗿𝗸 𝗕𝚯𝗧🦈҈᪳'
 
 
const s = [
'https://i.gifer.com/Uhi.mp4',
'https://i.gifer.com/1tfe.mp4',
'https://telegra.ph/file/a458543b61c6e87806598.mp4',
'https://c.tenor.com/woUBgv2VLKoAAAAC/didnt-xd.gif',
'https://media.tenor.com/KSyel2MTiucAAAPo/elissa-slater-lol.mp4',
'https://media.tenor.com/AQz3_zaiD14AAAAC/hysterical-laughter.gif',
'https://telegra.ph/file/de4757288a57dae80f1dd.mp4',
'https://telegra.ph/file/a87b3b01999a69e95b0fc.mp4',
'https://telegra.ph/file/ba6f475219af074a91ae4.mp4',
'https://telegra.ph/file/d3be0157182591e72e90b.mp4'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre)
await delay(0 * 0)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `🤣🤣🤣🤣🤣`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
}
handler.customPrefix = /kkkkkkkkkkkkkkkkk/i 
handler.command = new RegExp
handler.exp = 50
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))





