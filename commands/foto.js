const Discord = require('discord.js')
const google = require('googleapis').google
const customSearch = google.customsearch('v1')

const googleSearchCredentials = require('../credentials/google-search.json')

exports.run = async (client, message, args) => {
	// message.delete()
	let tag = args.join(' ')
	if (!tag) return message.reply('lembre-se de colocar uma tag')

	const urlImage = await getImagesGoogle(tag)
	
	let avatar = message.author.displayAvatarURL({format: 'png'})
	const embed = new Discord.MessageEmbed()
		.setColor('#f2eb24')
		.setDescription(`Sua foto: `)
		.setImage(`${urlImage}`)
		.setTimestamp()
		// .setAuthor(message.author.tag, avatar)
	await message.channel.send(embed)
	
}

async function getImagesGoogle(term){
    const response = await customSearch.cse.list({
        auth: process.env.GOOGLE_API_KEY,
        cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
        q: term,
        searchType: 'image',
        num:2,
		//imgType: 'PHOTO'
    })

    const imagesUrl = response.data.items.map((item) => {
      return item.link
    })
	if(imagesUrl[0].slice(imagesUrl[0].lastIndexOf('.')) != '.jpg'){
        
		return imagesUrl[1]
    }
   return imagesUrl[0]
}