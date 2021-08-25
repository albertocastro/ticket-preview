# Ticket Preview

Create a function that `console log` a grid with ticket preview as follows:

## Examples
```
Input: ["a4","a5","c9","b1"]
```

```
x x x O O x x x x x
O x x x x x x x x x
x x x x x x x x O x
x x x x x x x x x x

```

```
Input: []
```

```
x x x x x x x x x x
x x x x x x x x x x
x x x x x x x x x x
x x x x x x x x x x

```

```
Input: ["a4","z99"]
```

```
x x x O x x x x x x
x x x x x x x x x x
x x x x x x x x x x
x x x x x x x x x x

- Ticket 'z99' not available
```

## Requirements
- Function must do console log.
- Size of the grid must be dynamic.
- Default size: 10 x 4

## Usage

```JS
printSection(["a4"])
/*
    x x x O x x x x x x
    x x x x x x x x x x
    x x x x x x x x x x
    x x x x x x x x x x
*/
```