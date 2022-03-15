const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/memesmexico")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*😂😂😂😂😂*", '©𝗔𝗹𝗲𝘅 𝗖𝗮𝗽 - 𝗕𝗼𝘁', '😂 SIGUIENTE 😂', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^meme$/i
module.exports = handler
