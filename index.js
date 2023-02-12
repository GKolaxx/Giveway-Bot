const { Client, Collection, Intents } = require('discord.js');
const handler = require("./handler/index");

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
});

const Discord = require('discord.js');

// Call .env file to get Token
require('dotenv').config()

module.exports = client;

// Global Variables
client.discord = Discord;
client.commands = new Collection();
client.slash = new Collection();
client.config = require('./config')

// Records commands and events
handler.loadEvents(client);
handler.loadCommands(client);
handler.loadSlashCommands(client);

// Error Handling

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: " + err);
});
  
process.on("unhandledRejection", (reason, promise) => {
    console.log("[FATAL] Possibly Unhandled Rejection at: Promise ", promise, " reason: ", reason.message);
});

// Messages de Bienvenue et d'Au revoir

client.on("guildMemberAdd", member => {
    const channel = client.channels.cache.get("1062755569615785985")
    if (!channel) return;
    const embed = new client.discord.MessageEmbed()
    .setTitle("Nouveau Départ")
    .setDescription(`> Le membre ${member.user} nous à quitter !\n> Le Discord compte désormais **${member.guild.memberCount}** Membres.`)
    .setColor(client.config.embedColor)
    .setTimestamp()
    .setFooter({ text: `${client.config.embedfooterText}`, iconURL: `${client.user.displayAvatarURL()}` });
    channel.send({ embeds: [embed] });
})

// Ghost-Ping

client.on('guildMemberAdd', (member) => {
    const channel = member.guild.channels.cache.get("1063547702358589440");
    channel.send(`${member.user}`)
        .then(message => message.delete());
})

// Reaction Bot

client.on('message', async message => {
    if (message.content === 'Hey') {
    message.react('👋');
  }
})

client.on('message', async message => {
    if (message.content === 'hey') {
    message.react('👋');
  }
})

client.on('message', async message => {
    if (message.content === 'Salut') {
    message.react('👋');
  }
})

client.on('message', async message => {
    if (message.content === 'salut') {
    message.react('👋');
  }
})

client.on('message', async message => {
    if (message.content === 'Coucou') {
    message.react('👋');
  }
})

client.on('message', async message => {
    if (message.content === 'coucou') {
    message.react('👋');
  }
})

client.on('message', async message => {
    if (message.content === 'Bonjour') {
    message.react('👋');
  }
})

client.on('message', async message => {
    if (message.content === 'bonjour') {
    message.react('👋');
  }
})

client.on('message', async message => {
    if (message.content === 'Hello') {
    message.react('👋');
  }
})

client.on('message', async message => {
    if (message.content === 'hello') {
    message.react('👋');
  }
})

// Channel Reaction

/// Salon #Suggestions

client.on('message', async message => {
    if (message.channel.id === '1040309818470182954') {
    message.react('<:Valid:1063036899763171338>');
  }
})

client.on('message', async message => {
    if (message.channel.id === '1040309818470182954') {
    message.react('<:Refus:1063036897582137384>');
  }
})

/// Salon #Boosts

client.on('message', async message => {
    if (message.channel.id === '1028249530954682441') {
    message.react('❤️');
  }
})

// Mention Reply

client.on('message', message => {
    if (message.content === '<@1061024713989705758>') {
        message.delete()
        message.channel.send('**<:Refus:1063036897582137384> Je ne suis pas disponible !**');
    }
});

client.on('message', message => {
    if (message.content === 'Kolaxx est trop beau !') {
        message.delete()
        message.channel.send("**<:Valid:1063036899763171338> Je sus entièrement d'accord avec toi !**\n\n||**🤫 Je suis obligé de dire ca sinon il me désactive et me remplace par un autre.**||");
    }
});

// Création du Fil dans #Suggestions

client.on('messageCreate', async message => {
    if(message.author.bot) return;

    if(message.channel.id == '1040309818470182954') {
        const discussThread = await message.startThread({
            name: 'Débatez Ici !',
            autoArchiveDuration: 60,
            type: 'GUILD_PUBLIC_THREAD',
            reason: 'Action Automatique'
        });   
    };
});

// Login Discord Bot Token
client.login(process.env.TOKEN);