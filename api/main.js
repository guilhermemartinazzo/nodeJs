import express from "express";
import cors from "cors";
import * as category from "../entity/category.js";
import * as cart from "../entity/cart.js";

const categorias = [
  category.createCategory(1, "Tecnologia"),
  category.createCategory(3, "Perfumaria"),
  category.createCategory(2, "Vestuário"),
  category.createCategory(4, "Informática"),
];
const key = "1234";
const carts = [
  cart.createCart(1, 500, 1),
  cart.createCart(2, 600, 1),
  cart.createCart(3, 700, 1),
];

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
app.get("/categories", authenticate, (req, res) => {
  let params = req.params;
  categorias.sort((a, b) => {
    return a.id - b.id;
  });
  console.log(categorias);
  res.json(categorias);
});

app.get("/carts", (req, res) => {
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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
