class Coords {
  #latitude;
  #longuitude;

  constructor(latitude, longuitude) {
    this.#latitude = latitude;
    this.#longuitude = longuitude;
  }
  // gets and sets for longitude
  get longuitude() {
    return this.#longuitude;
  }

  set longuitude(longuitude) {
    this.#longuitude = longuitude;
  }

  // gets and sets for latitude
  get latitude() {
    return this.#latitude;
  }

  set latitude(latitude) {
    this.#latitude = latitude;
  }
}
