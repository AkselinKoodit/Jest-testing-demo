### **getAllComputersByType(type)**

Returns an array of computer objects of given type

- Parameters: type of the computer to be searched
- Returns an array of computer objects of given type. If no computer of given type is found, returns an empty array.
- If a parameter type is missing, an exeption **'missing parameter'** is thrown.

### Test 1: Default data

```js
computerStorage.getAllComputersByType();
```

should return

```json
`["minitower","laptop"]`
```

### Test 1: When searching laptops should find 2 objects

```js
computerStorage.getAllComputersByType("laptop");
```

should return

```json
`[
      {
        "id": 2,
        "manufacturer": "CERA",
        "type": "laptop",
        "accessories": ["mouse"],
        "price": 350,
        "software": [
          {
            "name": "Writer",
            "price": 10,
          },
          {
            "name": "Counter",
            "price": 20,
          },
        ],
      },
      {
        "id": 3,
        "manufacturer": "BMI",
        "type": "laptop",
        "accessories": [],
        "price": 150,
        "software": [],
      },
    ]`
```

### Test 2: When searching "pc" should return empty

```js
computerStorage.getAllComputersByType("pc");
```

should return

```json
`[]`
```

### Test 3: Without parmeter should throw an error

```js
computerStorage.getAllComputersByType("");
```

should return

```json
`"missing parameter"`
```
