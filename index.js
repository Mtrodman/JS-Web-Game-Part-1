
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}
function move(image, left, bottom){
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
}
function move(image){
    image.style.position = 'fixed'
    function moveToCoordinates(left, bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }
    return {
        to: moveToCoordinates
    }
}
move(newImage('assets/green-character.gif')).to(100, 250)

// function newItem(url, left, bottom){
//     let object = newImage(url, left, bottom)
//     object.addEventListener('dblclick', () => {
//         object.remove()
//     })
// }

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function(){
        console.log(item)
        item.remove ()
        let inventoryItem = document.createElement ('img')
        inventoryItem.src = url
        append(inventoryItem)
    })
}
let  inventory = document.createElement('div')
function newInventory() {
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

