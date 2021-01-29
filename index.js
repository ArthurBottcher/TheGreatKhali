const express = require('express');
const app = express();

app.get("/", (request, response) => {
  	const ping = new Date();
  	ping.setHours(ping.getHours() - 3);
  	console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  	response.sendStatus(200);
});

app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

client.on('message', message => {
  	if (message.author.bot) return;
  	if (message.channel.type == 'dm') return;
  	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  	if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  	const args = message.content.trim().slice(config.prefix.length).split(/ +/g);
  	const command = args.shift().toLowerCase();
  	try {
    	const commandFile = require(`./commands/${command}.js`)
    	commandFile.run(client, message, args);
  	} catch (err) {
    	console.error('Erro:' + err);
  	}
});

client.on("guildMemberAdd", async (member) => { 
	//let guild = await client.guilds.cache.get("735301755625013278");
  	let channel = await client.channels.cache.get("735467359820709938");
  	//let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === ":heart:");
  	//if (guild != member.guild) {
    	//return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
  	//} else {
    //	let embed = await new Discord.MessageEmbed()
    //	.setColor("#f5cb22")
    //	.setAuthor(member.user.tag, member.user.displayAvatarURL())
    //	.setTitle(`${emoji} Bem-vindo(a)! ${emoji}`)
    //	.setImage("https://media.giphy.com/media/3o6Zt4egUshbCPJ3zO/giphy.gif")
    //	.setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **$//{member.guild.memberCount} membros*   divirta-se conosco! `)
    //	.setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    //	.setFooter("Leia as regras e comporte-se")
    //	.setTimestamp();
    //	channel.send(embed);
    	channel.send("Bem vindo ao Golim Sports");
  	//}
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token