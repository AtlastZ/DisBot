module.exports = {
    app: {
        px: '!',
        token: 'OTE4NzI4MDcwMjUxMzE1MjEw.YbLeMQ.qj6a3oQOFQGsUkDC0IlTfIM9mt0',
        playing: 'by Rei`'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
