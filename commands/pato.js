const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	message.delete()
	let user = message.mentions.users.first() || client.users.cache.get(args[0]);
	if (!user) return message.reply('lembre-se de mencionar um usuário válido!');

	let avatar = message.author.displayAvatarURL({ format: 'png' });
	const embed = new Discord.MessageEmbed()
		.setTitle('Pato')
		.setColor('#f2eb24')
		.setDescription(`${user} você é o pato do ${message.author} `)
		.setImage("https://i.imgur.com/njWPDzR.gif")
		.setTimestamp()
		.setThumbnail(avatar)
		.setFooter('Qua-qua qua-qua')
		.setAuthor(message.author.tag, avatar);
	await message.channel.send(embed);
}