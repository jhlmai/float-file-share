const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/floatusers");

const userSeed = [
  {
    "username": "bharloe",
    "location": {
      "coordinates": [-117.184242, 32.853822], 
      "type": "Point"
    },
    "socialProfiles": {
      "facebook": "facebook.com/ben",
      "instagram": "benharloe"
    },
    "savedFiles": {
      "pdf": "pdf_url",
      "audiofile": "audio_url"
    },
    "image" : "https://image.flaticon.com/icons/svg/145/145867.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "username": "kyleconnolly",
    "location": {
      "coordinates": [-117.183268, 32.853431], 
      "type": "Point"
    },
    "socialProfiles": {
      "facebook": "facebook.com/kyle",
      "instagram": "kyle"
    },
    "savedFiles": {
      "audiofile": "audio_url"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163837.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "username": "johnm",
    "location": {
      "coordinates": [-117.184637, 32.852760], 
      "type": "Point"
    },
    "socialProfiles": {
      "facebook": "facebook.com/john"
    },
    "savedFiles": {
      "javascript": "javascript_url"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163814.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "username": "kevin",
    "location": {
      "coordinates": [-117.188189, 32.854047], 
      "type": "Point"
    },
    "socialProfiles": {
      "facebook": "facebook.com/ben",
      "snapchat": "kevinsemo",
      "linkedin": "kevinsemo"
    },
    "savedFiles": {
      "javascript": "javascript_url"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163804.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "username": "Clark",
    "location": {
      "coordinates": [-117.187062, 32.851830], 
      "type": "Point"
    },
    "socialProfiles": {
      "snapchat": "clark",
      "linkedin": "clarkphan",
      "twitter": "twitter.com/clarkphan"
    },
    "savedFiles": {
      "pdf": "pdf_url",
      "audiofile": "audio_url",
      "javascript": "javascript_url"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163801.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "username": "TheTravMan",
    "location": {
      "coordinates": [-117.204316, 32.854476], 
      "type": "Point"
    },
    "socialProfiles": {
      "snapchat": "Travis",
      "linkedin": "Travis"
    },
    "savedFiles": {
      "pdf": "pdf_url",
      "javascript": "javascript_url"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163827.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "username": "David",
    "location": {
      "coordinates": [-117.234294, 32.849433], 
      "type": "Point"
    },
    "socialProfiles": {
      "snapchat": "David",
      "linkedin": "David"
    },
    "savedFiles": {
      "pdf": "pdf_url",
      "audiofile": "audio_url"
    },
    "image": "https://image.flaticon.com/icons/svg/145/145859.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  },
  {
    "username": "johnd",
    "location": {
      "coordinates": [-117.273001, 32.851099], 
      "type": "Point"
    },
    "savedFiles": {
      "audiofile": "audio_url",
      "javascript": "javascript_url"
    },
    "socialProfiles": {
      "snapchat": "johnd",
      "linkedin": "johnd"
    },
    "image": "https://image.flaticon.com/icons/svg/163/163834.svg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim feugiat sodales. Donec finibus urna eget lobortis aliquam. Nunc elementum sollicitudin sagittis."
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });