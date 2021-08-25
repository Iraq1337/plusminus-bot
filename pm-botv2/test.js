let user = "user";
let gay = Math.floor(Math.random() * 101);
let gaymessages = [
    `${user} is ${gay}% gay!`,
    "message2",
    "message3"
];
let message = gaymessages[Math.floor(Math.random() * gaymessages.length)]

console.log(message)