module.exports = {
    name: 'training',
    description: 'Lembrar rpg training',
    execute(message, args, fs) {
        var person = message.author.id;
        var file = './training/' + person + '.txt';
        if(args) {
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });
        } else {
            message.channel.send("Modo de uso: c>training [true/false]");
        }

        //if (!fs.existsSync('./training/' + message.author.id + '.txt')) return;
        setTimeout(() => {
            fs.readFile('./training/' + message.author.id + '.txt', (err, data) => {
                if(data.toString() === 'true') { message.react('✅').catch(console.error); }
                if(data.toString() === 'false') { message.react('❌').catch(console.error); }
            });
        }, 1000);
    }
}