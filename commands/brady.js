const Discord = require('discord.js');
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	let urlImage 

	let width  = Math.floor(Math.random() * (1400 - 200 + 1)) + 200
	urlImage = `http://placegoat.com/${width}`
	console.log(width, urlImage)
	let avatar = message.author.displayAvatarURL({format: 'png'});
	const embed = new Discord.MessageEmbed()
		.setTitle("O GOAT")
    	.setColor('#eb2845')
    	.setImage(`${urlImage}`)
    	.setTimestamp()
    	.setAuthor(message.author.tag, avatar);
	await message.channel.send(embed);
}