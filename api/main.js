import express from "express";
import cors from "cors";
import * as category from "../entity/category.js";
import * as cart from "../entity/cart.js";
import * as database from "../database/database.js";
import axios from "axios";

const categorias = [
  category.createCategory(1, "Tecnologia"),
  category.createCategory(3, "Perfumaria"),
  category.createCategory(2, "Vestuário"),
  category.createCategory(4, "Informática"),
];

const key = "meu-token-forte";
const carts = [
  cart.createCart(1, 500, 1),
  cart.createCart(2, 600, 1),
  cart.createCart(3, 700, 1),
];

const sql = "Select * from cliente";
const result = database.executeSqlConsult(sql);
result.then((e) => {
  console.log(e);
});
// const sqlInsert =
//   "Insert into cliente (nome,documento,id_status) values(?,?,?)";
// const values = ["guilherme", "12345678", 1];
// database.executeSqlWithParams(sqlInsert, values);

function authenticate(req, res, next) {
  let keyProvided = req.headers["authorization"];
  if (key == keyProvided) {
    next();
  } else {
    res.status(401).json({ error: "Invalid access key" });
  }
}
const app = express();
app.use(cors());
app.use(express.json());
app.get("/categories", authenticate, (req, res) => {
  let params = req.params;
  categorias.sort((a, b) => {
    return a.id - b.id;
  });
  console.log(categorias);
  res.json(categorias);
});

app.get("/carts", authenticate, (req, res) => {
  let id = req.query.id;
  console.log(typeof id);
  console.log(typeof carts[0].id);
  if (id) {
    console.log(`Filtered by id ${id}`);
    const cartFiltered = carts.find((c) => c.id == id);
    res.json(cartFiltered ?? []);
  } else {
    res.json(carts);
  }
});
const tokenSeguro = "meu-token-seguro";
app.post("/login", async (req, res) => {
  let body = req.body;
  console.log(body);
  var [result] = await database.executeSqlConsult(
    "Select * from user where name = ? and password = ?",
    [body.name, body.password]
  );

  if (result.length > 0) {
    res.json({ message: "Success", token: key });
  } else {
    res.status(401).json({ message: "Invalid user" });
  }
});

app.post("/user", authenticate, async (req, res) => {
  createUser(req, res);
});

app.get("/user", authenticate, async (req, res) => {
  console.log("Passou aqui no /user");
  getAllUsers(res);
});

app.get("/user/:id", authenticate, async (req, res) => {
  console.log("Passou aqui no /user/id");
  const id = req.params.id;
  getUserById(id, res);
});

async function createUser(req, res) {
  const sql =
    "Insert into user (name,email,password,document) values (?,?,?,?)";
  const body = req.body;
  const values = [body.name, body.email, body.password, body.document];

  try {
    var result = await database.executeSqlWithParams(sql, values);
    res
      .status(201)
      .json({ message: "User created successfully", id: result[0].insertId });
  } catch (err) {
    res.status(400).json({ message: "User not created", reason: err.message });
  }
}

app.get("/product", authenticate, async (req, resp) => {
  getAllProducts(resp);
});

app.get("/product/:id", authenticate, async (req, resp) => {
  const id = req.params.id;
  getProductById(id, resp);
});

async function getProductById(id, resp) {
  const sql = "Select * from produto where id = ?";
  const product = await database.executeSqlConsult(sql, id);
  if (product.length > 0) {
    resp.json(product);
  } else {
    resp.status(404).json({ message: `Product ${id} not found` });
  }
}

async function getUserById(id, resp) {
  const sql = "Select * from user where id = ?";
  const us = await database.executeSqlConsult(sql, id);
  if (us.length > 0) {
    resp.json(us);
  } else {
    resp.status(404).json({ message: `User ${id} not found` });
  }
}

async function getAllUsers(resp) {
  try {
    const sql = "Select * from user";
    const products = await database.executeSqlConsult(sql);
    resp.json(products);
  } catch (err) {
    resp.status(500).json({ message: err.message });
  }
}

async function getAllProducts(resp) {
  try {
    const sql = "Select * from produto";
    const products = await database.executeSqlConsult(sql);
    resp.json(products);
  } catch (err) {
    resp.status(500).json({ message: err.message });
  }
}

app.get("/advice", async (req, res) => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    res.json(response.data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
