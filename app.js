const enterBtn = document.querySelector('.btn')
const card = document.querySelector('.card')

enterBtn.addEventListener('click', getFacts)

function getFacts() {
    const input = document.querySelector('.input').value
    const cardTitle = document.querySelector('.card-title')
    const cardText = document.querySelector('.card-text')

    if (input !=='') {
        card.classList.remove('d-none')


    fetch(`http://numbersapi.com/${input}`)
        .then(response => response.text())
        .then((data) => {
            cardTitle.innerHTML = input
            cardText.innerHTML = data
        })
        .catch((err) => console.log(err))
    }
}

const copyBtn = document.querySelector('.copy-btn')
copyBtn.addEventListener('click', () => {
    copyText()
})

function copyText() {
    const textarea = document.createElement('textarea')
    let cardText = document.querySelector('.card-text').innerHTML

    textarea.value = cardText
    document.body.append(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Fact has been copied!')
}