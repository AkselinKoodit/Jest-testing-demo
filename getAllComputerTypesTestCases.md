### **getAllComputerTypes()**

Returns an array of different computer types.

- Parameters: none
- Return: Returns an array of different computer types. If no types are found, returns an empty array. The type is added to the result array only once.

  ### Test 1: Default data

```js
computerStorage.getAllComputerTypes();
```

should return

```json
`["minitower","laptop"]`
```

### Test 2: If no types are found, should return empty array (needs custom testdata)

```js
computerStorage.getAllComputerTypes();
```

should return

```json
`[]`
```
