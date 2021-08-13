# Parole chiave & operatori

In questo secondo articolo della guida inizieremo a scoprire qualcosa riguardo al **JavaScript**.
Partiremo dalle basi, infatti inizieremo con una lista delle **parole chiave** e degli **operatori** del JavaScript.

## Cosa sono le parole chiave e gli operatori?

Le **parole chiave**, o **riservate**, del JavaScript sono delle parole che indicano alcune specifiche azioni e non possono essere utilizzate come nomi per variabili, etc...

Gli **operatori** sono simboli o parole che creano una relazione tra più elementi, come un'operazione aritmetica o l'assegnazione di una variabile.

## [Lista degli operatori](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

Partiamo vedendo quali sono gli operatori, suddivisi in categorie, e quali sono le loro funzioni.

### [Operatori di assegnazione](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators)

I primi operatori sono quelli che ci permettono di assegnare valori alle variabili. Vediamo quali sono e come si differenziano.

#### [Assegnazione: `=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)

Questo è il più semplice operatore di assegnazione ed è utilizzato per inizializzare una variabile.

**Sintassi:**

```js
a = b;
const a = b;
let a = b;
```

Per informazioni su cosa `a` e `b` rappresentano, controlla [`const / let`](#const--let).

#### [Assegnazione con aggiunta: `+=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)

Con questo operatore possiamo riassegnare ad una variabile lo stesso valore con un aggiunta.

**Sintassi:**

```js
a += b;
```

- `a`: La variabile da riassegnare. Deve essere di tipo `string | number | boolean`;
- `b`: Il valore da aggiungere. Se `a` rappresenta una stringa questo valore può essere qualsiasi elemento che può essere convertito in una stringa. Se invece rappresenta un numero, allora deve essere un numero anche il valore da aggiungere, nel caso sia una stringa Typescript ci mostrerà un errore.

**Equivalente:**

```js
a = a + b;
```

**Esempi:**

```js
let foo = "foo";
let bar = 5;

bar += 2; // 7

foo += false; // "foofalse"

foo += "bar"; // "foobar"
```

## Lista delle parole chiave

Qui di seguito è riportata una lista delle parole chiave nel JavaScript e della loro funzione.

### [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) / [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

`const` e `let` sono le parole chiave utilizzate per dichiarare delle variabili.

**Vedremo queste parole chiave nel dettaglio in un altro articolo.**

`const` indica una costante, il cui valore è sempre lo stesso e non può essere modificato.

**Sintassi:**

```js
const a = b;
```

- `a`: Il nome della costante;
- `b`: Il valore della costante. Può essere qualsiasi ma è comunque obbligatorio e non può essere omesso.

`let` indica una variabile, il cui valore può essere modificato.

**Sintassi:**

```js
let a = b;
// Oppure
let a;
```

- `a`: Il nome della variabile.
- `b`: Il valore della variabile. Può essere qualsiasi e può essere omesso, come nel secondo caso.

**Esempi:**

```js
const i = 10;
let n = i; // 10
n = 0;
console.log(i, n); // 10, 0
```

### [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) / [`else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

Questa parola chiave ci permette di eseguire una determinata azione se una condizione è [veritiera](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

**Sintassi:**

```js
if (a) {
  // Azioni da eseguire se la condizione è veritiera
}
```

- `a`: Espressione da verificare. Il codice nelle parentesi verrà eseguito solo se questa espressione è _veritiera_.

`else` viene utilizzato per dichiarare l'azione da eseguire se la condizione **non** è veritiera.

**Sintassi:**

```js
if (a) {
  // Azioni da eseguire se la condizione è veritiera
} else {
  // Azione da eseguire se la condizione NON è veritiera
}
```

**Esempi:**

```js
if (expr) {
  console.log("Sì"); // Se `expr` è un valore veritiero, allora "Sì" verrà scritto in console. In caso contrario verrà scritto "No"
} else {
  console.log("No");
}
```

#### **Espressione veritiera**

Un valore è considerato **sempre** veritiero a meno che non sia uno dei seguenti:

- `false`;
- `0`;
- `""`;
- `null`;
- `undefined`;
- `NaN`.

### [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) / [`case`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) / [`default`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) / [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)

`switch` serve per eseguire diverse azioni a seconda di un valore.

**Sintassi:**

```js
switch (a) {
}
```

- `a`: L'espressione da controllare.

Per definire le azioni da eseguire per ogni valore di `a` utilizziamo la parola `case`.
Sintassi:

```js
switch (a) {
  case b:
  // Azioni da eseguire se il valore di `a` è uguale a quello di `b`
  /* case ...: */
}
```

- `b`, `...`: I valori di `a`. Se `a` corrisponde a quel valore, allora le azioni dopo i due punti vengono eseguite.

Può essere anche aggiunta una azione da eseguire quando il valore di `a` è diverso da tutti quelli elencati con `case`. In questo caso utilizziamo la parola `default`.

**Sintassi:**

```js
switch (a) {
  case b:
  // Azioni da eseguire se il valore di `a` è uguale a quello di `b`
  /* case ...: */

  default:
  // Azioni da eseguire se il valore di `a` non corrisponde a nessuno di quelli elencati (`b`, `...`)
}
```

Per far sì che lo switch si fermi dopo aver eseguito le azioni nel `case`, dobbiamo aggiungere la parola `break`.
Omettendo questa parola alla fine delle azioni il codice nello switch andrà avanti e le azioni nel `default` verranno eseguite.

**Sintassi:**

```js
switch (a) {
  case b:
    // Azioni da eseguire se il valore di `a` è uguale a quello di `b`
    break;
  /* case ...:

        break; */
  default:
  // Azioni da eseguire se il valore di `a` non corrisponde a nessuno di quelli elencati (`b`, `...`)
}
```

**Esempi:**

```js
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

### [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) / [`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) / [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) / [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

Con la parola chiave `for` possiamo creare un loop che si basa su 3 espressioni.

**Sintassi:**

```js
for (a; b; c) {
  // Codice da eseguire nel loop
}
```

- `a`: Espressione per creare una variabile da utilizzare nel loop. Generalmente si inizializza a `0`;
- `b`: Condizione che verrà verificata per decidere se il loop deve continuare o no;
- `c`: Azione da eseguire alla fine di ogni esecuzione del codice nel loop.

Tutte le espressioni sono facoltative ma è comunque obbligatorio aggiungere i punti e virgola. Ometterle tutte crea un loop infinito che va bloccato manualmente.

Nel codice possiamo utilizzare `break` per uscire dal loop.

Se invece vogliamo passare all'esecuzione successiva prima che il codice termini possiamo utilizzare la parola `continue`.

**Sintassi:**

```js
continue;
```

Ci sono poi 2 speciali utilizzi del for loop: _for...of_ e _for...in_.

Un _for...of_ loop esegue un'azione per ogni elemento di un array o carattere di una stringa, o elemento di altre strutture compatibili.

**Sintassi:**

```js
for (a of b) {
  // Azioni da eseguire per ogni elemento di `b`. `a` sarà un riferimento a quell'elemento
}
```

- `a`: Nome della variabile che rappresenterà l'elemento ad ogni esecuzione;
- `b`: Un array, stringa o qualsiasi altro elemento supporti questa iterazione.

Un _for...in_ loop permette di eseguire un'azione per ogni _property_ di un _object_

**Sintassi:**

```js
for (a in b) {
  // Azioni da eseguire per ogni proprietà di `b`. `a` sarà un riferimento a quella proprietà
}
```

- `a`: Nome della variabile che rappresenterà la proprietà ad ogni esecuzione;
- `b`: Un qualsiasi _object_.

**Esempi:**

```js
let text = ""; // Creiamo una stringa vuota

// Creiamo un loop che verrà eseguito 10 volte
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // Se `i` è 3 (quindi siamo alla quarta esecuzione) il codice viene "saltato" e si passa alla prossima esecuzione
  }
  text = text + i; // Ad ogni esecuzione aggiungiamo il numero alla stringa
}

console.log(text); // "012456789" - Il 3 manca perchè lo abbiamo saltato con il `continue`
```

```js
const array = ["a", "b", "c"];

for (const element of array) {
  console.log(element); // "a", "b", "c"
}
```

```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`); // "a: 1", "b: 2", "c: 3"
}
```

### [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) / [`do...while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

