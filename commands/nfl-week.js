const Discord = require('discord.js');
const axios = require('axios')

exports.run = async (client, message, args) => {
	message.delete()
	const result = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard`)
	.then((res)=>{
	    let jogos = []
	    res.data.events.forEach(t => {
	        // console.log(t.name)
	        jogos.push(t.name)
	    })
	    return {
	    	"semana" : res.data.week.number,
	    	//"timeBye1" : res.data.week.teamsOnBye[0].name,
	    	//"timeBye2" : res.data.week.teamsOnBye[1].name,
	    	"jogos": jogos
	    }
	})

	const embed = new Discord.MessageEmbed()
	    .setTitle(`Semana NFL ${result.semana}`)
	    .setColor('#4287f5')
	        //adicionar em description//**Times de Bye: ${result.timeBye1} e ${result.timeBye2}**\n 
	    .setDescription(`
	        ***Jogos***:\n\n${result.jogos.join('\n\n')}
	    `)
	await message.channel.send(embed);
}