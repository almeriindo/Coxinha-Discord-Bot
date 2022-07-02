module.exports = {
    name: 'lootbox',
    description: 'Lembrar rpg lootbox',
    execute(message, args, fs) {
        var person = message.author.id;
        var file = './lootbox/' + person + '.txt';
        if(args) {
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });
        } else {
            message.channel.send("Modo de uso: c>lootbox [true/false]");
        }

        //if (!fs.existsSync('./lootbox/' + message.author.id + '.txt')) return;
        setTimeout(() => {
            fs.readFile('./lootbox/' + message.author.id + '.txt', (err, data) => {
                if(data.toString() === 'true') { message.react('✅').catch(console.error); }
                if(data.toString() === 'false') { message.react('❌').catch(console.error); }
            });
        }, 1000);
    }
}