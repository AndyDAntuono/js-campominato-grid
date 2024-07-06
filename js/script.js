// definizione della funzione che mi crea i quadrati della griglia
function createSquare() {
    let currentElement = document.createElement('div');
    
    // asegnazione della classe square all'elemento creato
    currentElement.classList.add('square')

    // recupero l'elemento che conterrà la mia griglia
    const grid = document.getElementById('grid')
}


// eseguo un ciclo di 100 iterazioni per creare una griglia 10x10
for (let i = 0; i < 100; i++) {
    //creo il sngolo quadrato chiamando la funzione createSquare
    let currentSquare = createSquare();

    currentSquare.addEventLitener('click', function () {
        console.log(this)
        this.classList.toggle('clicked')
    })

    // gli metto il numero progressivo
    currentSquare.innerText = i + 1;
    
    //assegnazione della classe square all'elemento creato
    currentSquare.classList.add('square')

    // appendo il quadrato appena creato all'interno della griglia presa precedentemente
    grid.append(currentSquare);
}