Un _while loop_ è un loop che esegue una determinata azione finchè una condizione è vera. Una specie di [for loop](#for--continue--forof--forin) molto semplificato.

**Sintassi:**

```js
while (a) {
  // Azioni da eseguire quando la condizione `a` è veritiera
}
```

- `a`: Condizione da verificare prima di ogni esecuzione. Se è veritiera, allora il codice nel loop viene eseguito, in caso contrario il codice va avanti.

Se vogliamo invece controllare la condizione **dopo** l'esecuzione, allora possiamo usare il _do...while_ loop.

**Sintassi:**

```js
do {
  // Azioni da eseguire nel loop prima di controllare la condizione
} while (a);
```

**Esempi:**

```js
let n = 0; // Creiamo una variabile `n` ed assegnamogli il valore 0

// Eseguiamo un loop per 3 volte
while (n < 3) {
  n++; // Ad ogni esecuzione aumentiamo di 1 la variabile `n`
}

console.log(n); // 3
```

```js
let str = ""; // Creiamo una stringa vuota
let i = 0; // Creiamo una variabile `i` e inizializziamola a 0

do {
  i++; // Ad ogni esecuzione aumentiamo di 1 la variabile `i`
  str = str + i; // ed aggiungiamo il valore di `i` alla stringa
} while (i < 5); // Eseguiamo il loop fino a che `i` è minore di 5

console.log(str); // "12345"
```

### [`function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) / [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

La parola chiave `function` serve per creare una funzione JavaScript.

**Vedremo questa struttura nel dettaglio in un altro articolo.**

**Sintassi:**

```js
function a(/* b, ... */) {
  // Azioni da eseguire nella funzione
}
```

- `a`: Nome della funzione da creare;
- `b, ...`: Lista dei parametri della funzione. Facoltativo, una funzione può anche non avere parametri.

La funzione verrà poi chiamata nel seguente modo:

```js
a(/* b , ... */);
```

`return` indica il valore che verrà restituito dalla funzione.

**Sintassi:**

```js
return a;
```

- `a`: Il valore da restituire. È facoltativo e può essere omesso nel caso non si voglia restituire nessun valore (`return;`).

**Esempi:**

```js
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */
function sumNumbers(a, b, c) {
  return a + b + c; // Restituiamo la somma dei 3 parametri passati nella funzione
}

console.log(sumNumbers(2, 4, 6)); // 12
```

```js
/**
 * @param {unknown} a
 * @returns {void}
 */
function log(a) {
  console.log(a); // Scriviamo il valore passato in console
  return; // Non restituiamo nulla. Possiamo anche ometterlo in quanto si trova al termine della funzione
}

log("Sus"); // "Sus"
```

```js
/**
 * @returns {void}
 */
function logSus() {
  console.log("Sus"); // Scriviamo "Sus" in console
  return; // Non restituiamo nulla. Possiamo anche ometterlo in quanto si trova al termine della funzione
}

logSus(); // "Sus"
```

### [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) / [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

`async` viene utilizzata prima della parola `function` per abilitare l'uso della parola `await` all'interno della funzione.

Se questa parola chiave viene utilizzata, la funzione restituirà sicuramente una `Promise`, il cui valore da restituire sarà quello restituito dalla funzione.

**Sintassi:**

```js
async function a(/* b, ... */) {
  // Azioni da eseguire nella funzione. È possibile utilizzare la parola chiave `await`
}
```

`await` viene usata prima di una `Promise` per far sì che il codice corrente si blocchi fino a che quella `Promise` non viene completata.
Sintassi:

```js
await a;
```

- `a`: La `Promise` da attendere. **Type:** `Promise`.

**Esempi:**

```js
/**
 * @param {number} m
 * @returns {Promise<number>}
 */
async function wait(m) {
  const date = Date.now(); // Registriamo la data quando la funzione viene chiamata
  await new Promise((resolve) => setTimeout(resolve, m)); // Attendiamo tanti millisecondi quanti ne sono stati passati come parametro `m` nella funzione
  const passed = Date.now() - date; // Registriamo quanto tempo è passato da quando la funzione è stata chiamata
  console.log(passed); // ~1000
  return passed; // Restituiamo quel valore. Nonostante sia un numero la funzione restituirà una `Promise` poiché abbiamo utilizzato la parola `async`
}

console.log(wait(1000)); // Promise { <pending> }
```

### [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

Le paroli `try` e `catch` servono per eseguire una determinata azione nel caso si verifichi un error nel codice.

**Sintassi:**

```js
try {
  // Codice da provare
} catch (a) {
  // Azioni da eseguire se il codice sopra ha prodotto un errore
}
```

- `a`: Il nome da assegnare alla variabile che conterrà l'errore.

**Esempi:**

```js
const a = "Sus";
try {
  console.log(b);
} catch (error) {
  console.error(error); // ReferenceError: b is not defined
}
```

### [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

Con la parola `throw` possiamo generare un errore e bloccare il codice corrente.

Funziona alla stessa maniera di `return`, ma con la differenza che invece di restituire un valore comunica all'utente che un errore si è verificato e il codice non può continuare. Per far si che il processo in corso continui bisogna gestire l'errore utilizzando un [`try...catch`](#trycatch) block.

**Sintassi:**

```js
throw a;
```

- `a`: L'errore da generare. Può essere qualsiasi valore, ma è obbligatorio.

**Esempi:**

```js
// Creiamo una funzione che calcola l'area di un rettangolo con base e altezza
function getArea(width, height) {
  // Controlliamo se base e altezza sono numeri
  if (isNaN(width) || isNaN(height)) {
    throw "Non hai fornito numeri validi!"; // In caso contrario generiamo un errore
  }
}

try {
  getArea(3, "A"); // Chiamiamo la funzione, ma, invece di passare un numero, passiamo "A", che farà generare un errore
} catch (e) {
  console.error(e); // "Non hai fornito numeri validi!"
}
```

### [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class) / [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) / [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) / [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) / [`static`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) / [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

Con la parola `class` possiamo creare una nuova _Classe_.

Le classi, in JavaScript, possono generare degli _object_ con gli stessi elementi e metodi che però possono avere valori diversi. Sono praticamente dei _template_ che possono cambiare a seconda dei dati forniti e dei metodi utilizzati.

**Vedremo questa struttura nel dettaglio in un altro articolo.**

**Sintassi:**

```js
class a {
  // Elementi di questa classe
}
```

- `a`: Il nome della classe.

Nella classe possiamo riferirci all'elemento istanziato e modificarlo grazie alla parola `this`.

**Sintassi:**

```js
this; // Riferimento all'oggetto istanziato
```

Se abbiamo già un'altra classe da cui vogliamo creare la nostra, allora possiamo estenderla con la parola `extends`.

**Sintassi:**

```js
class a extends b {
  // Elementi di questa classe
}
```

- `b`: La classe da estendere.

Lavorando ad una classe che ne estende un'altra, potremo aver bisogno di accedere a metodi presenti nella classe estesa. In questo caso possiamo utilizzare la parola `super` per fare riferimento ad essa.

**Sintassi:**

```js
super(/* a, ... */); // Chiamiamo la classe estesa
super.b(/* c, ... */); // Chiamiamo un metodo della classe estesa
```

- `a`, `...`: Parametri da passare al [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) della classe estesa;
- `b`: Nome del metodo della classe da chiamare;
- `c`, `...`: Parametri da passare al metodo della classe estesa.

In una classe possiamo anche aggiungere metodi statici, che non hanno quindi bisogno di _istanziare_ la classe. Per farlo aggiungiamo `static` prima del nome del metodo.

**Sintassi:**

```js
class a {
  static b(/* c, ... */) {
    // Azioni da eseguire nel metodo statico
  }
}
```

- `b`: Nome del metodo statico;
- `c`, `...`: Lista dei parametri per questo metodo;

Per instanziare un nuovo oggetto appartenente ad una classe, utilizziamo la parola `new`.

**Sintassi:**

```js
new a(/* b, ... */);
```

- `a`: Classe da costruire;
- `b`, `...`: Parametri da passare alla funzione `constructor` della classe.

**Esempi:**

```js
// Creiamo una classe chiamata Square che rappresenterà un quadrato
class Square {
  /**
   * Questa è la funzione che viene eseguita quando è usato `new`
   * @param {number} height
   */
  constructor(height) {
    this.height = height; // Impostiamo la proprietà `height` al valore passato nella funzione
  }

  // Creiamo un metodo per calcolare l'area del quadrato
  getArea() {
    return this.height ^ 2; // Calcoliamo l'altezza al quadrato
  }

  // Creiamo un metodo statico che crea un quadrato di altezza 0
  static createEmpty() {
    return new Square(0); // Creiamo un quadrato passando 0 come primo parametro e restituiamolo
  }
}

// Creiamo una classe chiamata Rectangle per rappresentare un rettangolo che estende il quadrato
class Rectangle extends Square {
  /**
   * @param {number} height
   * @param {number} width
   */
  constructor(height, width) {
    super(height); // Assicuriamoci di chiamare la funzione del quadrato prima di andare avanti

    this.width = width; // Impostiamo la larghezza del rettangolo
  }

  // Creiamo una proprietà perimetro che si basa sugli  altri dati del rettangolo
  get perimeter() {
    return (this.height + this.width) * 2; // Sommiamo base e altezza e raddoppiamola
  }

  getArea() {
    return this.height * this.width; // Modifichiamo la funzione per calcolare l'area in modo che restituisca la base per l'altezza
  }
}

const rettangolo = new Rectangle(10, 20); // Creiamo un nuovo rettangolo con base 20 e altezza 10 utilizzando la parola `new`

console.log(rettangolo.getArea()); // 200
```
