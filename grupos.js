let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot*

*➤ Grupos oficiales del Bot:*
*1.- https://chat.whatsapp.com/Bs0EAPB8qxf8yR7loELb7W*

*2.- https://chat.whatsapp.com/DgdjNeD6GSoCij3M5L1RnA*

*3.- https://chat.whatsapp.com/LEuqnG9NYRULoZurV0EIRP*

*4.- https://chat.whatsapp.com/FRc7UdRVIGHD2Bfuu1ngAa*

*5.- https://chat.whatsapp.com/Bk7Wvt1tetg8w5thrHaXti*
`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 ©𝗔𝗹𝗲𝘅 𝗖𝗮𝗽 - 𝗕𝗼𝘁 🔥*', 'status@broadcast')}
handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
