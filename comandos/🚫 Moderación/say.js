module.exports = {
  name: "say",
  aliases: ["decir", "replicar", "hablar"],
  desc: "Sirve para enviar un aviso a un usuario del Servidor",
  permisos: ["Administrator", "BanMembers"],
async run (client, message, args){

const texto = args.join(" ");
    if (!texto)
      return message.reply({
        allowedMentions: { repliedUser: false },
        content: `Falta el mensaje`,
      });

    setTimeout(() => {
      message.delete();
      message.channel.send({
        content: `${texto}`,
      });
    }, 100);
}}
