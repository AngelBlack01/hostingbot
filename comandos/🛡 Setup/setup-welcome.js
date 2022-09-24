const Discord = require('discord.js');
const setupSchema = require(`${process.cwd()}/modelos/setups.js`);
module.exports = {
    name: "setup-welcome",
    aliases: ["setup-welcomes", "setup-bienvenida", "setup-bienvenidas"],
    desc: "Sirve Para Crear Un Sistema De Bienvenidas",
    permisos: ["Administrator"],
    run: async (client, message, args, prefix) => {
        const canalBienvenidas = message.guild.channels.cache.get(args[0]) || message.mentions.channels.filter(c => c.guild.id == message.guild.id).first()
        if(!canalBienvenidas) return message.reply("❌ **No Se ha encontrado el canal que has especificado!**");

        let imagenBienvenida = args[1];
        if(!imagenBienvenida) return message.reply("❌ **Tienes que especificar una imagen de bienvenida!**");

        let mensajeBienvenida = args.slice(2).join(" ")
        if(!mensajeBienvenida) return message.reply("❌ **Tienes que especificar una mensaje de bienvenida!**");

        await setupSchema.findOneAndUpdate({guildID: message.guild.id}, {
            bienvenidas: {
                canal: canalBienvenidas.id,
                mensaje: mensajeBienvenida,
                fondo: imagenBienvenida,
            }
        })

        return message.reply({embeds: [
            new Discord.EmbedBuilder().setTitle(`✅ Sistema de Bienvenidas activado!`)
            .setDescription(`**Canal De Bienvenidas:** ${canalBienvenidas}\n\n**Mensaje De Bienvenida:** \`${mensajeBienvenida}\`\n\n**Imagen De Bienvenida:** [\`Haz Click\`](${imagenBienvenida})`)
            .setColor('Green')
        ]})
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
