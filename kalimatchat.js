const chat = ['halo', 'kamu', 'bodoh', 'keren', 'jelek'];

for (let i = 0; i < chat.length; i++) {
    if (chat[i] === "bodoh" || chat[i] === "jelek") {
        chat[i] = "***";
    }
}

console.log(chat);