const footer = document.querySelector("body > footer")
const buttonHamburger = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button")
const buttonEdit1 = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
const buttonEdit2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary")
const viewAllButton = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > div > div > div > button.btn.btn-sm.btn-success")
const imgAll = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > img")
const textAll = document.querySelectorAll("body > main > div > div > div > div:nth-child(n) > div > div > p")
const navbar = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow")
const bootstrap = document.querySelector("head > link")
const greyButton = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2")
const row = document.querySelector("body > main > div > div > div")
const logoBox = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a")
const blueButton = document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2")


// Fonctionnalité 1
i = 1
let clickOnConsole = () => {
  console.log(`clickn n°${i++}`);
}
footer.addEventListener("click", clickOnConsole)

// Fonctionnalité 2
let clickOnHamburger = () => {
  let to_change = document.querySelector("#navbarHeader")
  if (to_change.classList == "bg-dark") {
    to_change.classList = "collapse bg-dark"
  } else {
  to_change.classList = "bg-dark"
}
}
buttonHamburger.addEventListener("click", clickOnHamburger)

// Fonctionnalité 3
  let clickOnEdit1 = () => {
  let to_change = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > p")
  to_change.style.color = "red"
}
buttonEdit1.addEventListener("click", clickOnEdit1)

// Fonctionnalité 4
let clickOnEdit2 = () => {
  let to_change = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > p")
  if (to_change.style.color == "green") {
    to_change.style.color = ""
  } else {
    to_change.style.color = "green"
  }
}
buttonEdit2.addEventListener("click", clickOnEdit2)


// Fonctionnalité 5

let clickOnNavbar = () => {
  if (bootstrap.disabled) { 
    bootstrap.disabled = false 
  }    else { 
    bootstrap.disabled = true
}
}
navbar.addEventListener("dblclick", clickOnNavbar)

// Fonctionnalité 6

// Fonctions 




// Actions 
viewAllButton.forEach((button, i) => {
  let allSubstitute = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."]
  let img = imgAll[i]
  let text = textAll[i]
  let substitute = allSubstitute[i]
  let viewCard = () => {
  if (img.style.width === "100%") {
    img.style.width = "20%"
    img.style.margin = "auto"
    text.textContent = ""
  } else {
    img.style.width = "100%"
    text.textContent = substitute;
  }
}
button.addEventListener("mouseover", viewCard)
})

// Fonctionnalité 7

let changeCardBefore = () => {
  let parent = row.children[0].parentNode
  parent.insertBefore(row.children[5], row.children[0])
}
greyButton.addEventListener("click", changeCardBefore)

// Fonctionnalité 8
blueButton.href = "#"
let changeCardAfter = () => {
  let parent = row.children[0].parentNode
  parent.insertBefore(row.children[0], row.children[6])
}
blueButton.addEventListener("click", changeCardAfter)


let frontBitch = (e) => {
  pageIndex = document.querySelector("body > main")
  body = document.querySelector("body")
  if (e.key == "a") {
    pageIndex.classList = "col-4"
  } else { if (e.key == "y") { 
    pageIndex.classList = "col-4 offset-md-4"
  } else { if (e.key == "p") {
    pageIndex.classList = "col-4 offset-md-8"
  } else { if (e.key == "b") {
    pageIndex.classList = ""
  } else {
    console.log("Salut les bougs !")
  }  }  }  }
}
logoBox.addEventListener("keypress", frontBitch)