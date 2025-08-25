let itemsList = document.querySelector("ul")
const newItem = document.createElement("li")
const newItem2 = document.createElement("li")
const newItem3 = document.createElement("li")
const newItem4 = document.createElement("li")
const newItem5 = document.createElement("li")
const newItem6 = document.createElement("li")
newItem.textContent = "Master Chief"
newItem2.textContent = "Cloud Strife"
newItem3.textContent = "Mario"
newItem4.textContent = "Link"
newItem5.textContent = "Samus Aran"
newItem6.textContent = "Ken Masters"

// Inserción en un lugar concreto
const secondItem = document.createElement("li")
// secondItem = itemsList.children[1]
secondItem.textContent = "Sonic the HedgeHog"
itemsList.appendChild(secondItem)
itemsList.insertBefore(newItem, secondItem)

itemsList.append(newItem2) // Lo inserta al final de todo
itemsList.prepend(newItem3) // Lo inserta al principio de todo
secondItem.before(newItem4) // Inserta el newItem4 antes del secondItem
secondItem.after(newItem5) // Inserta el newItem5 después del secondItem
itemsList.append(newItem6)

// Eliminación

secondItem.remove()

console.log(newItem3.parentElement) // Impresión en consola del elemento padre a través del hijo

itemsList.removeChild(newItem3)