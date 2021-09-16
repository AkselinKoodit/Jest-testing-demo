### **getTotalPrice(id)**

Returns the total price of computer including the total price of the software

- Parameters: id of the computer
- Return: The price of the computer including the total price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 1: getTotalPrice(1), has software

```js
computerStorage.getTotalPrice(1);
```

should return

```json
`383`
```

### Test 2: getTotalPrice(3), computer doesn't have software

```js
computerStorage.getTotalPrice(3);
```

should return

```json
`150`
```

### Test 3: getTotalPrice(4), computer doesn't exist

```js
computerStorage.getTotalPrice(4);
```

should return

```json
`"nothing found with given id"`
```
