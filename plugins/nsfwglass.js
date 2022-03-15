let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/glasses?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', '©𝗔𝗹𝗲𝘅 𝗖𝗮𝗽 - 𝗕𝗼𝘁', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(glass|nsfwglass)$/i

module.exports = handler
