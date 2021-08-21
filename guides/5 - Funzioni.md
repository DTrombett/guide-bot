# Funzioni

Le funzioni, in JavaScript, costituiscono un blocco di codice che si basa su dei dati e che può essere eseguito quando vogliamo.

Per farlo, ci basterà dichiarare la determinata funzione con i suoi _parametri_, il suo codice ed il suo nome.

## Dichiarare una funzione

Per dichiarare una funzione, utilizziamo la parola chiave [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function), che abbiamo già visto nell'articolo **Parole chiave e operatori**.

Ricontrolliamo la sintassi:

```js
function a(/** b, ...c */) {
	// Azioni da eseguire nella funzione
}
```

- `a`: Il nome della funzione;
- `b, ...c`: I parametri della funzione.
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

- `a, ...b`: Parametri facoltativi da passare nella funzione;
- `c`: Valore da restituire immediatamente.

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
const name = (a) => a + 100;

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
const name1 = (a, b) => a + b + 100;

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

**Nota: è possibile utilizzare solo un rest parameter in una funzione e deve essere collocato obbligatoriamente alla fine.**

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

#### Valori di default

Se un parametro è facoltativo potremmo voler aggiungere un [valore di default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) che viene utilizzato quando quel parametro non viene passato.
Possiamo farlo, semplicemente usando l'uguale vicino il nome del parametro, come se volessimo assegnare un valore a quel parametro.

**Nota: è possibile utilizzare quanti valori di default vogliamo in una funzione ma devono essere collocati obbligatoriamente alla fine.**

**Sintassi:**

```js
function a(/** b, ..., */ c = d) {
	// Azioni da eseguire nella funzione
}
```

- `c`: Il nome del parametro facoltativo;
- `d`: Il valore di default che viene assegnato quando il parametro non viene passato o viene passato undefined.

**Esempi:**

```js
/**
 * Moltiplica 2 numeri.
 * @param {number} a - Il numero da moltiplicare
 * @param {number} [b] - Il numero per cui moltiplicare. 1 di default
 */
function multiply(a, b = 1) {
	return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5

/**
 * Scriviamo in console il tipo del parametro passato
 * @param {number|string|null} num
 */
function test(num = 1) {
	console.log(typeof num);
}

test(); // 'number' (num is 1)
test(undefined); // 'number' (num is 1)
test(""); // 'string' (num is '')
test(null); // 'object' (num is null)
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

## Funzioni asincrone

Le [funzioni asincrone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) sono quelle che utilizzano `async` prima del loro nome o, nelle arrow functions, prima dei parametri.

Queste funzioni possono utilizzare `await` nel loro codice e restituiranno sempre una `Promise`.

**Esempi:**

```js
function resolveAfter2Seconds() {
	console.log("starting slow promise");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("slow");
			console.log("slow promise is done");
		}, 2000);
	});
}

function resolveAfter1Second() {
	console.log("starting fast promise");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("fast");
			console.log("fast promise is done");
		}, 1000);
	});
}

async function sequentialStart() {
	// 1. Questo viene eseguito immediatamente
	console.log("==SEQUENTIAL START==");

	const slow = await resolveAfter2Seconds();
	console.log(slow); // 2. Questo viene eseguito 2 secondi dopo 1

	const fast = await resolveAfter1Second();
	console.log(fast); // 3. Questo viene eseguito 3 secondi dopo 1 e 1 secondo dopo 2
}

async function concurrentStart() {
	// 1. Questo viene eseguito immediatamente
	console.log("==CONCURRENT START with await==");
	const slow = resolveAfter2Seconds(); // Questo viene eseguito immediatamente
	const fast = resolveAfter1Second(); // Questo viene eseguito immediatamente
	// Non viene aspettato che il timer finisca utilizzando await

	console.log(await slow); // 2. Questo viene eseguito 2 secondi dopo 1
	console.log(await fast); // 3. Questo viene eseguito 2 secondi dopo 1 e immediatamente dopo 2 in quanto il timer di un secondo è già terminato
}

function concurrentPromise() {
	// 1. Questo viene eseguito immediatamente
	console.log("==CONCURRENT START with Promise.all==");
	return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
		console.log(messages[0]); // slow
		console.log(messages[1]); // fast
		// Vengono eseguiti entrambi dopo 2 secondi
	});
}

