module.exports = {
    name: 'say',
    description: 'Say so',
    usage: 'say <something>',
    execute(message, args) {
        if(message.author.id === '283654977401126912') {
            message.channel.send(args.join(" "));
            message.delete();
        }
    }
}