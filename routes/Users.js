const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password ,profile} = req.body;
  await bcrypt.hash(password, 10).then((hash) => {
     Users.create({
      username: username,
      password: hash,
      profile :profile ,
      firstname :"",
      lastname :""
    });
    res.json("SUCCESS");
  });
});
router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const user = await Users.findByPk(id);
    res.json(user);
  });

router.get("/byusername/:username", async (req, res) => {
    const username = req.params.username;
    const user = await Users.findOne({ where: { username: username } });
    res.json(user);
  });  

router.get("/", async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
  });


router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) res.json({ error: "User Doesn't Exist" });
  
  
  bcrypt.compare(password, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantsecret"
    );
    res.json(accessToken);
  });
});
router.delete("/:userId", async (req, res) => {
  const userId = req.params.userId;
  await Users.destroy({
    where: {
      id: userId,
    },
  });

  res.json("DELETED SUCCESSFULLY");
});

router.put("/username", async (req, res) => {
  const { newUsername, id } = req.body;
  await Users.update({ username: newUsername }, { where: { id: id } });
  res.json(newUsername);
});

router.put("/password", async (req, res) => {
  const { newpassword, id } = req.body;
  await bcrypt.hash(newpassword, 10).then((hash) => {
    Users.update({ password: hash }, { where: { id: id } });
    res.json(newpassword);
 });

});

router.put("/firstname", async (req, res) => {
  const { newfirstname, id } = req.body;
  await Users.update({ firstname: newfirstname }, { where: { id: id } });
  res.json(newfirstname);
});

router.put("/lastname", async (req, res) => {
  const { newlastname, id } = req.body;
  await Users.update({ lastname: newlastname }, { where: { id: id } });
  res.json(newlastname);
});

router.put("/profile", async (req, res) => {
  const { newprofile, id } = req.body;
  await Users.update({ profile: newprofile }, { where: { id: id } });
  res.json(newprofile);
});

module.exports = router;