sequentialStart();
setTimeout(concurrentStart, 4000);
setTimeout(concurrentPromise, 7000);
```

## JSDoc

Come spiegato nel primo articolo, per dare informazioni al nostro editor riguardo i parametri delle nostre funzioni dobbiamo usare i JSDoc, ossia dei commenti multi-line prima di dichiarare la funzione.

Qui di seguito è illustrato come utilizzare questi commenti al meglio nelle funzioni.

**Sintassi:**

```js
/**
 * Descrizione della funzione
 * @param {g} b - Descrizione del parametro `b`
 * @param {h} [c] - Descrizione del parametro `c`. Utilizziamo le parentesi quadre per indicare che è facoltativo
 * @param {i} [d] - Descrizione del parametro `d`. Se omettessimo questa riga il suo type sarà automaticamente rilevato dal valore di default
 * @param {...j} f - Descrizione del parametro `e`. Utilizziamo i 3 puntini per indicare che è un rest parameter. Non c'è bisogno di usare le parentesi quadre perchè i rest parameter sono sempre facoltativi
 * @returns {k} Descrizione del valore restituito. Se omettessimo questa riga il suo type sarà automaticamente rilevato
 */
function a(b, c, d = e, ...f) {
	// Azioni da eseguire nella funzione
}
```

- `g`: Il type del parametro `b`;
- `h`: Il type del parametro facoltativo `c`. Non è necessario includere `undefined` perchè viene incluso automaticamente nei parametri facoltativi;
- `i`: Il type del parametro facoltativo `d`. Può essere omesso in quanto utilizziamo un valore di default. In tal caso il suo type sarebbe lo stesso di `e`;
- `j`: Il type del rest parameter `f`. Non è necessario specificare che si tratti di un array perchè viene rilevato automaticamente;
- `k`: Il type del valore restituito. Può essere omesso se il nostro editor è capace di rilevarlo da solo.

**Esempi:**

```js
/**
 * Moltiplica 2 numeri.
 * @param {number} a - Il numero da moltiplicare
 * @param {number} [b] - Il numero per cui moltiplicare. 1 di default
 * @returns {number} Il risultato dell'operazione
 */
