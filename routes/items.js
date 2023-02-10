const express = require("express");
const router = express.Router();

const {
  getAllItems,
  createItem,
  getItemById,
  updateItem,
  deleteItemById,
} = require("../controllers/items");

router.route("/").get(getAllItems).post(createItem);
router.route("/:id").get(getItemById).put(updateItem).delete(deleteItemById);

module.exports = router;
