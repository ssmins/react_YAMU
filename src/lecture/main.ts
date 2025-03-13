// import { createElement as h } from 'react'
import * as React from "react"
import * as ReactDOM from "react-dom/client"

// [TypeScript] React.ReactElement
// React는 JavaScript Library -> JS가 제공해주는 걸 쓸 수 있다. 

// 새 element 만들기 
// <elementType prop1="value"></elementType>
// <button type="button" class="button primary-button"> 리액트 버전 확인 </button>
const reactElement = React.createElement("button", {
  type : "button",
  className : "button primary-button", 
  children : "리액트 버전 확인", 
})

console.log(reactElement)

// 만든 element render하기 
// DOM API 
// document.getElementId("idName")
const rootElement = document.getElementById("root") 

// ReactDOM.createRoot(rootElement) // null일 수 있어서 경고하는 typescript 
if (rootElement) {
  const reactDOMRoot = ReactDOM.createRoot(rootElement) // null일 수 있어서 경고하는 typescript 
  reactDOMRoot.render(reactElement)
}
