# Oggetti

Il JavaScript è un linguaggio che si basa sugli _[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)_.
Un object è una collezione di proprietà, ossia delle associazioni tra una chiave e un valore.

## Come funzionano gli object?

Possiamo comparare questi object agli oggetti nella vita reale.
Prendiamo, ad esempio, una tazza: avrà un colore, un materiale, una grandezza, etc...

La stessa cosa vale per gli object del JavaScript: ogni object ha delle proprietà, le quali ci forniscono dei dati.

## Proprietà e valori

Per sapere quale è il valore che corrisponde ad una certa proprietà, in JavaScript utilizziamo il punto:

```js
a.b; // Leggiamo la proprietà `b`
a.b = c; // Specifichiamo che la proprietà `b` corrisponde al valore di `c`
```

- `a`: L'oggetto che stiamo leggendo. **Type:** `Object`;
- `b`: Il nome della proprietà da leggere. **Type:** `string | symbol | number`;
- `c`: Il valore da assegnare alla proprietà `b`. **Type:** `unknown`.

## Creare un object

Tutto in JavaScript è un object, tranne `null` e `undefined`, ma possiamo anche crearne noi di nuovi, utilizzando le parentesi graffe: `{}`.

**Esempi:**

```js
const tazza = {}; // Creiamo un object vuoto e salviamolo nella costante `tazza`
// Ora l'object non avrà nessuna proprietà perciò dobbiamo crearne qualcuna noi
tazza.colore = "Giallo"; // Creiamo la proprietà `colore` e assegnamogli il valore `"Giallo"`
console.log(tazza.colore);
// Console: "Giallo"

// Possiamo anche creare la proprietà direttamente nelle parentesi graffe
const tazza = { colore: "Giallo", altezza: 100 };
console.log(tazza.colore);
// Console: "Giallo"
console.log(tazza.altezza);
// Console: 100
console.log(tazza);
// Console: { colore: "Giallo", altezza: 100 }
console.log(tazza.larghezza);
// Console: undefined
// Se una proprietà non esiste, verrà restituito `undefined`
```

## [Bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation)

Le proprietà di un object possono essere semplici stringhe, come `larghezza` o `colore`, ma anche simboli o numeri.

Purtroppo, però, possiamo utilizzare il punto per accedere ad una proprietà solo se il suo nome è una stringa, inizia con una lettera e non contiene spazi.

In caso contrario, dobbiamo utilizzare la _bracket notation_.

**Esempi:**

```js
const tazza = {};
tazza["data creazione"] = 2000; // Impostiamo la proprietà "data creazione" a `2000`
tazza["altezza"] = 100;
// Possiamo utilizzare questa sintassi anche per le altre proprietà, seppur può confonderci
console.log(tazza.altezza); // 100
console.log(tazza["data creazione"]); // 2000
```

## Proprietà inesistenti

Come visto in precedenza, se proviamo ad accedere ad una proprietà inesistente ci verrà restituito `undefined`.

Attenzione, però, perché `undefined` è un valore come gli altri, e possiamo anche esplicitamente impostare una proprietà al valore `undefined`, perciò, se vogliamo controllare se una proprietà esiste o meno, non possiamo semplicemente vedere se è uguale a `undefined`.

**Esempi:**

```js
const tazza = {};
console.log(tazza.altezza);
// Console: undefined - Perché questa proprietà non esiste
tazza.altezza = undefined;
console.log(tazza.altezza);
// Console: undefined - Perché la proprietà esiste ma ha il vore di `undefined`
```

Per risolvere questo problema dobbiamo utilizzare l'operatore `in`, che ci dirà se la proprietà esiste o meno.

**Esempi:**

```js
const tazza = {};
console.log("altezza" in tazza);
// Console: false - La proprietà `altezza` non esiste in `tazza`
tazza.altezza = undefined; // Impostiamo a undefined la proprietà
console.log("altezza" in tazza);
// Console: true - La proprietà `altezza` esiste in `tazza`, seppur è `undefined`
```

## Valori che sono objects

Come detto in precedenza, tutto è un object, tranne `null` e `undefined`, questo significa che possiamo sempre utilizzare il punto o le parentesi quadre per accedere ad una proprietà di un valore.

Questo comprende anche stringhe, numeri, etc...: anche loro in realtà sono objects e hanno delle proprietà.

**Esempi:**

```js
const str = "Sus";
str.length; // 3 - La proprietà `length` indica la lunghezza della stringa
str.split("u"); // ["S", "s"] - `split` è invece un metodo delle stringhe per dividerle
// Vedreno queste proprietà e metodi speciali in altri articoli

const nothing = null;
nothing.length; // TypeError: cannot read property "length" of null
// `null` non è un object, perciò non possiamo accedere a nessuna proprietà

const tazza = {};
tazza.colore = "Giallo";
console.log(tazza.colore.length);
// Console: 6 - La lunghezza della stringa "Giallo"
tazza.colore = null;
console.log(tazza.colore.length); // TypeError: cannot read property "length" of null
```

## [Optional chaining operator: `?.`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

