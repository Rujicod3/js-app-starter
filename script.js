function onReady() {
  // Will replace our number of todo items with a value, that will change.
  document.getElementById("listCount").innerText = 0
}
onReady()


// handleSubmit(event) will use input values to add item to list.
function handleSubmit(event) {
  event.preventDefault()
  console.log("handleSubmit called with Event: ", event.target)

  // Get values from input fields and store in variables.

  console.log("Text from input: ", document.getElementById("textInput").value)
  console.log("Author from input: ", document.getElementById("authorInput").value)
  let textInput = document.getElementById("textInput").value
  let authorInput = document.getElementById("authorInput").value

  // This will clear the inputs, but you cant do this through the variables.
    // Has to be stand-alone.
  document.getElementById("textInput").value = ''
  document.getElementById("authorInput").value = ''
  

  // Migrated some code into a separate function
  renderList(textInput, authorInput)

}

// Will take text and author to create new item on the dOM
function renderList(rTextInput, rAuthorInput) {

  //! Update the number
  console.log("listCount: ", document.getElementById("listCount").innerText)
  const curentCount = Number(document.getElementById("listCount").innerText) + 1
  document.getElementById("listCount").innerText = curentCount

  // ! Add item to list.
  console.log("todoList from Dom:", document.getElementById("todoList"))
  document.getElementById("todoList").innerHTML += `
  <li>
    <button onClick="handleDelete(event)">❌</button>
    ${rTextInput} (${rAuthorInput})
  </li>
`
}

// Will remove the entire list item from the UL element
function handleDelete(event) {
  console.log("handleDelete() was clicked by...", event.target.parentElement)
  event.target.parentElement.remove()
} 