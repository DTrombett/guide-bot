# Parole chiave & operatori

In questo secondo articolo della guida inizieremo a scoprire qualcosa riguardo al **JavaScript**.
Partiremo dalle basi, infatti inizieremo con una lista delle **parole chiave** e degli **operatori** del JavaScript.

## Cosa sono le parole chiave e gli operatori?

Le **parole chiave**, o **riservate**, del JavaScript sono delle parole che indicano alcune specifiche azioni e non possono essere utilizzate come nomi per variabili, etc...

Gli **operatori** sono simboli o parole che creano una relazione tra più elementi, come un'operazione aritmetica o l'assegnazione di una variabile.

## [Lista degli operatori](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

Partiamo vedendo quali sono gli operatori, suddivisi in categorie, e quali sono le loro funzioni.

### [Operatori di comparazione](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)

Questi operatori ci permettono di comparare più elementi.

Tutti restituiscono un `boolean`.

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
null == undefined; // true - Convertendo i tipi, questi due elementi risultano uguali
new String() == new String(); // false - 2 object (che non fanno riferimento alla stessa variabile) sono sempre diversi
"15" == 15; // true - La stringa viene convertita in numero e 15 viene rilevato
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
"Sus" === `S${"u"}s`; // true - I template literals vengono prima eseguiti
"sus" === "Sus"; // false - Case sensitive
```

#### [Disguaglianza stretta: `!==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#nonidentity)

Con questo simbolo possiamo controllare se due elementi **non** sono identici.

Nel caso i due elementi siano di tipo diverso, **non** verranno convertiti allo stesso tipo e la disuguaglianza sarà vera.

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
// Evita di usare delle stringhe per le comparazioni. Converti prima la stringa in numero
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
// Evita di usare delle stringhe per le comparazioni. Converti prima la stringa in numero
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
// Evita di usare delle stringhe per le comparazioni. Converti prima la stringa in numero
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
// Evita di usare delle stringhe per le comparazioni. Converti prima la stringa in numero
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

**Tutti i seguenti operatori richiedono operandi con type `number`.**

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

// Infinity e NaN non possono essere usati per le divisioni
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

// y: 3
// x: 4

let a = 2;
b = ++a;

// a: 3
// b: 3
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

// y: 3
// x: 2

let a = 2;
b = --a;

// a: 1
// b: 1
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

// y: -3
// x: 3

const x = "4";
const y = -x;

// y: -4
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
+function () {
  return 1;
}; // NaN - Le funzioni non possono essere convertite in numero
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

### [Operatori dei bit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)

Questi operatori trattano tutti i numeri come binari, invece che decimali, ed eseguono azione su di essi.

**Tutti i seguenti operatori richiedono operandi e restituiscono valori con type `number`**

#### [Bitwise AND: `&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)

L'operatore dei bit **AND** confronta i bit di ogni numero, uno ad uno e, per ognuno di essi, restituisce 1 solo se entrambi i bit analizzati sono 1, in caso contrario, restituisce 0.

**Sintassi:**

```js
a & b;
```

**Esempi:**

```js
const a = 5; // 101
const b = 3; // 011
//              |||  Solo gli ultimi bit sono entrambi 1
//              001

a & b; // 001 (1)
```

#### [Bitwise OR: `|`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)

L'operatore dei bit **OR** confronta i bit di ogni numero, uno ad uno e, per ognuno di essi, restituisce 0 solo se entrambi i bit analizzati sono 0, in caso contrario, restituisce 1.

**Sintassi:**

```js
a | b;
```

**Esempi:**

```js
const a = 5; // 101
const b = 3; // 011
//              |||  Nessun bit analizzato è 0 in entrambi i numeri
//              111

a | b; // 111 (7)
```

#### [Bitwise XOR: `^`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)

L'operatore dei bit **XOR** confronta i bit di ogni numero, uno ad uno e, per ognuno di essi, restituisce 0 se i bit analizzati sono uguali, in caso contrario, restituisce 1.

