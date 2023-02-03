const express = require("express");
const router = express.Router();

const {
  getAllItems,
  createItem,
  getItemById,
  updateItem,
  deleteItemById,
  uploadFile,
} = require("../controllers/items");

router.route("/").get(getAllItems).post(createItem);
router.route("/:id").get(getItemById).put(updateItem).delete(deleteItemById);
router.route("/upload").post(uploadFile);

// app.post("/api/v1/items", upload.array("files", 12), function (req, res, next) {
//   console.log(req.files);
// });

module.exports = router;
