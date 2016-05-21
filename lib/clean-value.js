module.exports = {
    bool: function(value){return !!value},
    string: function(value){return typeof value === 'string' ? value : (value === undefined || value === null) ? '' : String(value)},
    number: function(value){return (value === undefined && value === null) ? null : Number(value)},
    date: function(value){return value instanceof Date ? value : null},
    file: function(value){return (!value || typeof value !== 'object' || typeof value.path !== 'string') ? {path: ''} : value},
    manyOfItems: function(value, options){return Array.isArray(value) ? value.filter(key=>!!options.items[key]) : []},
    oneOfItems: function(value, options){return options.items[value] ? value : ''}
};