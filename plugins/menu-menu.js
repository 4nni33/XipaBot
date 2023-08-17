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
let str = `ততত ʚ🩵ɞ  𝗔𝗻𝗻𝗶𝗲𝗕𝗼𝘁 ✨ ⤾·˚ ༘ ততত
⋆ ࣪.𓏲 ๋࣭ *Hola ${taguser}*
⋆ ࣪.𓏲 ๋࣭ *Owners: Annie*
⋆ ࣪.𓏲 ๋࣭ *Número: 59892959423*
⋆ ࣪.𓏲 ๋࣭ *Fecha: ${date}*
⋆ ࣪.𓏲 ๋࣭ *Tiempo Activo: ${uptime}*
⋆ ࣪.𓏲 ๋࣭ *Usuarios: ${rtotalreg}*
তততততততততততততততততততততত

  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Estadísticas ✨ ⤾·˚ ༘*
┈─𖨂 : *✳️️Nivel:* ${level}
┈─𖨂 : *🧿Experiencia:* ${exp}
┈─𖨂 : *⚓Rango:* ${role}
┈─𖨂 : *💎Diamantes:* ${limit}
┈─𖨂 : *🔱Coins:* ${money}
┈─𖨂 : *💵Dolares:* ${joincount}
┈─𖨂 : *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  InfoBot ✨ ⤾·˚ ༘*
┈─𖨂 : 🎙️ *.menu2 notas de audios*
┈─𖨂 : 🪴 *.animes imagenes*
┈─𖨂 : 🍁 *.grupos*
┈─𖨂 : 🫅🏻 *.owner contactos*
┈─𖨂 : 🔞 *.labiblia +18*
┈─𖨂 : 🆙 *.enable comandos para el owner*
┈─𖨂 : 🏓 *.logos*
┈─𖨂 : ♻️ *.tagall*
┈─𖨂 : ✨ *.sc git hades*
┈─𖨂 : ♻️ *.comangrupos*
┈─𖨂 : 💠 *.infogrupo*
┈─𖨂 : 🛒 *.shop tienda*
┈─𖨂 : 🛒 *.sell tienda*
┈─𖨂 : 📍 *.ip servidor de minecraft*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Grupos ✨ ⤾·˚ ༘*
┈─𖨂 : *.welcome @tag*
┈─𖨂 : 📌 *.welcome @tag*
┈─𖨂 : 📌 *bye @tag*
┈─𖨂 : 📌 *.promote @tag*
┈─𖨂 : 📌 *.demote @tag*
┈─𖨂 : 📌 *.infogp <info del grupo>*
┈─𖨂 : 📌 *.infobot <estado del bot>*
┈─𖨂 : 📌 *.hidetag*
┈─𖨂 : 📌 *.delete elimina mensajes del bot*
┈─𖨂 : 📌 *.del*
┈─𖨂 : 📌 *.join*
┈─𖨂 : 📌 *.link link de tu grupo*
┈─𖨂 : 📌 *.advertir*
┈─𖨂 : 📌 *.unwarn*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Transfer ✨ ⤾·˚ ༘*
┈─𖨂 : 💵 *.transfer joincount mas <cantidad>*
┈─𖨂 : 💎 *.transfer limit mas <cantidad>*
┈─𖨂 : 🧿 *.transfer exp mas <cantidad>*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Ganar & Comprar ✨ ⤾·˚ ༘*
┈─𖨂 : ⛏️ *.minar gana xp*
┈─𖨂 : ⛏️ *.minar2 gana Diamantes*
┈─𖨂 : ⛏️ *.minar3 gana Hades-Coins*
┈─𖨂 : 🧿 *.claim reclama tu recompensa diaria exp*
┈─𖨂 : 🎁 *.coffer un cofre de recompensas diarias*
┈─𖨂 : 📃 *.dinero para ver tus diamantes y dinero*
┈─𖨂 : 💎 *puedes comprar diamantes usando los comandos* 
┈─𖨂 : 🔱 *.busyall te cobra Hades-Coins*
┈─𖨂 : 🔱 *.bus <cantidad>* 
┈─𖨂 : 🧿 *.buyall te cobra experiencia*
┈─𖨂 : 🧿 *.buy <cantidad>*
┈─𖨂 : 💵 *.dolares te cobra diamantes*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Owner ADD ✨ ⤾·˚ ༘*
┈─𖨂 : 💎 *.añadirdiamantes @tag <cantidad>*
┈─𖨂 : 🔱 *.añadirdolares  @tag <cantidad>*
┈─𖨂 : 💵 *.añadirdolares @tag <cantidad>*
┈─𖨂 : ✅ *.addprem @tag days*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Stickers ✨ ⤾·˚ ༘*
┈─𖨂 : 👾 *.stiker2 con una imagen o link*
┈─𖨂 : 👾 *.stiker con una imagen o link*
┈─𖨂 : 👾 *.wm paquete | nombre*
┈─𖨂 : 👾 *.sermoverbg imagen sin fondo*
┈─𖨂 : 👾 *.slap*
┈─𖨂 : 👾 *.scircle sticker circular*
┈─𖨂 : 👾 *.pat*
┈─𖨂 : 👾 *.emojimix ☺&😈*
┈─𖨂 : 👾 *.dados*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
╭─「❥🤣 *Acciones* 😚❥」
┈─𖨂 : 😘 *.kiss .beso <tag>*
┈─𖨂 : 😈 *.follar <tag>*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Descargas ✨ ⤾·˚ ༘*
┈─𖨂 : 📇 *.wikipedia <busqueda>*
┈─𖨂 : 📇 *.animeinfo <nombre>*
┈─𖨂 : 📇 *.play nombre de tu canción*
┈─𖨂 : 📇 *.play2 nombre de tu video*
┈─𖨂 : 📇 *.play3 nombre de tu canción,doc*
┈─𖨂 : 📇 *.play4 nombre de tu video,doc*
┈─𖨂 : 📇 *.audio nombre de tu canción*
┈─𖨂 : 📇 *.video nombre de tu video*
┈─𖨂 : 📇 *.audiodocu nombre de tu canción,doc*
┈─𖨂 : 📇 *.videodocu nombre de tu video,doc*
┈─𖨂 : 📇 *.Spotify nombre de tu canción*
┈─𖨂 : 📇 *.Spotify2 nombre de tu canción,doc*
┈─𖨂 : 📇 *.ytmp3 tu link  Audio*
┈─𖨂 : 📇 *.ytmp4 tu link  video*
┈─𖨂 : 📇 *.ytmp3doc link canción,doc*
┈─𖨂 : 📇 *.ytmp4doc link video,doc*
┈─𖨂 : 📇 *.facebook tu link de fb*
┈─𖨂 : 📇 *.tiktok link de video tiktok*
┈─𖨂 : 📇 *.mediafire link de mediafire*
┈─𖨂 : 📇 *.twitter tu link de twt*
┈─𖨂 : 📇 *.ig link de tu video en ig*
┈─𖨂 : 📇 *.google resultados de google*
┈─𖨂 : 📇 *.ytbuscar busqueda en Youtube*
┈─𖨂 : 📇 *.gdrive link de drive*
┈─𖨂 : 📇 *.whatmusic responde a una audio*
┈─𖨂 : 📇 *.calculadora Ejemplo : .calc 2+2*
┈─𖨂 : 📇 *.ssweb link de tu img*
┈─𖨂 : 📇 *.tts audio google*
┈─𖨂 : 📇 *.quemusica resultado*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  ChatGPT ✨ ⤾·˚ ༘*
┈─𖨂 : 👥 *.simi pregunta simi*
┈─𖨂 : 👥 *.bot pergunta*
┈─𖨂 : 👥 *.ia chatgpt*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Juegos ✨ ⤾·˚ ༘*
┈─𖨂 : 🎮 *.love medidor de amor*
┈─𖨂 : 🎮 *.gay2 porcentaje*
┈─𖨂 : 🎮 *.puta porcentaje*
┈─𖨂 : 🎮 *.puto porcentaje*
┈─𖨂 : 🎮 *.pajero porcentaje*
┈─𖨂 : 🎮 *.pajera porcentaje*
┈─𖨂 : 🎮 *.lesbiana porcentaje*
┈─𖨂 : 🎮 *.pvp*
┈─𖨂 : 🎮 *.sopa*
┈─𖨂 : 🎮 *.juego piedra/papel/tijera*
┈─𖨂 : 🎮 *.reto reto del bot*
┈─𖨂 : 🎮 *.acertijo*
┈─𖨂 : 🎮 *.verdad verdad del bot*
┈─𖨂 : 🎮 *.formarpareja parejas ramdon*
┈─𖨂 : 🎮 *.slot ruleta*
┈─𖨂 : 🎮 *.piropo piropo del bot*
┈─𖨂 : 🎮 *.casino <apuesta>*
┈─𖨂 : 🎮 *.meme <meme>*
︎  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Niveles ✨ ⤾·˚ ༘*
┈─𖨂 : 🧿 *.levelup subir de nivel*
︎  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Comandos (owner) ✨ ⤾·˚ ༘*
┈─𖨂 : 👁️‍🗨️ *.block*
┈─𖨂 : 👁️‍🗨️ *.limpiarbot*
┈─𖨂 : 👁️‍🗨️ *.blocklist*
┈─𖨂 : 👁️‍🗨️ *.unblocklist*
┈─𖨂 : 👁️‍🗨️ *.banuser*
┈─𖨂 : 👁️‍🗨️ *.setprefix*
┈─𖨂 : 👁️‍🗨️ *.resetprefix*
┈─𖨂 : 👁️‍🗨️ *.unbanuser*
┈─𖨂 : 👁️‍🗨️ *.kick*
┈─𖨂 : 👁️‍🗨️ *.fantasmas*
┈─𖨂 : 👁️‍🗨️ *.agregar*
┈─𖨂 : 👁️‍🗨️ *.resetlink*
┈─𖨂 : 👁️‍🗨️ *.banchat banea el chat*
┈─𖨂 : 👁️‍🗨️ *.unbanchat desbanea el chat*
┈─𖨂 : 👁️‍🗨️ *.grupo abrir/cerrar*
┈─𖨂 : 👁️‍🗨️ *.addcmd*
┈─𖨂 : 👁️‍🗨️ *.delcmd*
┈─𖨂 : 👁️‍🗨️ *.listcmd*
┈─𖨂 : 👁️‍🗨️ *.actualizar*
┈─𖨂 : 👁️‍🗨️ *.dsowner esperando-mensajes*
┈─𖨂 : 👁️‍🗨️ *.fixmsgespera esperando-mensajes*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Convertidor & MP3 ✨ ⤾·˚ ༘*
┈─𖨂 : 🎙️ *.mp3*
┈─𖨂 : 🎙️ *.toimg*
┈─𖨂 : 🎙️ *.togifaus*
┈─𖨂 : 🎙️ *.ptt*
┈─𖨂 : 🎙️ *.tomp4*
┈─𖨂 : 🎙️ *.tts*
┈─𖨂 : 🎙️ *.attp3*
┈─𖨂 : 🎙️ *.ttp*
┈─𖨂 : 🎙️ *.ttp2*
┈─𖨂 : 🎙️ *.ttp3*
┈─𖨂 : 🎙️ *.ttp5*
┈─𖨂 : 🎙️ *.tovn*
┈─𖨂 : 🎙️ *.togifaud*
︎  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
╭─「❥📊 *Otros Comandos* ⚙️❥」
┈─𖨂 : 📊 *.hd <imagen>*
┈─𖨂 : 📊 *.topdf*
┈─𖨂 : 📊 *.ytcomment*
┈─𖨂 : 📊 *.removebg*
┈─𖨂 : 📊 *.wpgaming*
┈─𖨂 : 📊 *.doraemon*
┈─𖨂 : 📊 *.planeta*
┈─𖨂 : 📊 *.technology*
┈─𖨂 : 📊 *.ciberespacio*
┈─𖨂 : 📊 *.caricatura*
┈─𖨂 : 📊 *.pubg*
┈─𖨂 : 📊 *.wprandom*
┈─𖨂 : 📊 *.styletext*
┈─𖨂 : 📊 *.afk*
┈─𖨂 : 📊 *.lb*
┈─𖨂 : 📊 *.perfil*
┈─𖨂 : 📊 *.clima*
┈─𖨂 : 📊 *.covid*
┈─𖨂 : 📊 *.horario*
︎  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯
┈┈┈┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈┈┈┈
  ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╮
┈─𖨂 : *ʚ🩵ɞ  Logos ✨ ⤾·˚ ༘*
┈─𖨂 : 🧨 *.blackpink <texto>*
┈─𖨂 : 🧨 *.bloodfrosted <texto>*
┈─𖨂 : 🧨 *.bokelog <texto>*
┈─𖨂 : 🧨 *.box3d <texto>*
┈─𖨂 : 🧨 *.breakwall  <texto>*
┈─𖨂 : 🧨 *.cloud <texto>*
┈─𖨂 : 🧨 *.deluxesilver <texto>*
┈─𖨂 : 🧨 *.futureneon <texto>*
┈─𖨂 : 🧨 *.halloween <texto>*
┈─𖨂 : 🧨 *.icecold <texto>*
┈─𖨂 : 🧨 *.impressiveglitch <texto>*
┈─𖨂 : 🧨 *.jokerlogo <texto>*
┈─𖨂 : 🧨 *.logolol <texto>*
┈─𖨂 : 🧨 *.luxurylog <texto>*
┈─𖨂 : 🧨 *.holographic <texto>*
┈─𖨂 : 🧨 *.magma <texto>*
┈─𖨂 : 🧨 *.metaldark <texto>*
┈─𖨂 : 🧨 *.minion <texto>*
┈─𖨂 : 🧨 *.natureleaves <texto>*
┈─𖨂 : 🧨 *.neon <texto>*
┈─𖨂 : 🧨 *.neonlight <texto>*
┈─𖨂 : 🧨 *.newyearcard <texto>*
┈─𖨂 : 🧨 *.roadwarning <texto>*
┈─𖨂 : 🧨 *.sandengraved <texto>*
┈─𖨂 : 🧨 *.sandsummer <texto>*
┈─𖨂 : 🧨 *.sparkle <texto>*
┈─𖨂 : 🧨 *.strawberry <texto>*
┈─𖨂 : 🧨 *.text1917 <texto>*
┈─𖨂 : 🧨 *.thunder <texto>*
┈─𖨂 : 🧨 *.toxic <texto>*
┈─𖨂 : 🧨 *.watercolor <texto>*
┈─𖨂 : 🧨 *.wonderfulgraffiti <texto>*
  ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈┈╯`.trim()
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
