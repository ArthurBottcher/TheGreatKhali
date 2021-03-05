const Discord = require('discord.js');
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	let tag = args.join(' ');
	let urlImage 
	if (!tag) return message.reply('lembre-se de colocar uma tag')

	await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=oBJOMDave27yiICZhiADJM3LgPduoBjA&tag=${tag}`)
	.then((res) => {
		urlImage = res.data.data.images.downsized.url
	})
	.catch((err) => {
	  	message.reply(`Termo não encontrado!`)
	})
	if(urlImage != undefined){
		let avatar = message.author.displayAvatarURL({format: 'png'});
		const embed = new Discord.MessageEmbed()
	    	.setColor('#f2eb24')
	    	.setDescription(`Seu gif: `)
        	.setImage(`${urlImage}`)
	    	.setTimestamp()
        	.setFooter(tag)
        	.setAuthor(message.author.tag, avatar);
		await message.channel.send(embed);
	}
	
}