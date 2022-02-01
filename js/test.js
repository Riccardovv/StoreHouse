let sh= new StoreHouse("shorehouse1");
let procduct1= new Product("serial1", "name1", "description1", 10, 21, "p1");
let procduct2= new Product("serial2", "name2", "description2", 10, 21, "p2");

let category1=new Category("category1", "description category1")
let category2=new Category("category2", "description category2")
let category3=new Category("category3", "description category3")
let c1 = new Coords(111,222)
let store1=new Store("cif1","name store 1", "adress1", "phone1", c1)
console.dir(sh);
console.dir(procduct1);
console.dir(category2);


console.dir(sh);

let cats = sh.categories;

for (const iterator of cats) {
  console.dir(iterator);
}

sh.addProductInShop(procduct1, store1, 10)
sh.addProduct(procduct2, category1, category2)
sh.addCategory(category3)

console.dir(sh);
sh.removeCategory(category3);
sh.removeCategory(category2);


sh.addQuantityProductInShop(procduct1, store1, 25)
console.dir(sh);

cat1=sh.getCategoryProducts(category1);

for (const iterator of cat1) {
  console.log(iterator);
}

prods1=sh.getShopProducts(store1)

for (const iterator of prods1) {
  console.log(iterator);
}
