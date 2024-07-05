// recupero l'elemento che conterrà la mia griglia
const grid = document.getElementById('grid')

// eseguo un ciclo di 100 iterazioni per creare una griglia 10x10
for (let i = 0; i < 100; i++) {
    //creo il singolo quadrato
    let currentSquare = document.createElement('div')
    // gli metto il numero progressivo
    currentSquare.innerText = i + 1;
    // appendo il quadrato appena creato all'interno della griglia presa precedentemente
    grid.append(currentSquare);
}