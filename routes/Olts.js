const express = require("express");
const router = express.Router();
const { Olts } = require("../models");

router.get("/", async (req, res) => {
  const listOfOlts = await Olts.findAll();
  res.json(listOfOlts);
});

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const olt = await Olts.findByPk(id);
    res.json(olt);
  });

router.post("/", async (req, res) => {
  const olt = req.body;
  await Olts.create(olt);
  res.json(olt);
});
router.delete("/:oltId", async (req, res) => {
  const oltId = req.params.oltId ;
  await Olts.destroy({
    where: {
      id: oltId,
    },
  });

  res.json("DELETED SUCCESSFULLY");
});

router.put("/name", async (req, res) => {
  const { newName, id } = req.body;
  await Olts.update({ name: newName }, { where: { id: id } });
  res.json(newName);
});

router.put("/stackVlan", async (req, res) => {
  const { newStackVlan, id } = req.body;
  await Olts.update({ stackVlan: newStackVlan }, { where: { id: id } });
  res.json(newStackVlan);
});

router.put("/neName", async (req, res) => {
  const { newNeName, id } = req.body;
  await Olts.update({ neName: newNeName }, { where: { id: id } });
  res.json(newNeName);
});
router.put("/cmp", async (req, res) => {
  const { newCmp, id } = req.body;
  await Olts.update({ cmp: newCmp}, { where: { id: id } });
  res.json(newCmp);
});
router.put("/investNature", async (req, res) => {
  const { newInvestNature, id } = req.body;
  await Olts.update({ investNature: newInvestNature
  }, { where: { id: id } });
  res.json(newInvestNature);
});

router.put("/dwellingType", async (req, res) => {
  const { newDwellingType, id } = req.body;
  await Olts.update({ dwellingType: newDwellingType}, { where: { id: id } });
  res.json(newDwellingType);
});

router.put("/projectCode", async (req, res) => {
  const { newProjectCode, id } = req.body;
  await Olts.update({ projectCode: newProjectCode}, { where: { id: id } });
  res.json(newProjectCode);
});

router.put("/budgetCode", async (req, res) => {
  const { newBudgetCode, id } = req.body;
  await Olts.update({ budgetCode: newBudgetCode}, { where: { id: id } });
  res.json(newBudgetCode);
});

router.put("/geomarketingCode", async (req, res) => {
  const { newGeomarketingCode, id } = req.body;
  await Olts.update({ geomarketingCode: newGeomarketingCode}, { where: { id: id } });
  res.json(newGeomarketingCode);
});

router.put("/addressIp", async (req, res) => {
  const { newAddressIp, id } = req.body;
  await Olts.update({ addressIp: newAddressIp}, { where: { id: id } });
  res.json(newAddressIp);
});
router.put("/dwellingsNumber", async (req, res) => {
  const { newDwellingsNumber, id } = req.body;
  await Olts.update({ dwellingsNumber: newDwellingsNumber}, { where: { id: id } });
  res.json(newDwellingsNumber);
});

module.exports = router;