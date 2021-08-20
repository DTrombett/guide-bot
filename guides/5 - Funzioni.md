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
let c = 4;
let d = 2;
function name2() {
	return c + d + 100;
}

// Equivalente:
let e = 4;
let f = 2;
() => e + f + 100;

/**
 * Funzione classica
 * @param {number} a
 * @param {number} b
 */
function name3(a, b) {
	let chuck = 42;
	return a + b + chuck;
}

/**
 * Equivalente:
 * @param {number} a
 * @param {number} b
 */
(a, b) => {
	let chuck = 42;
	return a + b + chuck;
};

() => ({ foo: "a" }); //  {foo: "a"}
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

### Parametri

I parametri di una funzione sono come delle variabili dichiarate con let all'interno della stessa funzione.

Possiamo decidere noi che nome dare ai parametri, così come quanti includerne nella nostra funzione.
