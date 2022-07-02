const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const Canvas = require('canvas');
const { config } = require('dotenv');

var deleteAfter = false;
//exports.deleteAfter;
//const snekfetch = require('node-superfetch');
//const {prefix, token, giphyToken, version} = require('./config.json');
var GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient(process.env.GIPHY_TOKEN);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

exports.setDeleteAfter = function(x) {
    deleteAfter = x;
};

// #############################################################################################

bot.on('ready', () => {
    console.log("Bot online!");
});

/*bot.on('guildMemberAdd', async member => {

})*/

//console.log(bot.commands.get('axe').description);
//console.log(commandFiles[0].substr(0, (commandFiles[0].length - 3)));




bot.on('message', message=> {

    if(message.author.id.toString() == "571027211407196161") {

    }

    if((message.content.toLowerCase() === "rpg chop") || (message.content.toLowerCase() === "rpg axe") || (message.content.toLowerCase() === "rpg bowsaw") || (message.content.toLowerCase() === "rpg chainsaw")) {
        if (!fs.existsSync('./chop/' + message.author.id + '.txt')) return;
        fs.readFile('./chop/' + message.author.id + '.txt', (err, data) => {
            if (err) throw err;
            if(data.toString() === "false") {
                console.log("Return: " + data.toString());
                return;
            }
            if(data.toString() === "true") {
                setTimeout(func => {
                    message.channel.send("🌳 Hora de pegar madeira, coxinhudo(a)! " + "<@" + message.author.id + ">");
                }, 300000, 'args');
    
                console.log("Return: " + data.toString());
            }

          });
    }

    if((message.content.toLowerCase() === "rpg fish") || (message.content.toLowerCase() === "rpg net") || (message.content.toLowerCase() === "rpg boat") || (message.content.toLowerCase() === "rpg bigboat")) {
        if (!fs.existsSync('./fish/' + message.author.id + '.txt')) return;
        fs.readFile('./fish/' + message.author.id + '.txt', (err, data) => {
            if (err) throw err;
            if(data.toString() === "false") {
                console.log("Return: " + data.toString());
                return;
            }
            if(data.toString() === "true") {
                setTimeout(func => {
                    message.channel.send("🐟 Hora de pegar peixe, chifrudo(a)! " + "<@" + message.author.id + ">");
                }, 300000, 'args');
    
                console.log("Return: " + data.toString());
            }

          });
    }

    if((message.content.toLowerCase() === "rpg mine") || (message.content.toLowerCase() === "rpg pickaxe") || (message.content.toLowerCase() === "rpg drill") || (message.content.toLowerCase() === "rpg dynamite")) {
        if (!fs.existsSync('./mine/' + message.author.id + '.txt')) return;
        fs.readFile('./mine/' + message.author.id + '.txt', (err, data) => {
            if (err) throw err;
            if(data.toString() === "false") {
                console.log("Return: " + data.toString());
                return;
            }
            if(data.toString() === "true") {
                setTimeout(func => {
                    message.channel.send("💎 Hora de minerar, bb! " + "<@" + message.author.id + ">");
                }, 300000, 'args');
    
                console.log("Return: " + data.toString());
            }

          });
    }

    if((message.content.toLowerCase() === "rpg pickup") || (message.content.toLowerCase() === "rpg ladder") || (message.content.toLowerCase() === "rpg tractor") || (message.content.toLowerCase() === "rpg greenhouse")) {
        if (!fs.existsSync('./pickup/' + message.author.id + '.txt')) return;
        fs.readFile('./pickup/' + message.author.id + '.txt', (err, data) => {
            if (err) throw err;
            if(data.toString() === "false") {
                console.log("Return: " + data.toString());
                return;
            }
            if(data.toString() === "true") {
                setTimeout(func => {
                    message.channel.send("🍎 Hora de colher frutinha, gostoso(a)! " + "<@" + message.author.id + ">");
                }, 300000, 'args');
    
                console.log("Return: " + data.toString());
            }

          });
    }

    if((message.content.toLowerCase() === "rpg training") || (message.content.toLowerCase() === "rpg tr")) {
        if (!fs.existsSync('./training/' + message.author.id + '.txt')) return;
        fs.readFile('./training/' + message.author.id + '.txt', (err, data) => {
            if (err) throw err;
            if(data.toString() === "false") {
                console.log("Return: " + data.toString());
                return;
            }
            if(data.toString() === "true") {
                setTimeout(func => {
                    message.channel.send("💪 Hora do training, lindo(a)! " + "<@" + message.author.id + ">");
                }, 900000, 'args');
    
                console.log("Return: " + data.toString());
            }

          });
    }

    if(message.content.toLowerCase() === "rpg hunt") {
        if (!fs.existsSync('./hunt/' + message.author.id + '.txt')) return;
        fs.readFile('./hunt/' + message.author.id + '.txt', (err, data) => {
            if (err) throw err;
            if(data.toString() === "false") {
                console.log("Return: " + data.toString());
                return;
            }
            if(data.toString() === "true") {
                setTimeout(func => {
                    message.channel.send("🏹 Hora do hunt, feio(a)! " + "<@" + message.author.id + ">");
                }, 60000, 'args');
    
                console.log("Return: " + data.toString());
            }

          });
    }

    if((message.content.toLowerCase() === "rpg adventure") || (message.content.toLowerCase() === "rpg adv")) {
        if (!fs.existsSync('./adventure/' + message.author.id + '.txt')) return;
        fs.readFile('./adventure/' + message.author.id + '.txt', (err, data) => {
            if (err) throw err;
            if(data.toString() === "false") {
                console.log("Return: " + data.toString());
                return;
            }
            if(data.toString() === "true") {
                setTimeout(func => {
                    message.channel.send("🐉 Hora da Aventura! " + "<@" + message.author.id + ">");
                }, 3600000, 'args');
    
                console.log("Return: " + data.toString());
            }

          });
    }

    if(message.content.toLowerCase() === "rpg buy ed lb") {
        if (!fs.existsSync('./lootbox/' + message.author.id + '.txt')) return;
        fs.readFile('./lootbox/' + message.author.id + '.txt', (err, data) => {
            if (err) throw err;
            if(data.toString() === "false") {
                console.log("Return: " + data.toString());
                return;
            }
            if(data.toString() === "true") {
                setTimeout(func => {
                    message.channel.send("🎁 Hora do lootbox, fofo(a)! " + "<@" + message.author.id + ">");
                }, 10800000, 'args');
    
                console.log("Return: " + data.toString());
            }

          });
    }

    /*
    if(message.content.startsWith('rpg duel')) {
        
        
        const filter = m => m.author.id === message.mentions.users.first().id;
        message.channel.awaitMessages(filter, {max: 1, time: 10000}).then(collected => {
            if((collected.first().content === 'y') || (collected.first().content === 'yes')) {
                fs.readFile('./duel/' + message.mentions.users.first().id + '.txt', (err, data) => {
                    if (err) throw err;
                    if(data.toString() === "false") {
                        console.log("Return: " + data.toString());
                        return;
                    }
                    if(data.toString() === "true") {
                        setTimeout(func => {
                            message.channel.send("🔥 Hora do duelo, sorria :) " + "<@" + message.mentions.users.first().id + ">");
                        }, 7200000, 'args');
            
                        console.log("Return: " + data.toString());
                    }
        
                });

                if (!fs.existsSync('./duel/' + message.author.id + '.txt')) return;
                fs.readFile('./duel/' + message.author.id + '.txt', (err, data) => {
                    if (err) throw err;
                    if(data.toString() === "false") {
                        console.log("Return: " + data.toString());
                        return;
                    }
                    if(data.toString() === "true") {
                        setTimeout(func => {
                            message.channel.send("🔥 Hora do duelo, sorria :) " + "<@" + message.author.id + ">");
                        }, 7200000, 'args'); //7200000
            
                        console.log("Return: " + data.toString());
                    }
        
                  });
            }
        }).catch(err => {
            console.log('Erro no duelo');
            console.log(err);
        })
    }
    */

    if(message.content.toLowerCase() === "rpg epic quest") {
        if (!fs.existsSync('./epicquest/' + message.author.id + '.txt')) return;
        fs.readFile('./epicquest/' + message.author.id + '.txt', (err, data) => {
            if (err) throw err;
            if(data.toString() === "false") {
                console.log("Return: " + data.toString());
                return;
            }
            if(data.toString() === "true") {
                setTimeout(func => {
                    message.channel.send("🔰 Hora da Epic Quest, consagrado(a)! " + "<@" + message.author.id + ">");
                }, 21600000, 'args');
    
                console.log("Return: " + data.toString());
            }

          });
    }



    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift().toLowerCase();
    var embed = new Discord.MessageEmbed();

    switch(command) {
        /*
        case 'prefix':
            embed = new Discord.RichEmbed();
            bot.commands.get('prefix').execute(message, args, deleteAfter, prefix, embed);
            break;
        case 'ping':
            bot.commands.get('ping').execute(message, deleteAfter);
            break;
        case 'info':
            embed = new Discord.RichEmbed();
            bot.commands.get('info').execute(message, deleteAfter, version, prefix, embed);
            break;
        case 'clear':
            embed = new Discord.RichEmbed();
            bot.commands.get('clear').execute(message, args, deleteAfter, prefix, embed);
            break;
        #################
        case 'deleteafter':
            bot.commands.get('deleteAfter').execute(message, args);
            break;
        ################    
        */

        case 'zoio':
            bot.commands.get('zoio').execute(message, args);
            break;
        
        case 'clear':
            embed = new Discord.MessageEmbed();
            bot.commands.get('clear').execute(message, args, process.env.PREFIX, embed);
            break;


        case 'help':
            bot.commands.get('help').execute(message, args, commandFiles);
            break;
        case 'gif':
            embed = new Discord.MessageEmbed();
            bot.commands.get('gif').execute(message, args, embed);            
            break;
        case 'lembretes':
            embed = new Discord.MessageEmbed();
            bot.commands.get('lembretes').execute(message, embed);            
            break;
        case 'meuslembretes':
            embed = new Discord.MessageEmbed();
            bot.commands.get('meuslembretes').execute(message, args, fs, embed);            
            break;
        case 'ml':
            embed = new Discord.MessageEmbed();
            bot.commands.get('meuslembretes').execute(message, args, fs, embed);            
            break;
        case 'ping':
            bot.commands.get('ping').execute(message, deleteAfter);
            break;
        case 'training':
            bot.commands.get('training').execute(message, args, fs);
            break;
        case 'hunt':
            bot.commands.get('hunt').execute(message, args, fs);
            break;
        case 'adventure':
            bot.commands.get('adventure').execute(message, args, fs);
            break;
        case 'lootbox':
            bot.commands.get('lootbox').execute(message, args, fs);
            break;
        case 'duel':
            bot.commands.get('duel').execute(message, args, fs);
            break;
        case 'chop':
            bot.commands.get('chop').execute(message, args, fs);
            break;
        case 'axe':
            bot.commands.get('chop').execute(message, args, fs);
            break;
        case 'bowsaw':
            bot.commands.get('chop').execute(message, args, fs);
            break;
        case 'chainsaw':
            bot.commands.get('chop').execute(message, args, fs);
            break;
        case 'fish':
            bot.commands.get('fish').execute(message, args, fs);
            break;
        case 'net':
            bot.commands.get('fish').execute(message, args, fs);
            break;
        case 'boat':
            bot.commands.get('fish').execute(message, args, fs);
            break;
        case 'bigboat':
            bot.commands.get('fish').execute(message, args, fs);
            break;
        case 'mine':
            bot.commands.get('mine').execute(message, args, fs);
            break;
        case 'pickaxe':
            bot.commands.get('mine').execute(message, args, fs);
            break;
        case 'drill':
            bot.commands.get('mine').execute(message, args, fs);
            break;
        case 'dynamite':
            bot.commands.get('mine').execute(message, args, fs);
            break;
        case 'pickup':
            bot.commands.get('pickup').execute(message, args, fs);
            break;
        case 'ladder':
            bot.commands.get('pickup').execute(message, args, fs);
            break;
        case 'tractor':
            bot.commands.get('pickup').execute(message, args, fs);
            break;
        case 'greenhouse':
            bot.commands.get('pickup').execute(message, args, fs);
            break;
        case 'epicquest':
            bot.commands.get('epicquest').execute(message, args, fs);
            break;
        case 'teste':
            bot.commands.get('testecoxinha').execute(message, args);
            break;
        case 'say':
            bot.commands.get('say').execute(message, args);
            break;
        

    }
});

/*
client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('./wallpaper.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});
*/
bot.login(process.env.BOT_TOKEN);