class Store{

  #CIF;
  #name;
  #adress;
  #phone;
  #coords;

  constructor(CIF, name, adress, phone, coords){
    this.#CIF= CIF;
    this.#name= name;
    this.#adress= adress;
    this.#phone= phone;
    this.#coords= coords;

  }

  // gets and sets for CIF
  get CIF() {
    return this.#CIF;
  }

  set CIF(longuitude) {
    this.#CIF = CIF;
  }
  // gets and sets for name
  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
  // gets and sets for adress
  get adress() {
    return this.#adress;
  }

  set adress(adress) {
    this.#adress = adress;
  }
  // gets and sets for phone
  get phone() {
    return this.#phone;
  }

  set phone(phone) {
    this.#phone = phone;
  }
  // gets and sets for coords
  get coords() {
    return this.#coords;
  }

  set coords(coords) {
    this.#coords = coords;
  }

}