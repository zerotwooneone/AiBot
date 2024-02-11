import { Command } from "./Command";
import { Hello } from "./commands/Hello";
import { DmCommand } from "./commands/dm";

export const Commands: Command[] = [
    Hello,
    DmCommand,
];