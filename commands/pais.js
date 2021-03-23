const Discord = require('discord.js')
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	let tag = args.join(' ')
	if (!tag) return message.reply('lembre-se de colocar um país')

	let pais = {
		'nome': '',
		'bandeira': null,
		'capital': '',
		'populacao': 0,
		'moeda': '',
		'localizacao': '',
	}

	await axios.get(`https://restcountries.eu/rest/v2/name/${tag}`)
	.then((res) => {
		pais.bandeira = res.data[0].flag
		console.log(pais.bandeira)
		pais.nome = res.data[0].name
		pais.populacao = res.data[0].population
		pais.capital = res.data[0].capital
		pais.moeda = res.data[0].currencies[0].name
		pais.localizacao = res.data[0].subregion
		pais.gentilico = res.data[0].demonym
		pais.nomeNativo = res.data[0].nativeName
	})
	.catch((err) => {
	  	message.reply(`Termo não encontrado!`)
	})

	const embed = new Discord.MessageEmbed()
	    .setColor('#f2eb24')
		.setTitle(`**${pais.nome}**`)
	    .setDescription(`
			**População: ** ${pais.populacao}
			**Capital: ** ${pais.capital}
			**Moeda: ** ${pais.moeda}
			**Localizada em: ** ${pais.localizacao}
			**Gentílico: ** ${pais.gentilico}
			**Nome Nativo:** ${pais.nomeNativo}
		`)
        .setThumbnail(`${pais.bandeira}`)
        .setAuthor('Informações', pais.bandeira)
	await message.channel.send(embed)
}