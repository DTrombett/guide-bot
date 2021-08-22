# IntelliSense & Typescript

In questo primo articolo iniziamo a vedere gli strumenti che utilizzeremo nel nostro progetto.
Il primo strumento è l'**[IntelliSense](https://code.visualstudio.com/docs/editor/intellisense)**, che, con la potenza del **[Typescript](https://www.typescriptlang.org/)**, ci fornirà un aiuto enorme durante lo sviluppo del nostro bot

Di seguito è riportata un'immagine ufficiale riguardo l'uso di questa funzione.

![IntelliSense](/images/1/IntelliSense.gif)

## Cos'è l'**IntelliSense**?

**IntelliSense** è una funzione di **Visual Studio Code** che permette di ricevere suggerimmenti durante la scrittura del codice, nel nostro caso, **Javascript**.

Questa funzione ci permetterà di eseguire alcune azioni facilmente, come:

- **Completare il codice grazie a suggerimenti, semplicemente cliccando "invio":**

![AutoCompletion](/images/1/AutoCompletion.gif)

- **Avere info dettagliate riguardo i parametri di alcune funzioni:**

![ParametersInfo](/images/1/ParamsInfo.png)

- **Consultare una lista dei metodi e dei valori legati ad un `object` con le loro informazioni per scegliere quello di cui abbiamo bisogno:**

![MethodsList](/images/1/MethodsList.gif)

## Cos'è Typescript?

**Intellisense** utilizza strumenti specifici per ogni linguaggio di programmazione per fornirci i suoi servizi.
Visual Studio Code ha un supporto nativo per il Javascript grazie all'aiuto del **Typescript**.

> **Typescript** è un linguaggio di programmazione che si basa sul JavaScript, aggiungendo definizioni di tipo (_types_).

> I _types_ forniscono un modo per descrivere la forma di un oggetto, fornendo una migliore documentazione e consentendo a TypeScript di verificare che il codice funzioni correttamente.

Ancora confusi? Semplicemente, Typescript controlla che il vostro codice sia esatto, non soltanto dal punto di vista sintattico, grazie ai _types_.
Inoltre, nel caso commettiate qualche errore, ve lo comunicherà prima di eseguire il codice, addirittura direttamente lo scriviamo, grazie al supporto nativo di Visual Studio Code.

### Cosa sono i _types_?

I _types_ sono descrizioni di qualsiasi cosa in Javascript.
Pensate a quando usiamo un semplice `console.log()` nel nostro codice: abbiamo utilizzato un oggetto chiamato `console` ed eseguito la funzione `log`.
Grazie a questi _types_, Typescript sa che `console` ha una certa funzione (o _metodo_) chiamata `log` e ci dirà che il nostro codice è esatto.
Se invece utilizzassimo una funzione come `console.send()`, che non esiste, ci mostrerà un errore:

![ConsoleSend](/images/1/ConsoleSend.png)

### Funzioni del Typescript

Typescript può quindi aiutarci a non sbagliare mostrandoci degli errori direttamente nel nostro editor.
Nasce come un linguaggio di programmazione, ma noi utilizzeremo la sua potenza con il Javascript in Visual Studio Code.
Ora osserviamo quali sono le sue principali funzioni:

- **Controllare che, in generale, il codice non includa parti che indurrebbero ad un errore durante l'esecuzione, come:**

![NoUndef](/images/1/NoUndef.png)

- **Includere un fix veloce per errori semplici, come quello nell'immagine precedente:**

![FastFix](/images/1/FastFix.png)

- **Mantenere sempre lo stesso _type_ per ogni elemento, in modo da essere sempre a conoscenza di cosa un elemento rappresenti:**

![VarAssign](/images/1/VarAssign.png)

- **Assicurare che tutti i _types_ vengano utilizzati propriamente:**

![ArrayDivision](/images/1/ArrayDivision.png)

- **Assicurare che tutte le funzioni vengano chiamate con i parametri corretti:**

![FuncParams](/images/1/FuncParams.png)

