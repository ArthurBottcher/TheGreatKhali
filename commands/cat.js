const Discord = require('discord.js');
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	let urlImage 

	await axios.get(`https://aws.random.cat/meow`)
	.then(res => { urlImage = res.data.file })

	let avatar = message.author.displayAvatarURL({format: 'png'});
	const embed = new Discord.MessageEmbed()
		.setTitle("Miau Miau")
    	.setColor('#eb2845')
    	.setImage(`${urlImage}`)
    	.setTimestamp()
    	.setAuthor(message.author.tag, avatar);
	await message.channel.send(embed);
}