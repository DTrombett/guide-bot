# Keywords list

In questo secondo articolo della guida inizieremo a vedere qualcosa di Javascript.
Partiremo dalle basi, infatti inizieremo con una lista delle parole chiave del JavaScript, per poi passare agli operatori nel prossimo articolo.

## Cosa sono le parole chiave?

Le parole chiave, o riservate, del Javascript sono delle parole che indicano alcune specifiche azioni e non possono essere utilizzate come nomi per variabili, etc...

## Quali sono e a cosa servono?

- `arguments`: indica un `array` di tutti i parametri passati in una funzione.
```js
function run(message, args) { 
    console.log(arguments[0].id === message.id) // true 
}
```
- `await`: viene usata prima di una `Promise` (`await <Promise>`) per far sì che il codice corrente si blocchi fino a che quella promise non viene completata.
```js
const date = Date.now();
await new Promise(resolve => setTimeout(resolve, 1000));
console.log(Date.now() - date); // ~1000
```
- `break`: ferma l'esecuzione di un loop passando all'azione successiva.
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
