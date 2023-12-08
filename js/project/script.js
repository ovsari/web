
var a=document.querySelector("#add_id")
var b=document.querySelector("#overlay")
function plus(){
    a.style.display="block"
    b.style.display="block"
}
function cancel(){
    a.style.display="none"
    b.style.display="none"
}
var container=document.querySelector("#container")
var add_book=document.getElementById("add-book")
var book_title=document.getElementById("book-title")
var book_author=document.getElementById("book-author")
var book_desc=document.getElementById("book-desc")
add_book.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${book_title.value}</h1>
    <h5>${book_author.value}</h5>
    <p>${book_desc.value}</p>
    <button onclick="del(event)" type="">Delete</button>`
    container.append(div)
    a.style.display="none"
    b.style.display="none"
})
function del(event) {
    event.target.parentElement.remove()
}