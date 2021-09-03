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
	- [Array](#array-1)
		- [constructor](#constructor)
		- [Metodi statici](#metodi-statici)
			- [`Array.from<T, U>(arrayLike: ArrayLike<T>, mapfn?: (v: T, k: number) => U, thisArg?: unknown): U[]`](#arrayfromt-uarraylike-arrayliket-mapfn-v-t-k-number--u-thisarg-unknown-u)
			- [`Array.isArray(arg: unknown): arg is unknown[]`](#arrayisarrayarg-unknown-arg-is-unknown)
		- [`<Array>.length: number`](#arraylength-number)
		- [Metodi](#metodi)
			- [`<Array>.at(index: number): unknown`](#arrayatindex-number-unknown)
			- [`<Array>.concat(...items: (T | ConcatArray<T>)[]): T[]`](#arrayconcatitems-t--concatarrayt-t)
			- [`<Array>.every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: unknown): this is S[]`](#arrayeverys-extends-tpredicate-value-t-index-number-array-t--value-is-s-thisarg-unknown-this-is-s)
			- [`<Array>.fill(value: T, start?: number, end?: number): this`](#arrayfillvalue-t-start-number-end-number-this)
			- [`<Array>.filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: unknown): S[]`](#arrayfilters-extends-tpredicate-value-t-index-number-array-t--value-is-s-thisarg-unknown-s)
			- [`<Array>.find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: unknown): S | undefined`](#arrayfinds-extends-tpredicate-this-void-value-t-index-number-obj-t--value-is-s-thisarg-unknown-s--undefined)
			- [`<Array>.findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: unknown): number`](#arrayfindindexpredicate-value-t-index-number-obj-t--unknown-thisarg-unknown-number)
			- [`<Array>.flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[]`](#arrayflata-d-extends-number--1this-a-depth-d-flatarraya-d)
			- [`<Array>.flatMap<U, This = undefined> (callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>, thisArg?: This): U[]`](#arrayflatmapu-this--undefined-callback-this-this-value-t-index-number-array-t--u--readonlyarrayu-thisarg-this-u)
			- [`<Array>.includes(searchElement: T, fromIndex?: number): boolean`](#arrayincludessearchelement-t-fromindex-number-boolean)
			- [`<Array>.indexOf(searchElement: T, fromIndex?: number): number`](#arrayindexofsearchelement-t-fromindex-number-number)

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

- `array`: L'array da cui vogliamo leggere l'elemento. **Type:** `unknown[]`;
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

---

## Array

`Array` è la classe di cui fanno parte tutti gli array.
Si tratta di una classe globale, quindi accessibile ovunque.

### constructor

Possiamo creare un array anche con il constructor della classe `Array`, quindi usando `new Array()`, ma non è consigliato in quanto può essere confusionario.

Se infatti passiamo un solo parametro che sia un numero, creeremo un array di quella dimensione e totalmente vuoto, se invece passiamo più di un parametro o un solo parametro ma non numero, allora verrà creato un array con gli elementi determinati come parametri.

**Esempi:**

```js
new Array(arrayLength);
new Array(...items);
```

- `arrayLength`: La lunghezza dell'array. **Type:** `number`;
- `...items`: Elementi da inserire in nuovo array. Equivalente di `[...items]`. **Type:** `unknown`.

---

### Metodi statici

I seguenti metodi sono disponibili nella classe globale `Array`.

#### `Array.from<T, U>(arrayLike: ArrayLike<T>, mapfn?: (v: T, k: number) => U, thisArg?: unknown): U[]`

Questo metodo ci permette di creare un array partendo da un _array-like_, ossia un elemento che ha delle caratteristiche simili ad un array, come una stringa dove ogni carattere corrisponde ad un elemento.

**Sintassi:**

```js
Array.from(arrayLike /** , mapfn, thisArg **/);
```

- `arrayLike`: Un qualsiasi elemento simile ad un array, che abbia quindi una proprietà `length` e abbia proprietà corrispondenti a dei numeri. **Type:** `type ArrayLike = { readonly length: number; readonly [n: number]: unknown; }`;
- `mapFn`: Una funzione facoltativa che verrà chiamata su ogni elemento per modificarne il suo valore. Ha come parametri l'elemento e il suo index. **Type:** `(v: unknown, k: number) => unknown`;
- `thisArg`: Il valore facoltativo da usare come `this` nella funzione `mapFn`. **Type:** `unknown`.

**Restituisce:** `unknown[]`.

**Esempi:**

```js
Array.from("foo"); // [ "f", "o", "o" ]

const map = new Map([
	[1, 2],
	[2, 4],
	[4, 8],
]);
Array.from(map); // [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
	["1", "a"],
	["2", "b"],
]);
Array.from(mapper.values()); // ['a', 'b']

Array.from(mapper.keys()); // ['1', '2']

// Usiamo una funzione map per raddoppiare ogni valore dell'array
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Creiamo un array con lunghezza 5 ed assegnamo ad ogni elemento il valore del suo index
Array.from({ length: 5 }, (_, i) => i);
// [0, 1, 2, 3, 4]
```

---

#### `Array.isArray(arg: unknown): arg is unknown[]`

Questo metodo ci permette di sapere se un elemento è un array.

**Sintassi:**

```js
Array.isArray(arg);
```

- `arg`: Un qualsiasi elemento che vogliamo controllare se sia un array. **Type:** `unknown`.

**Restituisce:** `boolean` - `true` se l'elemento è un Array, `false` in caso contrario.

**Esempi:**

```js
// Tutti i seguenti esempi restituiscono `true`
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
Array.isArray(Array.prototype);

// Tutti i seguenti esempi restituiscono `false`
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
```

---

### `<Array>.length: number`

Ogni array ha una certa lunghezza che cambia quando noi aggiungiamo o rimuoviamo elementi da esso.
Per scoprire quale è questa lunghezza possiamo utilizzare la proprietà `length`.

**Sintassi:**

```js
array.length;
```

**Type:** `number`.

**Esempi:**

```js
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) numbers.length = 3;

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3

const otherNumbers = [];
numbers.length = 3;
console.log(numbers); // [undefined, undefined, undefined]
```

---

### Metodi

I seguenti metodi sono disponibili su ogni array.

#### `<Array>.at(index: number): unknown`

Questo metodo ci restituisce l'elemento dell'array corrispondente al nostro index.
Molto simile a un index access normale ma ci permette di utilizzare anche valori negativi per avere, ad esempio, l'ultimo o il penultimo elemento.

**Sintassi:**

```js
array.at(index);
```

- `index`: L'index da accedere. **Type:** `number`.

**Restituisce:** `unknown` - L'elemento a quell'index, o `undefined` se non è presente alcun elemento.

**Esempi:**

```js
const cart = ["apple", "banana", "pear"];

/**
 * Una funzione che restituisce l'ultimo elemento di un array.
 * @template V
 * @param {V[]} arr - Un array qualsiasi
 * @returns {V|undefined} L'ultimo elemento dell'array o `undefined` se l'array è vuoto
 */
const returnLast = (arr) => arr.at(-1);

const item1 = returnLast(cart);
console.log(item1); // "pear"

// Aggiungiamo un elemento all'array
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // "orange"
```

---

#### `<Array>.concat(...items: (T | ConcatArray<T>)[]): T[]`

Questo metodo crea un nuovo array uguale a quello precedente ma aggiungendo degli elementi ad esso.

**Sintassi:**

```js
array.concat(...items);
```

- `...items`: Gli elementi da aggiungere o degli array, in quest'ultimo caso gli elementi di questi array verranno aggiunti alla fine del vecchio array. **Type:** `unknown`.

**Restituisce:** `unknown[]` - Il nuovo array creato, nota che il vecchio array NON verrà modificato.

**Esempi:**

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---

#### `<Array>.every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: unknown): this is S[]`

Questo metodo esegue una funzione su ogni elemento dell'array e restituisce `true` solo se la funzione ha restituito `true` per tutti gli elementi.

**Sintassi:**

```js
array.every(predicate /** , thisArg **/);
```

- `predicate`: La funzione da eseguire su ogni elemento. **Type:** `(value: unknown, index: number, array: unknown[]) => boolean`;
- `thisArg`: Il valore facoltativo da usare come `this` nella funzione. **Type:** `unknown`.

**Restituisce:** `boolean` - `true` se la funzione ha restituito `true` per tutti gli elementi, `false` in caso contrario.

**Esempi:**

```js
/**
 * Una funzione che controlla se un elemento è maggiore di 10.
 * @param {number} element - L'elemento da controllare
 * @returns {boolean} Se l'elemento è maggiore di 10
 */
const isBig = (element) => element >= 10;

// Controlliamo se i seguenti array sono formati solo da numeri "grandi"
[12, 5, 8, 130, 44].every(isBig); // false
[12, 54, 18, 130, 44].every(isBig); // true

/**
 * Controlliamo se il secondo array ha degli elementi del primo array.
 * @param {unknown[]} array1 - Il primo array
 * @param {unknown[]} array2 - Il secondo array
 * @returns {boolean} Se gli elementi del secondo array sono presenti nel primo
 */
const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

[12, 5, 8, 130, 44].every((x) => x >= 10); // false
[12, 54, 18, 130, 44].every((x) => x >= 10); // true
```

---

#### `<Array>.fill(value: T, start?: number, end?: number): this`

Questo metodo riempie tutti gli index da `start` a `end` con l'elemento `value`.
Se `start` o `end` vengono omessi, allora tutti gli elementi vengono sostituiti.

**Sintassi:**

```js
array.fill(value /** , start, end **/);
```

- `value`: Il valore con cui riempire l'array. **Type:** `unknown`;
- `start`: L'index da cui iniziare a riempire. **Type:** `number`;
- `end`: L'ultimo index da riempire. **Type:** `number`.

**Restituisce:** `unknown[]` - L'array modificato.

**Esempi:**

```js
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5); // [1, 2, 3]

Array(3).fill(4); // [4, 4, 4]

const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }] - Tutti e 3 gli elementi fanno in realtà riferimento allo stesso object
```

---

#### `<Array>.filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: unknown): S[]`

Questo metodo restituisce un nuovo array contenente solo gli elementi che, passati ad una funzione, restituiscono `true`.

**Sintassi:**

```js
array.filter(predicate /** , thisArg **/);
```

- `predicate`: La funzione da eseguire su ogni elemento. **Type:** `(value: unknown, index: number, array: unknown[]) => boolean`;
- `thisArg`: Un valore facoltativo da usare come `this` nella funzione. **Type:** `unknown`.

**Restituisce:** `unknown[]` - Il nuovo array filtrato.

**Esempi:**

```js
/**
 * Una funzione che controlla se un elemento è maggiore di 10.
 * @param {number} element - L'elemento da controllare
 * @returns {boolean} Se l'elemento è maggiore di 10
 */
const isBig = (element) => element >= 10;

// Filtriamo da questo array solo gli elementi maggiori di 10
[12, 5, 8, 130, 44].filter(isBig); // [12, 130, 44]

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/**
 * Controlla se un numero è primo
 * @param {number} num - Il numero da controllare
 * @returns {boolean} Se il numero è primo o meno
 */
const isPrime = (num) => {
	for (let i = 2; num > i; i++) if (num % i === 0) return false;
	return num > 1;
};

// Filtriamo dall'array solo i numeri primi
array.filter(isPrime); // [2, 3, 5, 7, 11, 13]
```

---

#### `<Array>.find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: unknown): S | undefined`

Questo metodo cerca nell'array un elemento che, passato nella nostra funzione, restituisca `true`.

**Sintassi:**

```js
array.find(predicate /** , thisArg **/);
```

- `predicate`: La funzione da eseguire su ogni elemento. **Type:** `(this: void, value: unknown, index: number, obj: unknown[]) => boolean`;
- `thisArg`: Un valore facoltativo da usare come `this` nella funzione. **Type:** `unknown`.

**Restituisce:** `unknown` - Il primo elemento trovato che soddisfa la nostra funzione, o `undefined` se nessun elemento è stato trovato.

**Esempi:**

```js
const inventory = [
	{ name: "apples", quantity: 2 },
	{ name: "bananas", quantity: 0 },
	{ name: "cherries", quantity: 5 },
];

/**
 * Controlla se la proprietà `name` di un object è "cherries"
 * @param {{ name: string; }} fruit - L'elemento da controllare
 * @returns {boolean} Se la proprietà `name` è "cherries"
 */
const isCherries = (fruit) => fruit.name === "cherries";

// Troviamo l'elemento nell'array che abbia come `name` "cherries"
inventory.find(isCherries); // { name: 'cherries', quantity: 5 }

// Equivalente:
inventory.find(({ name }) => name === "cherries"); // { name: 'cherries', quantity: 5 }

/**
 * Controlla se un numero è primo
 * @param {number} num - Il numero da controllare
 * @returns {boolean} Se il numero è primo o meno
 */
const isPrime = (num) => {
	for (let i = 2; num > i; i++) if (num % i === 0) return false;
	return num > 1;
};

[4, 6, 8, 12].find(isPrime); // undefined - Nessuno degli elementi è primo
[4, 5, 8, 12].find(isPrime); // 5
```

---

#### `<Array>.findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: unknown): number`

Questo metodo è uguale a `Array#find()` ma cerca l'index corrispondente invece che l'elemento.

**Sintassi:**

```js
array.findIndex(predicate /** , thisArg **/);
```

- `predicate`: La funzione da eseguire su ogni elemento. **Type:** `(value: unknown, index: number, obj: unknown[]) => unknown`;
- `thisArg`: Un valore facoltativo da usare come `this` nella funzione. **Type:** `unknown`.

**Restituisce:** `number` - L'index relativo al primo elemento trovato che soddisfa la nostra funzione, o `-1` se nessun elemento è stato trovato.

**Esempi:**

```js
const inventory = [
	{ name: "apples", quantity: 2 },
	{ name: "bananas", quantity: 0 },
	{ name: "cherries", quantity: 5 },
];

/**
 * Controlla se la proprietà `name` di un object è "cherries"
 * @param {{ name: string; }} fruit - L'elemento da controllare
 * @returns {boolean} Se la proprietà `name` è "cherries"
 */
const isCherries = (fruit) => fruit.name === "cherries";

// Troviamo l'index dell'elemento nell'array che abbia come `name` "cherries"
inventory.findIndex(isCherries); // 2

// Equivalente:
inventory.findIndex(({ name }) => name === "cherries"); // 2

/**
 * Controlla se un numero è primo
 * @param {number} num - Il numero da controllare
 * @returns {boolean} Se il numero è primo o meno
 */
const isPrime = (num) => {
	for (let i = 2; num > i; i++) if (num % i === 0) return false;
	return num > 1;
};

[4, 6, 8, 12].find(isPrime); // -1 - Nessuno degli elementi è primo
[4, 5, 8, 12].find(isPrime); // 1 - Il secondo elemento è primo
```

---

#### `<Array>.flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[]`

Questo metodo costruisce un nuovo array con gli elementi del primo che non sono array, e gli elementi degli array, letti in modo ricorsivo.

**Sintassi:**

```js
array.flat(depth);
```

- `depth`: Quanti array leggere in modo ricorsivo. 1 di default. **Type:** `number`.

**Restituisce:** `unknown[]` - L'array _appiattito_.

**Esempi:**

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2); // [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

#### `<Array>.flatMap<U, This = undefined> (callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>, thisArg?: This): U[]`

Questo metodo è l'equivalente di `<Array>.map(callback, thisArg).flat(1)`.

**Vedi anche:** [`Array#map()`](#arraymapucallbackfn-value-t-index-number-array-t--u-thisarg-any-u).

**Sintassi:**

```js
array.flatMap(callback /** , thisArg **/);
```

- `callback`: La funzione da eseguire su ogni elemento per decretarne il sostituto. **Type:** `(value: unknown, index: number, array: unknown[]) => unknown`;
- `thisArg`: L'elemento da usare come `this` nella funzione `callback`.

**Restituisce:** `unknown[]` - L'array _mappato_ e _appiattito_.

**Esempi:**

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2); // [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

#### `<Array>.includes(searchElement: T, fromIndex?: number): boolean`

Questo metodo controlla se l'array ha un certo elemento.

**Sintassi:**

```js
array.includes(searchElement /** , fromIndex **/);
```

- `searchElement`: L'elemento da cercare. **Type:** `unknown`;
- `fromIndex`: L'index da cui iniziare a cercare. Default: 0. **Type:** `number`

**Restituisce:** `boolean` - `true` se l'array contiene quell'elemento, `false` in caso contrario.

**Esempi:**

```js
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false - Non esiste nessun elemento all'index 3
[1, 2, 3].includes(3, -1); // true - Possiamo usare numeri negativi per riferirci, in questo caso, all'ultimo elemento
// Nota: se `array.length + fromIndex` è minore o uguale a 0, tutto l'array viene controllato
[1, 2, NaN].includes(NaN); // true
```

---

#### `<Array>.indexOf(searchElement: T, fromIndex?: number): number`

Questo metodo è un mix tra [`Array#includes()`](#arrayincludessearchelement-t-fromindex-number-boolean) e [`Array#findIndex()`](#arrayfindindexpredicate-value-t-index-number-obj-t--unknown-thisarg-unknown-number).

Come `includes` cerca l'esistenza di un certo elemento nell'array, ma, come `findIndex`, restituisce il suo index.

**Sintassi:**

```js
array.indexOf(searchElement /** , fromIndex **/);
```

- `searchElement`: L'elemento da cercare. **Type:** `unknown`;
- `fromIndex`: L'index da cui iniziare a cercare. Default: 0. **Type:** `number`

**Restituisce:** `number` - L'index dell'elemento trovato, o `-1` se non è stato possibile trovare alcun elemento.

**Esempi:**

```js
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1 - Nessun elemento trovato
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```
