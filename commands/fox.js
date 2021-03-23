const Discord = require('discord.js')
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	let urlImage

	await axios.get(`https://randomfox.ca/floof/`)
		.then(res => { urlImage = res.data.image })

	let avatar = message.author.displayAvatarURL({ format: 'png' })
	const embed = new Discord.MessageEmbed()
		.setTitle("Raposinha")
		.setColor('#f5982f')
		.setImage(`${urlImage}`)
		.setTimestamp()
	await message.channel.send(embed)
}