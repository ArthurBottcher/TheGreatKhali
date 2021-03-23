const Discord = require('discord.js')
const axios = require('axios')
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3')
const { IamAuthenticator } = require('ibm-watson/auth')

exports.run = async (client, message, args) => {
	message.delete()
	let conselho
	let conselhoPt
	await axios.get(`https://api.adviceslip.com/advice`)
		.then(async res => {
			conselho = res.data.slip.advice

			const languageTranslator = new LanguageTranslatorV3({
				version: '2018-05-01',
				authenticator: new IamAuthenticator({
					apikey: process.env.WATSON_API_KEY,
				}),
				serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/baaa09ba-fe47-4fb1-b282-5899a7be66b4',
			})

			const translateParams = {
				text: conselho,
				modelId: 'en-pt',
			};

			await languageTranslator.translate(translateParams)
				.then(translationResult => {
					conselhoPt = translationResult.result.translations[0].translation
				})
				.catch(err => {
				})


		})
	let avatar = message.author.displayAvatarURL({ format: 'png' });
	const embed = new Discord.MessageEmbed()
		.setTitle(`Meu conselho para você`)
		.setColor('#f2eb24')
		.setDescription(`${conselhoPt}`)
		.setFooter(`Original: ${conselho}`)
		.setTimestamp()
		.setAuthor(message.author.tag, avatar);
	await message.channel.send(embed);
}