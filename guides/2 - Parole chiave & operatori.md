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
a += b; // Equivalente: a = a + b
```

- `a`: La variabile da riassegnare. **Type:** `string | number`;
- `b`: Il valore da aggiungere. Se `a` rappresenta una stringa questo valore può essere qualsiasi elemento che può essere convertito in una stringa. Se invece rappresenta un numero, allora deve essere un numero anche il valore da aggiungere, nel caso sia una stringa Typescript ci mostrerà un errore.

**Esempi:**

```js
let foo = "foo";
let bar = 5;

bar += 2; // 7

foo += false; // "foofalse"

foo += "bar"; // "foobar"
```

#### [Assegnazione con sottrazione: `-=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)

Questo operatore ci permette di sotrarre uno specifico numero ad una variabile numerica riassegnandola.

**Sintassi:**

```js
a -= b; // Equivalente: a = a - b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il valore da sotrarre. **Type:** `number`.

**Esempi:**

```js
let bar = 5;

bar -= 2; // 3
```

#### [Assegnazione con moltiplicazione: `*=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)

Questo operatore ci permette di moltiplicare uno specifico numero ad una variabile numerica riassegnandola.

**Sintassi:**

```js
a *= b; // Equivalente: a = a * b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il valore da moltiplicare. **Type:** `number`.

**Esempi:**

```js
let bar = 5;

bar *= 2; // 10
```

#### [Assegnazione con divisione: `/=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment)

Questo operatore ci permette di dividere una variabile per uno specifico numero, riassegnandola.

**Sintassi:**

```js
a /= b; // Equivalente: a = a / b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il valore per cui dividere. **Type:** `number`.

**Esempi:**

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
```

#### [Assegnazione del resto: `/=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment)

Questo operatore ci permette di riassegnare ad una variabile il valore del resto della divisione tra se stessa e un numero.

**Sintassi:**

```js
a %= b; // Equivalente: a = a % b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il valore per cui dividere per calcolare il resto. **Type:** `number`.

**Esempi:**

```js
let bar = 5;

bar %= 2; // 1
bar %= 0; // NaN
```

#### [Assegnazione con elevamento a potenza: `/=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)

Questo operatore ci permette di elevare a potenza una variabile per uno specifico numero, riassegnandola.

**Sintassi:**

```js
a **= b; // Equivalente: a = a ** b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il valore per cui elevare a potenza. **Type:** `number`.

**Esempi:**

```js
let bar = 5;

bar **= 2; // 25
```

#### [Assegnazione con spostamento dei bit a sinistra: `<<=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)

Questo operatore ci permette di eseguire lo spostamento dei bit a sinistra ad una variabile per uno specifico numero di bit, riassegnandola.

**Sintassi:**

```js
a <<= b; // Equivalente: a = a << b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il numero di bit da spostare a sinistra. **Type:** `number`.

**Esempi:**

```js
let bar = 5; // 00000000000000000000000000000101

bar <<= 2; // 00000000000000000000000000010100
```

#### [Assegnazione con spostamento dei bit a destra: `>>=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)

Questo operatore ci permette di eseguire lo spostamento dei bit a destra ad una variabile per uno specifico numero di bit, riassegnandola.

**Sintassi:**

```js
a >>= b; // Equivalente: a = a >> b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il numero di bit da spostare a destra. **Type:** `number`.

**Esempi:**

```js
let bar = 5; // 00000000000000000000000000000101

bar >>= 2; // 1 - 00000000000000000000000000000001
```

<!-- TODO: Missing Assignments -->

#### [Assegnazione con il Logical AND: `&&=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)

