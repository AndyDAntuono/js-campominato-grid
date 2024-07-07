*Consegna*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Scomponete sempre il problema in sotto problemi, senza andare troppo nel dettaglio questa volta. Andate nel dettaglio solo quando non riusciti ad implementare in codice qualcosa.
Numero di push: 15 circa
*Bonus* (farlo in una cartella bonus)
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*Consigli del giorno:*  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

/*SOLUZIONE*/

*html*
1 - creo un layout idoneo all risoluzione dell'esercizio, avvalendomi delle apposite clasee reperibili tramite un link con boostrap 5.3;
2 - creo una sezione header in cui contentenere il logo di Bollean, le parole "Campo Minato" e un tasto "gioca";
2.1 - usando le classi di boostrap 5.3, creo prima un container, una row e un col-12 nella sezione headr;
2.2 - divido a sua volta il col 12 in due col-6;
2.2.1 - in quello di sinistra ci metto il logo di boolean e le parole "campo minato";
2.2.2 - in quello di destra inserisco un pulsante che permetterà di avviare la funzione di gioco attraverso il file script.js;
3 - creo sezione main che ospiterà la griglia da 100 quadrati;
4- creo una sezione footer che conterra (in fondo a sinistra) la frase "Made with by Boolean"

*css*
1 - imposto che il  div #grid abbia le seguenti proprietà
    
    max-width: 1200px;
    height: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    poiché nella consegna non è specificato che il content di #grid debba essere responsivo;

2 - imposto che .square abbia le seguenti proprietà

    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 10);
    height: calc(100% / 10);
    background-color: aquamarine;
    border: 1px solid black;

3 - imposto che .clicked abbia le seguenti proprietà

    background-color: red;
    color: white;


*js*
1 - definisco la funzione che mi crea i quadrati della griglia
1.1 - assegno la classe square all'elemento creato
1.2 - restituisco il quadrato contenuto nella variabile currentElement
2 - recupero l'elemento che conterrà la mia griglia
3 - eseguo un ciclo di 100 interazioni per creare una griglia 10x10
3.1 - creo il sngolo quadrato chiamando la funzione createSquare;
3.2 - aggiungo un evento "click" a currentSquare e gli associo una funzione anonima;
3.3 - all'evento click associo la parola chiave this
3.4 - a this associo una classe css "clicked "che si attiva al click del mouse dell'utente:
3.5 - gli metto il numero pogressivo
3.6 -  appendo il quadrato appena creato alli'interno della griglia precedentemente