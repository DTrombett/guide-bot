# Parole chiave & operatori.md

In questo secondo articolo della guida inizieremo a scoprire qualcosa riguardo al Javascript.
Partiremo dalle basi, infatti inizieremo con una lista delle parole chiave e degli operatori del JavaScript.

## Cosa sono le parole chiave e gli operatori?

Le parole chiave, o riservate, del Javascript sono delle parole che indicano alcune specifiche azioni e non possono essere utilizzate come nomi per variabili, etc...

Gli operatori sono simboli o parole che creano una relazione tra più elementi, come un'operazione aritmetica o l'assegnazione di una variabile.

## Lista delle parole chiave

Qui di seguito è riportata una lista delle parole chiave nel JavaScript e della loro funzione.

### `function` / `return`
La parola chiave `function` serve per creare una funzione JavaScript nella seguente forma:
```js
function x(y /**, ...**/) {
    
}
```
- `x`: Nome della funzione da creare;
- `y, ...`: Lista dei parametri della funzione.

La funzione verrà poi chiamata nel seguente modo:
```js
x(y /**, ...**/);
```

`return` indica il valore che verrà restituito dalla funzione, nella forma:
```js
return x;
```
- `x`: il valore da restituire. È facoltativo e può essere omesso nel caso non si voglia restituire nessun valore (`return;`).

Esempio:
```js
function sumNumbers(x, y, z) {
    return x + y + z;
}

console.log(sumNumbers(2, 4, 6)); // 12
```

### `await`
Viene usata prima di una `Promise` per far sì che il codice corrente si blocchi fino a che quella `Promise` non viene completata.
Utilizzato nella seguente forma:
```js
await x;
```
- `x`: La `Promise` da attendere.

Esempio:
```js
const date = Date.now();
await new Promise(resolve => setTimeout(resolve, 1000));
console.log(Date.now() - date); // ~1000
```
### `break`
ferma l'esecuzione di un loop passando all'azione successiva.
```js
let i = 0;
while (i < 6) {
    if (i === 3)
        break;
    i++; 
}
console.log(i); // 3
```;
- `case x`: in uno `switch`, indica l'azione da eseguire quando il valore fornito nello switch è uguale a `x`.
```js
const foo = 5;
switch (foo) {
    case 2:
        console.log(2); // Se `foo` è uguale a 2 verrà scritto in console        break;
    default:
        console.log('default')
}
```
