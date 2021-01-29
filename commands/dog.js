const Discord = require('discord.js');
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	let urlImage 

	await axios.get(`https://random.dog/woof.json`)
	.then(res => { urlImage = res.data.url })

	let avatar = message.author.displayAvatarURL({format: 'png'});
	const embed = new Discord.MessageEmbed()
		.setTitle("Au Au")
    	.setColor('#16a3f0')
    	.setImage(`${urlImage}`)
    	.setTimestamp()
    	.setAuthor(message.author.tag, avatar);
	await message.channel.send(embed);
}