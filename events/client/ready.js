module.exports = (client) => {
    console.log(`[SYSTEM] ${client.user.tag} - Ready!`);
    client.user.setActivity("/help - BETA", { type: "PLAYING" });
}