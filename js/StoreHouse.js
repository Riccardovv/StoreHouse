class StoreHouse {
  // se guardan todas las tiendas existentes en el array stores
  // en el map #products se guardan todos los productos que hay, siendo la key el producto
  //  y el valor el numero de unidades en el inventario


  #name;
  //array de todas las tiendas
  #stores=[];

  //clave producto valor total de stock
  #products=new Map();

  //clave categoria valor array de todos sus productos
  #categories=new Map();
  #defaultCategory;
  #defaultShop;

  constructor(name) {
    if (StoreHouse.hasOwnProperty("StoreHouse")) return StoreHouse.StoreHouse;
    Object.defineProperty(StoreHouse, "StoreHouse", {
      value: this,
      enumerable: false,
      writable: false,
      configurable: false,
    });

    this.#name=name;
    this.#defaultCategory=new Category("default", "default category");
    this.#defaultShop=new Store("default cif", "default name", "default adress", "default phone", new Coords(0,0))
    this.#categories.set(this.#defaultCategory,[]);
    this.#stores.push(this.#defaultShop);

  }

  addProduct(product, ...categories){
    if(! product instanceof Product) throw new InvalidValue("product", product)
    if(this.#products.has(product)) throw new ProductAlreadyAdded(product);
    this.#products.set(product,0)
    for (const cat of categories) {
      console.log("pasa");
      if (this.#categories.has(cat)) {
        this.#categories.get(cat).push(product);
      }
      else{
        this.#categories.set(cat, []);
        this.#categories.get(cat).push(product);
      }
    }
    return this.#products.size;
  }

  addShop(shop){
    if(! shop instanceof shop) throw new InvalidValue("shop", shop);
    if (this.#stores.includes(shop)) 
    this.#stores.set(shop,{});
    return this.#stores.size;
  }

  get categories(){
    return this.#categories.values();
  }

  get shops(){
    return this.#stores.values();
  }

  addCategory(category){
    if(!category instanceof Category) throw new InvalidValue("category", category)
    if(this.#categories.has(category)) throw CategoryAlreadyExist(category)
    this.#categories.set(category,[]);
    return this.#categories.length;
  }


  addProductInShop(product, shop, cuantity,){
    if(! product instanceof Product) throw new InvalidValue("product", product)
    if(shop.products.has(product)) throw new ProductAlreadyAdded(product);

    shop.products.set(product, cuantity);

    if (this.#products.has(product)) {
      this.#products.set(product, this.#products.get(product)+cuantity)
    }else{
      this.#products.set(product,cuantity);
    }
    
    if(!this.#stores.includes(shop)){
      this.#stores.push(shop);
    }

    return this.#products.size;
  }



  removeCategory(category){
    if (!this.#categories.has(category)) throw new CategoryDoesntExist(category);
    this.#categories.get(this.#defaultCategory).push(this.#categories.get(category))
    this.#categories.delete(category);
  }



  removeProduct(product){
    if (!this.#products.has(product)) throw new ProductDoesntExist(product);
    this.#products.delete(product);
  }

  removeStore(shop){
    if (!this.#stores.includes) throw new StoreDoesntExist(shop);
    this.#products.delete(product);
  }

  addQuantityProductInShop(product, shop, quantity=1){
    if(!shop.products.has(product)) throw new ProductDoesntExist(product)
    shop.products.set(product,( shop.products.get(product)+quantity))
  }


  getCategoryProducts(category, product){
    if (! this.#categories.has(category)) throw CategoryDoesntExist(category);
    let tmp=this.#categories.get(category);
    return tmp.values();

  }

  getShopProducts(shop){
    return shop.products.values();
  }

  
}








