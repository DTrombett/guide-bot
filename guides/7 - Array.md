# Array

In JavaScript possiamo creare delle liste di qualsiasi elemento... grazie agli **array**.

Gli array sono degli objects speciali che come proprietà, invece di utilizzare dei nomi (stringhe), utilizzano dei numeri, in modo da creare delle liste facili da gestire.

Ad esempio, se noi abbiamo bisogno di fare una lista di nomi in JavaScript possiamo usare un array ed inserirli lì.
In questo modo avremo completo controllo sulla nostra lista e potremo gestirla facilmente.

## Sommario

- [Array](#array)
  - [Sommario](#sommario)
  - [Dichiarare un array](#dichiarare-un-array)
  - [Accedere agli elementi dell'array](#accedere-agli-elementi-dellarray)
  - [Loop](#loop)
    - [for loop](#for-loop)
      - [for](#for)
      - [for...of](#forof)
    - [forEach](#foreach)

---

## Dichiarare un array

Ora vediamo come possiamo creare un array.
Gli array usano le parentesi quadre e la virgola per separare i loro elementi.

**Sintassi:**

```js
[
	/** a, ...b **/
];
```

- `a, ...b`: Elementi dell'array. Possono essere qualsiasi, non c'è alcuna limitazione.

**Esempi:**

```js
// Creiamo un array con 2 elementi: "DTrombett" e "davi", infine salviamolo in una costante chiamata `array`
// Nota: generalmente gli array vengono salvati in costanti perchè non c'è alcun bisogno di riassegnarli
// Per modificare i suoi elementi (aggiungerne, rimuoverne, etc...) possiamo utilizzare i metodi della classe Array
const array = ["DTrombett", "davi"];
```

---

## Accedere agli elementi dell'array

Come abbiamo detto, gli array utilizzano dei numeri come proprietà e, essendo una lista, ogni numero corrisponderà ad un elemento.

Nell'articolo sugli object abbiamo osservato come non possiamo utilizzare il classico punto (o _dot notation_) per accedere ad un elemento di un object se il nome della proprietà è un numero o inizia con un numero, perciò utilizzeremo l'_index access_.

**Nota: Gli elementi degli array non iniziano dal numero 1, ma da 0, quindi il primo elemento avrà 0 come numero (o index).**

**Sintassi:**

```js
array[i];
```

- `array`: L'array da cui vogliamo leggere l'elemento. **Type:** `array`;
- `i`: Il numero dell'elemento da leggere. **Type:** `number`.

**Esempi:**

```js
const array = ["primo elemento", "secondo elemento"];

array[1]; // "secondo elemento" - Il primo elemento è sempre 0 perciò il secondo sarà 1!
array[0] = "altro elemento"; // Possiamo anche sostituire degli elementi
console.log(array); // ["altro elemento", "secondo elemento"]
array[2] = "nuovo elemento"; // Possiamo anche aggiungere elementi nuovi, basta specificare il loro index!
console.log(array); // ["altro elemento", "secondo elemento", "nuovo elemento"]
array[4] = "ennesimo elemento"; // Se saltiamo degli index (in questo caso il 3) rimarranno vuoti
console.log(array); // ["altro elemento", "secondo elemento", "nuovo elemento", , "ennesimo elemento"]
//                                                                             ^
//                                                                             |
//                                                 Tra il terzo e il quinto elemento è rimasto uno spazio vuoto
3 in array; // false - Non esiste nessun elemento al numero 3
```

---

## Loop

Se vogliamo eseguire una determinata azione per ogni elemento di un array possiamo usare dei loop.

Ci sono due modi per eseguire un loop degli elementi di un array.

### for loop

Il _for loop_ lo abbiamo già incontrato nell'articolo sulle parole chiave ed è il metodo predefinito che abbiamo in JavaScript.

Per gli array possiamo utilizzare sia il classico **for** loop che il **for..of** loop.

#### for

Un classico for loop ci dà più controllo sul nostro array in quanto non abbiamo direttamente accesso all'elemento dell'array, ma al suo index, dal quale possiamo ricavarci l'elemento qualora ci servisse.
Consigliabile se abbiamo bisogno di sapere l'index del valore oltre che il valore stesso nel nostro loop.

**Esempi:**

```js
const array = ["elemento 1", "elemento 2", "elemento 3"];

for (let i = 0; i < array.length; i++) {
	// `i` rappresenta l'index attuale, perciò `array[i]` sarà l'elemento che ci serve
	console.log(array[i]);
}

// Console: "elemento 1",
//          "elemento 2",
//          "elemento 3"
```

---

#### for...of

Questo loop è molto più facile e ci dà direttamente accesso all'elemento di cui abbiamo bisogno.
Consigliabile se abbiamo solo bisogno di conoscere il valore.

**Esempi:**

```js
const array = ["elemento 1", "elemento 2", "elemento 3"];

for (const element of array) {
	// `element` rappresenta l'elemento dell'array. Non abbiamo nessun riferimento al suo index
	console.log(element);
}

// Console: "elemento 1",
//          "elemento 2",
//          "elemento 3"
```

**Nota: Negli esempi precedenti possiamo anche omettere le parantesi graffe in quanto vogliamo eseguire una sola azione.**

---

### forEach

`forEach` è un metodo degli array che ci permette di eseguire una funzione per ogni elemento dello stesso array.

**Esempi:**

```js
const array = ["elemento 1", "elemento 2", "elemento 3"];

array.forEach((element, i, arr) => {
	// `element` rappresenta l'elemento dell'array.
	// Abbiamo, inoltre, un riferimento al suo index (`i`) e all'array stesso (`arr`)
	console.log(element);
});

// Console: "elemento 1",
//          "elemento 2",
//          "elemento 3"
```
