const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const { EmbedBuilder } = require("discord.js")

module.exports = {
  name: "quetangayeres",
  aliases: ["gay", "quegay", "cuangayeres", "sergay"],
  desc: "Sirve Para Ver Cuanto De Gay Eres.",
async run(client, message, args) {

    let respuestas = [Math.floor(Math.random() * 100)]
    let random = respuestas[Math.floor(Math.random() * respuestas.length)];
    let dinero = [Math.floor(Math.random() * 100)]
    let dn = dinero[Math.floor(Math.random() * respuestas.length)];
    let salud = [Math.floor(Math.random() * 100)]
    let sl = salud[Math.floor(Math.random() * respuestas.length)];
    let suerte = [Math.floor(Math.random() * 100)]
    let sr = suerte[Math.floor(Math.random() * respuestas.length)];
    const embed = new Discord.EmbedBuilder()
    .setColor(0x00ffeb)
    .setTitle('Que Tan Gay Eres?')
    .addFields(
      { name: '**🏳️‍🌈 Tu Porcentaje De Gay Es:**', value: `**<a:_:1016057216362618921> ${random}%  De Gay**` },
    )
    .setTimestamp()
    .setFooter({ text: 'MrDxniezzz © 2022', iconURL: 'https://cdn.discordapp.com/attachments/920687521929764894/1024076611240345650/Gloom.png' });

  message.channel.send({ embeds: [embed] });

  }

} 
