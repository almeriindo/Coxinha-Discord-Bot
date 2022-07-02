module.exports = {
    name: 'info',
    description: 'Informações do Server',
    usage: 'info',
    execute(message, deleteAfter, version, prefix, embed) {
        if(deleteAfter) message.channel.bulkDelete(1);
        //const embed = new Discord.RichEmbed()
        var del = "Falso";
        if(deleteAfter) {
            del = "Verdadeiro";
        }
        embed
        .setColor(0x3498D8)
        .setTitle("Coxinha bot")
        .addField("Version:", version, true)
        .addField("Prefix:", prefix, true)
        .addField("Curret Server:", message.guild.name, true)
        .addField("Apagar comando:", del, true);
        message.channel.send(embed);
    }
}