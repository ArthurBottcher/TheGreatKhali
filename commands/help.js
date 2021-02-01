const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

	let embed = new Discord.MessageEmbed()
		.setColor('#f79902')
		.setTitle('**Meus comandos:**  ***lembre de usar o prefixo: k! ***')
		.setDescription(`
		**avatar**   | exibe a foto do seu perfil em tamanho grande
		**brady**    | mostra quem realmente ele é.
		**cat**      | mostra uma foto ou gif de gato aleatório
		**dog**      | mostra uma foto ou gif de cachorro aleatório
		**fox**      | mostra uma foto ou gif de raposa aleatório
		**gif**      | busca um gif com o termo digitado após o comando 
		**coinflip** | jogo do cara ou coroa, digitar após o comando: cara ou coroa
		**conselho** | o bot lhe dá um conselho para o seu dia.
		**idade**    | informa a idade de um usuário mencionado após o comando
		**ideia**    | cria uma mensagem de sugestões que poderá ser votada pelos usuários dos serves
		**kiss**     | manda, dá um beijo em um usuário mencionado apos o comando 
		**pato**     | informa que o usário mencionado após o comando é o seu pato 
		**pais**     | traz informações de um país informado após o comando 
		**ppt**      | jogo de pedra, papel e tesoura com o bot, basta escrever a sua escolha logo após o comando
		**say**      | o bot escreve um mensagem por você

		**nfl-week** | traz os jogos da semana e os times de bye
		`)
		.setTimestamp()
		.setFooter('Se tiver uma sugestão de novo comando ou atualização enviar no canal suguestões.')
	await message.channel.send(embed); 
}