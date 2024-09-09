const dateSpan = document.getElementById('datenow')
let date = new Date().toLocaleString()

const materialInput = document.getElementById('material-input')
const addMaterial = document.getElementById('addMaterial')

window.addEventListener('DOMContentLoaded', () => {
    dateSpan.textContent = date
})

addMaterial.addEventListener('click', (event) => {
    event.preventDefault()

    const material = document.createElement('input')
    material.type = 'text'
    material.name = 'material'
    material.classList.add('material-input')

    const quantity = document.createElement('input')
    quantity.type = 'text'
    quantity.name = 'quantity'
    quantity.classList.add('quantity-input')

    const tester = document.createElement('input')
    tester.type = 'text'
    tester.name = 'tester'
    tester.classList.add('tester-input')

    materialInput.appendChild(material)
    materialInput.appendChild(quantity)
    materialInput.appendChild(tester)
})



