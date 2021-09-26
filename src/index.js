const {
	Client,
	Intents: { FLAGS },
} = require("discord.js");
const { config } = require("dotenv");

config();

const client = new Client({ intents: [FLAGS.GUILDS] });

client.once("ready", (onlineClient) =>
	console.log(`Connesso con successo come ${onlineClient.user.tag}!`)
);

client.login();
