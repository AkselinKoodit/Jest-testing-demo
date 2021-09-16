# Test cases

## **constructor(data)**

computers.json array is passed as a parameter `jsonData`. If the parameter is missing, throw an exception `'computer data missing'`;

### Test 1: object created

```js
new ComputerStorage(jsonData);
```

test if the objects innerfield has the same value as given as parameter. Parameter jsonData is the json array from the default `computers.json`

### Test 2: missing parameter throws an exception

```js
new ComputerStorage();
```

this will throw an exception `'computer data missing'`
