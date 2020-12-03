//Creating by CHOLOLO
exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("Você precisa da permissão `ADMINISTRADOR`!")
    }
    var args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.reply("insira a sua mensagem.");
    const embed = new Discord.MessageEmbed()
        .setColor("#4B0082")
        .setDescription(args)
        
    message.channel.send(embed)
    message.delete()
}
