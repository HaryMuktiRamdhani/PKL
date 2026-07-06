const chat = ['halo', 'kamu', 'bodoh', 'keren', 'jelek'];

function sensorChat(dataChat) {
for (let i = 0; i < chat.length; i++) {
    if (chat[i] === "bodoh" || chat[i] === "jelek") {
        chat[i] = "***";
    }
}

return dataChat;
}
console.log(sensorChat(chat));