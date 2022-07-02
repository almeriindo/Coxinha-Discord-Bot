const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'gif',
    description: 'Procura um gif',
    usage1: 'gif <texto>',
    usage2: 'gif <texto1>&<texto2>&<texto3>',
    execute(message, args, embed) {
        if(args.length > 0) {
                var texto = "";
                for(var i = 0; i <= args.length; i++) {
                    if(args[i]) {
                        if(i == args.length) {
                            texto += args[i];
                        } else {
                            texto += args[i] + "";
                        }
                    }
                }
                const searchs = texto.split("&");
                for (var i = 0; i < searchs.length; i++) {
                    console.log(searchs[i]);
                    giphy.random('gifs', {"tag": searchs[i]})
                .then((response) => {
                    console.log(response.data.images.original.gif_url);
                    if(response.data.images.original.gif_url == null) {
                        message.channel.send("Não há gif sobre isso. Caso tenha pesquisado algo em português, tente em inglês");
                    } else {
                        embed = new MessageEmbed()
                        .setImage(response.data.images.original.gif_url);
                        return message.channel.send(embed);
                    }
                })
                .catch((err) => {
                    message.channel.send("Não há gif sobre isso. Caso tenha pesquisado algo em português, tente em inglês.");
                })
                }
                
        }
    }
}
