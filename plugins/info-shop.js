let handler = async (m, { conn, usedPrefix }) => {
  var doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document']
  var document = doc[Math.floor(Math.random() * doc.length)]
  let text = `╭┈┈  ৎ 🫐 ׂ ⬫ *Tienda*  ָ࣪  ۰ . ¡! 
│ *.busyall (usa Coins)* 💰
│ *.bus <cantidad>* 💎
│ *.buyall (usa XP)* 🧿
│ *.buy <cantidad>* 🧿
│ *.dolares (usa Diamantes)*
╰───────────────๑✨๑

┈┈┈┈┈ ๑ ⋅ ⋯ ୨ ୧ ⋯ ⋅ ๑ ┈┈┈┈┈

╭┈┈  ৎ 🫐 ׂ ⬫ *Tienda Premium*  ָ࣪  ۰ . ¡! 
│ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓵ᴘᴀss»⓵» /prem1 15 *dolares💵*
│ 🌀ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓶ᴘᴀss»⓶» /prem2 25 *dolares💵*
│ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓷ᴘᴀss»⓷» /prem3 35 *dolares💵* *
│ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓸ᴘᴀss»⓸» /prem4 50 *dolares💵*
│ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓹ᴘᴀss»⓹» /prem5 60 *dolares💵*
│ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓺ᴘᴀss»⓺» /prem6 70 *dolares💵*
│ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓻ᴘᴀss»⓻» /prem7 80 *dolares💵*
│ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓼ᴘᴀss»⓼» /prem8 100 *dolares💵*
╰───────────────๑✨๑`.trim()

  let buttonMessage = {
    'document': { url: 'https://github.com/4nni33/Annie' },
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
        'sourceUrl': 'https://youtu.be/4eA5nDxPjOA'
      }
    },
    'caption': text,
    'footer': wm,
    'headerType': 6
  }
  conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['shop']
handler.tags = ['shop']
handler.command = /^(shop|Shop|sell|Sell)$/i
handler.register = true

module.exports = {
  handler
};
