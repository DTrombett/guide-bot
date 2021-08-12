# Parole chiave & operatori

In questo secondo articolo della guida inizieremo a scoprire qualcosa riguardo al Javascript.
Partiremo dalle basi, infatti inizieremo con una lista delle parole chiave e degli operatori del JavaScript.

## Cosa sono le parole chiave e gli operatori?

Le parole chiave, o riservate, del Javascript sono delle parole che indicano alcune specifiche azioni e non possono essere utilizzate come nomi per variabili, etc...

Gli operatori sono simboli o parole che creano una relazione tra più elementi, come un'operazione aritmetica o l'assegnazione di una variabile.

## Lista delle parole chiave

Qui di seguito è riportata una lista delle parole chiave nel JavaScript e della loro funzione.

### [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) / [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
La parola chiave `function` serve per creare una funzione JavaScript.
Sintassi:
```js
function x(/**y, ...**/) {
    // Azioni da eseguire nella funzione
}
```
- `x`: Nome della funzione da creare;
- `y, ...`: Lista dei parametri della funzione. Facoltativo, una funzione può anche non avere parametri.

La funzione verrà poi chiamata nel seguente modo:
```js
x(/**y , ...**/);
```

`return` indica il valore che verrà restituito dalla funzione.
Sintassi:
```js
return x;
```
- `x`: il valore da restituire. È facoltativo e può essere omesso nel caso non si voglia restituire nessun valore (`return;`).

Esempio:
```js
function sumNumbers(x, y, z) {
    return x + y + z; // Restituiamo la somma dei 3 parametri passati nella funzione
}

console.log(sumNumbers(2, 4, 6)); // 12
```

### [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) / [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
`async` viene utilizzata prima della parola `function` per abilitare l'uso della parola `await` all'interno della funzione.
Se questa parola chiave viene utilizzata, la funzione restituirà sicuramente una `Promise`, il cui valore da restituire sarà quello restituito dalla funzione.
Sintassi:
```js
async function x(/**y, ...**/) {
    // Azioni da eseguire nella funzione. È possibile utilizzare la parola chiave `await`
}
```

`await` viene usata prima di una `Promise` per far sì che il codice corrente si blocchi fino a che quella `Promise` non viene completata.
Sintassi:
```js
await x;
```
- `x`: La `Promise` da attendere.

Esempio:
```js
async function wait(m) {
    const date = Date.now(); // Registriamo la data quando la funzione viene chiamata
    await new Promise(resolve => setTimeout(resolve, m)); // Attendiamo tanti millisecondi quanti ne sono stati passati come parametro `m` nella funzione
    const passed = Date.now() - date; // Registriamo quanto tempo è passato da quando la funzione è stata chiamata
    console.log(passed); // ~1000
    return passed; // Restituiamo quel valore. Nonostante sia un numero la funzione restituirà una `Promise` poiché abbiamo utilizzato la parola `async`
}

console.log(wait(1000)); // Promise { <pending> }
```

### [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) / [`else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
Questa parola chiave ci permette di eseguire una determinata azione se una condizione è vera.
Sintassi:
```js
if (x) {
    // Azioni da eseguire se la condizione è veritiera
}
```
- `x`: Espressione da verificare. Il codice nelle parentesi verrà eseguito solo se questa espressione è [veritiera](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

`else` viene utilizzato per dichiarare l'azione da eseguire se la condizione **non** è veritiera.
Sintassi:
```js
if (x) {
    // Azioni da eseguire se la condizione è veritiera
} else {
    // Azione da eseguire se la condizione NON è veritiera
}
```

Esempio:
```js
const exp = true; // Creiamo una condizione
if (exp) {
    console.log("Sì"); // `true` è una condizione veritiera perciò questo codice verrà eseguito e il successivo verrà ignorato
} else {
    console.log("No");
}
```

### [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) / [`case`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) / [`default`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) /  [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
`switch` serve per eseguire diverse azioni a seconda di un valore.
Sintassi:
```js
switch (x) {

}
```
- `x`: l'espressione da controllare.

Per definire le azioni da eseguire per ogni valore di `x` utilizziamo la parola `case`.
Sintassi:
```js
switch (x) {
    case y:
        // Azioni da eseguire se il valore di `x` è uguale a quello di `y`
    case ...:
}
```
- `y`, `...`: I valori di `x`. Se `x` corrisponde a quel valore, allora le azioni dopo i due punti vengono eseguite.

Può essere anche aggiunta una azione da eseguire quando il valore di `x` è diverso da tutti quelli elencati con `case`. In questo caso utilizziamo la parola `default`.
Sintassi:
```js
switch (x) {
    case y:
        // Azioni da eseguire se il valore di `x` è uguale a quello di `y`
    case ...:

    default:
        // Azioni da eseguire se il valore di `x` non corrisponde a nessuno di quelli elencati (`y`, `...`)
}
```

Per far sì che lo switch si fermi dopo aver eseguito le azioni nel `case`, dobbiamo aggiungere la parola `break`.
Omettendo questa parola alla fine delle azioni il codice nello switch andrà avanti e le azioni nel `default` verranno eseguite.
Sintassi:
```js
switch (x) {
    case y:
        // Azioni da eseguire se il valore di `x` è uguale a quello di `y`
        break;
    case ...:

        break;
    default:
        // Azioni da eseguire se il valore di `x` non corrisponde a nessuno di quelli elencati (`y`, `...`)
}
```

Esempio:
```js
const expr = "Pomodori";
switch (expr) {
    case "Banane":
        console.log("Le banane costano 2€"); // Questa azione verrà eseguita se `expr` è "Banane"
        break;
    case "Pomodori":
    case "Melanzane":
        console.log("I pomodori e le melanzane costano 1,50€"); // Questa azione verrà eseguita se `expr` è "Pomodori" o "Melanzane"
        break;
  default:
    console.log(`Mi dispiace, non abbiamo ${expr}.`); // Questa azione verrà eseguita se `expr` non è nessuno dei valori sopra indicati
}
```
