import fetch from 'node-fetch'
import * as baileys from '@adiwajshing/baileys'
import PhoneNumber from 'awesome-phonenumber'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, command, usedPrefix, args, participants, groupMetadata, text }) => {
    let pp, groupAdmins, listAdmin, owner
    const isCommand1 = /^(|infogrupo|infogp|gro?upinfo|info(gro?up|gc))$/i.test(command)
    const isCommand2 = /^(admins|@admins|dmins)$/i.test(command)
    const isCommand3 = /^(enlace|linkgp|link(gro?up)?)$/i.test(command)
    const isCommand4 = /^(inspect|inspeccionar|revisar)$/i.test(command)
    const isCommand5 = /^(saludar|saudar|abrazar)$/i.test(command)
    
    

async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}

switch (true) {     
case isCommand1:
try{
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
groupAdmins = participants.filter(p => p.admin) 
listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let info = 
`✤ ${lenguajeGB['smsGI1']()} ✤
⎔ ${lenguajeGB['smsGI2']()}
・ ${groupMetadata.id}

⎔ ${lenguajeGB['smsGI3']()}
・ ${groupMetadata.subject}

⎔ ${lenguajeGB['smsGI4']()}
・ ${groupMetadata.desc?.toString() || lenguajeGB['smsGI5']()}

⎔ ${lenguajeGB['smsGI6']()}
・ ${participants.length} ${lenguajeGB['smsGI7']()}

⎔ ${lenguajeGB['smsGI8']()}
・ @${owner.split('@')[0]}

⎔ ${lenguajeGB['smsGI9']()}
${listAdmin}
`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', info, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })    
} catch (e) {
reportError(e)
}
break
    
case isCommand2:
try{
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
groupAdmins = participants.filter(p => p.admin)
listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `${lenguajeGB.smsAddB5()} ${pesan ? '_' + pesan + '_' : "📣📣📣📣"}`
let textoA = `⭔ ${lenguajeGB.smsAddB3()}
⭔ ${oi}\n\n`
let textoB = `${listAdmin}\n
⛔ ${lenguajeGB.smsAddB4()} ⛔`.trim()
await conn.sendFile(m.chat, pp, 'error.jpg', textoA + textoB, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
} catch (e) {
reportError(e)
} 
break
    
case isCommand3:
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let group = m.chat
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
let fsizedoc = '1'.repeat(10)
try{
await conn.sendFile(m.chat, pp, 'error.jpg', '*https://chat.whatsapp.com/' + await conn.groupInviteCode(group) + '*', m)
} catch (e) {
reportError(e)
} 
break

//FUNCIÓN HECHA POR https://github.com/Azami19
case isCommand4:
let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
if (!code) return m.reply(lenguajeGB.smsMalused() + usedPrefix + command + ' ' + nna)
try{
const extractGroupMetadata = (result) => {
const group = baileys.getBinaryNodeChild(result, 'group')
const descChild = baileys.getBinaryNodeChild(group, 'description')
let desc
if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
const metadata = {
id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
subject: group.attrs.subject,
creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'America/Los_Angeles' }),
owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
desc
}
return metadata
}  
let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
data = extractGroupMetadata(res),
txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n')
let groupinfo = `
🌺 ${lenguajeGB.smsInsGC1()}
→ ${data.id === undefined ? '❌' : data.id}

🌸 ${lenguajeGB.smsInsGC2()}
→ ${data.subject === undefined ? '❌' : data.subject}

🌼 ${lenguajeGB.smsInsGC3()}
→ ${data.creation === undefined ? '❌' : data.creation}

🌻 ${lenguajeGB.smsInsGC4()}
→ ${data.owner === undefined ? '❌' : data.owner}

🌹 ${lenguajeGB.smsInsGC5()}
→ ${data.desc === undefined ? '❌' : data.desc}
`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'error.jpg', groupinfo, m)
} catch (e) {
reportError(e)
}   
break
    
