let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
┈─𖨂 : *ʚ🩵ɞ  Tienda-Shop ✨ ⤾·˚ ༘*
┈─𖨂 : *.busyall te cobra Hades-Coins* 💰
┈─𖨂 : *.bus <cantidad>* 💎
┈─𖨂 : *.buyall te cobra experiencia* 🧿
┈─𖨂 : *.buy <cantidad>* 🧿
┈─𖨂 : *.dolares te cobra diamantes*
ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯
┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈
ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
┈─𖨂 : *ʚ🩵ɞ  Tienda-Shop Premium ✨ ⤾·˚ ༘*
┈─𖨂 : ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓵ᴘᴀss»⓵» /prem1 15 *dolares💵* 
┈─𖨂 : 🌀ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓶ᴘᴀss»⓶» /prem2 25 *dolares💵*
┈─𖨂 : ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓷ᴘᴀss»⓷» /prem3 35 *dolares💵* *
┈─𖨂 : ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓸ᴘᴀss»⓸» /prem4 50 *dolares💵*
┈─𖨂 : ᴘʀᴇᴍɪᴜᴍ️»ᴄʟᴀsᴇ»⓹ᴘᴀss»⓹» /prem5 60 *dolares💵*
┈─𖨂 : ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓺ᴘᴀss»⓺» /prem6 70 *dolares💵* 
┈─𖨂 : ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓻ᴘᴀss»⓻» /prem7 80 *dolares💵*
┈─𖨂 : ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓼ᴘᴀss»⓼» /prem8 100 *dolares💵*
ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯
┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈
ㅤ╭┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╮
┈─𖨂 : *ʚ🩵ɞ  Dinero ✨ ⤾·˚ ༘*
┈─𖨂 : *para ver todo tu dinero usa el comando*
┈─𖨂 : *.bal*
┈─𖨂 : *.dinero*
┈─𖨂 : *Para ver tu tiempo de premium*
┈─𖨂 : *.listprem*
ㅤ╰┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈─┈╯`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/4nni33/Annie` },
'mimetype': `application/${document}`,
'fileName': `▒̶᩠߲⃡ࠖ᩼᭭݊⃝⃡🩵ࣱꪾ῾֣ؐ  𝘈𝘯𝘯𝘪𝘦𝘉𝘰𝘵 °୭`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/4nni33/Annie',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(shop|Shop|sell|Sell)$/i
handler.register = true
export default handler
