module.exports = {
    name: 'epicquest',
    description: 'Lembrar rpg epicquest',
    execute(message, args, fs) {
        var person = message.author.id;
        var file = './epicquest/' + person + '.txt';
        if(args) {
            fs.writeFile(file, args[0], function (err) {
                if (err) throw err;
                console.log('Set: ' + args[0]);
            });
        } else {
            message.channel.send("Modo de uso: c>epicquest [true/false]");
        }

        setTimeout(() => {
            fs.readFile('./epicquest/' + message.author.id + '.txt', (err, data) => {
                if(data.toString() === 'true') { message.react('✅').catch(console.error); }
                if(data.toString() === 'false') { message.react('❌').catch(console.error); }
            });
        }, 1000);

        //if (!fs.existsSync('./epicquest/' + message.author.id + '.txt')) return;
    }
}