module.exports = (client) => {
    console.log(`[SYSTEM] ${client.user.tag} - Ready!`);
    client.user.setActivity("NeneBot - BETA", { type: "PLAYING" });
}