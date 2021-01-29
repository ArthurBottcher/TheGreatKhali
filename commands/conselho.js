const Discord = require('discord.js');
const axios = require('axios');
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

exports.run = async (client, message, args) => {
	message.delete()
	let conselho 
	let conselhoPt
	await message.channel.send('Aguarde um momento')
	await axios.get(`https://api.adviceslip.com/advice`)
	.then(async res => { 
		conselho = res.data.slip.advice
		
		const languageTranslator = new LanguageTranslatorV3({
			version: '2018-05-01',
			authenticator: new IamAuthenticator({
			    apikey: 'ZebOkGkqReSsPp9MVdOBpsth5ITdQY5pT3bU2_qvsBF9',
			}),
			serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/baaa09ba-fe47-4fb1-b282-5899a7be66b4',
		});
		//console.log("Original:",conselho)
		const translateParams = {
			text: conselho,
			modelId: 'en-pt',
		};

		await languageTranslator.translate(translateParams)
			.then(translationResult => {
		    	conselhoPt = translationResult.result.translations[0].translation
			})
		  	.catch(err => {
		   	 	console.log('error:', err);
			});

	
	})

	const embed = new Discord.MessageEmbed()
		.setTitle(`Meu conselho para ${message.author.tag}`)
    	.setColor('#f2eb24')
		.setDescription(`${conselhoPt}`)
		.setFooter('Não seja preguiço e traduza o conselho! Aprenda ingles comigo!')
    	.setTimestamp()
	await message.channel.send(embed);
}