Questo operatore ci permette di riassegnare una variabile ad un valore solo se il valore di quella variabile è [veritiero](#espressione-veritiera).

**Sintassi:**

```js
a &&= b; // Equivalente: a = a && (a = b)
```

- `a`: La variabile da riassegnare. **Type:** `unknwon`;
- `b`: Il valore da riassegnare. **Type:** `unknown`.

**Esempi:**

```js
let bar = 5;

bar &&= 0; // 0
bar &&= 10; // 0
```

#### [Assegnazione con il Logical OR: `||=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

Questo operatore ci permette di riassegnare una variabile ad un valore solo se il valore di quella variabile **non** è [veritiero](#espressione-veritiera).

**Sintassi:**

```js
a ||= b; // Equivalente: a = a || (a = b)
```

- `a`: La variabile da riassegnare. **Type:** `unknwon`;
- `b`: Il valore da riassegnare. **Type:** `unknown`.

**Esempi:**

```js
let bar = 0;

bar ||= 5; // 5
bar ||= 10; // 5
```

#### [Assegnazione con il Logical non-null: `??=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)

Questo operatore ci permette di riassegnare una variabile ad un valore solo se il valore di quella variabile è `null` o `undefined`.

**Sintassi:**

```js
a ??= b; // Equivalente: a = a ?? (a = b)
```

- `a`: La variabile da riassegnare. **Type:** `unknwon`;
- `b`: Il valore da riassegnare. **Type:** `unknown`.

**Esempi:**

```js
let bar;

bar ??= 5; // 5
bar ??= 10; // 5
```

#### [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Il _destructuring assignment_ ci permette di assegnare ad una variabile, un valore presente come proprietà in un object.

**Sintassi:**

```js
const [a /* , ... */] = b;
const { c } = d;
const { e: f } = d;

let [a /* , ... */] = b;
let { c } = d;
let { e: f } = d;

[a /* , ... */] = b;
({ c } = d);
({ e: f } = d);
```

- `a`: Il nome da assegnare alla variabile. Rappresenta il primo elemento di `b`. `...` rappresenta gli altri valori di `b`;
- `b`: Qualsiasi elemento iterabile, come nel [for...of loop](#for--continue--forof--forin);
- `c`: Il nome della proprietà in `d` da salvare. Corrisponderà anche al nome della nuova variabile;
- `d`: Un qualsiasi object;
- `e`: Il nome della proprietà in `d` da salvare. Non corrisponderà al nome della variabile, in quanto è seguito dai due punti;
- `f`: Il nome della variabile da assegnare al valore della proprietà di `d`.

**Esempi:**

```js
const array = [1, 2, 3];
const [one, two, three] = array;
let uno, due, tre;

console.log(one, two, three); // 1, 2, 3

[uno, due, tre] = array;
console.log(uno, due, tre); // 1, 2, 3
```

```js
const object = { a: 1, b: 2, c: 3, other: 10 };
const { a, b, c, other: number } = object;

console.log(a, b, c, number); // 1, 2, 3, 10
```

```js
const object = { a: 1, b: 2, c: 3, other: 10 };
let a, b, c, number;

({ a, b, c, other: number } = object);

console.log(a, b, c, number); // 1, 2, 3, 10
```

### [Operatori di comparazione](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)

Questi operatori ci permettono di comparare più elementi e restituiscono un `boolean`.

#### [Uguaglianza: `==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality)

Con questo simbolo possiamo controllare se due elementi sono uguali.

Nel caso i due elementi siano di tipo diverso, allora vengono convertiti allo stesso tipo.

**Sintassi:**

```js
a == b;
```

**Esempi:**

```js
10 == 10; // true
null == undefined; // true
new String() == new String(); // false
"15" == 15; // true
"0" == undefined; // false
```

#### [Disuguaglianza: `!=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#inequality)

Con questo simbolo possiamo controllare se due elementi sono diversi.

Nel caso i due elementi siano di tipo diverso, allora vengono convertiti allo stesso tipo.

**Sintassi:**

```js
a != b;
```

**Esempi:**

```js
10 != 10; // false
null != undefined; // false
new String() != new String(); // true
"15" != 15; // false
"0" != undefined; // true
```

#### [Uguaglianza stretta: `===`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#identity)

Con questo simbolo possiamo controllare se due elementi sono identici.

Nel caso i due elementi siano di tipo diverso, **non** verranno convertiti allo stesso tipo e l'uguaglianza sarà falsa.

**Sintassi:**

```js
a === b;
```

**Esempi:**

```js
10 === 10; // true
"Sus" === `S${"u"}s`; // true
"sus" === "Sus"; // false
```

#### [Disguaglianza stretta: `!==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#nonidentity)

Con questo simbolo possiamo controllare se due elementi **non** sono identici.

Nel caso i due elementi siano di tipo diverso, **non** verranno convertiti allo stesso tipo e l'uguaglianza sarà falsa.

**Sintassi:**

```js
a !== b;
```

**Esempi:**

```js
10 !== 10; // false
"Sus" !== `S${"u"}s`; // false
"sus" !== "Sus"; // true
```

#### [Maggiore: `>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)

Con questo simbolo possiamo controllare se un numero è maggiore di un altro.

Nel caso i due elementi siano di tipo diverso, verranno convertiti allo stesso tipo.

**Sintassi:**

```js
a > b;
```

**Esempi:**

```js
"a" > "b"; // false
"a" > "a"; // false
"a" > "3"; // true

"5" > 3; // true
"3" > 3; // false
"3" > 5; // false

"hello" > 5; // false
5 > "hello"; // false

"5" > 3n; // true
"3" > 5n; // false

5 > 3; // true
3 > 3; // false
3 > 5; // false
```

#### [Maggiore o uguale: `>=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)

Con questo simbolo possiamo controllare se un numero è maggiore o uguale ad un altro.

Nel caso i due elementi siano di tipo diverso, verranno convertiti allo stesso tipo.

**Sintassi:**

```js
a >= b;
```

**Esempi:**

```js
"a" >= "b"; // false
"a" >= "a"; // true
"a" >= "3"; // true

"5" >= 3; // true
"3" >= 3; // true
"3" >= 5; // false

"hello" >= 5; // false
5 >= "hello"; // false

5 >= 3; // true
3 >= 3; // true
3 >= 5; // false
```

#### [Minore: `<`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)

Con questo simbolo possiamo controllare se un numero è minore di un altro.

Nel caso i due elementi siano di tipo diverso, verranno convertiti allo stesso tipo.

**Sintassi:**

```js
a < b;
```

**Esempi:**

```js
"a" < "b"; // true
"a" < "a"; // false
"a" < "3"; // false

"5" < 3; // false
"3" < 3; // false
"3" < 5; // true

"hello" < 5; // false
5 < "hello"; // false

"5" < 3n; // false
"3" < 5n; // true

5 < 3; // false
3 < 3; // false
3 < 5; // true
```

#### [Minore o uguale: `<=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)

Con questo simbolo possiamo controllare se un numero è minore o uguale ad un altro.

Nel caso i due elementi siano di tipo diverso, verranno convertiti allo stesso tipo.

**Sintassi:**

```js
a <= b;
```

**Esempi:**

```js
"a" <= "b"; // true
"a" <= "a"; // true
"a" <= "3"; // false

"5" <= 3; // false
"3" <= 3; // true
"3" <= 5; // true

"hello" <= 5; // false
5 <= "hello"; // false

"5" <= 3n; // false
"3" <= 5n; // true

5 <= 3; // false
3 <= 3; // true
3 <= 5; // true
```

### [Operatori aritmetici](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)

I seguenti operatori ci permettono di eseguire operazioni aritmetiche.

Tutti questi operatori richiedono che gli elementi da utilizzare abbiano `number` come type.

#### [Modulo: `%`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

Con questo operatore possiamo calcolare il resto della divisione tra due numeri.

**Sintassi:**

```js
a % b;
```

**Esempi:**

```js
12 % 5; // 2
1 % -2; // 1
1 % 2; // 1
2 % 3; // 2
5.5 % 2; // 1.5

-12 % 5; // -2
1 % 2; // -1
4 % 2; // -0

NaN % 2; // NaN

Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
```

#### [Incremento: `++`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

Con questo operatore possiamo aggiungere `1` ad una variabile.

Se l'operatore precede la variabile, allora viene restituito il valore risultante, in caso contrario viene restituito il vecchio valore.

**Sintassi:**

```js
a++;
++a;
```

**Esempi:**

```js
let x = 3;
y = x++;

// y = 3
// x = 4

let a = 2;
b = ++a;

// a = 3
// b = 3
```

#### [Decremento: `--`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)

Con questo operatore possiamo levare `1` ad una variabile.

Se l'operatore precede la variabile, allora viene restituito il valore risultante, in caso contrario viene restituito il vecchio valore.

**Sintassi:**

```js
a--;
--a;
```

**Esempi:**

```js
let x = 3;
y = x--;

// y = 3
// x = 2

let a = 2;
b = --a;

// a = 1
// b = 1
```

#### [Negazione numerica: `-`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)

Con questo operatore possiamo invertire il segno di una variabile.

**Sintassi:**

```js
-a;
```

**Esempi:**

```js
const x = 3;
const y = -x;

// y = -3
// x = 3

const x = "4";
const y = -x;

// y = -4
```

#### [Più numerico: `+`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)

Questo operatore forza la conversione di un elemento ad un numero. Nel caso questo non sia possibile, [`NaN`](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/NaN) viene restituito.

Una valida alternativa a questo operatore è utilizzare [`Number(a)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#description).

**Sintassi:**

```js
+a;
```

- `a`: Qualsiasi elemento che può essere convertito in numero.

**Esempi:**

```js
const x = 1;
const y = -1;

+x; // 1
+y; // -1

+true; // 1
+false; // 0
+function (val) {
  return val;
}; // NaN
```

#### [Operatore esponenziale: `**`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)

Questo operatore eleva un numero a potenza.

**Sintassi:**

```js
a ** b;
```

**Esempi:**

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
NaN ** 2; // NaN

2 ** (3 ** 2); // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
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
