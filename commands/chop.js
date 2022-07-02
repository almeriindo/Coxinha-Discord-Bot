module.exports = {
    name: 'chop',
    description: 'Lembrar rpg chop',
    execute(message, args, fs) {
        var person = message.author.id;
        var file = './chop/' + person + '.txt';
        if(args) {
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });
        } else {
            message.channel.send("Modo de uso: c>chop [true/false]");
        }

        //if (!fs.existsSync('./chop/' + message.author.id + '.txt')) return;
        setTimeout(() => {
            fs.readFile('./chop/' + message.author.id + '.txt', (err, data) => {
                if(data.toString() === 'true') { message.react('✅').catch(console.error); }
                if(data.toString() === 'false') { message.react('❌').catch(console.error); }
            });
        }, 1000);
    }
}