const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'lembretes',
    description: 'Lista de lembretes',
    usage: 'lembretes',
    execute(message, embed) {
        //const embed = new Discord.RichEmbed()
        embed = new MessageEmbed()
        .setColor("#00b7ff")
        .setTitle("Lembretes disponíveis")
        .setFooter("Valores: true | false")
        .addField("Adventure:", "c>adventure [valor]", true)
        .addField("Axe/Pickaxe", "c>pickaxe [valor]", true)
        .addField("Chop:", "c>chop [valor]", true)
        .addField("Duel:", "c>duel [valor]", true)
        .addField("Duel:", "c>fish [valor]", true)
        .addField("Hunt", "c>hunt [valor]", true)
        .addField("Hunt", "c>ladder [valor]", true)
        .addField("Lootbox (buy ed lb)", "c>lootbox [valor]", true)
        .addField("Net", "c>net [valor]", true)
        .addField("Training", "c>training [valor]", true);
        
        message.channel.send(embed);
    }
}