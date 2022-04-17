import "dotenv-safe/config";
import { Master } from "eris-sharder";

new Master(process.env.BOT_TOKEN!, "/dist/main.js", {
	stats: true,
	name: "Fynn",
	clientOptions: {}
});
