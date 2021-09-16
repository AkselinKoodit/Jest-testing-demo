### **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the computer
- Return: returns the computer object matching the id or null if there is no match

### Test 1: invalid id throws an error

```js
computerStorage.getById(x);
```

return

```json
`"parameter should be valid id of a computer"`
```

### Test 2: getById(2)

```js
computerStorage.getById(x);
```

should return

```json
`{
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
}`
```

- if parameter is missing, throws an exception `'parameter missing'`

### Test 2: getById()

```js
computerStorage.getById();
```

should return

```json
`"parameter missing"`
```
