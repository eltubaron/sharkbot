let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Coloque um nome', m)
	
  let personalidad = `
┏━━°❀❬ *PERSONALIDADE}* ❭❀°━━┓
*┃*
*┃• Nombre* : ${text}
*┃• Boa moral* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Má Moral* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Tipo de pessoa* : ${pickRandom(['De bom coração','Arrogante','Gentil','Generoso','Humilde','Tímido','Covarde','Intrometido','Não binario KK','Idiota'])}
*┃• Sempre* : ${pickRandom(['Pensando','Com fome','Distraido','irritado','Com ciúmes','Cheiroso(a)','Comprando','Assistindo animes','Jogando','Entediado','No celular','Comendo'])}
*┃• Inteligência* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Delinquência* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Coragem* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Medo* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Fama* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Gênero* : ${pickRandom(['Homem', 'Mulher', 'Homosexual🏳️‍🌈', 'Bisexual', 'Pansexual', 'Feminista♀️', 'Heterosexual', 'Macho alfa🐺', 'Mulherzinha💅', 'Sapatão🏳️‍🌈', 'LGBTQIA+1234567🏳️‍🌈', 'PlayStationSexual', 'Travesti', 'Helicóptero de combate'])}
┗━━━━━━━━━━━━━━━━
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['personalidade *<nome>*']
handler.tags = ['fun']
handler.command = /^personalidade/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}