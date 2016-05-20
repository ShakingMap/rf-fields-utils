module.exports = {
    bool: (value)=> !!value,
    string: (value)=> typeof value === 'string' ? value : (value === undefined || value === null) ? '' : String(value),
    number: (value)=> (value === undefined && value === null) ? null : Number(value),
    date: (value)=> value instanceof Date ? value : null,
    file: (value)=> (!value || typeof value !== 'object' || typeof value.path !== 'string') ? {path: ''} : value,
    manyOfItems: (value, options)=> Array.isArray(value) ? value.filter(key=>!!options.items[key]) : [],
    oneOfItems: (value, options)=> options.items[value] ? value : ''
};