const { response } = require("express");
const client = require("../connection");

// get all items
const getAllItems = (req, res) => {
  client.query(`Select * from items`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
};

// create an item
const createItem = (req, res) => {
  const item = req.body;
  console.log(item);
  let insertQuery = `insert into items(title, category, location, description, finder_name, email, phone, date, image_url)
                    values('${item.title}', '${item.category}', '${item.location}', '${item.description}', '${item.finder_name}', '${item.email}', '${item.phone}','${item.date}', '${item.image_url}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Successfully created item");
    } else {
      console.log(err.message);
    }
  });
  client.end;
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

// update item details
const updateItem = (req, res) => {
  let item = req.body;
  let updateQuery = `update items
                    set title = '${item.title}',
                    location = '${item.location}',
                    description = '${item.description}',
                    finder_name = '${item.finder_name}',
                    email = '${item.email}',
                    phone = '${item.phone}'
                    where item_id=${req.params.id}`;
  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Successfully updated item");
    } else {
      console.log(err.message);
    }
  });
  client.end;
};

const deleteItemById = (req, res) => {
  let insertQuery = `delete from items where item_id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Successfully deleted item");
    } else {
      console.log(err.message);
    }
  });
  client.end;
};

client.connect();

module.exports = {
  getAllItems,
  createItem,
  getItemById,
  updateItem,
  deleteItemById,
};
