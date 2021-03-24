const Discord = require('discord.js')
const algorithmia = require('algorithmia')
const algorithmiaApiKey = process.env.ALGORITHMIA_API_KEY

exports.run = async (client, message, args) => {
	let tag = args.join(' ');
	if (!tag) return message.reply('lembre-se de colocar uma tag')
	const wiki = await getContent(tag)
	
	const embed = new Discord.MessageEmbed()
		.setColor('#f2eb24')
		.setTitle(tag)
		.setDescription(wiki)
		.setTimestamp()
	await message.channel.send(embed)	
}

async function getContent(searchTerm){
    const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
    const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
    const wikipediaResponse = await wikipediaAlgorithm.pipe({
        "lang": 'pt',
        "articleName": searchTerm
        })
	try{
    const wikipediaContent = wikipediaResponse.get()
	return sanitizeContent(wikipediaContent)
	}
	catch{
		console.log('Wiki: Termo não encontrado: ', searchTerm)
		return 'Termo não encontrado'
	}
}

function sanitizeContent(content){
    const withoutBlankLinesAndMarkdown = removeBlankLinesAndMarkdown(content.content)
    const withoutDateInParentheses = removeDateInParentheses(withoutBlankLinesAndMarkdown)
    

    function removeBlankLinesAndMarkdown(text){
        const allLines = text.split('\n')

       const withoutBlankLinesAndMarkdown = allLines.filter((line) => {
            if (line.trim().length === 0 || line.trim().startsWith('=')){
                return false
            }
            return true
        })
        return withoutBlankLinesAndMarkdown.join(' ')
    }

    function removeDateInParentheses(text){
        return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g,' ')
    }
	
    return withoutDateInParentheses.split(".", 4).join('. ')
}