class Product {
  #serial;
  #name;
  #description;
  #price;
  #tax;
  #image;

  constructor(serial, name, description, price, tax, image) {
    this.#serial = serial;
    this.#name = name;
    this.#description = description;
    this.#price = price;
    this.#tax = tax;
    this.#image = image;
  }

  // gets and sets for serial

  get serial() {
    return this.#serial;
  }

  set serial(serial) {
    this.#serial = serial;
  }

  // gets and sets for name

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  // gets and sets for description

  get description() {
    return this.#description;
  }

  set description(description) {
    this.#description = description;
  }

  // gets and sets for price

  get price() {
    return this.#price;
  }

  set price(price) {
    this.#price = price;
  }

  // gets and sets for tax

  get tax() {
    return this.#tax;
  }

  set tax(tax) {
    this.#tax = tax;
  }

  // gets and sets for tax

  get tax() {
    return this.#tax;
  }

  set tax(tax) {
    this.#tax = tax;
  }

  // gets and sets for image

  get image() {
    return this.#image;
  }

  set image(image) {
    this.#image = image;
  }
}

class Tv extends Product {
  #size;
  #refreshRate;
  #resolution;

  constructor(serial, name, description, price, tax, image, size, refreshRate, resolution) {

    super(serial, name, description, price, tax, image);

    this.#size = size;
    this.#refreshRate = refreshRate;
    this.#resolution = resolution;
  }
  // gets and sets for size

  get size() {
    return this.#size;
  }

  set size(size) {
    this.#size = size;
  }

  // gets and sets for refreshRate

  get refreshRate() {
    return this.#refreshRate;
  }

  set refreshRate(refreshRate) {
    this.#refreshRate = refreshRate;
  }

  // gets and sets for resolution

  get resolution() {
    return this.#resolution;
  }

  set resolution(resolution) {
    this.#resolution = resolution;
  }
}

class Car extends Product{

  #brand;
  #displacement;
  #license;

  constructor(serial, name, description, price, tax, image, brand, displacement, license) {

    super(serial, name, description, price, tax, image);

    this.#brand = brand;
    this.#displacement = displacement;
    this.#license = license;
  }

  // gets and sets for brand

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    this.#brand = brand;
  }

  // gets and sets for displacement

  get displacement() {
    return this.#displacement;
  }

  set displacement(displacement) {
    this.#displacement = displacement;
  }

  // gets and sets for license

  get license() {
    return this.#license;
  }

  set license(license) {
    this.#license = license;
  }


}



class Movie extends Product{

  #title;
  #director;
  #length;

  constructor(serial, name, description, price, tax, image, title, director, length) {

    super(serial, name, description, price, tax, image);

    this.#title = title;
    this.#director = director;
    this.#length = length;
  }

  // gets and sets for title

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  // gets and sets for director

  get director() {
    return this.#director;
  }

  set director(director) {
    this.#director = director;
  }

  // gets and sets for length

  get length() {
    return this.#length;
  }

  set length(length) {
    this.#length = length;
  }


}