const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    description: 'Todos os comandos:',
    execute(message, args, commandFiles) {
        var embed = new MessageEmbed()
        console.log(args);
        if(args.toString() !== '') {
            console.log('yes args');
            return;
        }

        console.log('inside');

        embed
        .setColor("#00b7ff")
        .setTitle("Comandos")
        .setFooter('Alguns comandos não estão funcionando');

        for(var i = 0; i < (commandFiles.length); i++) {
            var comando = commandFiles[i].substr(0, (commandFiles[i].length - 3));
            embed
            .addField('\u200B', ('`'.concat((`${comando}`),('`'))), true)
            //console.log(commandFiles[i].substr(0, (commandFiles[i].length - 3)));
        }

        message.channel.send(embed);

    }
}