import "dotenv-safe/config";
import { Client, Message } from "eris";
import { Base } from "eris-sharder";
import { all, create } from "mathjs";
import { functions } from "./functions";

export = class Bot extends Base {
	public constructor(client: { bot: Client; clusterID: number }) {
		super(client);
	}

	public launch() {
		this.bot.on("messageCreate", this.handler);

		this.bot.editStatus("online", { name: "Monty Hall" });
	}

	private handler(message: Message) {
		if (
			message.channel.id !== process.env.CALC_CHANNEL ||
			message.author.bot ||
			message.content.startsWith("!")
		)
			return;

		const math = create(all);
		math.import(functions, {});

		let res: string | undefined;

		try {
			res = math.evaluate(message.content);
		} catch {}

		message.channel.createMessage({
			embed: {
				description: `**Expression:**\`\`\`${
					message.content
				}\`\`\`\n**Result:**\`\`\`${res === undefined ? "❌" : res}\`\`\``,
				footer: {
					text: message.member?.nick || message.author.username,
					icon_url: message.author.dynamicAvatarURL()
				},
				timestamp: new Date(),
				color: 0x5865f2
			}
		});
	}
};
