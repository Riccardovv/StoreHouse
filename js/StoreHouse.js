class StoreHouse {
  constructor() {
    if (StoreHouse.hasOwnProperty("StoreHouse")) return StoreHouse.StoreHouse;
    Object.defineProperty(StoreHouse, "StoreHouse", {
      value: this,
      enumerable: false,
      writable: false,
      configurable: false,
    });
  }
}
