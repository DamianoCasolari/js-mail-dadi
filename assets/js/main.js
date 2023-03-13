//creo un array con tutte le email dentro
// creo una variabile collegata all'input email nel dom
// creo un ciclo for per confrontare ogni singola email con quella inserita dall'utente
//renderizzo un risultato in un oggetto del dom a seconda l'email inserita sia o non sia presente nell'array

const emailList = [
    "gundam@gmail.com",
    "starsky&Hutch@gmail.com",
    "casavianello@gmail.com",
    "macgyver@gmail.com",
    "a-team@gmail.com"
];


const btnEl = document.querySelector(".btn");
let inputEl;
let resultEl = document.querySelector(".result");

btnEl.addEventListener("click", function (e) {
    e.preventDefault();
    let inputEl = document.querySelector(".form-control").value;
    for (let i = 0; i < emailList.length; i++) {

        if (emailList.includes(inputEl)) {
            resultEl.innerText = "L'email risulta registrata correttamente";


        } else {
            resultEl.innerText = "L'email NON risulta registrata correttamente";
        }
    }
});


