# Funzioni

Le funzioni, in JavaScript, costituiscono un blocco di codice che si basa su dei dati e che può essere eseguito quando vogliamo.

Per farlo, ci basterà dichiarare la determinata funzione con i suoi _parametri_, il suo codice ed il suo nome

## Dichiarare una funzione

Per dichiarare una funzione, utilizziamo la parola chiave [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function), che abbiamo già visto nell'articolo **Parole chiave e operatori**.

Ricontrolliamo la sintassi:

```js
function a(/** b, ...c */) {
	// Azioni da eseguire nella funzione
}
```

## Arrow functions

C'è poi un metodo diverso per dichiarare una funzione: le [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Grazie a loro possiamo scrivere delle funzioni in modo più semplici che potranno essere eseguite più velocemente.

Vediamo i vantaggi e gli svantaggi di queste speciali funzioni:

**Vantaggi:**

- Più facili da utilizzare;
- Più veloci;
- Possibilità di restituire immediatamente un valore senza utilizzare le parentesi graffe.

**Svantaggi:**

- Non possono utilizzare `this` (vedremo questo più avanti);
- Non possono essere utilizzati come metodi;
- Non possono essere usati per creare classi.

**Sintassi:**

```js
(a) => b; // Se abbiamo solo un parametro e vogliamo restituire direttamente un valore
(/** c, ...d */) => b; // Se abbiamo 0 o più parametri e vogliamo restituire direttamente un valore
(/** c, ...d */) => {
	// Azioni da eseguire nella funzione
}; // Se abbiamo 0 o più parametri e vogliamo eseguire più di un azione
```

- `a`: Unico parametro da passare nella funzione;
- `b`: Valore da restituire immediatamente;
- `c, ...d`: Parametri facoltativi da passare nella funzione.

**Esempi:**

```js
/**
 * Funzione classica
 * @param {number} a
 */
function name(a) {
	return a + 100;
}

/**
 * Equivalente:
 * @param {number} a
 */
(a) => a + 100;

/**
 * Funzione classica
 * @param {number} a
 * @param {number} b
 */
function name1(a, b) {
	return a + b + 100;
}

/**
 * Equivalente:
 * @param {number} a
 * @param {number} b
 */
(a, b) => a + b + 100;

// Funzione classica
const c = 4;
const d = 2;
function name2() {
	return c + d + 100;
}

// Equivalente:
const e = 4;
const f = 2;
() => e + f + 100;

/**
 * Funzione classica
 * @param {number} a
 * @param {number} b
 */
function name3(a, b) {
	const chuck = 42;
	return a + b + chuck;
}

/**
 * Equivalente:
 * @param {number} a
 * @param {number} b
 */
(a, b) => {
	const chuck = 42;
	return a + b + chuck;
};

() => ({ foo: "a" }); //  { foo: "a" }

/**
 * @param {number} a
 */
const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

/**
 * @param {number} a
 * @param {number} b
 */
(a, b) => (a > b ? a : b);

const arr = [5, 6, 13, 0, 1, 18, 23];

arr.reduce((a, b) => a + b); // 66 - Vedremo gli array nel dettaglio in un altro articolo

arr.filter((v) => v % 2 === 0); // [6, 0, 18]

arr.map((v) => v * 2); // [10, 12, 26, 0, 2, 36, 46]

/**
 * Creiamo una Promise
 * Vedremo questa struttura nel dettaglio in un altro articolo
 * @type {Promise<void>}
 */
const promise = new Promise((resolve) => {
	resolve();
});

promise
	.then((a) => {
		console.log(a);
	})
	.catch((b) => {
		console.error(b);
	});

setTimeout(() => {
	console.log("Prima");
	setTimeout(() => {
		console.log("Dopo");
	}, 1);
}, 1);
```

## Elementi di una funzione

Una funzione avrà quindi:

- Un nome (`a`);
- Dei parametri facoltativi (`b, ...c`);
- Un codice.

Andiamo ad esaminare questi elementi nel dettaglio.

### Nome della funzione

Ogni funzione deve avere un nome.
Grazie ad esso saremo in grado di usarla, o _chiamarla_.

Il nome della funzione deve rispettare le stesse condizioni di quello delle variabili che abbiamo visto nell'articolo **Variabili**.

Ci sono casi in cui invece il nome è facoltativo, come nei _callback_, dove, però, utilizzeremo soprattutto le arrow functions:

