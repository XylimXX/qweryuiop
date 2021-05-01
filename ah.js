const fetch = require('node-fetch');

var a= 0;
fetch("https://api.hypixel.net/player?key=f6d7bc12-8627-4f99-b8b4-c0c4033591c9&name=Xylim")
    .then(result => result.json())
    .then(({ data }) => {
        console.log(data)
    })

document.getElementById("text").innerHTML = a;
