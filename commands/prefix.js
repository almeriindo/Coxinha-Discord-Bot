module.exports = {
    name: 'prefix',
    description: 'Mudar prefixo',
    usage: 'prefix <novo prefixo>',
    execute(message, args, deleteAfter, prefix, embed) {
        message.channel.send("Comando inisponível no momento.");
        /*if(deleteAfter) message.channel.bulkDelete(1);
        if(!args[1]) {
            if(args[0]) {
                prefix = args[0];
                console.log(args[0]);
                message.channel.send("Prefixo mudado para " + prefix);
            } else {
                //const embed = new Discord.RichEmbed()
                embed
                .setTitle("Argumento inválido")
                .setColor(0x1BB5D4)
                .addField("Caso queira alterar:", prefix + "prefix <novo prefixo>", true)                
                message.channel.send(embed);
            }
        } else {
            embed
                .setTitle("Prefixo: " + prefix)
                .setColor(0xCB4335)
                .addField("Modo de uso:", prefix + "prefix <novo prefixo>", true)                
                message.channel.send(embed);
        } */
    }
}