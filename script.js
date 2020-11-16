// Constantes
const viewAllButton = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > div > div > div > button.btn.btn-sm.btn-success")
const buttonHamburger = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button")
const buttonEdit1 = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
const buttonEdit2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
const greyButton = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2")
const blueButton = document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2")
const bootstrap = document.querySelector("head > link")
const textAll = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > div > p")
const imgAll = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > img")
const logoBox = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a")
const navbar = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow")
const footer = document.querySelector("body > footer")
const row = document.querySelector("body > main > div > div > div")


// Fonction 1
let i = 1
let clickOnConsole = () => {
  console.log(`click n°${i++}`);
}
// Appel de la fonction 1
footer.addEventListener("click", clickOnConsole)
// // //

// Fonction 2
let clickOnHamburger = () => {
  let to_change = document.querySelector("#navbarHeader")
  if (to_change.classList == "bg-dark") { 
    to_change.classList = "collapse bg-dark"
  } 
  else { 
    to_change.classList = "bg-dark"
  }
}
// Appel de la fonction 2
buttonHamburger.addEventListener("click", clickOnHamburger)
// // //

// Fonction 3
  let clickOnEdit1 = () => {
  let to_change = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > p")
  to_change.style.color = "red"
}
// Appel de la fonction 3
buttonEdit1.addEventListener("click", clickOnEdit1)
// // //

// Fonction 4
let clickOnEdit2 = () => {
  let to_change = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > p")
  if (to_change.style.color === "green") { to_change.style.color = "" } 
  else { to_change.style.color = "green" }
}
// Appel de la fonction 4
buttonEdit2.addEventListener("click", clickOnEdit2)
// // //

// Fonction 5
let clickOnNavbar = () => {
  if (bootstrap.disabled) { bootstrap.disabled = false }    
  else { bootstrap.disabled = true }
}
// Appel de la fonction 5
navbar.addEventListener("dblclick", clickOnNavbar)
// // //

// Fonction 6
viewAllButton.forEach((button, i) => {
  let img = imgAll[i]
  let text = textAll[i]

  let viewCard = () => {
  if (img.style.width === "") {
    img.style.width = "20%"
    img.style.margin = "auto"
    text.classList.toggle('collapse');}
  else {
    img.style.width = ""
    text.classList.toggle('collapse');}
  }
button.addEventListener("mouseover", viewCard)
})

// Fonction 7
let changeCardBefore = () => {
  let parent = row.children[0].parentNode
  parent.insertBefore(row.children[(row.children.length - 1)], row.children[0])
}
// Appel de la fonction 7
greyButton.addEventListener("click", changeCardBefore)
// // //

// Fonction 8
blueButton.removeAttribute("href") // Option 1
greyButton.removeAttribute("href") // harmonisation front bluebutton et greybutton
// blueButton.href = "#"           // Option 2 
let changeCardAfter = () => {
  let parent = row.children[0].parentNode
  parent.insertBefore(row.children[0], row.children[row.children.length])
}
// Appel de la fonction 8
blueButton.addEventListener("click", changeCardAfter)
// // //

// Fonction 9
let frontStyle = (e) => {
  pageIndex = document.querySelector("body > main")
  body = document.querySelector("body")
  // temporary = document.querySelector("body > main > div")
  switch(e.key) {
    case "a":
      pageIndex.classList = "col-4"
      // temporary.
      break;
    case "y":
      pageIndex.classList = "col-4 offset-md-4"
      break;
    case "p":
      pageIndex.classList = "col-4 offset-md-8"
      break;
    case "b":
      pageIndex.classList = ""
      break;
    default:
      console.log("Salut les bougs !")
  }
}
// Appel de la fonction 9
logoBox.addEventListener("keypress", frontStyle)
// // //