# Variabili

In questo nuovo articolo andremo ad osservare le variabili nel JavaScript!

Grazie alle variabili possiamo salvare degli elementi per poterli riutilizzare e modificare nello
stesso codice.

Se una variabile non dovrà mai essere riassegnata (quindi modificata), allora si chiamerà
**costante**.

Ora iniziamo a vedere come creare una variabile.

## Dichiarare una variabile

Per dichiarare una variabile abbiamo bisogno di una delle seguenti parole chiave:

- [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var):
  Dichiara una variabile classica, è sconsigliato utilizzare questa parola chiave per creare una
  variabile, in quanto ci sono vari problemi che ne derivano, perciò noi non utilizzeremo mai questo
  tipo di variabili nel nostro codice:
  - Queste variabili sono accessibili in tutto il file, ciò significa che dichiarare una variabile,
    ad esempio, all'interno di una condizione `if`, la dichiara anche all'esterno. Questo, però,
    significa che, all'esterno della condizione, la variabile può essere dichiarata come non
    esserlo. **Esempio:**
    ```js
    if (expr) {
    	var a = 5;
    }
    console.log(a); // `a` è definita oppure no?
    ```
  - Possiamo dichiarare in qualsiasi punto del codice le nostre variabili, ma risulteranno sempre
    definite, anche prima della loro dichiarazione, ma ciò può portare a risultati inaspettati o a
    pensare che la variabile abbia un altro valore. **Esempio:**
    ```js
    a = 10;
    console.log(a); // Quale sarà il valore di `a`?
    var a = 5;
    ```
  - Queste variabili possono essere dichiarate nuovamente, cosa molto confusionaria e che può
    portare a problemi. **Esempio:**
    ```js
    var x = 5;
    var a = 7;
    var x = a; // Abbiamo dichiarato nuovamente la variabile?!
    // O l'abbiamo solo riassegnata?
    // E questo significa che possiamo utilizzare gli operatori come `var x += a`?
    ```
- [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let): Con
  questa parola chiave possiamo creare variabili che possono essere riassegnate e non ridichiarate
  ma non si puó accedere ad essa senza una loro dichiarazione. Inoltre sono _block scoped_, cioè
  limitate allo _scope_ in cui si trovano. Uno _scope_, in JavaScript, è lo spazio dove le variabili
  sono accessibili. Ci sono 3 tipi di _scope_:
  - **Global Scope**: È lo _scope_ globale, con tutte le variabili dichiarate fuori da qualsiasi
    blocco di parentesi graffe e sono disponibili in tutto il file;
  - **Function Scope**: È lo _scope_ di una funzione, con tutte le variabili dichiarate all'interno
    di una funzione che **non** possono essere utilizzate al di fuori, farlo produrrebbe un
    [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined#wrong_scope);
  - **Block Scope**: È lo _scope_ che si crea all'interno di qualsiasi parentesi graffa, come un
    `if`. Creare una variabile all'interno di parentesi graffe significa non poterla utilizzare
    all'esterno, come nelle funzioni. Bisogna, perciò, fare attenzione se vogliamo assegnare una
    variabile a seconda di una condizione, come nel seguente esempio:
    ```js
    if (expr)
      let a = 10;
    else
      let a = 15;
    console.log(a);
    ```
    Qui potremmo aspettarci che `a` sia 10 o 15 a seconda della condizione, ma non è così, perché
    abbiamo dichiarato `a` all'interno di un `if...else` ad una sola condizione, che ha
    implicitamente delle parentesi graffe, perciò `console.log(a)` si trova all'esterno dello scope
    della variabile `a` ed un errore viene mostrato. Per evitare questo errore possiamo dichiarare
    prima la variabile, senza inizializzarla ad alcun valore, e poi modificarla all'interno
    dell'`if...else`:
    ```js
    let a;
    if (expr) a = 10;
    else a = 15;
    console.log(a); // Ora `a` sarà definita perché è stata dichiarata fuori dalla condizione
    ```
    Per evitare questo codice molto lungo, possiamo utilizzare il _conditional (ternary) operator_:
    ```js
    let a = expr ? 10 : 15;
    console.log(a);
    ```
- [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const): Con
  questa parola chiave possiamo creare una _costante_. Anche qui vale lo stesso della precedente,
  con la differenza che non può essere riassegnata e farlo produrrebbe un `TypeError`:
  ```js
  const a = 15;
  if (expr) a = 20; // TypeError: Invalid assignment to const a
  ```
  Anche `const` è _block scoped_ e non può essere ridichiarata, inoltre utilizzarla prima della sua
  dichiarazione produce un `ReferenceError`.

Quindi, abbiamo 3 modi per dichiarare una variabile:

1. Dichiarare ed inizializzare una variabile con `let`:
   ```js
   let a = b;
   ```
2. Dichiarare una variabile con `let`:
   ```js
   let a;
   ```
   Questo metodo richiede che la variabile venga riassegnata prima che venga utilizzata, nella forma
   seguente:
   ```js
   a = b;
   ```
3. Dichiarare ed inizializzare una variabile con `const`:
   ```js
   const a = b;
   ```

**Vedi anche:**
[Sintassi per `let` e `const`](2%20-%20Parole%20chiave%20&%20operatori.md#const--let).

## Inizializzare una variabile

Una variabile viene inizializzata quando le assegniamo un valore direttamente all'assegnazione.

**Esempio:**

```js
let a = b; // Variabile `a` inizializzata a `b`
let c; // Variabile non inizializzata
// Il suo valore è ora undefined
```

Se la variabile viene inizializzata, ha come valore `b`, in caso contrario, il suo valore sarà
`undefined`.

Una variabile dovrebbe essere sempre assegnata ad un valore prima di utilizzarla. Se invece vogliamo
creare una costante, dobbiamo **obbligatoriamente** inizializzarla, in quanto non possiamo mai
riassegnarla. Non farlo produrrà un errore.

## Dichiarare più variabili

Se vogliamo dichiarare più variabili contemporaneamente possiamo utilizzare la virgola, come
nell'esempio seguente:

```js
let a = b,
	c = d,
	e;
```

Questo codice ha creato 3 variabili, di nome `a`, `c` e `d` con valori rispettivamente di `b` e `d`,
mentre `e` non è stata inizializzata. Possiamo fare lo stesso con `const`, ma dobbiamo sempre
inizializzare tutte le costanti.

## Nome delle variabili

Possiamo assegnare qualsiasi nome alle variabili, purchè:

- Inizi con una lettera, `$` o `_`;
- Non corrisponda a nessuna parola chiave.

Iniziare il nome di una variabile con un trattino basso è poco usato e generalmente viene utilizzato
per indicare una variabile che non verrà usata o che è, comunque, privata.

## Conclusione

In questo articolo abbiamo visto come funzionano le variabili e come utilizzarle correttamente!

Grazie alle variabili possiamo salvare valori per poterli accedere successivamente, grazie a due
semplici parole chiave.

Nel prossimo articolo osserveremo invece le funzioni e come usarle al meglio.

### **Good Coding!**