function multiply(a, b = 1) {
	return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5

/**
 * Moltiplica più numeri per uno stesso valore.
 * @param {number} multiplier - Il valore per cui moltiplicare
 * @param {number[]} theArgs - I valori da moltiplicare
 * @returns {number[]} I numeri moltiplicati
 */
function multiply2(multiplier, ...theArgs) {
	return theArgs.map((x) => multiplier * x);
}

multiply2(2, 1, 2, 3); // [2, 4, 6]
```

## Function

Ogni funzione appartiene ad una classe speciale, chiamata `Function`.
Questa classe è globale ed accessibile ovunque nel nostro codice.

**Nota: scopriremo nel dettaglio cosa sono le classi nel prossimo articolo, intanto, in questo paragrafo, vediamo quali sono i metodi comuni a tutte le funzioni.**

### Metodi

#### [`<Function>.bind(thisArg: unknown, ...args: unknown[]): Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

Questo metodo ci permette di creare una nuova funzione, identica alla precedente, ma con il valore di `this` diverso e dei parametri _appesi_ all'inizio di essa.

**Sintassi:**

```js
func.bind(thisArg /** , ...args */);
```

- `thisArg`: L'object da usare come `this`;
- `...args`: I parametri da passare come primi nella funzione.

**Restituisce:** `func` - La funzione modificata con il nuovo `this` e i parametri passati all'inizio.

**Esempi:**

```js
const obj = {
	a: 10,
	/**
	 * Somma il valore di a con un altro.
	 * @param {number} b - Un altro numero
	 */
	sum(b) {
		return this.a + b;
	},
};

obj.sum(20); // 30 - `this.a + b` => `10 + 20` => 30
obj.sum.bind({ a: 15 })(25); // 40 - `this.a` corrisponde ora a 15
obj.sum.bind({ a: 35 }, 40)(); // 75 - `this.a` corrisponde ora a 35 e `b` corrisponde a 40
```

#### [`<Function>.call(thisArg: unknown, ...args: unknown[]): unknown`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

Questo metodo ci permette di chiamare una funzione, ma con il valore di `this` diverso.

**Sintassi:**

```js
func.call(thisArg /** , ...args */);
```

- `thisArg`: L'object da usare come `this`;
- `...args`: I parametri da passare nella funzione.

**Restituisce:** `unknown` - Il valore restituito dalla funzione.

**Esempi:**

```js
const obj = {
	a: 10,
	/**
	 * Somma il valore di a con un altro.
	 * @param {number} b - Un altro numero
	 */
	sum(b) {
		return this.a + b;
	},
};

obj.sum(20); // 30 - `this.a + b` => `10 + 20` => 30
obj.sum.call({ a: 15 }, 25); // 40 - `this.a` corrisponde ora a 15 e `b` corrisponde a 25
obj.sum.call({ a: 35 }, 40); // 75 - `this.a` corrisponde ora a 35 e `b` corrisponde a 40
```

## Funzioni globali

Ci sono poi delle funzioni predefinite che possiamo utilizzare ovunque.

Di seguito ne è una lista.

### [`eval(x: string): unknown`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)

Esegue un codice JavaScript rilevato da una stringa.

**Nota: questa funzione può essere pericolosa, in quanto il codice potrebbe avere origini sconosciute e verrà eseguito normalmente**

**Sintassi:**

```js
eval(x);
```

- `x`: Una stringa che contiene codice JavaScript valido.

**Restituisce:** `unknown` - Il risultato dell'esecuzione del codice.

**Esempi:**

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### [`isFinite(number: number): boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)

Determina se un numero è finito (non infinito).

**Sintassi:**

```js
isFinite(number);
```

- `number`: Un qualsiasi numero.

**Restituisce:** `boolean` - `true` se il numero passato non è `Infinity` o `NaN`, `false` in caso contrario.

**Esempi:**

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true
```

### [`isNaN(number: number): boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

Determina se un numero è **NaN** (not-a-number).

**Sintassi:**

```js
isNaN(number);
```

- `number`: Un qualsiasi numero.

**Restituisce:** `boolean` - `true` se il numero passato non è `NaN`, `false` in caso contrario.

**Esempi:**

```js
isNaN(NaN); // true

isNaN(37); // false
```

### [`parseFloat(string: string): number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

Converte una stringa in un numero con la virgola.

**Sintassi:**

```js
parseFloat(string);
```

- `string`: Una stringa che contiene un numero con la virgola.

**Restituisce:** `number` - Il numero rilevato, o `NaN` se non è stato possibile trovare alcun numero.

**Esempi:**

```js
// Tutti i seguenti esempi restituiscono 3.14:
parseFloat("3.14");
parseFloat("  3.14  ");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14some non-digit characters");
```

### [`parseInt(string: string, radix?: number): number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

Converte una stringa in un numero con la virgola.

**Sintassi:**

```js
parseInt(string /** , radix */);
```

- `string`: Una stringa che contiene un numero intero;
- `radix`: La base del numero (decimale, ottale, etc...). Facoltativo, è 10 di default se il numero **non** inizia con 0, 16 in caso contrario.

**Restituisce:** `number` - Il numero rilevato, o `NaN` se non è stato possibile trovare alcun numero.

**Esempi:**

```js
// Tutti i seguenti esempi restituiscono 15:
parseInt("015", 10);
parseInt("15,123", 10);
parseInt("15 * 3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
```

### [`encodeURI(uri: string): string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)

Codifica una stringa in formato URI.

**Sintassi:**

```js
encodeURI(uri);
```

- `uri`: Un URI.

**Restituisce:** `string` - La stringa convertita in formato URI.

**Esempi:**

```js
encodeURI(";,/?:@&=+$#"); // ;,/?:@&=+$#
encodeURI("-_.!~*'()"); // -_.!~*'()
encodeURI("ABC abc 123"); // ABC%20abc%20123
```

### [`decodeURI(encodedURI: string): string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)

Decodifica una stringa dal formato URI.

**Sintassi:**

```js
decodeURI(encodedURI);
```

- `encodedURI`: Un URI codificato.

**Restituisce:** `string` - La stringa decodificata dal formato URI.

**Esempi:**

```js
decodeURI("https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

## Conclusione

In questo articolo abbiamo osservato le funzioni e il loro utilizzo!
Ora sappiamo creare una funzione ed utilizzare i suoi parametri.

Nel prossimo articolo vedremo invece le classi, una specie di incrocio tra le funzioni e gli object!

### **Good Coding!**
