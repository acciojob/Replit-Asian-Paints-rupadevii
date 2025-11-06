//your JS code here. If required.
const gridContainer = document.getElementById('grid-container')
const inputForm = document.forms.inputform;
const idInput = document.querySelector('input[name="inputid"]');
const colorInput = document.querySelector('input[name="color"]');
const changeColor = document.getElementById('change_button');
const resetColors = document.getElementById('reset_button')

changeColor.addEventListener("click", (e) => {
	e.preventDefault();
	// alert( colorInput.value)
	const selectedDiv = document.getElementById(`${idInput.value}`)
	selectedDiv.style.backgroundColor = `${colorInput.value}`;
	inputForm.reset()
})

resetColors.onclick = (e) => {
	e.preventDefault()
	Array.from(gridContainer.children).forEach(child => child.style.backgroundColor = "transparent")
}