// definizione della funzione che mi crea i quadrati della griglia
function createSquare() {
    let currentElement = document.createElement('div');
    
    // asegnazione della classe square all'elemento creato
    currentElement.classList.add('square')
    console.log(currentElement);

    //restituisco il quadrato contenuto nella variabile currentElement
    return currentElement;
}

//recupero il pulsante dal dom
const btn = document.getElementById('start');

// recupero l'elemento che conterrà la mia griglia
const grid = document.getElementById('grid')


//assegno l'evento click al pulsante recuperato dal dom
btn.addEventListener('click', function() {
    // eseguo un ciclo di 100 iterazioni per creare una griglia 10x10
for (let i = 0; i < 100; i++) {
    //creo il sngolo quadrato chiamando la funzione createSquare
    let currentSquare = createSquare();

    //aggiungo l'evento click al qyadrato creato 
    currentSquare.addEventListener('click', function () {
        console.log(this);
        this.classList.toggle('clicked');
    });

    // gli metto il numero progressivo
    currentSquare.innerText = i + 1;

    // appendo il quadrato appena creato all'interno della griglia presa precedentemente
    grid.append(currentSquare);
}
})