**Questo operatore è spesso confuso ed utilizzato per eseguire una potenza. Usare questo operatore per le potenze è errato e conduce a risultati inaspettati. Il giusto operatore da utilizzare è invece [`*​​*`](#operatore-esponenziale)**

**Sintassi:**

```js
a ^ b;
```

**Esempi:**

```js
const a = 5; // 101
const b = 3; // 011
//              |||  Solo gli ultimi bit sono uguali
//              110

a ^ b; // 110 (7)
```

#### [Bitwise NOT: `~`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)

L'operatore dei bit **NOT** confronta i bit di un numero, e restituisce il suo inverso.

**Sintassi:**

```js
~a;
```

**Esempi:**

```js
const a = -3; // 11111111111111111111111111111101
//               00000000000000000000000000000010
//               Ogni 0 è convertito in 1 e viceversa

~a; // 10 (2)
```

#### [Spostamento dei bit a sinistra: `<<`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift)

L'operatore dei bit di spostamento a sinistra (**Left shift**) aggiunge alla fine del numero binario tanti zeri quanto il secondo operando, spostando così i bit rilevanti verso sinistra.

**Sintassi:**

```js
a << b;
```

**Esempi:**

```js
const a = 5; // 101
const b = 2;

// 5:           00000000000000000000000000000101
//              00000000000000000000000000010100  Spostiamo di due posti verso sinistra i bit rilevanti (101)

a << b; // 10100 (20)
```

#### [Spostamento dei bit a destra: `>>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)

L'operatore dei bit di spostamento a destra (**Right shift**) elimina dalla fine del numero binario tanti bit quanto il secondo operando, spostando così i bit rilevanti verso destra.

**Sintassi:**

```js
a >> b;
```

**Esempi:**

```js
const a = 5; // 101
const b = 2;

// 5:           00000000000000000000000000000101
//              00000000000000000000000000000001
// Spostiamo di due posti verso destra i bit rilevanti (101)
// Gli ultimi 2 bit (01) vengono così scartati

a >> b; // 1
```

### [Operatori logici](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

Questi operatori analizzano uno o due operandi qualsiasi e restituiscono uno dei due o un `boolean` in base a una operazione logica.

#### [AND logico: `&&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

L'operatore logico **AND** legge la prima espressione e, nel caso sia [veritiera](#espressione-veritiera), esegue anche la seconda e la restituisce, in caso contrario, restituisce questa prima espressione.

Semplificando il concetto, in un contesto dove abbiamo bisogno di un `boolean`, come un [`if`](#if--else), l'espressione restituita sarà veritiera **solo e soltanto** se entrambi gli operandi sono veritieri.

**Sintassi:**

```js
a && b;
```

**Esempi:**

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

A() && B(); // false
// console: "called A"
// La funzione `A` restituisce false, perciò l'operatore && non esegue anche la funzione `B`

true && true; // true
true && false; // false
false && true; // false
false && 3 == 4; // false
"Cat" && "Dog"; // "Dog"
false && "Cat"; // false
"Cat" && false; // false
"" && false; // ""
false && ""; // false
```

#### [OR logico: `||`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

L'operatore logico **OR** legge la prima espressione e, nel caso sia [veritiera](#espressione-veritiera), la restituisce, in caso contrario, restituisce esegue e restituisce la seconda.

Semplificando il concetto, in un contesto dove abbiamo bisogno di un `boolean`, come un [`if`](#if--else), l'espressione restituita sarà veritiera se uno degli operandi è veritiero.

**Sintassi:**

```js
a || b;
```

**Esempi:**

```js
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

A() || B(); // true
// console: "called A", "called B"
// La funzione `A` restituisce false, perciò l'operatore || esegue anche la funzione `B`

true || true; // true
false || true; // true
true || false; // true
false || 3 == 4; // false
"Cat" || "Dog"; // "Cat"
false || "Cat"; // "Cat"
"Cat" || false; // "Cat"
"" || false; // false
false || ""; // ""
false || varObject; // varObject
```

#### [NOT logico: `!`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)

L'operatore logico **NOT** legge una sola espressione e restituisce `false` se l'espressione è veritiera, o viceversa.

Semplificando il concetto, in un contesto dove abbiamo bisogno di un `boolean`, come un [`if`](#if--else), l'espressione restituita sarà veritiera se l'operando **non** è un valore veritiero.

**Sintassi:**

```js
!a;
```

**Esempi:**

```js
!true; // false
!false; // true
!""; // true
!"Cat"; // false
```

### [Operatori di assegnazione](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators)

Questi operatori ci permettono di assegnare valori alle variabili. Vediamo quali sono e come si differenziano.

#### [Assegnazione: `=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)

L'uguale è il più semplice operatore di assegnazione ed è utilizzato per assegnare un valore ad una variabile.

**Sintassi:**

```js
a = b;
const a = b;
let a = b;
```

Per informazioni su cosa `a` e `b` rappresentano, controlla [`const / let`](#const--let).

**Restituisce:** `b`.

**Esempi:**

```js
const x = 5;
let y = 10;
let z;

z = y = x; // 5 - `z` e `y` hanno ora lo stesso valore di `x`
```

#### [Assegnazione con aggiunta: `+=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)

Con questo operatore possiamo riassegnare ad una variabile lo stesso valore con un aggiunta.

**Sintassi:**

```js
a += b; // Equivalente: a = a + b
```

- `a`: La variabile da riassegnare. **Type:** `string | number`;
- `b`: Il valore da aggiungere. Se `a` rappresenta una stringa questo valore può essere qualsiasi elemento che può essere convertito in una stringa. Se invece rappresenta un numero, allora deve essere un numero anche il valore da aggiungere, nel caso sia una stringa Typescript ci mostrerà un errore.

**Restituisce:** `a + b`.

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

**Restituisce:** `a - b`.

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

**Restituisce:** `a * b`.

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

**Restituisce:** `a / b`.

**Esempi:**

```js
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
```

#### [Assegnazione del resto: `%=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment)

Questo operatore ci permette di riassegnare ad una variabile il valore del resto della divisione tra se stessa e un numero.

Vedi anche: [Operatore modulo](#modulo).

**Sintassi:**

```js
a %= b; // Equivalente: a = a % b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il valore per cui dividere per calcolare il resto. **Type:** `number`.

**Restituisce:** `a % b`.

**Esempi:**

```js
let bar = 5;

bar %= 2; // 1
bar %= 0; // NaN
```

#### [Assegnazione con elevamento a potenza: `**=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)

Questo operatore ci permette di elevare a potenza una variabile per uno specifico numero, riassegnandola.

Vedi anche: [Operatore esponenziale](#operatore-esponenziale).

**Sintassi:**

```js
a **= b; // Equivalente: a = a ** b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il valore per cui elevare a potenza. **Type:** `number`.

**Restituisce:** `a ** b`.

**Esempi:**

```js
let bar = 5;

bar **= 2; // 25
```

#### [Assegnazione con spostamento dei bit a sinistra: `<<=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)

Questo operatore ci permette di eseguire lo spostamento dei bit a sinistra ad una variabile per uno specifico numero di bit, riassegnandola.

Vedi anche: [Left shift operator](#spostamento-dei-bit-a-sinistra).

**Sintassi:**

```js
a <<= b; // Equivalente: a = a << b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il numero di bit da spostare a sinistra. **Type:** `number`.

**Restituisce:** `a << b`.

**Esempi:**

```js
let bar = 5; // 00000000000000000000000000000101

bar <<= 2; // 00000000000000000000000000010100
```

#### [Assegnazione con spostamento dei bit a destra: `>>=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)

Questo operatore ci permette di eseguire lo spostamento dei bit a destra ad una variabile per uno specifico numero di bit, riassegnandola.

Vedi anche: [Right shift operator](#spostamento-dei-bit-a-destra).

**Sintassi:**

```js
a >>= b; // Equivalente: a = a >> b
```

- `a`: La variabile da riassegnare. **Type:** `number`;
- `b`: Il numero di bit da spostare a destra. **Type:** `number`.

**Restituisce:** `a >> b`.

**Esempi:**

```js
let bar = 5; // 00000000000000000000000000000101

bar >>= 2; // 1 - 00000000000000000000000000000001
```

#### [Assegnazione con il Logical AND: `&&=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)

Questo operatore ci permette di riassegnare una variabile ad un valore solo se il valore di quella variabile è [veritiero](#espressione-veritiera).

Vedi anche: [Operatore logico AND](#and-logico).

**Sintassi:**

```js
a &&= b; // Equivalente: a = a && (a = b)
```

- `a`: La variabile da riassegnare. **Type:** `unknwon`;
- `b`: Il valore da riassegnare. **Type:** `unknown`.

**Restituisce:** `a && b`.

**Esempi:**

```js
let bar = 5;

bar &&= 0; // 0
bar &&= 10; // 0
```

#### [Assegnazione con il Logical OR: `||=`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

Questo operatore ci permette di riassegnare una variabile ad un valore solo se il valore di quella variabile **non** è [veritiero](#espressione-veritiera).

Vedi anche: [Operatore logico OR](#or-logico).

**Sintassi:**

```js
a ||= b; // Equivalente: a = a || (a = b)
```

- `a`: La variabile da riassegnare. **Type:** `unknwon`;
- `b`: Il valore da riassegnare. **Type:** `unknown`.

**Restituisce:** `a || b`.

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

**Restituisce:** `a ?? b`.

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

**Restituisce:** `b` o `d`.

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

### [Operatore condizionale ternario](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#conditional_ternary_operator)

L'operatore condizionale ternario (**[Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)**) è un [`if...else`](#if--else) abbreviato che accetta una condizione da valutare, un'azione da eseguire quando quella condizione è veritiera e una da eseguire quando non lo è.

**Sintassi:**

```js
a ? b : c;
// Equivalente:
if (a) b;
else c;
```

**Esempi:**

```js
const age = 26;
const adult = age >= 18 ? "Yes" : "No"; // "Yes"

function example() {
  return condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
}
// Equivalente:
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

### [Operatori singoli](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#unary_operators)

I seguenti operatori vengono utilizzati con un solo operando.

#### [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)

Questo operatore rimuove una proprietà di un object.

**Sintassi:**

```js
delete a.b;
delete a[b];
```

- `a`: Un qualsiasi object;
- `b`: Il nome della proprietà da eliminare. **Type:** `keyof a`. (Ulteriori info: [`keyof`](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)).

**Restituisce:** `true`.

**Esempi:**

```js
/**
 * Senza specificare il type di questo object,
 * con name facoltativo,
 * Typescript ci mostrerebbe un errore nel primo delete.
 * @type {{
 * name?: string;
 * age: number;
 * designation: string;
 * }}
 */
const EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

delete EmployeeDetails.name; // true

delete EmployeeDetails.salary; // Typescript error: Property 'salary' does not exist on type '{ name: string; age: number; designation: string; }'
```

#### [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

Questo operatore restituisce il tipo di un elemento.

**Sintassi:**

```js
typeof a;
```

**Restituisce:** `"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"`.

**Esempi:**

```js
// Numbers
typeof 37; // "number"
typeof 3.14; // "number"
typeof Math.LN2; // "number"
typeof Infinity; // "number"
typeof NaN; // "number"
typeof Number("1"); // "number"
typeof Number("shoe"); // "number"

typeof 42n; // "bigint"

// Strings
typeof ""; // "string"
typeof "bla"; // "string"
typeof `template literal`; // "string"
typeof "1"; // "string" - Anche se c'è un numero è sempre una stringa
typeof typeof 1; // "string" - typeof restituisce una stringa
typeof String(1); // "string"

// Booleans
typeof true; // "boolean"
typeof false; // "boolean"
typeof Boolean(1); // "boolean"

// Symbols
typeof Symbol("foo"); // "symbol"
typeof Symbol.iterator; // "symbol"

// Undefined
typeof undefined; // "undefined"

// Objects
typeof { a: 1 }; // "object"
typeof [1, 2, 4]; // "object" - Gli array sono comunque considerati object
typeof new Date(); // "object"
typeof /regex/; // "object"
typeof null; // "object" - ATTENZIONE: null non ha un tipo e viene considerato object

// Functions
typeof function () {}; // "function"
typeof class C {}; // "function" - Anche le classi sono funzioni
typeof Math.sin; // "function"
```

#### [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

Questo operatore esegue un'espressione e restituisce `undefined`.

**Sintassi:**

```js
void a;
```

**Restituisce:** `undefined`.

**Esempi:**

```js
void Promise.resolve(); // undefined
```

### [Operatori di relazione](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators)

I seguenti operatori verificano una relazione tra due operandi.

Tutti restituiscono un type `boolean`.

#### [`in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)

Questo operatore verifica se una proprietà è presente in un object.

**Il valore di questo operatore è diverso da quello che ha nel contesto del [`for...in`](#for--continue--forof--forin).**

**Sintassi:**

```js
a in b;
```

- `a`: Il nome della proprietà da controllare. **Type:** `'string' | 'number' | 'symbol'`;
- `b`: Qualsiasi object non primitivo (stringhe, numeri, etc...).

**Esempi:**

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // true
3 in trees; // true
6 in trees; // false
"bay" in trees; // false - "bay" è un valore, non una proprietà. Usa `Array#includes()` invece.
"length" in trees; // true
Symbol.iterator in trees; // true

"PI" in Math; // true

const mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // true
"model" in mycar; // true
```

#### [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

Questo operatore verifica se un object è stato instanziato da una classe.

Per informazioni riguardo le classi controlla [il paragrafo dedicato](#class--this--extends--super--static--new).

**Sintassi:**

```js
a instanceof b;
```

- `a`: L'oggetto da controllare. Può essere qualsiasi object non primitivo;
- `b`: La classe di cui si vuole controllare se `a` faccia parte.

**Esempi:**

```js
const stringObject = new String("String created with constructor");

stringObject instanceof String; // true
stringObject instanceof Object; // true - Tutti gli object derivano dalla classe `Object`
stringObject instanceof Date; // false

const myDate = new Date();

myDate instanceof Date; // true
myDate instanceof String; // false
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

## Conclusione

In questo articolo abbiamo visto molte funzioni utile del javascript.

Con gli operatori potremo eseguire tutti i nostri calcoli, controlli etc... in modo estremamente facile, mentre, grazie alle parole chiave, possiamo implementare nel nostro codice qualsiasi cosa, come loop, con [`for`](#for--continue--forof--forin) e [`while`](#while--dowhile), azioni differenti in base a condizioni, con [`if...else`](#if--else), salvare dei valori, con [`const` e `let`](#const--let), o creare object con metodi predefiniti, con [`class`](#class--this--extends--super--static--new).

Nel prossimo articolo andremo più a fondo con le variabili per imparare come dichiararle correttamente e cambiarne il valore.

## **Good Coding!**
