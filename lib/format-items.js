module.exports = function formatItems(items) {
    const formattedItems = {};
    Object.keys(items).forEach(key=> {
        if (typeof items[key] === 'object' ) formattedItems[key] = items[key];
        else if (typeof items[key] === 'string') formattedItems[key] = {label: items[key]};
    });
    return formattedItems
};