const mongoose = require('mongoose');

const setupSchema = new mongoose.Schema({
    guildID: String,
    reaccion_roles: Array,
    sistema_tickets: {type: Object, default: {canal: "", mensaje: ""}},
    sugerencias: {type: String, default: ""},
    niveles: {type: Object, default: {canal: "", mensaje: ""}},
    bienvenidas: {type: Object, default: {canal: "", fondo: "https://cdn.discordapp.com/attachments/923999651139563521/1023140535910793226/d0a3c3ffade9804fad4075b13323d31d.png", mensaje: "**Bienvenid@ {usuario} A Esta Network Llamada {servidor}\nDisfruta De Tu Estancia**"}},
})

const model = mongoose.model("Configuraciones", setupSchema);

module.exports = model;

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
