# [Poru Music](https://discord.com/api/oauth2/authorize?client_id=987704017410985985&permissions=8&scope=applications.commands%20bot)

A Music Bot Template based on [Poru](https://npmjs.com/poru) lavalink client ❤️

Fork Info: the Play slash command was broken and only ever searched for
'undefined'. Fixed that. Also the original package.json gave me a lot of
trouble, so I reinitialized it using npm v20. Now everything seems to work.  
-Ryan y.


## Features

- Poru wrapper based music client
- Rich audio quality music
- Inbuilt audio filters
- 100% Compatible with Lavalink
- Easy to use and setup

## Configuration

- Enter your bot token in .env file with `TOKEN` variable

```js
{
  "prefix": '.',
  "ownerIds":["YOUR DISCORD ID"],
  "nodes": [{
    "name":"NODE_1",
    "host":"localhost", // Your lavalink host
    "port": 2333, // Your lavalink port
    "password": "youshallnotpass", // Your lavalink pass
    "secure": "false" // Your lavalink secure true/false
  }]
}
```

### Need help

If you need help then feel free to join our [Support server](https://discord.gg/b3k6XNA5pw).

- [ Note ] Support us by starring this repository, following [Paras](https://github.com/parasop) and by Donating [here](https://ko-fi.com/parasdev).
