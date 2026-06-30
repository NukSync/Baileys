//=======================================================//

import chalk from 'chalk';

console.log(chalk.blue("\n═══════════════-"));
console.log(chalk.magentaBright("► New Baileys Vip"));
console.log(chalk.blueBright("► Telegram: ") + chalk.whiteBright("https://t.me/nuksync17"));
console.log(chalk.blueBright("► Website: ") + chalk.whiteBright("vip.nuksync-17.web.id"));
console.log(chalk.blue("═══════════════-\n"));

import makeWASocket from "./Socket/index.js";
//=======================================================//
export * from "./Defaults/index.js";
export * from "./WABinary/index.js";
export * from "../WAProto/index.js";
export * from "./WAUSync/index.js";
export * from "./Store/index.js";
export * from "./Utils/index.js";
export * from "./Types/index.js";
export * from "./WAM/index.js";
//=======================================================//
export { makeWASocket };
export default makeWASocket;
//=======================================================//