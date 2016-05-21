module.exports = function formatItems(items) {
    const formattedItems = {};
   
    for (var key in items ){
        if (items.hasOwnProperty(key)) {
            if (typeof items[key] === 'object' ) formattedItems[key] = items[key];
            else if (typeof items[key] === 'string') formattedItems[key] = {label: items[key]};
        }
    }

    return formattedItems
};