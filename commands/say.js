
exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
    
    var args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.reply("insira a sua mensagem.");
    //const embed = new Discord.MessageEmbed()
     //   .setColor("#4B0082")
      //  .setDescription(args)   
    message.channel.send(args)
    message.delete()
}
