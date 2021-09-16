### **GetComputerAccessories(id)**

Returns an array of computer accessories. If none found, returns an empty array.

- Parameters: id of the computer
- Return: returns accessories as an array

### Test 1: with id 1

```js
computerStorage.getComputerAccessories(1);
```

should return

```json
`[
      "keyboard",
      "display",
      "mouse",
    ]`
```

### Test 2: With id 3 (no accessories)

```js
computerStorage.getComputerAccessories(3);
```

should return

```json
`[]`
```
