const handler = async (m, {conn, usedPrefix}) => {
const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
const document = doc[Math.floor(Math.random() * doc.length)];
const text = `*╭───── • ◆ • ─────┅┅┄┄*

   *🍡 ᴏᴡɴᴇʀ: kenn wa.me/51902247905*  
 *╰───── • ◆ • ─────┅┅┄┄*  `.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/kennx/onyxbf`},
    'mimetype': `application/${document}`,
    'fileName': `𝗢𝗡𝗬𝗫`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/kennx/onyxbf',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴏᴡɴᴇʀ',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://whatsapp.com/channel/0029VaDajsjLI8YRnDjT2y1v'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;
