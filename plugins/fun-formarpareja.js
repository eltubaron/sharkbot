const toM = a => '@' + a.split('@')[0];

function handler(m, { groupMetadata }) {
  let ps = groupMetadata.participants.map(v => v.id);
  let a = ps[Math.floor(Math.random() * ps.length)];
  let b;
  
  do {
    b = ps[Math.floor(Math.random() * ps.length)];
  } while (b === a);
  
  let message = `*${toM(a)}, Já era hora de vocês se 💍 casarem ${toM(b)}, Lindo casal 💓😉💓*`;
  
  // Adicione a URL ou caminho do arquivo de áudio abaixo
  let vn = './media/casal.mp3';
  
  m.reply(message, null, {
    mentions: [a, b],
    audio: vn // Adicione o áudio aqui
  });
}

handler.help = ['formarpareja'];
handler.tags = ['principal', 'diversão'];
handler.command = ['formarpareja', 'formarcasal', 'casal'];
handler.group = true;

export default handler;
