import { CommandInteraction, Client, ApplicationCommandType, ApplicationCommandOptionType } from "discord.js";
import { Command } from "../Command";
import axios, { AxiosError, AxiosResponse } from 'axios';

let inUse: boolean = false;

export const DmCommand: Command = {
    name: "dm",
    description: "Returns some DnD DM stuff",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "prompt",
            type: ApplicationCommandOptionType.String,
            description: "what would you like to do?",
            required: true
        }
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        if(inUse){
            try {
                await interaction.deferReply();
            } catch (error) {
                console.error("failed to deferReply", error);
            }  
            return;
        }
        inUse = true;
        if (!interaction.options.data || !interaction.options.data.length){
            try {
                await interaction.deferReply();
            } catch (error) {
                console.error("failed to deferReply", error);
            }
            return;
        }
        const prompt = interaction.options.data.find(d=>d.name == 'prompt');
        if(!prompt || !prompt?.value){
            try {
                await interaction.deferReply();
            } catch (error) {
                console.error("failed to deferReply", error);
            }
            return;
        }
        try {
            var response = await axios.post('http://127.0.0.1:11434/api/generate', {
                "model": "dm",
                "prompt": `${prompt.value}. respond with less than 2000 characters`,
                "stream": false,
            });
            const content = (response.data.response as string).substring(0,2000);
            //console.log("got response", content);
            await interaction.followUp({
                ephemeral: true,
                content
            });
        } catch (exception){
            console.error("got exception", exception);
            try {
                await interaction.deferReply();    
            } catch (error) {
                console.error("failed to deferReply", error);
            }            
            return;
        } finally {
            inUse = false;
        }
    }
};