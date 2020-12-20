// Selects a random item from a list of items and returns it
function choice(items) {
    return items[Math.floor(Math.random() * items.length) + 1]
}

// Removes an item from a list of items and returns the modified list
function remove(items, item) {
    for (let i=0; i<items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0,i), ...items.slice(i + 1)]
        }
    }
}

export { choice, remove };