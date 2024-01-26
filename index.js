import { is, each, range, validate } from "https://x-titan.github.io/utils/index.js"
import { List } from "https://x-titan.github.io/list/index.js"
import * as path from "https://x-titan.github.io/path/index.js"
import { search, css, validHTML, isHTML, attr, } from "https://x-titan.github.io/web-utils/index.js"

const g = globalThis
const d = document
const { body } = d
const { log } = console

const ReadmeList = [
  "README.md",
  "readme.md",
  "README.txt",
  "readme.txt",
  "readme",
]

function getHEADER() {
  return `
<header>
  <div container flex="row">
    <div nav>
      <div class="menu-icon">
        <input class="menu-icon__cheeckbox" type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div hero>
      <a href="/">x titan</a>
    </div>
    <div search>
      <input type="search" placeholder="Search">
    </div>
  </div>
</header>
`
}

function getFOOTER() {
  return `
<footer>
  <div container grid>
    footer grid
  </div>
</footer>
`
}

function errorContent(href, callback) {
  if (location.pathname === "404.html") return

  GET(path.join(location.origin, "404.md"))
    .then(callback)
    .catch(() => {
      location.href = (path.join(location.origin, "404.html") + "#" + location.href.split("#")[0])
    })
}

function loadContent(href, callback, attemp = 0) {
  validate(is.str, href)
  validate(is.func, callback)

  if (attemp >= ReadmeList.length) {
    return errorContent(href, callback)
  }

  GET(path.join(href, ReadmeList[attemp]))
    .then(callback)
    .catch(() => (loadContent(href, callback, ++attemp)))
}

function GET(href) {
  validate("string", href)
  console.log(href)
  return (
    fetch(href, { method: "GET" })
      .then((response) => (response.text()))
  )
}

function setMarkDownContent(value) {
  body.innerHTML = (
    getHEADER() +
    "<main><div content container>" +
    marked.parse(value) +
    "</div></main>" +
    getFOOTER()
  )
}

function initHEAD() {
  const logo = {
    href: "/src/img/hero2.png",
    type: "image/x-icon",
  }
  const css = [
    "/simple/index.css",
    "/index.css",
  ]
  const js = [
    "https://cdn.jsdelivr.net/npm/marked/marked.min.js",
  ]

  each.obj(logo,(value,name)=>{
    
  })

  d.head.appendChild()
}

loadContent(location.pathname, setMarkDownContent)
