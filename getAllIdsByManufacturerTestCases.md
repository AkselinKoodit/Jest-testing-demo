### **getAllIdsByManufacturer(value)**

Returns all ids of the computers matching the value of manufacturer

- Parameters: value of the property to be searched
- Return: Returns an array of computer id where the computers manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

### Test 1: IBM

```js
computerStorage.getAllIdsByManufacturer("IBM");
```

should return

```json
`[1,3]`
```

### Test 2: No parameter return empty array

```js
computerStorage.getAllIdsByManufacturer();
```

should return

```json
`[]`
```
