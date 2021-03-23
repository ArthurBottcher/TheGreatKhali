
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    message.delete()
    var args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.reply("insira a sua mensagem.")  
    message.channel.send(args)
    
}
