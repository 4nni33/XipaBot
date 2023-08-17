import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen3
let vn = './Audios/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
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
let str = `
ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
┈─𖨂 :✨ *Hola ${taguser}*
┈─𖨂 :🎙️*menu2*
ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯

ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
┈─𖨂 : *ʚ🩵ɞ  Notas de Voz ✨ ⤾·˚ ༘*
┈─𖨂 :🎙️ *Noche de paz*
┈─𖨂 :🎙️ *Miau*
┈─𖨂 :🎙️ *Buenos dias*
┈─𖨂 :🎙️ *La cumbia del tilín*
┈─𖨂 :🎙️ *buenas noches*
┈─𖨂 :🎙️ *No pedí tu opinión*
┈─𖨂 :🎙️ *Senpai*
┈─𖨂 :🎙️ *esto va a ser épico*
┈─𖨂 :🎙️ *insulta*
┈─𖨂 :🎙️ *Audio hentai*
┈─𖨂 :🎙️ *Tiene la cara*
┈─𖨂 :🎙️ *Fiesta del admin*
┈─𖨂 :🎙️ *tengo*
┈─𖨂 :🎙️ *tranquilo*
┈─𖨂 :🎙️ *Viernes*
┈─𖨂 :🎙️ *Chica lgante*
┈─𖨂 :🎙️ *No soy pati*
┈─𖨂 :🎙️ *Baneado*
┈─𖨂 :🎙️ *Bien pensado woody*
┈─𖨂 :🎙️ *Homero chino*
┈─𖨂 :🎙️ *El pepe*
┈─𖨂 :🎙️ *A nadie le importa*
┈─𖨂 :🎙️ *Sexo*
┈─𖨂 :🎙️ *nadie te pregunto*
┈─𖨂 :🎙️ *Vete a la vrg*
┈─𖨂 :🎙️ *Hola*
┈─𖨂 :🎙️ *Oye Bot te amo*
┈─𖨂 :🎙️ *Te amo*
┈─𖨂 :🎙️ *Yamete*
┈─𖨂 :🎙️ *y que agarra y qué me dice*
┈─𖨂 :🎙️ *Te diagnostico con gay*
┈─𖨂 :🎙️ *Eres fuerteSu nivel de pendejo*
┈─𖨂 :🎙️ *Que pasa*
┈─𖨂 :🎙️ *cállese señora*
┈─𖨂 :🎙️ *Quien es tu sempai botsito 7w7*
┈─𖨂 :🎙️ *BiTCH*
┈─𖨂 :🎙️ *Bañate*
┈─𖨂 :🎙️ *cuándo se muera*
┈─𖨂 :🎙️ *Que rico*
┈─𖨂 :🎙️ *Feliz jueves*
┈─𖨂 :🎙️ *Lo puede todo*
┈─𖨂 :🎙️ *Gemime*
┈─𖨂 :🎙️ *Vivan los novios*
┈─𖨂 :🎙️ *sigues con vida*
┈─𖨂 :🎙️ *Marica quien*
┈─𖨂 :🎙️ *Es puto*
┈─𖨂 :🎙️ *Onichan*
┈─𖨂 :🎙️ *Feliz cumpleaños*
┈─𖨂 :🎙️ *O omosa*
┈─𖨂 :🎙️ *Atencion grupo*
┈─𖨂 :🎙️ *Oh me vengo*
┈─𖨂 :🎙️ *Que linda noche*
┈─𖨂 :🎙️ *Te siento mía*
┈─𖨂 :🎙️ *hentai2*
┈─𖨂 :🎙️ *detengase admin*
┈─𖨂 :🎙️ *Canta2*
┈─𖨂 :🎙️ *Murio el grupo*
┈─𖨂 :🎙️ *Siuuu*
┈─𖨂 :🎙️ *Se enojan*
┈─𖨂 :🎙️ *Al unico*
┈─𖨂 :🎙️ *Se van a dormir*
┈─𖨂 :🎙️ *Hare mi rutina*
┈─𖨂 :🎙️ *Te sabes*
┈─𖨂 :🎙️ *:c*
┈─𖨂 :🎙️ *Hay el amor*
┈─𖨂 :🎙️ *Orale*
┈─𖨂 :🎙️ *Se ríe*
┈─𖨂 :🎙️ *Que es eso*
┈─𖨂 :🎙️ *anana*
┈─𖨂 :🎙️ *No trabajo*
┈─𖨂 :🎙️ *asen*
┈─𖨂 :🎙️ *confeti*
┈─𖨂 :🎙️ *flash*
┈─𖨂 :🎙️ *Una pregunta*
┈─𖨂 :🎙️ *pinches bot*
┈─𖨂 :🎙️ *mmm*
┈─𖨂 :🎙️ *Oxxo*
┈─𖨂 :🎙️ *Soy nuevo*
┈─𖨂 :🎙️ *La voz de hombre*
┈─𖨂 :🎙️ *Picachu*
┈─𖨂 :🎙️ *Pokemon*
┈─𖨂 :🎙️ *ñaña*
┈─𖨂 :🎙️ *yutki*
┈─𖨂 :🎙️ *Ya basta jovenes*
┈─𖨂 :🎙️ *Verdad que te engañe*
┈─𖨂 :🎙️ *Calla maldita puta*
┈─𖨂 :🎙️ *YoShi*
┈─𖨂 :🎙️ *Me los voy a coger*
┈─𖨂 :🎙️ *manco*
┈─𖨂 :🎙️ *Me voy*
┈─𖨂 :🎙️ *Música desamor*
┈─𖨂 :🎙️ *mitamita*
┈─𖨂 :🎙️ *tuturu*
┈─𖨂 :🎙️ *woau*
┈─𖨂 :🎙️ *unga*
┈─𖨂 :🎙️ *umai*
┈─𖨂 :🎙️ *tututu*
┈─𖨂 :🎙️ *uma*
┈─𖨂 :🎙️ *uff*
┈─𖨂 :🎙️ *Tara*
┈─𖨂 :🎙️ *uchinchi*
┈─𖨂 :🎙️ *talcho*
┈─𖨂 :🎙️ *sss*
┈─𖨂 :🎙️ *a*
┈─𖨂 :🎙️ *Triste enojada toy*
┈─𖨂 :🎙️ *Bot maricon*
┈─𖨂 :🎙️ *Bot puto*
┈─𖨂 :🎙️ *estúpido*
┈─𖨂 :🎙️ *Un pato*
┈─𖨂 :🎙️ *Nyanpasu*
┈─𖨂 :🎙️ *El amor no existe*
┈─𖨂 :🎙️ *Es todo lo que tiene que decir*
┈─𖨂 :🎙️ *Muere por los humanos*
┈─𖨂 :🎙️ *La biblia*
┈─𖨂 :🎙️ *Otaku*
┈─𖨂 :🎙️ *Hace frío*
┈─𖨂 :🎙️ *Pikachu*
┈─𖨂 :🎙️ *Niconi*
┈─𖨂 :🎙️ *Mimir*
┈─𖨂 :🎙️ *Beastars*
┈─𖨂 :🎙️ *Manos*
┈─𖨂 :🎙️ *Facha*
┈─𖨂 :🎙️ *Sexual*
┈─𖨂 :🎙️ *Mujer*
┈─𖨂 :🎙️ *Cringe*
┈─𖨂 :🎙️ *Konede*
┈─𖨂 :🎙️ *Gambare*
┈─𖨂 :🎙️ *Pack*
┈─𖨂 :🎙️ *Temon*
┈─𖨂 :🎙️ *Primo*
┈─𖨂 :🎙️ *jaja quiero*
┈─𖨂 :🎙️ *Kya*
┈─𖨂 :🎙️ *rawr*
┈─𖨂 :🎙️ *El mundo*
┈─𖨂 :🎙️ *Nos vale*
┈─𖨂 :🎙️ *Bot gemine*
┈─𖨂 :🎙️ *Pespes*
┈─𖨂 :🎙️ *Ora*
┈─𖨂 :🎙️ *Hades bot*
┈─𖨂 :🎙️ *Tori*
┈─𖨂 :🎙️ *Oxxo*
┈─𖨂 :🎙️ *Mi bot es le mejor*
┈─𖨂 :🎙️ *Bunny*
┈─𖨂 :🎙️ *cancion hades2*
┈─𖨂 :🎙️ *cancion de hades*
┈─𖨂 :🎙️ *Hades es un Dios*
┈─𖨂 :🎙️ *llamando a seguridad*
┈─𖨂 :🎙️ *Atena*
┈─𖨂 :🎙️ *Que tonta eres*
┈─𖨂 :🎙️ *Bts$
┈─𖨂 :🎙️ *ara ara*
┈─𖨂 :🎙️ *La bebecita*
┈─𖨂 :🎙️ *Lol*
┈─𖨂 :🎙️ *Feliz navidad*
┈─𖨂 :🎙️ *Risa diabolica*
┈─𖨂 :🎙️ *Te pasas*
┈─𖨂 :🎙️ *Darling*
┈─𖨂 :🎙️ *Elmo*
┈─𖨂 :🎙️ *La lechuza*
┈─𖨂 :🎙️ *ñi*
┈─𖨂 :🎙️ *Éxtasis*
┈─𖨂 :🎙️ *no te acerques*
┈─𖨂 :🎙️ *Por que*
┈─𖨂 :🎙️ *La mamare*
┈─𖨂 :🎙️ *Lala*
┈─𖨂 :🎙️ *Ya paso*
┈─𖨂 :🎙️ *UwU*
┈─𖨂 :🎙️ *bebito fiu fiu*
┈─𖨂 :🎙️ *Gracias bot*
┈─𖨂 :🎙️ *A bueno adios master*
┈─𖨂 :🎙️ *Abduzcan*
┈─𖨂 :🎙️ *Arigato*
┈─𖨂 :🎙️ *Blackpink* 
┈─𖨂 :🎙️ *Bueno si*
┈─𖨂 :🎙️ *Chau chicos
┈─𖨂 :🎙️ *Chuchupamela*
┈─𖨂 :🎙️ *Como le digo que*
┈─𖨂 :🎙️ *Cómo te amo*
┈─𖨂 :🎙️ *Contexto*
┈─𖨂 :🎙️ *Desde morro*
┈─𖨂 :🎙️ *El rap de fernan* 
┈─𖨂 :🎙️ *Elmo sabe dónde vive*
┈─𖨂 :🎙️ *En caso de una investigación*
┈─𖨂 :🎙️ *Goku*
┈─𖨂 :🎙️ *Joder*
┈─𖨂 :🎙️ *Jueputa*
┈─𖨂 :🎙️ *Linda*
┈─𖨂 :🎙️ *Masivo*
┈─𖨂 :🎙️ *Me anda buscando Anonymous*
┈─𖨂 :🎙️ *Me vale vrg paisa*
┈─𖨂 :🎙️ *Me vuelves loca*
┈─𖨂 :🎙️ *Nadie toca a mis chicos*
┈─𖨂 :🎙️ *No digas eso papu*
┈─𖨂 :🎙️ *No me hables*
┈─𖨂 :🎙️ *No hables de porno*
┈─𖨂 :🎙️ *Okey*
┈─𖨂 :🎙️ *Otaku2*
┈─𖨂 :🎙️ *Pero esto ya es otro nivel*
┈─𖨂 :🎙️ *Quien poronga*
┈─𖨂 :🎙️ *Se están riendo de mí*
┈─𖨂 :🎙️ *Sexo2*
┈─𖨂 :🎙️ *Si no le gusta*
┈─𖨂 :🎙️ *Traigan una falda*
┈─𖨂 :🎙️ *Tunometecabra*
┈─𖨂 :🎙️ *Una monedita*
┈─𖨂 :🎙️ *Usted está detenido* 
┈─𖨂 :🎙️ *Verdad que te engañe* 
┈─𖨂 :🎙️ *Vamos a dormir*
┈─𖨂 :🎙️ *viernecito*
┈─𖨂 :🎙️ *Wenas*
┈─𖨂 :🎙️ *Wtf*
┈─𖨂 :🎙️ *Wtf y este*
┈─𖨂 :🎙️ *Y este quien es*
┈─𖨂 :🎙️ *Y este quien*
┈─𖨂 :🎙️ *Yamete-kudasai2*
ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯`.trim()
if (m.isGroup) {
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audios|keyaudio|keyaudios)$/i
handler.exp = 50
handler.fail = null
handler.register = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
