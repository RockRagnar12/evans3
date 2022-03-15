let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!args[0]) throw `*Ingrese un enlace de YouTube*`
let res = await fetch("https://api.lolhuman.xyz/api/ytvideo?apikey=9b817532fadff8fc7cb86862&url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.link.link, 'error.mp4', `_©𝗔𝗹𝗲𝘅 𝗖𝗮𝗽 - 𝗕𝗼𝘁_`, m)}
handler.command = /^(ytmp4.2?)$/i
module.exports = handler
