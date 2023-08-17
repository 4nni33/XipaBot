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
ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
➥ 𓏲 ๋࣭  🎀 • *Título:* ${result.title}
➥ 𓏲 ๋࣭  🎋 • *Formato:* ${result.type}
➥ 𓏲 ๋࣭  📈 • *Estado:* ${result.status.toUpperCase().replace(/\_/g, " ")}
➥ 𓏲 ๋࣭  🍥 • *Episodios totales:* ${result.episodes}
➥ 𓏲 ๋࣭  🎈 • *Duración: ${result.duration}*
➥ 𓏲 ๋࣭  ✨ • *Basado en:* ${result.source.toUpperCase()}
➥ 𓏲 ๋࣭  💫 • *Estrenado:* ${result.aired.from}
➥ 𓏲 ๋࣭  🎗 • *Finalizado:* ${result.aired.to}
➥ 𓏲 ๋࣭  🎐 • *Popularidad:* ${result.popularity}
➥ 𓏲 ๋࣭  🎏 • *Favoritos:* ${result.favorites}
➥ 𓏲 ๋࣭  🎇 • *Clasificación:* ${result.rating}
➥ 𓏲 ๋࣭  🏅 • *Rango:* ${result.rank}
➥ 𓏲 ๋࣭  ♦ • *Trailer:* ${result.trailer.url}
➥ 𓏲 ๋࣭  🌐 • *URL:* ${result.url}
➥ 𓏲 ๋࣭  🎆 • *Background:* ${resultes.text}
➥ 𓏲 ๋࣭  ❄ • *Ringkasan:* ${resultes2.text}
ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
} catch {
throw `*[❗] ERROR, INTENTELO DE NUEVO*`  
}}
handler.command = /^(anime|animeinfo)$/i
handler.register = true
handler.limit = 2
export default handler 