### Assegnare _types_ manualmente

Ovviamente, Typescript non può sempre immaginare che _types_ vogliamo assegnare ad alcuni elementi, perciò dovremo dirglielo noi!
Per farlo utilizzeremo i **[JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)**.
Prendiamo il seguente esempio di codice:

```js
function run(message, args) {
	console.log(message.auhtor);
	return args.join(" ");
}
```

In questo caso Typescript non sa quali sono i _types_ di `message` e `args` perciò non sarà in grado di rilevare eventuali errori, come `message.auhtor` che non esiste.
Per risolvere questo problema seguiamo la seguente procedura:

1. **Spostiamo il cursore su uno dei parametri che abbiamo scritto e clicchiamo su _Quick Fix..._:**

![ImplicitType](/images/1/ImplicitType.png)

2. **Clicchiamo su _Infer all types from usage_:**

![InferType](/images/1/InferType.png)

3. **A questo punto verrà creato un JSDoc e Typescript proverà ad indovinare i _types_ dei parametri:**

![JSDoc](/images/1/JSDoc.png)

4. **Ora non ci resta che controllare e sostituire i _types_ nelle parentesi graffe con quelli corretti.**
   **`message` ha un `type` creato da discord.js chiamato `Message`, perciò ci basterà scrivere questo nome e, quando apparirà nella lista dei suggerimenti, cliccare "Invio":**

![CustomTypes](/images/1/CustomTypes.png)

Ora Typescript potrà finalmente aiutarci anche all'interno della funzione!
Il codice precedente sarà adesso come il seguente e ci avvertirà dell'errore in `message.auhtor`:

```js
const { Message } = require("discord.js");

/**
 * @param {Message} message
 * @param {string[]} args
 */
function run(message, args) {
	console.log(message.auhtor);
	return args.join(" ");
}
```

### Lista dei _types_

**Nota: Questa sezione include riferimenti a elementi Javascript non ancora trattati nella guida come _array_ o _Promise_.**

Qui di seguito è riportata una lista dei vari _types_ predefiniti che possono essere utilizzati per descrivere i nostri elementi.
Se volete utilizzare un _type_ esterno, cioè creato da un altro package, ricordate di utilizzare la procedura descritta nel punto 4 della [sezione precedente](#assegnare-types-manualmente).

- `any`: Può essere qualsiasi cosa e disabilita tutti i controlli su di lui, sconsigliato da usare. Es. `1`, `undefined`;
- `bigint`: Indica un numero molto grande. Es. `30n`;
- `boolean`: Sì o no. Es. `true`, `false`;
- `null`: Nulla, ma nella forma Javascript. Es. `null`;
- `number`: Indica un numero qualsiasi. Es. `15`, `123.4`;
- `string`: Indica una stringa Javascript. Es. `"Sus"`, `""`;
- `symbol`: Indica un simbolo univoco in Javascritp. Es. `Symbol("Sus")`;
- `undefined`: Nulla, qualcosa che non esiste. Es. `undefined`;
- `unknown`: Può essere qualsiasi cosa e richiede di controllare manualmente che _type_ abbia prima di eseguire qualsiasi azione con esso. Es. `"Sus"`, `null`;
- `void`: Di nuovo nulla, ma utilizzato nelle funzioni che non usano nessun `return`;
- `x[]`: Un _array_ dove tutti gli elementi hanno come tipo `x`. Es. `string[]`, `unknown[]`;
- `Promise<x>`: Una _promessa_ che restituirà un elemento di tipo `x` quando verrà _esaudita_. Es. `Promise<string>`, `Promise<unknown>`.

## File configurazione

Le funzioni descritte in questo articolo richiedono un file di configurazione per essere attivate, chiamato **[`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig)**.
Nel progetto del nostro bot utilizzeremo [questa configurazione](/jsconfig.json).

## Estensioni

Per poter attivare e potenziare le funzioni descritte in questo articolo, direttamente in Visual Studio Code, avremo bisogno delle seguenti estensioni:

- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments);
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense);
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode).