```js
setTimeout(() => console.log("Sus"), 1); // Qui abbiamo utilizzato una arrow functions invece che una funzione normale
// Se volessimo utilizzare una funzione classica faremmo così:
setTimeout(function () {
	return console.log("Sus");
}, 1); // In questo caso possiamo omettere il nome della funzione
```

Le arrow functions, invece, non hanno un nome e le possiamo salvare in delle costanti:

```js
const func = () => console.log("Sus");

func();
// Console: "Sus"
```

### Parametri

I parametri di una funzione sono come delle variabili dichiarate con `let` all'interno della stessa funzione.

Possiamo decidere noi che nome dare ai parametri, così come quanti includerne nella nostra funzione e di quale tipo.

**Esempi:**

```js
const sus = () => console.log("Sus"); // Nessun parametro

/**
 * Creiamo una funzione con un parametro
 * Usiamo il jsdoc per specificare il tipo del parametro
 * @param {unknown} a
 */
const log = (a) => console.log(a);
```

#### Rest parameters

Se in una funzione vogliamo utilizzare un numero indefinito di parametri, possiamo utilizzare i [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

Per farlo usiamo i 3 puntini prima del nome del parametro e nella funzione potremo accedere a quel parametro riferendoci ad un array dei parametri ricevuti.

**Sintassi:**

```js
const a = (/** b, ... , */ ...c) => {
	// Azioni da eseguire nella funzione
	// `c` si riferirà ad un array di parametri passati
};

// O con la funzione classica:
function a(/** b, ... , */ ...c) {
	// Azioni da eseguire nella funzione
	// `c` si riferirà ad un array di parametri passati
}
```

- `c`: Nome da assegnare alla variabile che rappresenterà l'array di parametri passati alla fine (dopo `b` ed altri eventuali parametri).

**Esempi:**

```js
/**
 * @param {string} a
 * @param {string} b
 * @param {...string} otherParams - Rappresenta tutti i parametri passati nella funzione dopo `a` e `b`, quindi dal terzo in poi
 */
function myFun(a, b, ...otherParams) {
	console.log("a", a);
	console.log("b", b);
	console.log("otherParams", otherParams);
}

myFun("one", "two", "three", "four", "five", "six");
// Console:
// a, "one"
// b, "two"
// otherParams, ["three", "four", "five", "six"]

myFun("one", "two");
// Console:
// a, "one"
// b, "two"
// otherParams, [] - Abbiamo passato solo due parametri perciò `otherParams` sarà un array vuoto
```

### Codice della funzione

Una funzione, infine, ha un codice.
Questo codice rappresenta le azioni da eseguire quando la funzione viene chiamata, utilizzando i parametri passati ad essa.

Dopo aver eseguito le dovute operazioni, la funzione potrà poi restituire un valore con la parola chiave `return`.
Se nessun valore viene restituito, la funzione restituirà automaticamente `undefined`.

**Esempi:**

```js
/**
 * Eseguiamo la somma di tutti i numeri passati come parametro.
 * @param {...number} numbers - I numeri da sommare
 */
const sum = (...numbers) => numbers.reduce((num1, num2) => num1 + num2);
// Questa funzione non usa return ma è un arrow function abbreviata perciò il valore restituito è quello immediatamente dopo la freccia
/**
 * Equivalente:
 * @param {...number} numbers - I numeri da sommare
 */
(...numbers) => {
	return numbers.reduce((num1, num2) => num1 + num2);
};

sum(12, 123, 55, 76); // 266
```

## Nested functions

Si parla di _funzioni annidate_ (o [nested funnctions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions?retiredLocale=it#nested_functions_and_closures)) quando una funzione viene dichiarata all'interno di un'altra.

In generale, si dovrebbe evitare di annidare più funzioni perchè questo porta solo a complicazioni nella lettura e interpretazione del codice, nonchè a un rallentamento nell'esecuzione del codice.

Se dobbiamo utilizzare una funzione che utilizzi dei dati passati come parametri in un'altra funzione è bene utiizzare un arrow function e, se possibile, direttamente usarla dove ci serve, senza doverla dichiarare.

**Esempi:**

```js
/**
 * @param {string[]} args
 */
const run = (args) => {
	const [first] = args;
	return new Promise((resolve) => {
		resolve(first);
	});
	// Abbiamo passato una funzione come parametro in `new Promise()` ma senza dichiararla all'esterno
};
```
