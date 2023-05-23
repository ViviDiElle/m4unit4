
// AGGIUNTA API PER INSERIRE I LIBRI NELLE CARD 

const urlLibri = `https://striveschool-api.herokuapp.com/books`

let risultatoLibri = null

function fetchLibri() {
    fetch(urlLibri)
        .then(response => response.json())
        .then(data => {
            risultatoLibri = data
            console.log("funziona", risultatoLibri);
            cambioInImg() 
            imgUrl()
            addCategoria()
            inserimentoTitoli()
        })
        .catch((error) => {
            console.error("vedi errore");
        })
}

fetchLibri()



// sostituzione svg in img 

function cambioInImg() {
    let main = document.querySelector('main')
    let svgs = document.querySelectorAll('svg')
    svgs.forEach(elem =>{
        let img = document.createElement('img');
        elem.parentNode.replaceChild(img, elem)
        img.classList = `img-fluid object-fit-fill`
    })
}

// inserimento di immagini dei libri dal url

function imgUrl() {
    let card = document.querySelectorAll('.shadow-sm')
    card.forEach(e => {
        e.classList = 'card-img card shadow-sm'
    })
    let imgs = document.querySelectorAll('.card-img img');
    imgs.forEach((elem, i) => {
        elem.setAttribute('src', risultatoLibri[i].img)
        // console.log(elem);

    })

}

// categoria

function addCategoria() {
        let small = document.querySelectorAll('small')
        small.forEach((elm, i) => {
        elm.innerHTML = risultatoLibri[i].category
        // console.log(elm);
    })
}
//  titoli
function inserimentoTitoli() {
    let cardText = document.querySelectorAll('.card-text')
    cardText.forEach((elem, i) => {
    elem.innerHTML = risultatoLibri[i].title
    // console.log(elem);
})
}


// AGGIUNGI BOTTONE "AGGIUNGI AL CARRELLO" A OGNI CARD

function addButton() {
    let btnGruppo = document.querySelectorAll('.btn-group') 
    btnGruppo.forEach(elem => {
        let btnCarrello = document.createElement('button')
        btnCarrello.classList = `btn btn-sm btn-outline-secondary btn-carrello`
        btnCarrello.innerText = "Aggiungi al carrello"
        btnCarrello.value =""
        elem.appendChild(btnCarrello)

        let btnSalta = document.createElement('button')
        btnSalta.classList = `btn btn-sm btn-outline-secondary`
        btnSalta.innerText = "Nascondi"
        btnSalta.value =""
        elem.appendChild(btnSalta)
        btnSalta.addEventListener("click", function(event){
            let card = event.target.parentNode.parentNode.parentNode.parentNode
            card.remove()
        })
    })
}
addButton();

// function badgesAcquisto() {
//         let btnAcquisti = document.querySelectorAll('.btn-carrello')
//         console.log("btn acquisti", btnAcquisti);
//         btnAcquisti.forEach(btns => {
//             btns.addEventListener('click', function(){
//                 let shadowPadrea = document.querySelectorAll('.shadow-sm')
//                 shadowPadrea.forEach(shadow => {
//                 let span = document.createElement('span') 
//                 span.classList = `position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger z-2`
//                 span.innerText = 'Acquistato'

//                 shadow.appendChild(span)
//                 })

//             })
//         })
// }






// seconda prova



function badgesAcquisto() {
        let btnAcquisti = document.querySelector('.btn-carrello')
        // console.log("btn acquisti", btnAcquisti);
        btnAcquisti.addEventListener('click', function(){
                let shadowPadrea = document.querySelectorAll('.shadow-sm')
                shadowPadrea.forEach(shadow => {
                let span = document.createElement('span') 
                span.classList = `position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger z-2`
                span.innerText = 'Acquistato'
                shadow.appendChild(span )
                console.log(shadow);
                })

            })
        
}

badgesAcquisto()