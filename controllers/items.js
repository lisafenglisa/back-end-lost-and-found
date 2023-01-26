const client = require("../connection");

// get all items
const getAllItems = (req, res) => {
  // res.send("get all items");
  client.query(`Select * from items`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
};

const createItem = (req, res) => {
  res.json(req.body);
};

// get item by id
const getItemById = (req, res) => {
  client.query(
    `Select * from items where item_id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
};

const getItem = (req, res) => {
  res.json({ id: req.params.id });
};

const updateItem = (req, res) => {
  res.send("update item");
};

const deleteItem = (req, res) => {
  res.send("delete item");
};

client.connect();

module.exports = {
  getAllItems,
  createItem,
  getItemById,
  getItem,
  updateItem,
  deleteItem,
};
