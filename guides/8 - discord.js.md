# discord.js

In questo nuovo articolo inizieremo a sviluppare il nostro bot in JavaScript.

Per farlo utilizzeremo una libreria JavaScript chiamata **discord.js** che ci permetterà di interagire con Discord facilmente.

Prima di iniziare, però, diamo uno sguardo agli ultimi strumenti che ci aiuteranno nello sviluppo del bot.

## Sommario

- [discord.js](#discordjs)
	- [Sommario](#sommario)
	- [ESLint](#eslint)
	- [Prettier](#prettier)
	- [Configurazione ambiente di lavoro](#configurazione-ambiente-di-lavoro)
		- [Creazione della cartella](#creazione-della-cartella)
		- [Installazione Visual Studio Code](#installazione-visual-studio-code)
		- [Installazione estensioni](#installazione-estensioni)
		- [Configurazione Visual Studio Code](#configurazione-visual-studio-code)
		- [Utilizzo VSCode](#utilizzo-vscode)
		- [Installazione Node.js](#installazione-nodejs)
		- [Creazione file per gli strumenti](#creazione-file-per-gli-strumenti)
			- [Typescript](#typescript)
			- [ESLint](#eslint-1)
			- [Prettier](#prettier-1)
	- [Creazione progetto](#creazione-progetto)
	- [npm](#npm)
	- [Installazione moduli](#installazione-moduli)
	- [Creazione bot](#creazione-bot)
	- [Invitare il bot nel nostro server](#invitare-il-bot-nel-nostro-server)
	- [index.js](#indexjs)
	- [Client](#client)
		- [`constructor(options: ClientOptions)`](#constructoroptions-clientoptions)
		- [`Client#options`](#clientoptions)
		- [`Client#token`](#clienttoken)
		- [`Client#user`](#clientuser)
		- [`Client#login(/** token */)`](#clientlogin-token-)
		- [Eventi](#eventi)
			- [`Client#interactionCreate`](#clientinteractioncreate)
			- [`Client#ready`](#clientready)
	- [Salvare il token del bot](#salvare-il-token-del-bot)
	- [Collegare il nostro bot a Discord](#collegare-il-nostro-bot-a-discord)
	- [Intents](#intents)
		- [Scegliere gli intents adatti](#scegliere-gli-intents-adatti)
	- [Collegarci a Discord](#collegarci-a-discord)
	- [Importare le variabili d'ambiente](#importare-le-variabili-dambiente)
	- [Eseguire il bot](#eseguire-il-bot)
	- [Codice finale](#codice-finale)
	- [Conclusione](#conclusione)
		- [**Good Coding!**](#good-coding)

## ESLint

Questo tool ci è molto utile per segnalare errori diversi da quelli di sintassi o del TypeScript, ma ci danno consigli riguardo il nostro codice.

Ad esempio, **[ESLint](https://eslint.org)** ci avverte se utilizziamo `==` per un'uguaglianza dove sarebbe meglio usare `===` e può essere personalizzato per modificare lo stile del nostro codice, come omettere le parentesi graffe in un blocco, come un `if` dove eseguiamo una sola azione ed è facoltativo inserirle, oppure usare delle condizioni inutili, etc...

Anche questo strumento ha bisogno di un file di configurazione, successivamente vedremo nel dettaglio la configurazione del nostro ambiente di sviluppo ma, se volete dare un'occhiata, utilizzeremo la configurazione che si trova nel file [`.eslintrc.json`](/.eslintrc.json).

Ecco un'immagine per darvi un'idea su come funziona eslint:

![ESLint](/images/8/eslint.png)

---

## Prettier

L'ultimo strumento che utilizzeremo è **[Prettier](https://prettier.io)** che semplicemente farà da _formattatore_ del nostro codice, ossia lo renderà più facile da leggere e più bello.

Anche Prettier ha bisogno di un file di configurazione ma estremamente più semplice e potete trovarlo in [`.prettierrc.json`](.prettierrc.json).

Per rendervi un'idea del funzionamento di prettier ecco la differenza tra un codice prima e dopo essere stato (automaticamente) formattato.

**Prima:**

![Prettier-prima](/images/8/prettier-prima.png)

**Dopo:**

![Prettier-dopo](/images/8/prettier-dopo.png)

---

## Configurazione ambiente di lavoro

Ora che abbiamo descritto gli ultimi strumenti, è arrivato il momento di creare l'ambiente di lavoro per il nostro bot.

### Creazione della cartella

La prima cosa da fare è creare una cartella dove rimarrà il nostro codice.
Possiamo chiamarla come vogliamo, ma sarebbe preferibile usare il nome che daremo al nostro bot.

Posizionate questa cartella nel Desktop, o dovunque siete più comodi; non avremo comunque bisogno di aprirla molte volte, in quanto utilizzeremo direttamente Visual Studio Code.

---

### Installazione Visual Studio Code

Se non l'avete già fatto, è arrivata l'ora di installare **Visual Studio Code**.

In base ai requisiti del vostro sistema, troverete il file da installare che fa per voi sul [sito ufficiale](https://code.visualstudio.com/download).

Se avete privilegi da amministratore nel vostro utente, potete scegliere _system installer_, ma _user installer_ andrà benissimo ugualmente (cambiano solo i permessi garantiti all'applicazione).

---

### Installazione estensioni

Ora possiamo installare le estensioni necessarie per il nostro progetto.

Di seguito ne è una lista con i rispettivi link per l'installazione:

- **[Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)** - Per rendere facile interagire con i commenti che ci serviranno per Typescript;
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** - Ci permetterà di vedere gli errori segnalati di ESLint nell'editor;
- **[npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)** - Ci faciliterà l'esecuzione dei comandi per eseguire il nostro bot e ci fornirà avvisi riguardo ai nostri moduli;
- **[npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)** - Ci fornirà dei consigli quando vorremo importare un modulo (come discord.js etc...);
- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** - Installerà Prettier e lo renderà disponibile come formattatore;
- **[Visual Studio Intellicode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)** - Ci fornirà consigli più intelligenti riguardo al nostro codice.

---

### Configurazione Visual Studio Code

Adesso possiamo modificare alcune impostazioni di Visual Studio Code e installare le estensioni necessarie.

**Nota: non siete obbligati a cambiare queste impostazioni ma ci possono essere utili per programmare più facilmente!**

Per cambiare le impostazioni cliccate il simbolo dell'ingranaggio in basso a sinistra e poi **Settings**:

![Settings](/images/8/settings.png)

Ecco le impostazioni che modificheremo (le potete trovare direttamente all'inizio della pagina impostazioni o cercarle tramite nome nella barra in alto):

- **Files - Auto Save**: `onFocusChange` - Salverà automaticamente il file quando clicchiamo fuori di esso;
- **Editor - Font Size**: `15` - Ingrandirà leggermente (da 14) i caratteri, in modo più visibile;
- **Editor - Cursor Style**: `line-thin` - Renderà il cursore leggermente più sottile;
- **Editor - Tab Size**: `2` - Questo è il numero di spazi equivalenti ad un **Tab**;
- **Editor - Insert Spaces**: `off` - Non convertirà i tabs in spazi;
- **Editor - Detect Indentation**: `off` - Ci permetterà di usare **Tab Size** e **Insert Spaces**;
- **Editor - Format On Paste**: `on` - Formatterà automaticamente il file se incolliamo del nuovo codice;
- **Editor - Format On Type**: `on` - Formatterà automaticamente il file se eseguiamo azioni come inserire un punto e virgola o andiamo a capo;
- **Editor - Format On Save**: `on` - Formatterà automaticamente il file al suo salvataggio;
- **Editor - Default Formatter**: `prettier` - Sceglierà Prettier come formattatore di default per i nostri file;
- **Editor - Suggest Selection**: `recentlyUsedByPrefix` - Ordinerà i suggerimenti di Intellisense secondo quelli utilizzati più di recente e se il nostro testo corrisponde a quello utilizzato in altri casi con quel suggerimento.

---

### Utilizzo VSCode

**Visual Studio Code** (o **VSCode**) è un ambiente di sviluppo completo che ci permette di creare e modificare qualsiasi codice grazie ad un supporto integrato per linguaggi come JavaScript, Typescript o Python ed estendibile grazie a tantissime estensioni.

Si tratta di un programma veramente facilissimo da usare e ora vedremo in modo sommativo come poter eseguire alcune azioni.

Innanzitutto, se si vuole lavorare in una cartella specifica, è bene aprirla tramite **File** -> **Open Folder...** o semplicemente **Ctrl + K, Ctrl + O** eseguiti consecutivamente.

![Open Folder](/images/8/open-folder.png)

Nella barra laterale potremo gestire con facilità i nostri file.
Le prime due icone che appariranno in alto, a destra del nome della cartella serviranno rispettivamente per creare un file o una cartella.
Non dimentichiamoci mai di inserire anche l'estensione di un file quando lo creiamo!

![VSCode Files](/images/8/vscode-files.png)

Se vogliamo creare un file in una determinata cartella dovremo prima selezionarla e poi potremo cliccare il pulsante per aggiungere un file.

Nei file possiamo utilizzare delle shortcut da tastiera per facilitare il nostro lavoro:

- `Ctrl + C`: Copia l'intera riga attuale (dove è posizionato il cursore), o il testo selezionato;
- `Ctrl + X`: Taglia l'intera riga attuale, o il testo selezionato;
- `Alt + (Up|Down)Arrow`: Sposta la riga attuale sopra/sotto;
- `Ctrl + V`: Incolla il testo precedentemente copiato nel punto dove è posizionato il cursore, o al posto del testo selezionato;
- `Ctrl + Z`: Annulla l'ultima azione eseguita all'interno del file;
- `Ctrl + Y`: Riesegue l'ultima azione annullata all'interno del file;
- `Alt + Shift + (Up|Down)Arrow`: Copia/Incolla la riga attuale sopra o sotto, in modo da inserire facilmente del testo simile;
- `Alt + Click`: Aggiunge un cursore in un punto per poter modificare contemporaneamente due parti del file differenti;
- `Alt + Ctrl + (Up|Down)Arrow`: Aggiunge un cursore sopra/sotto quello attuale;
- `Ctrl + A`: Seleziona tutto il testo;
- `Ctrl + F`: Cerca nel testo la parola su cui è posizionato il cursore o il testo selezionato;
- `Ctrl + Shift + F`: Cerca in tutta la cartella/workspace la parola su cui è posizionato il cursore o il testo selezionato.

VSCode è distribuito in inglese ma è possibile cambiare la lingua in Italiano installando [questa estensione](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-it) (nota che sarà necessario riavviare VSCode successivamente).

---

### Installazione Node.js

Inoltre, abbiamo bisogno di **Node.js** per eseguire il nostro progetto in JavaScript.

Ci sono molte versioni disponibili di node ma per usare discord.js abbiamo bisogno di almeno la versione **16.6.0**.
Per comodità e per utilizzare le nuove funzionalità io preferisco la versione **16.10.0** (ultima _security release_ al momento della scrittura di questo articolo) ma va bene qualsiasi altra versione, purchè sia almeno la **16.6.0**.

Qui di seguito i link ai file di installazione per la versione **16.10.0** in base al vostro sistema operativo:

- [Windows per sistemi basati su 64 bit (consigliato)](https://nodejs.org/dist/v16.10.0/node-v16.10.0-x64.msi)
- [Windows per sistemi basati su 32 bit](https://nodejs.org/dist/v16.10.0/node-v16.10.0-x86.msi)
- [MacOS](https://nodejs.org/dist/v16.10.0/node-v16.10.0.pkg)

---

### Creazione file per gli strumenti

Ora possiamo aggiungere i file di configurazione per i nostri strumenti: **Typescript**, **ESLint** e **Prettier**.

#### Typescript

Per attivare le funzionalità del Typescript in JavaScript, creiamo un file chiamato `jsconfig.json` all'interno della nostra cartella e inseriamo la seguente configurazione:

```json
{
	"compilerOptions": {
		"lib": ["esnext"],
		"module": "commonJS",
		"moduleResolution": "node",
		"allowSyntheticDefaultImports": true,
		"target": "esnext",
		"strict": true,
		"esModuleInterop": true,
		"skipLibCheck": true,
		"forceConsistentCasingInFileNames": true,
		"allowUnreachableCode": false,
		"alwaysStrict": true,
		"noFallthroughCasesInSwitch": true,
		"noImplicitAny": true,
		"noImplicitReturns": true,
		"noImplicitThis": true,
		"noUncheckedIndexedAccess": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"resolveJsonModule": true,
		"noEmit": true,
		"checkJs": true
	}
}
```

Potete trovare tutte le opzioni nel [sito ufficiale](https://code.visualstudio.com/docs/languages/jsconfig).

**Nota: Se vedrete un errore nel file che indica qualcosa come `No inputs were found` non vi preoccupate, non influirà minimamente sul nostro progetto e scomparirà dopo che avremo aggiunto il nostro primo file js e riavviato VSCode.**

---

#### ESLint

Per attivare le funzionalità di ESLint creiamo un file chiamato `.eslintrc.json` all'interno della nostra cartella e inseriamo la seguente configurazione:

```json
{
	"env": {
		"es2021": true,
		"node": true,
		"commonjs": true
	},
	"extends": ["eslint:recommended"],
	"parserOptions": {
		"ecmaVersion": 2021
	},
	"rules": {
		"curly": ["warn", "multi"],
		"dot-location": ["warn", "property"],
		"eqeqeq": ["warn", "smart"],
		"no-else-return": [
			"warn",
			{
				"allowElseIf": false
			}
		],
		"no-extra-bind": "warn",
		"no-floating-decimal": "warn",
		"no-implicit-coercion": "warn",
		"no-multi-spaces": "warn",
		"no-useless-return": "warn",
		"wrap-iife": ["warn", "inside"],
		"yoda": [
			"warn",
			"never",
			{
				"exceptRange": true
			}
		],
		"no-undef-init": "warn",
		"array-bracket-newline": ["warn", "consistent"],
		"array-element-newline": ["warn", "consistent"],
		"computed-property-spacing": "warn",
		"new-parens": "warn",
		"no-async-promise-executor": "off",
		"no-lonely-if": "warn",
		"no-multiple-empty-lines": "warn",
		"no-unneeded-ternary": [
			"warn",
			{
				"defaultAssignment": false
			}
		],
		"no-whitespace-before-property": "warn",
		"one-var-declaration-per-line": "warn",
		"operator-assignment": "warn",
		"accessor-pairs": "warn",
		"array-callback-return": "warn",
		"arrow-body-style": "warn",
		"class-methods-use-this": "warn",
		"complexity": ["warn", 10],
		"consistent-return": "warn",
		"default-case-last": "warn",
		"default-case": "warn",
		"grouped-accessor-pairs": "warn",
		"guard-for-in": "warn",
		"no-alert": "warn",
		"no-await-in-loop": "warn",
		"no-caller": "warn",
		"no-constructor-return": "warn",
		"no-labels": "warn",
		"no-loop-func": "warn",
		"no-loss-of-precision": "warn",
		"no-multi-str": "warn",
		"no-new": "warn",
		"no-new-func": "warn",
		"no-new-wrappers": "warn",
		"no-octal-escape": "warn",
		"no-param-reassign": "warn",
		"no-promise-executor-return": "warn",
		"no-proto": "warn",
		"no-return-await": "warn",
		"no-self-compare": "warn",
		"no-sequences": "warn",
		"no-shadow": "warn",
		"no-template-curly-in-string": "warn",
		"no-throw-literal": "warn",
		"no-unmodified-loop-condition": "warn",
		"no-unreachable-loop": "warn",
		"no-unsafe-optional-chaining": "warn",
		"no-unused-expressions": "warn",
		"no-unused-vars": "off",
		"no-use-before-define": "warn",
		"no-useless-backreference": "warn",
		"no-useless-call": "warn",
		"no-useless-concat": "warn",
		"no-useless-constructor": "warn",
		"no-useless-rename": "warn",
		"no-var": "warn",
		"no-warning-comments": "warn",
		"object-shorthand": "warn",
		"prefer-arrow-callback": "warn",
		"prefer-const": "warn",
		"prefer-destructuring": "warn",
		"prefer-numeric-literals": "warn",
		"prefer-promise-reject-errors": "warn",
		"prefer-regex-literals": "warn",
		"prefer-rest-params": "warn",
		"prefer-spread": "warn",
		"prefer-template": "warn",
		"require-atomic-updates": "warn",
		"require-unicode-regexp": "warn",
		"semi-spacing": "warn",
		"semi-style": "warn",
		"sort-vars": "warn",
		"symbol-description": "warn"
	}
}
```

Questa configurazione è totalmente personalizzabile, io ho solo utilizzato delle _rules_ che ci potrebbero servire ma voi potete modificarle, rimuoverle o aggiungerne di altre.
Consultate il [sito ufficiale](https://eslint.org/docs/rules/) per la lista completa delle _rules_ disponibili.

---

#### Prettier

Per personalizzare le funzionalità di Prettier (disponibili di default con l'estensione), creiamo un file chiamato `.prettierrc.json` all'interno della nostra cartella e inseriamo la seguente configurazione:

```json
{
	"printWidth": 100,
	"quoteProps": "consistent",
	"arrowParens": "always",
	"bracketSpacing": true,
	"embeddedLanguageFormatting": "auto",
	"endOfLine": "crlf",
	"semi": true,
	"singleQuote": false,
	"tabWidth": 2,
	"trailingComma": "es5",
	"useTabs": true
}
```

Anche questa configurazione è personalizzabile e potete trovare tutte le opzioni nel [sito ufficiale](https://prettier.io/docs/en/options.html).

---

## Creazione progetto

Ora siamo praticamente pronti per iniziare a sviluppare il nostro bot!
Ci manca solo un passo: creare il nostro progetto ufficialmente nella cartella.

Tutti i progetti in Node.js hanno un file `package.json` che contiene i dettagli come nome, descrizione, etc...

Per crearlo innanzitutto apriamo un _terminal_ da VSCode con **Ctrl + ò** oppure **View** -> **Terminal**.
Ora scriviamo il comando `npm init`.

**Nota: Per maggiori dettagli riguardo l'uso di un terminal in generale potete leggere [questo articolo in merito](https://sitomsgaming.wordpress.com/2021/08/21/come-usare-il-prompt-dei-comandi/).**

Ci verranno richiesti alcuni dettagli, il valore mostrato tra parentesi è quello di default e verrà assegnato se skippiamo il passaggio premendo invio:

- nome: Il nome del progetto; **non** deve essere legato obbligatoriamente al nome del bot o della cartella e può utilizzare solo lettere minuscole;
- versione: Utile se abbiamo intenzione di pubblicare il nostro progetto come modulo, può essere skippato.
- descrizione: Una descrizione del nostro bot/progetto. Possiamo tranquillamente saltare questo passaggio;
- entry point: Il file principale del nostro progetto. Possiamo saltare questo passaggio a meno che nn abbiamo intenzione di posizionare il codice in una sottocartella, in questo caso possiamo scrivere `nomeCartella/index.js`;
- test command: Comando di test da eseguire con `npm run test`. Possiamo impostarlo in `node .` per eseguire più facilmente il nostro bot;
- repository: La repository dove verrà salvato il nostro codice. Al momento non abbiamo bisogno di nessuna repository e possiamo skippare questo passaggio;
- keywords: Parole chiave legate al progetto, utili in caso il nostro fosse un progetto pubblico su npm. Possiamo skippare questo passaggio;
- autore: L'autore del progetto. Potete inserire il vostro nickname o tranquillamente skippare questo passaggio;
- licenza: La licenza che utilizziamo per distribuire il nostro codice. Utile solo se il nostro codice sarà pubblico come in una repository o modulo npm. Possiamo saltare questo passaggio.

Alla fine della configurazione possiamo scrivere `yes` per convalidarla e verrà creato il file `package.json` già pronto.

**Nota: Se eseguendo il comando `npm init` avete ricevuto un errore come questo: `npm : Termine 'npm' non riconosciuto come nome di cmdlet, funzione, programma eseguibile o file script`, allora vuol dire che non avete installato correttamente Node.js. Verificate che sia tutto ok e potrete sempre constatare la corretta installazione tramite il comando `node -v` che dovrebbe mostrare `v16.10.0` (o la versione da voi installata).**

---

## npm

Come abbiamo appena visto, per creare il nostro progetto abbiamo utilizzato il comando `npm init`, gestito da `npm`.

`npm` è un package manager, serve cioè per gestire i moduli che ci serviranno nel nostro progetto ed è preinstallato con Node.js.

Utilizzeremo vari comandi npm come:

- `npm i [nome-modulo|@autore/nome-modulo|autore/nome-modulo] [-g] [-D]`: Comando per installare uno o più moduli nel nostro progetto. Se il modulo da installare non è necessario nel codice in sè, possiamo utilizzare la _flag_ `-D` e installarlo come _devDependecy_, ossia modulo necessario allo sviluppo del codice. Se invece vogliamo installare quel modulo globalmente, allora aggiungiamo la flag `-g`, utile per moduli che contengono degli script binari da poter essere eseguiti tramite terminal. Esempi: `npm i discord.js`, `npm i -g eslint`, `npm i -D @types/node`;
- `npm ci`: Comando per installare tutti i moduli inclusi in un progetto. Funziona solo se è già presente un `package-lock.json` file, automaticamente generato da `npm i`;
- `npm dedupe`: Comando per rimuovere eventuali _doppioni_ nei nostri moduli. Può infatti accadere che un modulo tra quelli installati, ne richieda un altro che viene così installato a sua volta. Se tale modulo è stato installato anche da noi stessi, si creerà un doppione che può essere rimosso con questo comando;
- `npm init [-y]`: Comando per iniziare un nuovo progetto npm. Chiederà vari dettagli che possono essere saltati premendo Invio, o possiamo usare la flag `-y` per saltarli automaticamente tutti.

---

## Installazione moduli

Ci siamo quasi!
Prima di iniziare manca un'ultima cosa: installare i moduli necessari nel nostro progetto.

Potrebbero servirci altri moduli, ma per ora installeremo solo quelli necessari:

1. Installiamo i moduli `eslint` e `prettier` globalmente per poterli usare anche tramite terminal: `npm i -g eslint prettier`;
2. Installiamo `discord.js` per poter interagire con Discord e `dotenv` per salvare delle variabili d'ambiente come token del bot e altro: `npm i discord.js dotenv`;
3. Installiamo localmente i moduli che ci servono per lo sviluppo del nostro bot, ossia `eslint`, `prettier` e `@types/node` che aggiungerà a typescript le definizioni degli elementi predefiniti in Node.js.

---

## Creazione bot

Ora che abbiamo completato la configurazione del nostro ambiente di lavoro dobbiamo creare il nostro bot (se non ne avete già uno)!

Per farlo andiamo nel **[Discord Developer Portal](https://discord.dev)** ed eseguiamo il login se necessario.

Poi rechiamoci nella sezione `Applications` e clicchiamo **New Application** in alto a destra.
Ci verrà chiesto il nome dell'applicazione che potremo comunque cambiare in seguito e può essere diverso da quello del bot.

Una volta inserito il nome clicchiamo **Create**.
Verremo reindirizzati in una pagina dove vedremo i dettagli della nostra applicazione e potremo aggiungere una immagine (che non dovrà obbligatoriamente coincidere con quella del bot) e una descrizione che apparirà nella sezione **About Me** del profilo del bot.

Ora andiamo nella sezione `Bot` e clicchiamo **Add Bot** per creare il nostro bot!
A questo punto potremo cambiare l'immagine profilo e lo username del bot (non il tag che rimarrà sempre quello).
Qui possiamo anche scegliere se rendere il nostro bot publico o privato (pubblico di default).

![Build a Bot](/images/8/build-a-bot.png)

Nella stessa pagina possiamo vedere una scritta `Token`: il token del nostro bot è la sua password ed è importante tenerlo sempre per sè, in quanto chiunque ne abbia accesso avrà completo accesso al nostro bot e quindi potrà uscire da tutti i server, bannare tutti i membri di tutti i server etc...
Il token è sensibile quanto il _client secret_ che troviamo nella sezione `OAuth2` e che fornisce invece accesso alla tua applicazione, garantendo la possibilità di eseguire azioni a tuo nome.
Gli ID sono invece pubblichi e possono essere condivisi tranquillamente.

---

## Invitare il bot nel nostro server

Preferibilmente, potete creare un server Discord privato appositamente per testare il vostro bot e il suo funzionamento.

Una volta fatto, tornate nel Dev Portal, aprite la vostra applicazione (ora verrà mostrata nella lista) e recatevi nella sezione `OAuth2`.
Scendete in basso per arrivare nella sezione dove potete generare il link di invito per il vostro bot.

Prima di tutti sono necessari gli _scopi_ che garantiremo al nostro bot, e quelli che ci serviranno sono `bot` (garantisce che il bot entrerà _fisicamente_ nel server) e `applications.commands` (ci darà il permesso per l'aggiunta di slash commands nel server):

![Scopes](/images/8/scopes.png)

Scendendo ancora più in basso potremo scegliere i permessi da aggiungere al nostro bot; selezioniamo `Administrator` per aggiungerli tutti o scegliete quelli che fanno per voi:

![Bot Permissions](/images/8/bot-permissions.png)

Ora torniamo nella sezione **Scopes** e copiamo l'URL in basso, che sarà l'invito del bot, poi incolliamolo nella barra di ricerca del nostro browser e scegliamo il server dove vogliamo aggiungere il nostro bot (avrete probabilmente già fatto questa procedura altre volte).

Una volta autorizzato torniamo su Discord e vedremo che nel nostro server è apparso il nuovo bot (tristemente offline :/)!

---

## index.js

Ce l'abbiamo fatta, finalmente possiamo creare il nostro primo file in JavaScript ed iniziare a scrivere il codice.

Creiamo un file chiamato `index.js` nella cartella del nostro progetto e poi assicuriamoci di riavviare VSCode in modo che rilevi il nostro nuovo progetto con i vari file di configurazione.

Ora, per testare che tutte le funzioni attivate funzionino correttamente incollate il seguente codice nel file appena creato:

<!-- prettier-ignore-start -->
```js
const{Client}=require('discord.js');const client=new Client;client
```
<!-- prettier-ignore-end -->

Se tutto è stato configurato correttamente dovreste:

- Vedere il codice immediatamente formattato nel seguente modo:

  ```js
  const { Client } = require("discord.js");
  const client = new Client();
  client;
  ```

- Vedere `new Client()` sottolineato di rosso con l'errore seguente (o lo stesso ma tradotto in caso abbiate modificato la lingua): `Expected 1 arguments, but got 0`;
- Vedere l'ultimo `client` sottolineato di giallo con l'errore seguente: `Expected an assignment or function call and instead saw an expression`;

Se tutto questo accade, allora la nostra configurazione è andata a buon fine e possiamo iniziare a scrivere il codice del bot; in caso contrario ricontrollate di aver eseguito correttamente la procedura descritta per ogni strumento considerando che il primo punto dell'elenco di sopra riguarda **Prettier**, il secondo **Typescript** e il terzo **ESLint**.

---

## Client

Per interagire con Discord, discord.js ci fornisce una classe che contiene tutto ciò di cui abbiamo bisogno.
Si tratta della classe `Client`, esportata direttamente dal modulo.

In questo paragrafo vedremo solo i metodi e le proprietà di questa classe che ci interessano ora, tratteremo gli altri più avanti quando ce ne sarà bisogno.

### `constructor(options: ClientOptions)`

Il constructor di questa classe richiede un parametro di tipo `ClientOptions` che conterrà tutte le opzioni per il nostro client.
Potete osservare tutte le opzioni nella [documentazione ufficiale](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions).

Bisogna obbligatoriamente passare il parametro delle opzioni, che però contiene solo proprietà facoltative, fatta eccezione per `intents` che vedremo tra poco nel paragrafo **[Intents](#intents)**.

**Esempi:**

```js
const { Client } = require("discord.js");

new Client({ intents: ["GUILDS"] });
```

---

### `Client#options`

Rappresenta le opzioni con cui abbiamo inizializzato il nostro Client.

**Type:** [`ClientOptions`](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions) - Corrisponde al parametro passato in `new Client(options)`.

---

### `Client#token`

Rappresenta il token del nostro bot.
Questa proprietà deve essere utilizzata molto con cautela e assolutamente non in comandi.

Quando inizializziamo un nuovo Client è `null` di default, a meno che non abbiamo impostato la variabile d'ambiente `DISCORD_TOKEN`.
Se la variabile d'ambiente `DISCORD_TOKEN` non è impostata allora saremo costretti a passare un token valido nel metodo `login`.

**Type:** `string | null` - Il token del bot, o `null` se nessun token è presente.

**Nota: Questa proprietà viene rilevata automaticamente e non dovrebbe essere mai modificata manualmente.**

---

### `Client#user`

Rappresenta il bot come utente Discord.

**Type:** [`ClientUser | null`](https://discord.js.org/#/docs/main/stable/class/ClientUser) - Una classe discord.js che rappresenta il bot come utente. Vedremo le varie proprietà e metodi di questa classe quando ne avremo bisogno.

---

### `Client#login(/** token */)`

Connette il bot a discord tramite un token, in modo da poter ricevere gli eventi e interagire con gli utenti.

- `token` - Il token con cui connettersi a Discord. Di default è `client.token` quindi può essere omesso solo nel caso avessimo definito la variabile d'ambiente `DISCORD_TOKEN`.

**Esempi:**

```js
const client = new Client({ intents: ["GUILDS"] });

client.login();
client.login("70K3N");
```

---

### Eventi

La classe `Client` di discord.js estende `EventEmitter`, una classe predefinita in nodejs che permette di eseguire delle funzioni quando accadono degli eventi.
Per farlo, però, abbiamo bisogno di _registrare_ quell'evento e la funzione associata tramite il metodo `on`.
Se vogliamo che quella funzione venga chiamata solo la prima volta che quell'evento accade possiamo usare `once`.

**Sintassi:**

```js
client.on(event, listener);

// La funzione `listener` in questo caso verrà eseguita solo la prima volta che riceviamo l'evento `event`
client.once(event, listener);
```

- `event` - Il nome dell'evento;
- `listener` - La funzione da eseguire quando l'evento `event` viene chiamato.

**Restituisce:** `Client` - Il nostro client.

In poche parole, per eseguire una certa azione quando il nostro bot riceve un'interazione usiamo il metodo `on` passando come parametri `interactionCreate` (il nome dell'evento) e la funzione da eseguire quando l'interazione verrà ricevuta, accettando come parametro l'interazione:

```js
client.on("interactionCreate", (interaction) => {
	console.log(interaction.user.tag);
});
```

Con questo codice, ogni qualvolta ricevessimo un'interazione, vedremo in console l'username e il tag dell'utente che ha interagito con il bot.

Di seguito sono elencati alcuni eventi utili forniti da discord.js tramite il Client.
Man mano che andremo avanti con la guida ce ne potranno servire di nuovi che elencheremo quando necessario.

Tutti gli eventi sono descritti nella [documentazione ufficiale](https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-applicationCommandCreate).

#### `Client#interactionCreate`

Questo evento si verifica quando il bot riceve una interazione, questa può essere relativa ad uno slash command, pulsante, menu...

**Sintassi:**

```js
client.on("interactionCreate", (interaction) => {
	// Azioni da eseguire quando un utente interagisce con il bot
});
```

- `interaction` - L'interazione ricevuta. **Type:** [`Interaction`](https://discord.js.org/#/docs/main/stable/class/Interaction) - Si tratta di una classe che rappresenta un'interazione di qualsiasi tipo. Vedremo le sue proprietà e metodi fondamentali quando necessario.

**Esempi:**

```js
const { Client } = require("discord.js");

const client = new Client({ intents: ["GUILDS"] });

client.on("interactionCreate", (interaction) => {
	// Controlliamo se abbiamo ricevuto un'interazione da uno Slash Command
	if (interaction.isCommand())
		// Inviamo una risposta "ephemeral", cioè visibile solo all'utente
		interaction.reply({ content: "Messaggio segreto!", ephemeral: true }); // Il metodo `reply()` ci permette di rispondere all'interazione
});
```

#### `Client#ready`

Evento che viene ricevuto quando il bot si è connesso a Discord ed è pronto a ricevere gli eventi come interazioni etc...

Possiamo usare `once` invece che `on` in questo caso perchè sappiamo che l'evento `ready` verrà chiamato solo una volta.

**Sintassi:**

```js
client.once("ready", (onlineClient) => {
	// Azioni da eseguire uando il bot si connette
});
```

- `onlineClient` - Il nostro client. **Type:** `Client`

**Esempi:**

```js
const { Client } = require("discord.js");

const client = new Client({ intents: ["GUILDS"] });

client.once("ready", (onlineClient) =>
	console.log(`Connesso con successo come ${onlineClient.user.tag}!`)
);
```

## Salvare il token del bot

Adesso salviamo il token del nostro bot nel progetto, in modo tale da poterci connettere a Discord.

Per prima cosa create un file chiamato `.env` che servirà per salvare le variabili d'ambiente del nostro progetto.
Questo file ha una struttura simile a questa:

```
NOME=VALORE
ALTRO_NOME=ALTRO_VALORE
```

Ora tornate nel Dev Portal, cercate la vostra applicazione e passate alla sezione `Bot`.
Lì cliccate su copia sotto il token del bot:

![Copia Token](/images/8/copy-token.png)

Poi tornate su VSCode e nel file `.env` aggiungete un nuovo valore che abbia come nome `DISCORD_TOKEN` (il valore usato da djs come token, menzionato in [`Client#token`](#clienttoken)) e come valore il token copiato, ad esempio:

```
DISCORD_TOKEN=ODg3NzQ4NTQ4ODkwODczOTE5.YUIqQw.B0sb_gshXY2nH5if-uHEkiGQGvc
```

## Collegare il nostro bot a Discord

Finalmente possiamo collegare il nostro bot a Discord.
Per farlo torniamo nell'index.js e cancelliamo quello che avevamo scritto in precedenza.

Ora, come abbiamo già detto, come prima cosa abbiamo bisogno di un `Client` che rappresenterà il nostro bot, perciò scriviamo:

```js
const client = new Client();
```

Ovviamente `Client` va importato da discord.js ma questo può essere fatto facilmente mentre lo scriviamo:

![Import Client](/images/8/import-client.gif)

Adesso dovreste vedere il seguente errore su `new Client()`: `An argument for 'options' was not provided.`
Questo significa che il constructor della classe `Client`, come mostrato [in precedenza](#constructoroptions-clientoptions), richiede un parametro che specifichi le sue opzioni.

Questo parametro è di tipo [`ClientOptions`](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions) ed è quindi un object con tante possibili opzioni.
Vedremo altre opzioni in futuro o potete vederle voi dalla [documentazione ufficiale](https://discord.js.org/#/docs/main/stable/typedef/ClientOptions) ma per ora ci basta vedere l'opzione `intents` che è obbligatoria.

## Intents

Discord richiede a tutti i bot che si connettono, di specificare di quali _intents_ hanno bisogno.

Gli intents indicano gli eventi a cui siamo interessati.
Nella [documentazione Discord](https://discord.com/developers/docs/topics/gateway#list-of-intents) riguardo gli intents potete trovare ognuno quali eventi ci permette di ricevere.

Per scegliere i nostri intents innanzitutto andiamo ad aggiungere la proprietà dedicata nelle opzioni del client come un array vuoto:

```diff
const { Client } = require("discord.js");

- const client = new Client();
+ const client = new Client({ intents: [] });
```

Ora possiamo aggiungere nell'array tutti gli intents che ci servono, usando le costanti che ci fornisce djs.
Ci basta importare anche la classe `Intents` da djs, la quale ha una proprietà statica chiamata `FLAGS` che contiene tutti gli intent esistenti.

**Nota: Se non ricordi cosa erano le proprietà statiche puoi controllare [il paragrafo dedicato alle classi nel nostro articolo sulle parole chiave](/guides/2%20-%20Parole%20chiave%20&%20operatori.md#class--this--extends--super--static--new)!**

```diff
- const { Client } = require("discord.js");
+ const {
+ 	Client,
+ 	Intents: { FLAGS },
+ } = require("discord.js");

const client = new Client({ intents: [] });
```

**Nota: Nell'importare `Intents` abbiamo usato una _scorciatoia_ per poter importare direttamente la sua proprietà statica `FLAGS` visto che abbiamo bisogno solo di quella!**

Ora possiamo aggiungere nell'array tutti gli intents di cui abbiamo bisogno utilizzando le proprietà di `FLAGS`.
Ad esempio, se ho bisogno dell'intent `GUILDS`, allora aggiungerò `FLAGS.GUILDS` nell'array:

```diff
const {
	Client,
	Intents: { FLAGS },
} = require("discord.js");

- const client = new Client({ intents: [] });
+ const client = new Client({ intents: [FLAGS.GUILDS] });
```

### Scegliere gli intents adatti

Discord ci offre tantissimi intents da poter scegliere ma è bene scegliere solo quelli di cui abbiamo bisogno in modo che il nostro bot sia più veloce e occupi meno RAM.

Di seguito è una lista di tutti gli intents che possiamo scegliere:

- `GUILDS`: Ci serve sempre per poter interagire con i server di cui il nostro bot fa parte. L'unico caso in cui non ne abbiamo bisogno e se volessimo creare un bot basato su slash commands che ha solo bisogno di rispondere ai comandi senza eseguire alcuna azione tramite Discord (es. bannare utenti) e quindi possiamo invitarlo aggiungendo solo gli slash commands e senza aggiungere il bot come utente;
- `GUILD_MEMBERS`: Ne abbiamo bisogno per ricevere i dati riguardo i membri dei server come una lista completa dei membri o sapere quando un nuovo membro entra in un server. **Nota: Questo intent è _privilegiato_, ossia ha bisogno di un permesso speciale per poter essere usato. Se il nostro bot si trova in meno di 100 server e non è verificato, allora possiamo abilitarlo nella pagina del nostro bot nel Dev Portal, in caso contrario dovremo fare una richiesta a Discord**;
- `GUILD_BANS`: Ci permette di ricevere i dati riguardo agli utenti bannati in un server. Può essere utile se vogliamo eseguire una certa azione quando un utente viene bannato/sbannato da un server;
- `GUILD_EMOJIS_AND_STICKERS`: Ci può servire se abbiamo bisogno di accedere alle emoji e gli sticker dei server. Nota che anche senza questo intent il tuo bot potrà continuare ad utilizzare emoji personalizzate, questo comunque richiede il permesso `Usa emoji esterne` per il ruolo `@everyone` nel server;
- `GUILD_INTEGRATIONS`: Ci permette di ricevere i dati riguardo le integrazioni nei server;
- `GUILD_WEBHOOKS`: Ci fornisce i dati riguardo i webhook nei canali. Nota che anche senza questo intent il nostro bot potrà comunque usare i webhook per i quali abbiamo bisogno dell'id e del token;
- `GUILD_INVITES`: Ci permette di monitorare gli inviti in un server;
- `GUILD_VOICE_STATES`: Ci permette di ricevere dati riguardo gli utenti nei canali vocali. Nota che abbiamo bisogno di questo intent se vogliamo che il nostro bot possa connettersi ai canali vocali;
- `GUILD_PRESENCES`: Ci fornisce i dati riguardo lo stato dei membri. Nota che senza questo intent il nostro bot riceverà solo alcuni membri dei server di cui fa parte appena sarà online. **Nota: Questo intent è _privilegiato_, ossia ha bisogno di un permesso speciale per poter essere usato. Se il nostro bot si trova in meno di 100 server e non è verificato, allora possiamo abilitarlo nella pagina del nostro bot nel Dev Portal, in caso contrario dovremo fare una richiesta a Discord**;
- `GUILD_MESSAGES`: Ci fornisce i dati riguardo i messaggi che vengono inviati nei server. Nota che noi non avremo bisogno di questo intent per i comandi in quanto utilizzeremo gli slash commands che si basano sulle interazioni e i webhook. **Nota: I comandi in chat sono ora sconsigliati da parte di Discord ed è per questo che non li utilizzeremo nella nostra guida. Discord non verificherà i bot che utilizzano questo intent per i comandi in chat ma continuerà a farlo se ne abbiamo bisogno per automod etc...**;
- `GUILD_MESSAGE_REACTIONS`: Ci fornisce i dati riguardo le reazioni ai messaggi. Nota che non abbiamo bisogno di questo intent per cose come reaction roles in quanto utilizzeremo i pulsanti di Discord;
- `GUILD_MESSAGE_TYPING`: Ci permette di sapere quando un nuovo membro sta scrivendo in un server;
- `DIRECT_MESSAGES`: Come `GUILD_MESSAGES` ma relativo ai DM;
- `DIRECT_MESSAGE_REACTIONS`: Come `DIRECT_MESSAGE_REACTIONS` ma relativo ai DM;
- `DIRECT_MESSAGE_TYPING`: Come `DIRECT_MESSAGE_TYPING` ma relativo ai DM;

Esempio di codice del nostro bot utilizzando gli intent `GUILDS`, `GUILD_VOICE_STATES`, `GUILD_PRESENCES` e `GUILD_MEMBERS`:

```js
const {
	Client,
	Intents: { FLAGS },
} = require("discord.js");

const client = new Client({
	intents: [FLAGS.GUILDS, FLAGS.GUILD_VOICE_STATES, FLAGS.GUILD_PRESENCES, FLAGS.GUILD_MEMBERS],
});
```

## Collegarci a Discord

Attualmente il nostro codice risulterà, a parte gli intents e altre opzioni del client, come il seguente:

```js
const {
	Client,
	Intents: { FLAGS },
} = require("discord.js");

const client = new Client({ intents: [FLAGS.GUILDS] });
```

Ora ci manca solo di collegare il bot a Discord!

Per farlo possiamo usare la funzione `Client#login()`, mostrata [in precedenza](#clientlogin-token-):

```diff
const {
	Client,
	Intents: { FLAGS },
} = require("discord.js");

const client = new Client({ intents: [FLAGS.GUILDS] });
+
+ client.login();
```

Adesso il nostro bot può collegarsi a Discord, ma... come faremo a sapere se è riuscito a connettersi con successo?

Come [spiegato in precedenza](#clientready), possiamo usare l'evento `ready` che verrà eseguito appena il bot si connetterà a Discord.
Aggiungiamo quindi un'istruzione che scriva nella console che il nostro bot è pronto, insieme al suo username Discord:

```diff
const {
	Client,
	Intents: { FLAGS },
} = require("discord.js");

const client = new Client({ intents: [FLAGS.GUILDS] });
+
+ client.once("ready", (onlineClient) =>
+ 	console.log(`Connesso con successo come ${onlineClient.user.tag}!`)
+ );

client.login();
```

Manca solo un'ultima cosa: importare le variabili d'ambiente, compreso il token del nostro bot che ci permetterà di connettere con successo.

## Importare le variabili d'ambiente

Per importare le variabili d'ambiente del nostro progetto, usiamo il modulo `dotenv` che abbiamo scaricato in precedenza.
Più precisamente andremo ad utilizzare la funzione `config` esportata dal modulo che caricherà tutte le variabili d'ambiente salvate nel file `.env`:

```diff
const {
	Client,
	Intents: { FLAGS },
} = require("discord.js");
+ const { config } = require("dotenv");
+
+ config();

const client = new Client({ intents: [FLAGS.GUILDS] });

client.once("ready", (onlineClient) =>
	console.log(`Connesso con successo come ${onlineClient.user.tag}!`)
);

client.login();
```

Questo ci permette di caricare il token del bot direttamente nel nostro progetto senza doverlo scrivere manualmente nel codice.

## Eseguire il bot

Finalmente, dopo tanta fatica, siamo riusciti a scrivere il codice che permetterà al nostro bot di connettersi a Discord e possiamo provarlo... ma come?

Beh, è molto semplice: come abbiamo già detto, per eseguire il codice in JavaScript abbiamo bisogno di Nodejs che abbiamo installato in precedenza.
Questo "programma" ha un comando chiamato `node` che possiamo immettere nel terminal, seguito dal file che vogliamo eseguire, perciò apriamo un nuovo terminal in VSC (come abbiamo già spiegato) e scriviamo il seguente comando:

```sh
node .
```

In questo caso `.` indica la cartella corrente perciò Node andrà ad eseguire il file che abbiamo specificato come `entry point` quando abbiamo creato il file package.json e che ora si trova nella proprietà `main` dello stesso file.

Se avete fatto tutto bene, nel terminal vedrete una scritta che vi dice che il vostro bot è online ed effettivamente potrete osservarlo come online anche su Discord!

![Succesfully connected](/images/8/connesso-terminal.png)

![Discord online](/images/8/bot-online.png)

## Codice finale

Se avete seguito tutto l'articolo, il vostro progetto dovrebbe risultare più o meno come il seguente:

[index.js](/src/index.js):

```js
const {
	Client,
	Intents: { FLAGS },
} = require("discord.js");
const { config } = require("dotenv");

config();

const client = new Client({ intents: [FLAGS.GUILDS] });

client.once("ready", (onlineClient) =>
	console.log(`Connesso con successo come ${onlineClient.user.tag}!`)
);

client.login();
```

## Conclusione

In questo articolo siamo riusciti, non senza qualche difficoltà, a sviluppare il nostro primo codice, capace di connettere il bot a Discord.

Nel prossimo articolo vedremo come creare dei comandi e registrarli su Discord.

### **Good Coding!**
