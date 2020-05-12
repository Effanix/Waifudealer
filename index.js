const { Client, Attachment } = require("discord.js");
const bot = new Client();

const cheerio = require("cheerio");

const request = require("request");

const token = "";

const PREFIX = "*";

var version = "1.0.3";

bot.on("ready", () => {
  console.log("This bot is online! " + version);
});

bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "waifu":
      waifu(message);
      break;

    case "ping":
      message.channel.send("pong!");
      break;

    case "best":
      message.channel.send("My master @Kyano#5220 is the best ofcourse!");
      break;

    case "neko":
      neko(message);
      break;

    case "foxgirl":
      foxgirl(message);
      break;

    case "hentai":
      message.channel.send("Pervert! Ok I'm calling the FBI!");
      break;
    case "p kyano":
      message.channel.send("-p https://open.spotify.com/playlist/5TJ6SGAGUg23VHCmcg82Ue?si=AdaO4oYgSkGtnn271-Equw")
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

function waifu(message) {
  var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + "Anime Girls",
    method: "GET",
    headers: {
      Accept: "text/html",
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

function neko(message) {
  var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + "neko",
    method: "GET",
    headers: {
      Accept: "text/html",
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

function foxgirl(message) {
  var options = {
    url: "http://results.dogpile.com/serp?qc=images&q=" + "foxgirl",
    method: "GET",
    headers: {
      Accept: "text/html",
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