// COUNTER DELCARATION//
let countDisp = document.querySelector("#countDisplay")
let countBTN = document.querySelector("#count-btn")

// SAVER AND DISPLAY DECLARATION//
let saveDisp = document.querySelector("#saveDisplay")
let saveBTN = document.querySelector("#save-btn")

//RESET DECLARATION//
let resetBTN = document.querySelector("#reset-btn")

//CHANGE THEME DECLARATION//
let changeBTN = document.querySelector("#change-btn")



let count = 0  

//COUNTER FUNCTION//
countBTN.addEventListener("click",function()
{
    count +=1
    countDisp.textContent = count 
})

//SAVER AND DISPLAY FUNCTION//
saveBTN.addEventListener("click",function ()
{
    let display = count + " - "
    saveDisp.textContent += display 
    count = 0 
    countDisp.textContent = 0 
}
)

//RESET FUNCTION//
resetBTN.addEventListener("click",function()
{
    count = 0 
    countDisp.textContent = 0 
    saveDisp.textContent = "Previous Entries: "       
})




