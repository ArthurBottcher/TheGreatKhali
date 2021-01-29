const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  	var opcoes = ["PEDRA", "PAPEL", "TESOURA"];
	let escolhaUser = args.join(' ').toUpperCase();
  	var rand = Math.floor(Math.random() * opcoes.length);
	let escolhaBot = opcoes[rand]
	let resultado = ''

  	//user ganha
	if( (escolhaUser == 'PEDRA' && escolhaBot == 'TESOURA' ) ||
		(escolhaUser == 'PAPEL' && escolhaBot == 'PEDRA') ||
		(escolhaUser == 'TESOURA' && escolhaBot == 'PAPEL')){
			resultado = `${message.author} você escolheu **${escolhaUser}** e eu **${escolhaBot}**. Parabéns você ganhou!!`
	}
	else if ( (escolhaBot == 'PEDRA' && escolhaUser == 'TESOURA' ) ||
		(escolhaBot == 'PAPEL' && escolhaUser == 'PEDRA') ||
		(escolhaBot == 'TESOURA' && escolhaUser == 'PAPEL')){
			resultado = `${message.author} você escolheu **${escolhaUser}** e eu **${escolhaBot}**. Eu ganhei, tente a sorte na próxima!!`
	}
	else{
		resultado = `${message.author} você escolheu **${escolhaUser}** e eu **${escolhaBot}**. Empatamos, ;| `
	}

	message.channel.send(resultado)
}