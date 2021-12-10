module.exports = {
    app: {
        px: '!',
        token: 'OTE4NzQ5NTg0NTcyOTU2Njky.YbLyOg.VADVc8sz8VvujQXiW62cmr5BI_s',
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
