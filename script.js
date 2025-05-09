const $ = document;

// DOM Selector's
const noteInputWrapper = $.querySelector(".input_wrapper")
const addNoteBtn = $.querySelector(".add_note__btn")
const noteList = $.querySelector(".note_bar")
const noteImageElems = $.querySelectorAll(".input_wrapper_image")
const noteTitleInput = $.getElementById("title_input")
const noteDetailInput = $.getElementById("detail_input")
const noteThemeElems = $.querySelectorAll(".color_option")
const addNoteTolistBtn = $.getElementById("addToList")
const closeInputPanelBtn = $.querySelector(".close_btn")

// function's
function noteDomBuillder (imgUrl, title, detail, liColor, prColor) { // Create HTML Template For Insert to List
    const randomRotateValue = randomRotateValueBuillder() // Call for Create The Random Rotate Style Value
    

    let note = `
        <div class="note" style="background-color: ${liColor}; transform: rotate(${randomRotateValue});">
            <span class="sticky_spot" style="background-color: ${prColor};"></span>
            <div class="note_title">
                <img src="${imgUrl}" class="note_title__img" alt="picTitle" width="50px" height="50px">
                <h2 class="note_title__text">${title}</h2>
            </div>
            <p class="details">${detail}</p>
            <div class="note_btns">
                <button class="btn remove_btn" onclick="removeNoteOnBasket(event)">Delete</button>
            </div>
        </div>
    ` // Note HTML Template

    noteList.insertAdjacentHTML("afterbegin", note)
}

function randomRotateValueBuillder () { // Create The Random Rotate Style Value
    const operators = ["-", "+"] // Positive and Negative Operator for control Right and Left
    let randomIndex = Math.floor(Math.random() * operators.length) // Random Value for Positive and Negative
    let randomOperator = operators[randomIndex]
    
    let randomRotateValue = Math.floor(Math.random() * 5) // Random Numerical Value
    randomRotateValue = randomOperator + randomRotateValue + "deg" // Insert Css Unit

    return randomRotateValue // For Example => +3deg or -2deg
}

function initialInputValues () { // Make input's to null Value or Default Value
    // Make input's to null
    noteTitleInput.value = ""
    noteDetailInput.value = ""

    // make media's to Default
    let lastImageSelect = $.querySelector(".select_img")
    lastImageSelect.classList.remove("select_img")
    let defaultImage = $.getElementById("default_img")
    defaultImage.classList.add("select_img")

    let lastThemeSelect = $.querySelector(".select_color")
    lastThemeSelect.classList.remove("select_color")
    let defaultTheme = $.getElementById("default_theme")
    defaultTheme.classList.add("select_color")
}

// Event's Code
const localNotes = () => {
    
}

function openNoteInputPanel () { // Open Input Panel
    noteInputWrapper.style.visibility = "visible"
    noteInputWrapper.style.top = "32px"
}

function noteImageSelector (event) { // For Select User a Favorite Picture
    let lastImageSelect = $.querySelector(".select_img") // Control the Last Picture Select From User
    let userNoteImage = event.target

    lastImageSelect.classList.remove("select_img") // Selected Picture For Display
    userNoteImage.classList.add("select_img")
}

function noteThemeSelector (event) { // For Select User a Favorite Theme Color
    let lastThemeSelect = $.querySelector(".select_color") // Control the Last theme Select From User
    let userNoteTheme = event.target

    lastThemeSelect.classList.remove("select_color") // Selected Theme For Display
    userNoteTheme.classList.add("select_color")
}

function addNoteToList () { // Save The Selcted Value From User and Send to function[ noteDomBuillder ]

    let noteImageUrl = $.querySelector(".select_img") // Save the Selected Picture From DOM
    noteImageUrl = noteImageUrl.getAttribute("src") // Save The Picture Address
    
    // Save the Title and Details From User
    let noteTitleValue = noteTitleInput.value 
    let noteDetailValue = noteDetailInput.value

    let noteThemeValue = $.querySelector(".select_color") // Save the Selected Theme From DOM
    let lightColorNote = noteThemeValue.dataset.color1 // Save the Light Color With DataSet
    let primaryColorNote = noteThemeValue.dataset.color2 // Save the Primary Color With DataSet

    if (noteTitleValue.trim() && noteDetailValue.trim()) { // User Inputs Validation
        noteDomBuillder(noteImageUrl, noteTitleValue, noteDetailValue, lightColorNote, primaryColorNote) // Call The Function for Add to Dom
        closeInputPanel()
    } else {
        alert("Enter The Value")
    }
}

function removeNoteOnBasket (event) { // Remove Note in DOM
    let noteRemoveSelector = event.target.parentElement.parentElement
    noteRemoveSelector.remove()
}

function closeInputPanel () { // Close Input Panel
    initialInputValues()
    noteInputWrapper.style.visibility = "hidden"
    noteInputWrapper.style.top = "-480px"
}


// AddEvent's
window.addEventListener("load", localNotes);
addNoteBtn.addEventListener("click", openNoteInputPanel)
noteImageElems.forEach(function (item) {
    item.addEventListener("click", noteImageSelector)
})
noteThemeElems.forEach(function (item) {
    item.addEventListener("click", noteThemeSelector)
})
addNoteTolistBtn.addEventListener("click", addNoteToList)
closeInputPanelBtn.addEventListener("click", closeInputPanel)

// Created by RGB-Status | Enjoy with Coding :)