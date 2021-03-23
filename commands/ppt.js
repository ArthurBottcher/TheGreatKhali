const Discord = require("discord.js")

exports.run = async (client, message, args) => {
	message.delete()
  	var opcoes = ["PEDRA", "PAPEL", "TESOURA"]
	let escolhaUser = args.join(' ').toUpperCase()
  	var rand = Math.floor(Math.random() * opcoes.length)
	let escolhaBot = opcoes[rand]
	let resultado = ''

	if( (escolhaUser == 'PEDRA' && escolhaBot == 'TESOURA' ) ||
		(escolhaUser == 'PAPEL' && escolhaBot == 'PEDRA') ||
		(escolhaUser == 'TESOURA' && escolhaBot == 'PAPEL')){
			resultado = `${message.author} você escolheu **${escolhaUser}** e eu **${escolhaBot}**. Parabéns você ganhou!! :confused:`
	}
	else if ( (escolhaBot == 'PEDRA' && escolhaUser == 'TESOURA' ) ||
		(escolhaBot == 'PAPEL' && escolhaUser == 'PEDRA') ||
		(escolhaBot == 'TESOURA' && escolhaUser == 'PAPEL')){
			resultado = `${message.author} você escolheu **${escolhaUser}** e eu **${escolhaBot}**. Eu ganhei, tente a sorte na próxima!! :joy:`
	}
	else {
		resultado = `${message.author} você escolheu **${escolhaUser}** e eu **${escolhaBot}**. Empatamos, :wink: `
	}

	message.channel.send(resultado)
}