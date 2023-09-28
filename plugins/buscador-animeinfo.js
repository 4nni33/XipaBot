import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] INGRESE EL NOMBRE DE ALGUN ANIME A BUSCAR*`)
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'es', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'es', autoCorrect: true })   
let AnimeInfo = `
╭┈┈  ৎ 🫐 ׂ ⬫ *RESULTADOS*  ָ࣪  ۰ . ¡! 
│🎀 • *Título:* ${result.title}
│🎋 • *Formato:* ${result.type}
│📈 • *Estado:* ${result.status.toUpperCase().replace(/\_/g, " ")}
│🍥 • *Episodios totales:* ${result.episodes}
│🎈 • *Duración: ${result.duration}*
│✨ • *Basado en:* ${result.source.toUpperCase()}
│💫 • *Estrenado:* ${result.aired.from}
│🎗 • *Finalizado:* ${result.aired.to}
│🎐 • *Popularidad:* ${result.popularity}
│🎏 • *Favoritos:* ${result.favorites}
│🎇 • *Clasificación:* ${result.rating}
│🏅 • *Rango:* ${result.rank}
│♦ • *Trailer:* ${result.trailer.url}
│🌐 • *URL:* ${result.url}
│🎆 • *Background:* ${resultes.text}
│❄ • *Ringkasan:* ${resultes2.text}
╰───────────────๑✨๑`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
} catch {
throw `*[❗] ERROR, INTENTELO DE NUEVO*`  
}}
handler.command = /^(anime|animeinfo)$/i
handler.register = true
handler.limit = 2
export default handler 
