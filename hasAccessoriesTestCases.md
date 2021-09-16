### **hasAccessories(id)**

- Parameters: id of the computer

Computers with id 1 and 2 have accessories, 3 doesn't:

#### Test 1

```js
computerStorage.hasAccessories("1");
```

should return

```json
`true`
```

#### Test 2

```js
computerStorage.hasAccessories("2");
```

should return

```json
`true`
```

#### Test 1

```js
computerStorage.hasAccessories("3");
```

should return

```json
`false`
```

- Return: returns true if the computer has accessories else returns false. If parameter id is missing false is returned.

#### Test 4

```js
computerStorage.hasAccessories("");
```

should return

```json
`false`
```
