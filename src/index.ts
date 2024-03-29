import { Client } from "discord.js";
import { config } from "./config";
import interactionCreate from "./interactionCreate";
import ready from "./ready";

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

console.log("Bot starting up...");

ready(client);
interactionCreate(client);

client.login(config.DISCORD_TOKEN);

