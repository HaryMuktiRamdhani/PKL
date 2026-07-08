const chat = ['halo', 'kamu', 'bodoh', 'keren', 'jelek'];

function sensorChat(dataChat) {
for (let i = 0; i < dataChat.length; i++) {
    if (dataChat[i] === "bodoh" || dataChat[i] === "jelek") {
        dataChat[i] = "***";
    }
}

return dataChat;
}
console.log(sensorChat(chat));