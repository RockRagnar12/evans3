let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
const getGroupAdmins = (participants) => { admins = []
for (let i of participants) { i.isAdmin ? admins.push(i.jid) : '' } return admins }
const mentions = (teks, memberr, id) => { (id == null || id == undefined || id == false) ? conn.sendMessage(m.chat, teks.trim(), MessageType.extendedText, { contextInfo: { "mentionedJid": memberr } }) : 
conn.sendButton(m.chat, teks.trim(), 'ยฉ๐๐น๐ฒ๐ ๐๐ฎ๐ฝ - ๐๐ผ๐', 'VOLVER A INVOCAR', `#invocar`, MessageType.extendedText, { quoted: m, contextInfo: { "mentionedJid": memberr } })}
const isGroup = m.chat.endsWith('@g.us')
let grupmeta = await conn.groupMetadata(m.chat)
const groupMembers = isGroup ? grupmeta.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const info = await conn.groupMetadata(m.chat)
let vn = './media/Invocar.mp3'
let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
let pesan = args.join` `
let oi = `*MENSAJE:* ${pesan}`
let hmm = `*โบI N V O C A N D O - G R U P Oโบ*\n\n`
let duh = `โ\n\n*โโโโโโโโโโโโโโโโ*` 
var teks = `${oi}\n\nโ\n`
for (let admon of groupMembers) { teks += `โฃโฅ @${admon.jid.split('@')[0]}\n`} mentions(hmm+teks+duh, users, true,{ contextInfo: { mentionedJid: users } })
await await await await await await conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, {   
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^invocar|tagall|invocacion|invocaciรณn$/i
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler
