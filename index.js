const data = [
    {
        name: "RUTH MUTANU",
        post: "A WEB DESIGNER",
        design: "A GRAPHIC DESIGNER"
    }
];

let index = 0;

function updateText() {
    document.getElementById("name").innerText = data[index].name;
    document.getElementById("post-design-text").innerText = data[index].post + " & " + data[index].design;

    index = (index + 1) % data.length;
}

updateText();

setInterval(updateText, 5000);