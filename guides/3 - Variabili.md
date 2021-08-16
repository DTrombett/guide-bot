# Variabili

In questo nuovo articolo riguardo il JavaScript andremo ad osservare le variabili!

Grazie alle variabili possiamo salvare degli elementi per poterli riutilizzare e modificare nello stesso codice.

Se una variabile non deve essere mai riassegnata (quindi modificata), allora si chiamerà **costante**.

Ora iniziamo a vedere come creare una variabile.

## Dichiarare una variabile

Per dichiarare una variabile abbiamo bisogno di una delle seguenti parole chiave:

- [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var): Dichiara una variabile classica, è sconsigliato utilizzare questa parola chiave per creare una variabile, in quanto ci sono vari problemi che ne derivano, perciò noi non utilizzeremo mai questo tipo di variabili nel nostro codice:
  - Queste variabili sono accessibili in tutto il file, significa che dichiarare una variabile ad esempio all'interno di una condizione if la dichiara anche all'esterno.
  Questo, però, significa che all'esterno della condizione la variabile potrebbe essere dichiarata o no.
  Consideriamo il seguente codice:
    ```js
    if (expr) {
      var a = 5;
    }
    console.log(a); // a è definita oppure no?
    ```
  - Possiamo dichiarare in qualsiasi punto del codice le nostre variabili ma risulteranno sempre definite, anche prima della loro dichiarazione, cosa che puo portare a risultati inaspettati o potremmo pensare che la variabile abbia un altro valore.
  Consideriamo il seguente codice:
    ```js
    a = 10;
    console.log(a); // Quale sarà il valore di `a`?
    var a = 5;
    ```
  - Queste variabili possono essere dichiarate nuovamente, cosa totalmente confusionaria e che può portare a problemi.
  Consideriamo il seguente codice:
    ```js
    var x = 5;
    var a = 7;
    var x = a; // Abbiamo dichiarato nuovamente la variabile?!
    // O l'abbiamo solo riassegnata?
    // E questo significa che possiamo utilizzare gli operatori come `var x += a`?
    ```
- [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let): Con questa parola chiave possiamo creare variabili che possono essere riassegnate ma non ridichiarate e non sono accessibili prima della loro dichiarazione.
Inoltre sono *block scoped*, cioè limitate allo *scope* in cui si trovano.
Uno *scope*, in JavaScript, è lo spazio dove le variabili sono accessibili.
Ci sono 3 tipi di *scope*:
  - **Global Scope**: È lo *scope* globale, tutte le variabili dichiarate fuoru da qualsiasi blocco di parentesi graffe, sono disponibili in tutto il file.
  - **Function Scope**: È lo *scope* di una funzione, tutte le variabili dichiarate all'interno di una funzione **non** possono essere utilizzate al di fuori, farlo produrrebbe un [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined#wrong_scope).
  - **Block Scope**: È lo *scope* che si crea all'interno di qualsiasi parentesi graffa, come un `if`.
  Creare una variabile all'interno di parentesi graffe significa non poterla utilizzare all'esterno, come nelle funzioni.
  Bisogna fare attenzione se vogliamo assegnare una variabile a seconda di una condizione, come nel seguente esempio:
    ```js
    if (expr)
      let a = 10;
    else
      let a = 15;
    console.log(a);
    ```
  Qui potremmo aspettarci che `a` sia 10 o 15 a seconda della condizione, ma non è così, perché abbiamo dichiarato `a` all'interno di un `if...else` ad una sola condizione, che ha implicitamente delle parentesi graffe, perciò `console.log(a)` si trova all'esterno dello scope della variabile `a` ed un errore viene mostrato.
  Per evitare questo errore possiamo dichiarare prima la variabile, senza inizializzarla ad alcun valore, e poi modificarla all'interno dell'`if...else`:
    ```js
    let a;
    if (expr)
      a = 10;
    else
      a = 15;
    console.log(a); // Ora `a` sarà definita perché è stata dichiarata fuori dalla condizione
    ```
  Per evitare questo codice molto lungo, possiamo utilizzare il *conditional (ternary) operator*:
    ```js
    let a = expr ? 10 : 15;
    console.log(a);
    ```
- [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const): Per questa parola chiave vale lo stesso della precedente, con la differenza che non può essere riassegnata e farlo produrrebbe un `TypeError`:
  ```js
  const a = 15;
  if (expr)
    a = 20; // TypeError: Invalid assignment to const a
  ```
Anche `const` è *block scoped* e non può essere ridichiarata, inoltre utilizzarla prima della sua dichiarazione produce un `ReferenceError`.
