import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen3
//let vn = './media/menu.mp3'
let img =  './views/Me.jpg'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `ততত ʚ🫐ɞ  𝗫𝗶𝗽𝗮𝗕𝗼𝘁 ✨ ⤾·˚ ༘ ততত
⋆ ࣪.𓏲 ๋࣭ *Hola ${taguser}*
⋆ ࣪.𓏲 ๋࣭ *Owners: Annie*
⋆ ࣪.𓏲 ๋࣭ *Número: 59892959423*
⋆ ࣪.𓏲 ๋࣭ *Fecha: ${date}*
⋆ ࣪.𓏲 ๋࣭ *Tiempo Activo: ${uptime}*
⋆ ࣪.𓏲 ๋࣭ *Usuarios: ${rtotalreg}*
তততততততততততততততততততততত

╭┈┈  ৎ 🫐 ׂ ⬫ *Estadísticas*  ָ࣪  ۰ . ¡! 
│ *✳️️Nivel:* ${level}
│ *🧿Experiencia:* ${exp}
│ *⚓Rango:* ${role}
│ *💎Diamantes:* ${limit}
│ *🔱Coins:* ${money}
│ *💵Dolares:* ${joincount}
│ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰───────────────๑✨๑
  
┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *InfoBot*  ָ࣪  ۰ . ¡! 
│ 🎙️ *.menu2 (notas de audios)*
│ 🎙️ *.animes (imagenes)*
│ 🍁 *.grupos (info)*
│ ♻️ *.tagall*
│ ♻️ *.comangrupos*
╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Grupos*  ָ࣪  ۰ . ¡! 
│ 📌 *.todos*
│ 📌 *.notify*
│ 📌 *.promote @tag*
│ 📌 *.demote @tag*
│ 📌 *.infobot <estado del bot>*
│ 📌 *.hidetag*
│ 📌 *.del (elimina mensajes del bot)*
│ 📌 *.link (link de tu grupo)*
│ 📌 *.warn (advertencia)*
│ 📌 *.unwarn*
╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Transfer*  ָ࣪  ۰ . ¡! 
│ 💵 *.transfer joincount mas <cantidad>*
│ 💎 *.transfer limit mas <cantidad>*
│ 🧿 *.transfer exp mas <cantidad>*
╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Ganar & Comprar*  ָ࣪  ۰ . ¡! 
│ ⛏️ *.minar (gana XP)*
│ ⛏️ *.minar2 (gana Diamantes)*
│ ⛏️ *.minar3 (gana Coins)*
│ 🧿 *.claim (recompensa XP)*
│ 🎁 *.cofre (revompensas diarias)*
│ 📃 *.dinero (ver tus diamantes y dinero)*
│ 💎 *Comprar diamantes:*
│ 🔱 *.busyall (usa Coins)*
│ 🔱 *.buy <cantidad>* 
│ 🧿 *.buyall (usa XP)*
│ 🧿 *.buy <cantidad>*
│ 💵 *.dolares(usa Diamantes)*
╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Owner ADD*  ָ࣪  ۰ . ¡! 
│ 💎 *.añadirdiamantes @tag <cantidad>*
│ 🔱 *.añadirdolares  @tag <cantidad>*
│ 💵 *.añadirdolares @tag <cantidad>*
│ ✅ *.addprem @tag days*
╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Stickers*  ָ࣪  ۰ . ¡! 
│ 👾 *.sticker*
│ 👾 *.sticker*
│ 👾 *.wm paquete | nombre*
│ 👾 *.sermoverbg (imagen sin fondo)*
│ 👾 *.slap*
│ 👾 *.scircle (sticker circular(*
│ 👾 *.pat*
│ 👾 *.dados*
╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Descargas*  ָ࣪  ۰ . ¡! 
│ 📇 *.play nombre de tu canción*
│ 📇 *.play2 nombre de tu video*
│ 📇 *.play3 nombre de tu canción,doc*
│ 📇 *.play4 nombre de tu video,doc*
│ 📇 *.audio nombre de tu canción*
│ 📇 *.video nombre de tu video*
│ 📇 *.audiodocu nombre de tu canción,doc*
│ 📇 *.videodocu nombre de tu video,doc*
│ 📇 *.Spotify nombre de tu canción*
│ 📇 *.Spotify2 nombre de tu canción,doc*
│ 📇 *.ytmp3 tu link  Audio*
│ 📇 *.ytmp4 tu link  video*
│ 📇 *.ytmp3doc link canción,doc*
│ 📇 *.ytmp4doc link video,doc*
│ 📇 *.facebook tu link de fb*
│ 📇 *.tiktok link de video tiktok*
│ 📇 *.mediafire link de mediafire*
│ 📇 *.twitter tu link de twt*
│ 📇 *.ig link de tu video en ig*
│ 📇 *.google resultados de google*
│ 📇 *.ytbuscar busqueda en Youtube*
│ 📇 *.gdrive link de drive*
│ 📇 *.whatmusic responde a una audio*
│ 📇 *.calculadora Ejemplo : .calc 2+2*
│ 📇 *.ssweb link de tu img*
│ 📇 *.tts audio google*
│ 📇 *.quemusica resultado*
╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Chat GPT*  ָ࣪  ۰ . ¡! 
│ 👥 *.simi pregunta simi*
│ 👥 *.bot pergunta*
│ 👥 *.ia chatgpt*
╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Juegos*  ָ࣪  ۰ . ¡! 
│ 🎮 *.love medidor de amor*
│ 🎮 *.gay2 porcentaje*
│ 🎮 *.puta porcentaje*
│ 🎮 *.puto porcentaje*
│ 🎮 *.pajero porcentaje*
│ 🎮 *.pajera porcentaje*
│ 🎮 *.lesbiana porcentaje*
│ 🎮 *.pvp*
│ 🎮 *.sopa*
│ 🎮 *.juego piedra/papel/tijera*
│ 🎮 *.reto reto del bot*
│ 🎮 *.acertijo*
│ 🎮 *.verdad verdad del bot*
│ 🎮 *.formarpareja parejas ramdon*
│ 🎮 *.slot ruleta*
│ 🎮 *.piropo piropo del bot*
│ 🎮 *.casino <apuesta>*
│ 🎮 *.meme <meme>*
︎╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Niveles*  ָ࣪  ۰ . ¡! 
│ 🧿 *.levelup subir de nivel*
︎╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Comandos (owner)*  ָ࣪  ۰ . ¡! 
│ 👁️‍🗨️ *.block*
│ 👁️‍🗨️ *.limpiarbot*
│ 👁️‍🗨️ *.blocklist*
│ 👁️‍🗨️ *.unblocklist*
│ 👁️‍🗨️ *.banuser*
│ 👁️‍🗨️ *.setprefix*
│ 👁️‍🗨️ *.resetprefix*
│ 👁️‍🗨️ *.unbanuser*
│ 👁️‍🗨️ *.kick*
│ 👁️‍🗨️ *.fantasmas*
│ 👁️‍🗨️ *.agregar*
│ 👁️‍🗨️ *.resetlink*
│ 👁️‍🗨️ *.banchat banea el chat*
│ 👁️‍🗨️ *.unbanchat desbanea el chat*
│ 👁️‍🗨️ *.grupo abrir/cerrar*
│ 👁️‍🗨️ *.addcmd*
│ 👁️‍🗨️ *.delcmd*
│ 👁️‍🗨️ *.listcmd*
│ 👁️‍🗨️ *.actualizar*
│ 👁️‍🗨️ *.dsowner esperando-mensajes*
│ 👁️‍🗨️ *.fixmsgespera esperando-mensajes*
╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Convertidor & MP3*  ָ࣪  ۰ . ¡! 
│ 🎙️ *.mp3*
│ 🎙️ *.toimg*
│ 🎙️ *.togifaus*
│ 🎙️ *.ptt*
│ 🎙️ *.tomp4*
│ 🎙️ *.tts*
│ 🎙️ *.attp3*
│ 🎙️ *.ttp*
│ 🎙️ *.ttp2*
│ 🎙️ *.ttp3*
│ 🎙️ *.ttp5*
│ 🎙️ *.tovn*
│ 🎙️ *.togifaud*
︎╰───────────────๑✨๑

┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Otros Comandos*  ָ࣪  ۰ . ¡! 
│ 📊 *.hd <imagen>*
│ 📊 *.removebg (remueve fondo)*
│ 📊 *.styletext*
│ 📊 *.afk*
│ 📊 *.lb*
│ 📊 *.perfil*
│ 📊 *.clima*
│ 📊 *.covid*
│ 📊 *.horario*
│ 📊 *.animeinfo*
︎╰───────────────๑✨๑`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.register = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
