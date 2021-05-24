const router = require("express").Router();
const { phoneNumbers } = require("../models/models");

router.get("/test", (req, res) => {
  res.status(200).json({ message: "Test endpoint working" });
});

router.post("/phonenumber/:number", (req, res) => {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const { number } = req.params;

  if (!Number(number)) {
    res.send("Not a number");
  }

  phoneNumbers.find({ phoneNumber: number }, (err, docs) => {
    if (err) {
      throw err;
    }

    if (docs.length) {
      res.send("Number already exists");
    } else {
      if (regex.test(number)) {
        phoneNumbers.create({ phoneNumber: number });
        res.send("Number inserted sucessfully");
      } else {
        res.send("Invalid phone number");
      }
    }
  });
});

module.exports = router;
