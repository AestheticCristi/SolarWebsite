require('dotenv').config(); // Încarcă variabilele din .env
const express = require('express');
const cors = require('cors');
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const app = express();
app.use(cors());
app.use(express.json());

// Inițializare Bot
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`✅ Bot activ: ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN); // Folosește token-ul din .env

// Endpoint pentru aplicații
app.post('/api/aplicatii', async (req, res) => {
    const data = req.body;

    try {
        const channel = await client.channels.fetch(process.env.CHANNEL_ID);
        
        const embed = new EmbedBuilder()
            .setTitle("📝 Aplicație Nouă - Solar Team")
            .setColor(0xF1C40F)
            .addFields(
                Object.keys(data).map(key => ({
                    name: key.toUpperCase(),
                    value: String(data[key] || "Nespecificat"),
                    inline: true
                }))
            )
            .setTimestamp();

        await channel.send({ embeds: [embed] });
        res.status(200).json({ success: true });
    } catch (err) {
        console.error('Eroare Discord:', err);
        res.status(500).json({ success: false });
    }
});

app.listen(5000, () => console.log('Server API activ pe portul 5000'));