const CronJob = require("cron").CronJob;
const { shloks } = require("./shloks");

exports.job = new CronJob("*/1 * * * *", function () {
  const index = Math.floor(Math.random() * (shloks.length - 1 + 0));
  console.log(shloks[index]);
});