case isCommand5:
let cometido
cometido = `@${m.sender.split('@')[0]}`
if(!text && !m.quoted) return conn.reply(m.chat, `*Etiquete al usuario o responda al mensaje del usuario usando ${usedPrefix + command}*`, m)
if (text.length >= 1) {
} else if (m.quoted && m.quoted.sender) {
text = `@${m.quoted.sender.split('@')[0].replace('@', '')}`
} else if (m.quoted && m.quoted.fromMe) {
text = `${m.mentionedJid.map((user)=>(user === m.sender) ? text.replace('@', '') : `${user.split('@')[0].replace('@', '')}`).join(', ')}`
}
if (/[a-zA-Z]/.test(text) && !text.includes('@')) return conn.reply(m.chat, `*El mensaje no puede estar sin etiquetar y solo puede etiquetar o responder al mensaje*`, m)
text = text.match(/[\d@]+/g).join('')    
let cmd = command.toLowerCase()
let cont, action, body, rege
rege = /^[-+.(@)~ 0-9]+$/
switch (cmd) {	
case "saludar":
    cont = ['https://pa1.narvii.com/6177/9d35b3265578df4e4092d67c9a7a5619cd1d41d0_hq.gif', 'https://media.tenor.com/FJzcVnWgHjgAAAAM/wave.gif', 'https://media.tenor.com/XMvXpoXRgIUAAAAi/anko-kitashirakawa-tamako-market.gif', 'https://media.tenor.com/MmTMEtRSIOUAAAAC/nijima-ibuki-d4dj-first-mix.gif', 'https://media.tenor.com/DDnp-TLMTWQAAAAC/hello-anime.gif', 'https://gifdb.com/images/high/beautiful-anime-cute-wave-zid7nvnjycvq4p7k.gif', 'https://gifdb.com/images/high/anime-school-girl-cute-wave-eopmt9mu5db41znh.gif', 'https://static.wikia.nocookie.net/spy-x-family/images/b/be/Saludos-anime.gif/revision/latest?cb=20220601184129&path-prefix=es', 'https://img.wattpad.com/15d42d4f27b70d38eb673ed1f4fe2180c05b61a7/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f64486e76746553566c49793835773d3d2d3934353633373038382e313633303334616132303238313761313138343531323937353737342e676966'].getRandom()
    action = `${conn.getName(m.sender)}, 👋 𝗘𝘀𝘁𝗮́ 𝘀𝗮𝘂𝗱𝗮𝗻𝗱𝗼 👋  ${conn.getName(text.replace('@', '') + '@s.whatsapp.net')}
    ${rege.test(conn.getName(m.sender)) == true || rege.test(conn.getName(text.replace('@', '') + '@s.whatsapp.net')) == true ? `` : `\n\n• ${conn.getName(m.sender)} ➜ ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
    • ${conn.getName(text.replace('@', '') + '@s.whatsapp.net')} ➜ ${PhoneNumber('+' + text.replace('@', '') + '@s.whatsapp.net'.replace('@s.whatsapp.net', '')).getNumber('international')}`}`.trim()
    body = await sticker(null, cont, action)
    //await conn.sendFile(m.chat, body, null, { mentions: [m.sender, text.replace('@', '') + '@s.whatsapp.net'] }, m) 
    await conn.sendFile(m.chat, body, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `• ${conn.getName(m.sender)}`, body: `👋 omprimentou ${conn.getName(text.replace('@', '') + '@s.whatsapp.net')}`, mediaType: 2, sourceUrl: md, thumbnail: gataImg.getRandom()}}})
    break
    
case cmd == "abrazar":

break
}    
break
}}

handler.command = /^(infogrupo|infogp|linkgp|gro?upinfo|regras|info(gro?up|gc)|admins|@admins|dmins|enlace|link(gro?up)?|inspect|inspeccionar|revisar|saudar|saludar|abrazar)$/i
handler.group = true
handler.register = true
export default handler

