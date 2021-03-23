const Discord = require('discord.js')

exports.run = async (client, message, args) => {
	message.delete()
	let user = message.mentions.users.first() || client.users.cache.get(args[0])
	if (!user) return message.reply('lembre-se de mencionar um usuário válido!')

	let idade  = Math.floor(Math.random() * 101)

	let avatar = message.author.displayAvatarURL({format: 'png'})
	const embed = new Discord.MessageEmbed()
	    .setColor('#f2eb24')
		.setTitle(`A idade do(a) ${user} é: `)
	    .setDescription(`**${idade}** anos`)
	    .setTimestamp()
	    .setAuthor(message.author.tag, avatar)
	await message.channel.send(embed)
}