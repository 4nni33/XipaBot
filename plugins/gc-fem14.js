let nombreEncargada = "Encargada"; // Nombre predeterminado

let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
  }
  
  let pesan = args.join` `
  let oi = `THE ZERO LISTA FEM💞: ${pesan}`
  let teks = `╭┈┈ ๑❀๑ •• ${oi} ๑❀๑ ••:\n`
  
  teks += `
│
│         💗 ZERO, BOT SIMPLE CREADOR:http://wa.me/59897463355 💗
│        ₊˚︶︶︶︶︶︶︶︶˚ ‧₊
│
│      ෆ 𝘌𝘯𝘢𝘳𝘨𝘢𝘥𝘢:
│      ෆ 𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
│         ‧₊⌗ 14 🇵🇪 ⌇ 13 🇨🇱 ⌇ 16 🇦🇷      
│
│ㅤㅤʚ 𝘑𝘶𝘨𝘢𝘥𝘰𝘳𝘢𝘴:
│ㅤ🔞• 
│ㅤ🔞• 
│ㅤ🔞• 
│    🔞•
│   ㅤㅤ
│ㅤㅤʚ 𝘚𝘶𝘱𝘭𝘦𝘯𝘵𝘦𝘴:
│ㅤ🔞•
│ㅤ🔞•
│
│   ⊹ ִֶָ  𝘋𝘰𝘯𝘢𝘥𝘰𝘳𝘢 𝘥𝘦 𝘴𝘢𝘭𝘢: ${nombreEncargada}
│
╰───────────────๑❀๑ •`

  conn.sendMessage(m.chat, { text: teks }, )
}

handler.help = ['smsf00 <mensaje>', 'fem00 <mensaje>']
handler.tags = ['group']
handler.command = /^(smsf00|fem14)$/i
handler.admin = true
handler.group = true

// Comando para cambiar el nombre de la encargada
handler.command = /^(setencargada|encargada)$/i
handler.rowner = true

handler.exec = async (m, { text }) => {
  nombreEncargada = text.trim() // Establece el nuevo nombre
  m.reply(`Nombre de la encargada actualizado a: ${nombreEncargada}`)
}

export default handler
