### **getPriceOfTheSoftware(id)**

Returns the total price of software bundled with the computer

- Parameters: id of the computer to be searched
- Return: the total price of software. If no software is found returns 0

### Test 1: id 2, has 2 software

```js
computerStorage.getPriceOfTheSoftware(2);
```

should return

```json
`30`
```

### Test 2: id 3, no software

```js
computerStorage.getPriceOfTheSoftware(3);
```

should return

```json
`0`
```

- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 3: id 4 (doesn't exist)

```js
computerStorage.getPriceOfTheSoftware(4);
```

should return

```json
`"nothing found with given id"`
```
