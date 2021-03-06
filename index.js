const { Client, Attachment } = require("discord.js");
const bot = new Client();

const cheerio = require("cheerio");

const request = require("request");

const token = "";

const PREFIX = "*";

var version = "1.0.6";

bot.on("ready", () => {
  console.log("This bot is online! " + version);
});

bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    
    case "ping":
      message.channel.send("pong!");
      break;
    case "help":
      message.channel.send("[ ping - bot answers with pong! ] [ introduce - bot will introduce itself ] [ roast - bot will roast you, there is only one roast becouse im not creative... ] [ disclaimer - bot will give a disclaimer for a joke that you are about to say ]");
      break;
    case "test":
      message.channel.send("Bot is running!");
      break;
    case "":
      message.channel.send("")
      break;
    case "":
      message.channel.send("")
      break;
    }
});

bot.on("message", function(message){
  var parts = message.content.split(" ");
  if (parts[0] === "*image")
    image(message, parts);
})

function image(message, parts){
var search = parts.slice(1).join(" ");

var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + search,
    method: "GET",
    headers: {
        "Accept": "text/html",
        "User-Agent": "Chrome"
    }
};

request(options, function(error, response, responseBody) {
  if (error) {
    return;
  }

  $ = cheerio.load(responseBody);

  var links = $(".image a.link");

  var urls = new Array(links.length)
    .fill(0)
    .map((v, i) => links.eq(i).attr("href"));

  console.log(urls);

  if (!urls.length) {
    return;
  }

  // Send result
  message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
});
}




bot.login(process.env.TOKEN);
