
const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e);
        //e.target.children[1].value;
        const input = document.querySelector('input#searchByID');

        console.log(input.value)

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDEtails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
        })
    });
}

document.addEventListener('DOMContentLoaded', init);