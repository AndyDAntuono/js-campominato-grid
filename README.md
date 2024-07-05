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
3 - creo sezione main che ospiterà la griglia da 100 quadrati;
4- creo una sezione footer che conterra (in fondo a sinistra) la frase "Made with by Boolean"

*js*
1 - recupero l'elemento che conterrà la mia griglia
2 - esegue un ciclo di 100 interazioni per creare una griglia 10x10
2.1 - creo il sngolo quadrato
2.2 - gli metto il numero pogressivo
2.3 appendo il quadrato appena creato alli'interno della griglia precedentemente