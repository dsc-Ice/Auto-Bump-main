const { Client } = require('discord.js-selfbot-v13');
const config = require('./config');
const client = new Client({
    checkUpdate: false,
});

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // Définir l'activité du bot en utilisant les paramètres du fichier config
    client.user.setActivity(config.activity.name, { 
        type: config.activity.type, 
        url: config.activity.url 
    });

    // Récupérer le canal pour les commandes de bump
    const channel = await client.channels.fetch(config.client.bumpChannel);
    
    // Configurer l'envoi régulier de la commande bump
    setInterval(async function () {
        await channel.sendSlash('302050872383242240', 'bump');
        console.count('Bumped!');
    }, 2 * 60 * 60 * 1000); // Toutes les 2 heures
});

// Se connecter au bot en utilisant le token
client.login(config.client.token);
