const Discord = require('discord.js');

module.exports = {
    name: 'zoio',
    description: 'Hardcore',
    usage: 'zoio <texto>',
    execute(message, args) {
        const { createCanvas, loadImage } = require('canvas');
        const canvas = createCanvas(720, 688);
        const ctx = canvas.getContext('2d');

        var video = "";
        var comentario = "";
        var user = message.author.username;
        var avatar = message.author.avatarURL({format: 'png'});

        switch(Math.floor(Math.random() * 10)) {
            case 0:
                video = '././imgs/zoio-video01.png';
                break;
            case 1:
                video = '././imgs/zoio-video02.png';
                break;
            case 2:
                video = '././imgs/zoio-video03.png';
                break;
            case 3:
                video = '././imgs/zoio-video04.png';
                break;
            default:
                video = '././imgs/zoio-video05.png';
        }
       
        console.log(avatar);
        console.log(args);
        if(args) {
            for(var i = 0; i < args.length; i++) {
                if(i == (args.length - 1)) {
                    comentario += args[i];
                } else {
                    comentario += (args[i] + " ");   
                }
            }
        } else {
            message.channel.send("Modo de uso:\n" + this.usage);
        }

        loadImage(video).then((image) => {
            ctx.drawImage(image, 0, 0, 720, 394);
        })
        
        loadImage('././imgs/zoio-layout.png').then((image) => {
            ctx.drawImage(image, 0, 0, 720, 688);
            ctx.font = 'bold 26px Roboto';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'start';
            ctx.fillText(user, 145, 440, 284);

            ctx.font = '22px Roboto';
            ctx.fillStyle = '#b1b1b1';
            ctx.fillText('  1 dia atrás', (155 + ctx.measureText(user).width), 440);

            ctx.font = '28px sans-serif';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'start';
            ctx.fillText(comentario, 145, 480);

            var x = ctx.measureText(comentario).width;
            console.log(x);

        })

        loadImage(avatar).then((image) => {
            ctx.drawImage(image, 30, 416, 82, 82);
            ctx.beginPath();
            ctx.arc(73, 457, 41, 0, 2 * Math.PI, false);
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#282828';
            ctx.stroke();
            ctx.arc(73, 457, 53, 0, 2 * Math.PI, false);
            ctx.lineWidth = 12;
            ctx.stroke();

            const attach = new Discord.MessageAttachment(canvas.toBuffer(), 'whatever.png');
            message.channel.send(attach);
        })

        
    }
}

