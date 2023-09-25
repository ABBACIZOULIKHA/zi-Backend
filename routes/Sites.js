const express = require("express");
const router = express.Router();
const { Sites } = require("../models");

router.get("/:fdtId", async (req, res) => {
  const fdtId = req.params.fdtId;
  const sites = await Sites.findAll({ where: { FdtId: fdtId } });
  res.json(sites);
});
router.get("/byolt/:oltId", async (req, res) => {
  const oltId = req.params.oltId;
  const sites = await Sites.findAll({ where: { oltId: oltId } });
  res.json(sites);
});

router.post("/", async (req, res) => {
  const site = req.body;
  await Sites.create(site);
  res.json(site);
});
router.delete("/:siteId", async (req, res) => {
  const siteId = req.params.siteId ;
  await Sites.destroy({
    where: {
      id: siteId ,
    },
  });

  res.json("DELETED SUCCESSFULLY");
});
module.exports = router;