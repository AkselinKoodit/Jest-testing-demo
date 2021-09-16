### **getPriceWithoutSoftware(id)**

Returns the price with out software

- Parameters: id of the computer
- Return: The price of the computer not including the price of the software

### Test 1: id 2

```js
computerStorage.getPriceWithoutSoftware(2);
```

should return

```json
`350`
```

- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 2: id that doesn't exist

```js
computerStorage.getPriceWithoutSoftware(4);
```

should return

```json
`"nothing found with given id"`
```
