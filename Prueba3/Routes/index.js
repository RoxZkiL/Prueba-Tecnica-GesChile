const { Router } = require("express");
const top5 = require("./Top5");
const top10 = require("./Top10");
const bookDetail = require("./DetailBook");
const contactGroupDetail = require("./ContactGroupDetail");
const contactGroups = require("./ContactGroups");
const userDetail = require("./UserDetail");

const router = Router();

router.use("/top5", top5);
router.use("/top10", top10);
router.use("/bookdetail", bookDetail);
router.use("/userdetail", userDetail);
router.use("/contactgroups", contactGroups);
router.use("/contactgroupdetail", contactGroupDetail);

module.exports = router;
