module.exports = {
    name: 'deleteAfter',
    description: 'de-le-te',
    usage: 'deleteAfter',
    execute(message, args) {
        message.channel.send("Delete!");
        var deleteAfter = require('./../index.js');
        if(deleteAfter) message.channel.bulkDelete(1);
        if(args[0] === "true") {
            deleteAfter = true;
            message.channel.send("Os comandos não aparecerão mais no chat.");
        } else if(args[0] === "false") {
            deleteAfter = false;
            message.channel.send("Os comandos permanecerão no chat.");
        } else {
            embed = new Discord.RichEmbed()
            .setTitle("Argumento inválido")
            .setColor(0xCB4335)
            .addField("Modo de uso:", prefix + "deleteAfter <true|false>");
            return message.channel.send(embed);
        }
    }
}

/*module.exports = {
    name: 'deleteAfter',
    description: 'Ativar/Desativar apagamento de mensagem de comando',
    usage: 'deleteAfter <true|false>',
    execute(message, embed) {
        //var deleteAfter = require('./../index.js');
        console.log("deleteAfter chamado");
        message.channel.send("deleteAfter chamado");
        if(deleteAfter) message.channel.bulkDelete(1);
        if(args[0] === "true") {
            deleteAfter = true;
            message.channel.send("Os comandos não aparecerão mais no chat.");
        } else if(args[0] === "false") {
            deleteAfter = false;
            message.channel.send("Os comandos permanecerão no chat.");
        } else {
            embed = new Discord.RichEmbed()
            .setTitle("Argumento inválido")
            .setColor(0xCB4335)
            .addField("Modo de uso:", prefix + "deleteAfter <true|false>");
            return message.channel.send(embed);
        }
    }
} */