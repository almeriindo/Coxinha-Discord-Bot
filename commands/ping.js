module.exports = {
    name: 'ping',
    description: 'Ping... pong',
    usage: 'ping',
    execute(message, deleteAfter) {
        if(deleteAfter) {
            message.channel.bulkDelete(1);
        }
        message.channel.send("Pong!");
    }
}