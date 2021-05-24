const CronJob = require("cron").CronJob;
const { shloks } = require("./shloks");
const { phoneNumbers } = require("./models/models");
const Vonage = require("@vonage/server-sdk");
require("dotenv").config();

const vonage = new Vonage({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
});

exports.job = new CronJob("*/1 * * * *", function () {
  const index = Math.floor(Math.random() * (shloks.length - 1 + 0));
  console.log(shloks[index]);

  phoneNumbers.find({}, (err, docs) => {
    docs.forEach((doc) => {
      vonage.message.sendSms(
        "15064742664",
        `1${doc.phoneNumber}`,
        shloks[index],
        (err, res) => {
          if (err) {
            throw err;
          }
          console.log(res);
        }
      );
    });
  });
});
