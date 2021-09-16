"use strict";

const ComputerStorage = require("../ComputerStorage");
const computers = require("../computers.json");

describe("constructor", () => {
  test("object created", () => {
    const computerStorage = new ComputerStorage(computers);
    expect(computerStorage.computerStorage).toEqual(computers);
  });
  test("missing parameter throws an exception", () => {
    expect(() => new ComputerStorage()).toThrow("computer data missing");
  });
});

describe("getById tests:", () => {
  const computerStorage = new ComputerStorage(computers);
  test("parameter should be valid id of a computer", () => {
    expect(() => {
      computerStorage
        .getById("x")
        .toThrow("parameter should be valid id of a computer");
    });
  });

  test("getById(2) return correct computer", () => {
    expect(computerStorage.getById(2)).toEqual({
      id: 2,
      manufacturer: "CERA",
      type: "laptop",
      accessories: ["mouse"],
      price: 350,
      software: [
        {
          name: "Writer",
          price: 10,
        },
        {
          name: "Counter",
          price: 20,
        },
      ],
    });
  });

  test("if parameter is missing, throws error 'parameter missing'", () => {
    expect(() => {
      computerStorage.getById().toThrow("parameter missing");
    });
  });
});

describe("getAllIdsByManufacturer tests:", () => {
  const computerStorage = new ComputerStorage(computers);
  test("getAllIdsByManufactorer('BMI') should return [1,3]", () => {
    expect(computerStorage.getAllIdsByManufacturer("BMI")).toEqual([1, 3]);
  });
  test("getAllIdsByManufactorer() should return []", () => {
    expect(computerStorage.getAllIdsByManufacturer()).toEqual([]);
  });
});

describe("getAllComputerTypes tests:", () => {
  test("getAllComputerTypes() should return ['minitower', 'laptop'] with default data", () => {
    const computerStorage = new ComputerStorage(computers);
    expect(computerStorage.getAllComputerTypes()).toEqual([
      "minitower",
      "laptop",
    ]);
  });
  test("getAllComputerTypes() should return [] with custom data where there's no types", () => {
    const testData = [
      {
        id: 1,
        manufacturer: "BMI",
        accessories: ["keyboard", "display", "mouse"],
        price: 250,
        software: [
          {
            name: "Writer",
            price: 123,
          },
          {
            name: "Solitaire",
            price: 10,
          },
        ],
      },
      {
        id: 2,
        manufacturer: "CERA",
        accessories: ["mouse"],
        price: 350,
        software: [
          {
            name: "Writer",
            price: 10,
          },
          {
            name: "Counter",
            price: 20,
          },
        ],
      },
    ];
    const computerStorage = new ComputerStorage(testData);
    expect(computerStorage.getAllComputerTypes()).toEqual([]);
  });
});

describe("getAllComputersByType(type) tests", () => {
  const computerStorage = new ComputerStorage(computers);
  test('getAllComputersByType("minitower") should return array of 2 computer objects', () => {
    expect(computerStorage.getAllComputersByType("laptop")).toEqual([
      {
        id: 2,
        manufacturer: "CERA",
        type: "laptop",
        accessories: ["mouse"],
        price: 350,
        software: [
          {
            name: "Writer",
            price: 10,
          },
          {
            name: "Counter",
            price: 20,
          },
        ],
      },
      {
        id: 3,
        manufacturer: "BMI",
        type: "laptop",
        accessories: [],
        price: 150,
        software: [],
      },
    ]);
  });
  test('getAllComputersByType("pc") should return empty array', () => {
    expect(computerStorage.getAllComputersByType("pc")).toEqual([]);
  });

  test("getAllComputersByType() should throw error", () => {
    expect(() => computerStorage.getAllComputersByType()).toThrow(
      "missing parameter"
    );
  });
});

describe("hasAccessories(id) test cases:", () => {
  const computerStorage = new ComputerStorage(computers);

  const testValues = [
    [1, true],
    [2, true],
    [3, false],
    ["", false],
  ];
  test.each(testValues)("hasAccessories(%s) returns %s", (id, answer) => {
    expect(computerStorage.hasAccessories(id)).toEqual(answer);
  });
});

describe("getComputerAccessories test cases:", () => {
  const computerStorage = new ComputerStorage(computers);

  test("get accessories with id 1", () => {
    expect(computerStorage.getComputerAccessories(1)).toEqual([
      "keyboard",
      "display",
      "mouse",
    ]);
  });
  test("get accessories with id 3", () => {
    expect(computerStorage.getComputerAccessories(3)).toEqual([]);
  });
});

describe("getPriceWithoutSoftware(id) test cases:", () => {
  const computerStorage = new ComputerStorage(computers);
  test("getPriceWithoutSoftware(2) should return 350", () => {
    expect(computerStorage.getPriceWithoutSoftware(2)).toEqual(350);
  });

  test("getPriceWithoutSoftware(4) should throw error 'nothing found with given id", () => {
    expect(() => computerStorage.getPriceWithoutSoftware(4)).toThrow(
      "nothing found with given id"
    );
  });
});

describe("getTotalPrice(id) test cases:", () => {
  const computerStorage = new ComputerStorage(computers);

  test("getTotalPrice(1) should return 383", () => {
    expect(computerStorage.getTotalPrice(1)).toBe(383);
  });

  test("getTotalPrice(3) should return 150", () => {
    expect(computerStorage.getTotalPrice(3)).toBe(150);
  });

  test("getTotalPrice(4) should throw error 'nothing found with given id", () => {
    expect(() => computerStorage.getTotalPrice(4)).toThrow(
      "nothing found with given id"
    );
  });
});

describe("getPriceofTheSoftware(id) test cases:", () => {
  const computerStorage = new ComputerStorage(computers);

  test("getPriceOfTheSoftware(2) should return 30", () => {
    expect(computerStorage.getPriceOfTheSoftware(2)).toEqual(30);
  });

  test("getPriceOfTheSoftware(3) should return 0", () => {
    expect(computerStorage.getPriceOfTheSoftware(3)).toEqual(0);
  });

  test("getPriceOfTheSoftware(4) should throw error 'nothing found with given id", () => {
    expect(() => computerStorage.getPriceOfTheSoftware(4)).toThrow(
      "nothing found with given id"
    );
  });
});
