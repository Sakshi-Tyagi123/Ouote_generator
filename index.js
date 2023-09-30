let quote = document.querySelector('#new-quote');
let author = document.querySelector('.author-name');
let button = document.querySelector('.gen-btn');
let sound = document.querySelector('#volume');
let copy = document.querySelector('#copy');
let alert = document.querySelector('.copy-alert');

button.addEventListener('click', function () {
    button.innerHTML = "LOADING..."
    fetch('https://api.quotable.io/random').then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        quote.innerHTML = data.content;
        author.innerHTML = `--${data.author}`;
        button.innerHTML = "NEW OUOTE";
    })

})

sound.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} By ${author.innerText}`);
    speechSynthesis.speak(utterance);

})

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(quote.innerText);
    alert.style.visibility = "visible";
    setTimeout(function () {
        alert.style.visibility = "hidden"
    }, 200)

})

