const Discord = require('discord.js');
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/news`)
	.then((res) => {       
	    res.data.articles.forEach(async (a) => {
	        await message.channel.send(a.links.web.href)
	    })
	})
	.catch(err => {
		message.reply(`Ocorreu algum problema, avise o Arthur`)
	})
}