Per evitare questi errori con valori che possono essere `null` o `undefined` possiamo utilizzare l'operatore `?.`.

Questo operatore possiamo utilizzarlo al posto del punto o prima delle parentesi quadre quando leggiamo una proprietà.

**Sintassi:**

```js
a?.c;
a?.[d];
b?.(/** e, ... */);
```

- `a`: Un qualsiasi object che può avere un valore nullo. **Type:** `unknown`.
- `b`: Una funzione che può essere nulla. Nota che nel caso non sia un valore nullo la funzione verrà eseguita e un errore verrà mostrato se `b` non è una funzione. **Type:** `Function | null | undefined`

**Restituisce:** `undefined` se `a` è `null` o `undefined`, in caso contrario, il valore della proprietà `b`.

**Esempi:**

```js
const tazza = {};
tazza.colore = "Giallo";
tazza.colore?.length; // 6 - `tazza.colore` è una stringa perciò la proprietà viene letta
tazza.colore?.split?.("al"); // ["Gi", "lo"]
// In questo caso viene controllato che sia `tazza.colore` che `tazza.colore.split` non siano nulli
tazza.colore = null;
tazza.colore?.length; // undefined
// Ora la proprietà `colore` è nulla perciò length non viene letta e `undefined` viene restituito
```

## [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

`Object` è una variabile globale, nonché una classe a cui appartengono tutti gli objects.

**Nota: Nei prossimi articoli vedremo nel dettaglio le classi e le variabili globali (oggetti globali).**

**Nota: Questo paragrafo utilizza una sintassi che vedremo nel dettaglio più avanti.**

Istanziando questa classe, creiamo un nuovo object, è lo stesso di utilizzare delle parentesi graffe.

In questo articolo vedremo solo i metodi degli objects in quanto ci riguardano.
Tutte le informazioni riguardo ai metodi statici etc... le vedremo nell'articolo sugli oggetti globali.

**Costruttore:**

```js
new Object(value);
```

- `value`: Un valore da cui creare il nuovo object. Se è un valore nullo verrà creato un object vuoto (`{}`), in caso contrario verrà restituito l'oggetto passato. **Type:** `unknown`.

**Metodi:**

### [`Object#hasOwnProperty(v: PropertyKey)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

Controlla se un object ha una certa proprietà, escludendo le proprietà e i metodi nativi, come `toString`.

**Sintassi:**

```js
object.hasOwnProperty(v);
```

- `v`: La proprietà da controllare. **Type:** `PropertyKey = string | number | symbol`.

**Restituisce:** `boolean` - `true` se la proprietà esiste e non è nativa, `false` in caso contrario.

**Esempi:**

```js
const example = {};
example.hasOwnProperty("prop"); // false - Non esiste nessuna proprietà `prop` in `example`

example.prop = "exists";
example.hasOwnProperty("prop"); // true - `prop` ora esiste

example.prop = null;
example.hasOwnProperty("prop"); // true - `prop` è null ma esiste

example.prop = undefined;
example.hasOwnProperty("prop"); // true - `prop` è undefined ma esiste

let example = {};
example.prop = "exists";

example.hasOwnProperty("prop"); // true
example.hasOwnProperty("toString"); // false - È un metodo nativo
example.hasOwnProperty("hasOwnProperty"); // false - Anche questo è un metodo nativo

"toString" in example; // true - L'operatore `in` non controlla se la proprietà è nativa
```

### [`Object#toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

Converte l'object in stringa. Questo metodo differisce in base al tipo di object, infatti, degli object nativi non possono essere convertiti e viene restituito `[object Object]`.

**Sintassi:**

```js
object.toString();
```

**Restituisce:** `string` - L'object convertito in stringa.

**Esempi:**

```js
class Dog {
	constructor(name, breed, color, sex) {
		this.name = name;
		this.breed = breed;
		this.color = color;
		this.sex = sex;
	}
}

theDog = new Dog("Gabby", "Lab", "chocolate", "female");

theDog.toString(); // [object Object]

const i = 10;
i.toString(); // "10"
```

## Loop delle proprietà

Possiamo anche eseguire un loop delle proprietà di un object, in modo da eseguire una azione per ognuna di esso.
Per farlo utilizziamo un [`for...in`](2%20-%20Parole%20chiave%20&%20operatori.md#for--continue--forof--forin) loop.

Per evitare di eseguire azioni anche per proprietà native dell'object utilizziamo il metodo `hasOwnProperty`.

**Vedi anche:** Sintassi [`for...in`](2%20-%20Parole%20chiave%20&%20operatori.md#for--continue--forof--forin) loop.

**Esempi:**

```js
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj)
	if (Object.hasOwnProperty.call(obj, key)) console.log(`obj.${key} = ${obj[key]}`);

// Console: "obj.a = 1", "obj.b = 2", "obj.c = 3"
```

## Conclusione

In questo articolo abbiamo scoperto gli objects, la natura del JavaScript.

Nel prossimo articolo andremo a vedere le funzioni, la loro dichiarazione e come utilizzarle al meglio.

### **Good Coding!**
