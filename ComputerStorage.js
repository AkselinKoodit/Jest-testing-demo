"use strict";

module.exports = class Computers {
  constructor(data) {
    if (!data) throw new Error("computer data missing");
    this.computerStorage = data;
  }

  getById(id) {
    if (!id) throw new Error("parameter missing");
    for (let computer of this.computerStorage) {
      if (computer.id === id) {
        return computer;
      }
    }
    throw new Error("parameter should be valid id of a computer");
  }
  getAllIdsByManufacturer(value) {
    const results = [];
    for (let computer of this.computerStorage) {
      if (computer.manufacturer === value) {
        results.push(computer.id);
      }
    }
    return results;
  }
  getAllComputerTypes() {
    const results = [];
    for (let computer of this.computerStorage) {
      if (computer.type) {
        if (!results.includes(computer.type)) {
          results.push(computer.type);
        }
      }
    }
    return results;
  }
  getAllComputersByType(type) {
    if (!type) {
      throw new Error("missing parameter");
    }
    const results = [];
    for (let computer of this.computerStorage) {
      if (computer.type === type) {
        results.push(computer);
      }
    }
    return results;
  }
  hasAccessories(id) {
    if (!id) return false;
    for (let computer of this.computerStorage) {
      if (computer.id === id) {
        // if (computer.accessories.length > 0) {
        //   return true;
        // } else {
        //   return false;
        // }
        return computer.accessories.length > 0 ? true : false;
      }
    }
  }

  getComputerAccessories(id) {
    const results = [];
    for (let computer of this.computerStorage) {
      if (computer.id === id && computer.accessories.length > 0) {
        return computer.accessories;
      }
    }
    return results;
  }
  getPriceWithoutSoftware(id) {
    for (let computer of this.computerStorage) {
      if (computer.id === id) {
        return computer.price;
      }
    }
    throw new Error("nothing found with given id");
  }

  getTotalPrice(id) {
    let totalPrice = 0;
    for (let computer of this.computerStorage) {
      if (computer.id === id) {
        totalPrice = totalPrice + computer.price;
        for (let software of computer.software) {
          totalPrice = totalPrice + software.price;
        }
        return totalPrice;
      }
    }
    throw new Error("nothing found with given id");
  }

  getPriceOfTheSoftware(id) {
    let totalPrice = 0;
    for (let computer of this.computerStorage) {
      if (computer.id === id) {
        for (let software of computer.software) {
          totalPrice = totalPrice + software.price;
        }
        return totalPrice;
      }
    }
    throw new Error("nothing found with given id");
  }
};
