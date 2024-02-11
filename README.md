# AiBot

An AI Discord bot

## Setup

You must create an `.env` file at the root of the project. This should look like
> DISCORD_TOKEN=`<DISCORD_TOKEN>`
DISCORD_CLIENT_ID=`<DISCORD_CLIENT_ID>`

Where `<DISCORD_TOKEN>` is the token you get from Discord and must be kept secret. And `<DISCORD_CLIENT_ID>` is the unique id given to you by Discord.

## Run

Development - this starts a watch and recompiles as needed
> npm run dev

Prod - build and then run
>npm run build
npm run start