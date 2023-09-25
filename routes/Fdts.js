const express = require("express");
const router = express.Router();
const { Fdts } = require("../models");

router.get("/", async (req, res) => {
  const listOfFdts = await Fdts.findAll();
  res.json(listOfFdts);
});
router.get("/:oltId", async (req, res) => {
    const oltId = req.params.oltId;
    const fdts = await Fdts.findAll({ where: { OltId: oltId } });
    res.json(fdts);
  });
router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const fdt = await Fdts.findByPk(id);
    res.json(fdt);
  });

router.post("/", async (req, res) => {
  const fdt = req.body;
  await Fdts.create(fdt);
  res.json(fdt);
});
router.delete("/:fdtId", async (req, res) => {
  const fdtId = req.params.fdtId ;
  await Fdts.destroy({
    where: {
      id: fdtId,
    },
  });

  res.json("DELETED SUCCESSFULLY");
});
module.exports = router;