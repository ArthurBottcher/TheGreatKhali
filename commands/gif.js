const Discord = require('discord.js');
const axios = require('axios')

exports.run = async (client, message, args) => {

let tag = args.join(' ');
if (!tag) {
return message.reply('lembre-se de colocar uma tag');
}

let urlImage 

await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=oBJOMDave27yiICZhiADJM3LgPduoBjA&tag=${tag}&rating=g`)
.then((res) => {
      urlImage = res.data.data.images.downsized.url
    })
.catch((err) => {
  message.reply(`Termo não encontrado!`)
})

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#f2eb24')
        .setDescription(`Seu gif: `)
        .setImage(`${urlImage}`)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}