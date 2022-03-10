let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let clearEl = document.getElementById("clear-btn")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function clearAll() {
  saveEl.textContent ='Previous clicks :'
  countEl.textContent = 0
}
