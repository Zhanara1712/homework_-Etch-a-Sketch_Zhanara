const container = document.createElement('div');
const button = document.createElement('button')
button.id = 'button'
button.innerText = 'click to change board'
document.body.appendChild(button)


button.addEventListener('click', function () {
    container.innerHTML = ''

    const userChoise = prompt('select number of squares')
    if (isNaN(userChoise) || userChoise > 100 || userChoise <= 0) {
        alert('Error')
    } else {
        for (let i = 0; i < userChoise; i++) {
            const row = document.createElement('div');
            row.id = 'row'
            for (let j = 0; j < userChoise; j++) {
                const square = document.createElement('div');
                square.id = 'square'
                row.appendChild(square);
                square.addEventListener('click', function () {
                    let current = document.getElementsByClassName("active");
                    if (current.length > 0) {
                        current[0].className = current[0].className.replace(" active",);
                    }
                    this.className += "active";
                })
            }
            container.appendChild(row);
        }
    }
})


const getBoard = function () {

    return container;
}

let result = getBoard();
document.body.append(result);