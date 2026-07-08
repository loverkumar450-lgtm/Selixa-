function send() {
    let input = document.getElementById("msg");
    let chat = document.getElementById("chat");

    let text = input.value;

    if (text.trim() === "") return;

    chat.innerHTML += "<p><b>You:</b> " + text + "</p>";

    let reply = "Mujhe abhi seekhna hai 😊";

    if (text.toLowerCase() == "hi") {
        reply = "Hello Lover! 👋";
    } else if (text.toLowerCase() == "bye") {
        reply = "Bye Lover! ❤️";
    } else if (text.toLowerCase() == "name") {
        reply = "Mera naam Selixa hai.";
    }

    chat.innerHTML += "<p><b>Selixa:</b> " + reply + "</p>";

    input.value = "";
}
