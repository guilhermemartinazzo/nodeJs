class Category {
  id;
  name;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
function createCategory(id, name) {
  return new Category(id, name);
}
export { createCategory };
