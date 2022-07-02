module.exports = {
    name: 'duel',
    description: 'Lembrar rpg duel',
    execute(message, args, fs) {
        var person = message.author.id;
        var file = './duel/' + person + '.txt';
        if(args) {
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });
        } else {
            message.channel.send("Modo de uso: c>duel [true/false]");
        }

        //if (!fs.existsSync('./duel/' + message.author.id + '.txt')) return;
        setTimeout(() => {
            fs.readFile('./duel/' + message.author.id + '.txt', (err, data) => {
                if(data.toString() === 'true') { message.react('✅').catch(console.error); }
                if(data.toString() === 'false') { message.react('❌').catch(console.error); }
            });
        }, 1000);
    }
}