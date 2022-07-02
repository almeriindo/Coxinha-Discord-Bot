const { MessageEmbed } = require("discord.js");
const { SSL_OP_EPHEMERAL_RSA } = require("constants");

module.exports = {
    name: 'meuslembretes',
    description: 'Lista dos meus lembretes',
    usage: 'meuslembretes',
    execute(message, args, fs, embed) {       
        if(args.length > 0){
            console.log(args);
            var person = message.author.id;
            var file = './adventure/' + person + '.txt';

            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });

            file = './chop/' + person + '.txt';

            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });

            file = './duel/' + person + '.txt';
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });

            file = './epicquest/' + person + '.txt';
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });

            file = './fish/' + person + '.txt';
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });

            file = './hunt/' + person + '.txt';
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });

            file = './lootbox/' + person + '.txt';
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });

            file = './mine/' + person + '.txt';
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });

            file = './pickup/' + person + '.txt';
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });

            file = './training/' + person + '.txt';
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });

            setTimeout(() => {
                fs.readFile('./training/' + message.author.id + '.txt', (err, data) => {
                    if(data.toString() === 'true') { message.react('✅').catch(console.error); }
                    if(data.toString() === 'false') { message.react('❌').catch(console.error); }
                });
            }, 1000);


        } else {
            var adventure = 'no value';
            var chop = 'no value';
            var fish = 'no value';
            var mine = 'no value';
            var pickup = 'no value';
            var duel = 'no value';
            var epicquest = 'no value;'
            var hunt = 'no value';
            var lootbox = 'no value';
            var training = 'no value';
            var avatar = message.author.avatarURL({dynamic: true});

            message.channel.send('`Wait...`')
            .then(msg => {
                msg.delete({ timeout: 2000 })
            })
            .catch(console.error);

            if (fs.existsSync('./adventure/' + message.author.id + '.txt')) {
                fs.readFile('./adventure/' + message.author.id + '.txt', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        adventure = data.toString();
                    }          
                });
            }

            if (fs.existsSync('./chop/' + message.author.id + '.txt')) {
                fs.readFile('./chop/' + message.author.id + '.txt', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        chop = data.toString();
                    }          
                });
            }

            if (fs.existsSync('./fish/' + message.author.id + '.txt')) {
                fs.readFile('./fish/' + message.author.id + '.txt', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        fish = data.toString();
                    }          
                });
            }

            if (fs.existsSync('./mine/' + message.author.id + '.txt')) {
                fs.readFile('./mine/' + message.author.id + '.txt', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        mine = data.toString();
                    }          
                });
            }

            if (fs.existsSync('./pickup/' + message.author.id + '.txt')) {
                fs.readFile('./pickup/' + message.author.id + '.txt', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        pickup = data.toString();
                    }          
                });
            }

            if (fs.existsSync('./duel/' + message.author.id + '.txt')) {
                fs.readFile('./duel/' + message.author.id + '.txt', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        duel = data.toString();
                    }          
                });
            }

            if (fs.existsSync('./epicquest/' + message.author.id + '.txt')) {
                fs.readFile('./epicquest/' + message.author.id + '.txt', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        epicquest = data.toString();
                    }          
                });
            }


            if (fs.existsSync('./hunt/' + message.author.id + '.txt')) {
                fs.readFile('./hunt/' + message.author.id + '.txt', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        hunt = data.toString();
                    }          
                });
            }

            if (fs.existsSync('./lootbox/' + message.author.id + '.txt')) {
                fs.readFile('./lootbox/' + message.author.id + '.txt', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        lootbox = data.toString();
                    }          
                });
            }


            if (fs.existsSync('./training/' + message.author.id + '.txt')) {
                fs.readFile('./training/' + message.author.id + '.txt', (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        training = data.toString();
                    }          
                });
            }

            

            setTimeout(() => {
                embed = new MessageEmbed()
                .setColor("#00b7ff")
                .setTitle(`${message.author.username}'s`)
                //.setAuthor(message.author.username, message.author.avatarURL('png', true, 32))
                .setThumbnail(avatar)
                //.setThumbnail(message.author.avatarURL('png', true, 32))
                .setDescription(`🔔 **Meus lembretes** 🔔`)
                .addFields(
                    { name: 'Chop | Axe | Bowsaw | Chainsaw: ', value: `_${chop}_`, inline: false},
                    { name: 'Fish | Net | Boat | Bigboat: ', value: `_${fish}_`, inline: false},
                    { name: 'Mine | Pickaxe | Drill | Dynamite: ', value: `_${mine}_`, inline: false},
                    { name: 'Pickup | Ladder | Tractor | Greenhouse: ', value: `_${pickup}_`, inline: false},
                    { name: 'Adventure: ', value: `_${adventure}_`, inline: true},
                    { name: 'Duel: ', value: `_${duel}_`, inline: true},
                    //{ name: '\u200B', value: '\u200B', inline: true },
                    { name: 'Hunt: ', value: `_${hunt}_`, inline: true},
                    //{ name: '\u200B', value: '\u200B', inline: true },
                    { name: 'Lootbox: ', value: `_${lootbox}_`, inline: true},
                    { name: 'Training: ', value: `_${training}_`, inline: true},
                    { name: 'Epic Quest', value: `_${epicquest}_`, inline: true }
                    //{ name: '\u200B', value: '\u200B', inline: true }
                );
                message.channel.send(embed);
            }, 3000);



            /*
            embed
            .setColor("#00b7ff")
            .setTitle("Meus lembretes")
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
            */
     
        }
           

    }
}