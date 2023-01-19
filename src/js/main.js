// Third Party
import "./library/vanilla-tilt"

// Highlight Menu On Scroll
const sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", navHighlighter)

function navHighlighter() {
  let scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight

    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 90
    const sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.list-menu:has(a[href*='#${sectionId}'])`)
        .classList.add("active")
    } else {
      document
        .querySelector(`.list-menu:has(a[href*='#${sectionId}'])`)
        .classList.remove("active")
    }
  })
}

// Custom Cursor
const cursorInner = document.querySelector(".cursor-inner")
const cursorOuter = document.querySelector(".cursor-outer")

document.addEventListener("mousemove", moveCursor)

function moveCursor(e) {
  let x = e.clientX
  let y = e.clientY

  cursorInner.style.left = `${x}px`
  cursorInner.style.top = `${y}px`

  cursorOuter.style.left = `${x}px`
  cursorOuter.style.top = `${y}px`
}

const buttons = document.querySelectorAll("button, a")

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    cursorInner.classList.add("grow")
    cursorOuter.classList.add("grow")
  })
  button.addEventListener("mouseleave", () => {
    cursorInner.classList.remove("grow")
    cursorOuter.classList.remove("grow")
  })
})

// Menu Button
const menuButton = document.getElementById("menu-button")
const header = document.querySelector("header")

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("is-active")

  if (header.classList.contains("h-[90px]")) {
    header.classList.remove("h-[90px]")
    header.classList.add("h-[530px]")
  } else if (!header.classList.contains("h-[90px]")) {
    header.classList.remove("h-[530px]")
    header.classList.add("h-[90px]")
  }
})

// Footer Year
const year = document.getElementById("year")
const currentYear = new Date().getFullYear()

year.innerHTML = currentYear
// End Footer Year

// feather Icon
feather.replace()
