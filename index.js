const { Client, Attachment } = require("discord.js");
const bot = new Client();

const cheerio = require("cheerio");

const request = require("request");

const token = "";

const PREFIX = "*";

var version = "1.0.9";

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
        message.channel.send("[ ping ] [ introduce ] [ roast ] [ disclaimer ] [ laugh ] [ help me im getting kidnapped ] [ joke ] [ version ] ");
        break;
    case "introduce":
      message.channel.send("Hello my name is Effanix but I'm not as cool as the real Effanix, I was built by Effanix, a professional otaku");
      break;
    case "roast":
      message.channel.send("If you had two less braincells you would have as many as a plant")
      break;
    case "disclaimer":
      message.channel.send("Everything I'm about to say is a joke, do not take any of this serious, pls don't cancell me")
      break;
    case "help me im getting kidnapped":
      message.channel.send("fucking loser ur so stupid")
      break;
    case "joke":
      message.channel.send("You fucking life is a joke, ur such a fucking losers, you should think of killing yourself (for legal reasons thas a joke)")
      break;
    case "version":
      message.channel.send("WaifuDealer's version is " + version)
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
