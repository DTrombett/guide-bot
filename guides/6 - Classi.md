# Classi

Le [classi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) sono come dei template per creare degli object.
Grazie a loro possiamo creare degli objects simili partendo da una semplice funzione.

## Sommario

- [Classi](#classi)
  - [Sommario](#sommario)
  - [Dichiarare una classe](#dichiarare-una-classe)
  - [`constructor`](#constructor)
  - [Metodi](#metodi)
  - [Getters](#getters)
  - [Estendere una classe](#estendere-una-classe)
  - [Dichiarare una classe con `function`](#dichiarare-una-classe-con-function)
  - [Conclusione](#conclusione)
    - [**Good Coding!**](#good-coding)

---

## Dichiarare una classe

Per dichiarare una classe utilizziamo la parola chiave [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class) che abbiamo spiegato nel dettaglio nell'articolo **Parole chiave & operatori**.

Ogni classe deve avere un nome e una funzione principale che creerà il nostro object.
Generalmente, le classi vengono chiamate con un nome che inizia con una lettera maiuscola (es. **Rettangolo**).

**Sintassi:**

```js
class A {
	constructor(/** b, ...c */) {
		// Adesso abbiamo a disposizione un nuovo object a cui potremo riferirci con la parola `this`.
		// Possiamo impostare delle nuove proprietà di questo object come facciamo normalmente
		// Es. `this.property = value`
	}
}
```

- `A`: Il nome della classe. Segue gli stessi criteri del nome di una variabile;
- `b, ...c`: I parametri della funzione per creare il nostro object.

---

## `constructor`

La prima funzione che dichiariamo si chiama [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) e verrà chiamata quando utilizzeremo la parola [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) per creare il nuovo object.
Questa funzione dovrà quindi impostare le proprietà dell'object, che sarà definito con il nome [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

**Esempi:**

```js
class Rettangolo {
	/**
	 * @param {number} altezza - L'altezza del rettangolo
	 * @param {number} larghezza - La larghezza del rettangolo
	 */
	constructor(altezza, larghezza) {
		this.altezza = altezza; // Impostiamo una proprietà chiamata `altezza` con il valore del primo parametro
		this.larghezza = larghezza; // Impostiamo una proprietà chiamata `larghezza` con il valore del secondo parametro
	}
}

const rettangolo = new Rettangolo(10, 20); // Rettangolo { altezza: 10, larghezza: 20 }
// Ora `rettangolo` è un object che ha una proprietà `altezza` con valore 10 e `larghezza` con valore 20
console.log(rettangolo.altezza);
console.log(rettangolo.larghezza);
// Console: 10
// Console: 20

rettangolo.larghezza = 30; // Possiamo anche riassegnare i suoi valori, come un normale object
console.log(rettangolo.larghezza);
// Console: 30
```

---

## Metodi

Alla nostra nuova classe possiamo anche aggiungere dei metodi, funzioni che si basano sui valori dell'object, li elaborano ed eseguono azioni.

Per creare un metodo creiamo una funzione all'interno delle parentesi graffe della classe, omettendo la parola `function`.

**Sintassi:**

```js
class A {
	constructor(/** b, ...c */) {}

	d(/** e, ...f */) {
		// Azioni da eseguire nel metodo `d`
		// Anche qui possiamo utilizzare `this` per riferirci all'object creato
	}
}
```

- `d`: Nome del metodo da creare;
- `e, ...f`: Parametri da passare nel metodo `d`.

**Esempi:**

```js
class Rettangolo {
	/**
	 * @param {number} altezza - L'altezza del rettangolo
	 * @param {number} larghezza - La larghezza del rettangolo
	 */
	constructor(altezza, larghezza) {
		this.altezza = altezza;
		this.larghezza = larghezza;
	}

	// Creiamo una funzione chiamata `calculateArea` che calcola l'area del rettangolo
	calculateArea() {
		return this.altezza * this.larghezza; // Calcoliamo l'altezza per la larghezza e ricaviamo l'area
	}
}

const rettangolo = new Rettangolo(10, 20);

console.log(rettangolo.calculateArea()); // 200 - `this.altezza * this.larghezza` => `10 * 20` => 200
```

---

## Getters

Nelle classi possiamo anche aggiungere delle proprietà speciali, chiamate [getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get).

I getters sono dei mix tra le proprietà e i metodi, infatti possono essere utilizzate come normali proprietà dall'utente, ma devono eseguire una funzione per ricavare il risultato.
Sono molto utili quando vogliamo creare una proprietà che si basa su altri valori dell'object.

**Sintassi:**

```js
class A {
	constructor(/** b, ...c */) {}

	get d() {
		// Azioni che verranno eseguite quando utilizzeremo la proprietà `d`
	}
}
```

- `d`: Nome della proprietà. Viene dichiarata come un metodo, ma con la parola `get` prima, la quale indica che il valore della proprietà `d` sarà quello restituito dalla funzione.

**Esempi:**

```js
class Rettangolo {
	/**
	 * @param {number} altezza - L'altezza del rettangolo
	 * @param {number} larghezza - La larghezza del rettangolo
	 */
	constructor(altezza, larghezza) {
		this.altezza = altezza;
		this.larghezza = larghezza;
	}

	get area() {
		return this.altezza * this.larghezza;
	}
}

const rettangolo = new Rettangolo(10, 20);

console.log(rettangolo.area); // 200 - `this.altezza * this.larghezza` => `10 * 20` => 200
```

---

## Estendere una classe

In JavaScript possiamo anche creare una classe partendo da un'altra.
Per farlo aggiungiamo la parola [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) dopo il nome della nostra classe, seguito dalla classe da estendere.

L'object che creeremo potrà quindi essere _combinato_ con quello creato da un'altra classe ed avere tutti i suoi metodi e le sue proprietà.
Per far si che questo accada, però, dobbiamo utilizzare la parola chiave [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super).
Nel `constructor`, `super` sarà il constructor della classe estesa e va chiamato subito, mentre nei metodi e getters sarà un riferimento all'object creato dalla classe estesa, praticamente il `this` ma della classe che stiamo estendendo.

**Sintassi:**

```js
class A extends D {
	constructor(/** b, ...c */) {
		super(/** e, ...f */);
		// Qui possiamo continuare le nostre azioni nel constructor come prima
	}

	g(/** h, ...i */) {
		super.j(/** k, ...l */);
	}
}
```

- `D`: La classe da estendere;
- `e, ...f`: I parametri accettati dal constructor della classe estesa;
- `g`: Il nome di un metodo;
- `h, ...i`: I parametri del nostro metodo;
- `j`: Il metodo della classe estesa da chiamare;
- `k, ...l`: I parametri accettati dal metodo `j` della classe estesa.

**Esempi:**

```js
class Animale {
	/**
	 * @param {string} nome - Il nome dell'animale
	 * @param {string} verso - Il verso dell'animale
	 */
	constructor(nome, verso) {
		this.nome = nome;
		this.verso = verso;
	}

	parla() {
		console.log(`${this.nome} fa ${this.verso}.`);
	}
}

class Cane extends Animale {
	/**
	 * @param {string} name - Il nome del cane
	 */
	constructor(name) {
		super(name, "bau"); // chiamiamo il constructor della classe Animale con il verso "bau"
	}

	// Creiamo un metodo `faiBau` che chiama il metodo `parla` della classe Animale
	faiBau() {
		super.parla();
	}
}

const bobby = new Cane("Bobby");
bobby.parla(); // Bobby fa bau.
bobby.faiBau(); // Bobby fa bau.
```

---

## Dichiarare una classe con `function`

Se vogliamo creare una classe semplice, che non abbia metodi nè getters, ma solo un constructor, possiamo anche dichiararla come una funzione normale.
In questo caso daremo alla funzione il nome che vorremmo dare alla classe e potremo utilizzare `this` proprio come nel `constructor` di una classe.

Questo metodo, comunque, è preferibilmente da evitare, in quanto limitato e confusionario, nonchè richiede di ritrasformare la funzione in classe nel caso volessimo aggiungere metodi o getters.

**Esempi:**

```js
/**
 * @param {number} altezza - L'altezza del rettangolo
 * @param {number} larghezza - La larghezza del rettangolo
 */
function Rettangolo(altezza, larghezza) {
	this.altezza = altezza; // Impostiamo una proprietà chiamata `altezza` con il valore del primo parametro
	this.larghezza = larghezza; // Impostiamo una proprietà chiamata `larghezza` con il valore del secondo parametro
}

const rettangolo = new Rettangolo(10, 20); // Rettangolo { altezza: 10, larghezza: 20 }
// Ora `rettangolo` è un object che ha una proprietà `altezza` con valore 10 e `larghezza` con valore 20
console.log(rettangolo.altezza);
console.log(rettangolo.larghezza);
// Console: 10
// Console: 20

rettangolo.larghezza = 30; // Possiamo anche riassegnare i suoi valori, come un normale object
console.log(rettangolo.larghezza);
// Console: 30
```

---

## Conclusione

In questo articolo abbiamo imparato a creare e utilizzare le classi.
Il prossimo sarà l'ultimo articolo riguardo il JavaScript e riguarderà gli array, altri articoli generali sulla programmazione saranno pubblicati anche più in avanti.

### **Good Coding!**
