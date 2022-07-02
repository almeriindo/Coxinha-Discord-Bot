module.exports = {
    name: 'clear',
    description: 'Apagar mensagens',
    usage: 'clear <quantidade>',
    execute(message, args, prefix, embed) {
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
            if((!args[0]) || (isNaN(args[0]) && isNaN(parseInt(args[0], 10))) || (parseInt(args[0], 10) < 1)) {
                embed
                .setTitle("Argumento inválido")
                .setColor(0xCB4335)
                .addField("Modo de uso:", prefix + this.usage + "\nUse apenas números inteiros maiores que 1");
                return message.channel.send(embed);
                
            } else {
                var n = parseInt(args[0], 10) + 1;
                message.channel.bulkDelete(n.toString());
                // perms = message.member.Permissions;
                //console.log(perms[0]);
            }
        } else {
            message.channel.send("Você não tem permissão para usar este comando.");
        }
    }
}