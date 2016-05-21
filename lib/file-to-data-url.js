const global = this;
module.exports = function fileToDataUrl(file, callback) {
    if (!global.FileReader) {
        callback();
    }
    else {
        const fileReader = new FileReader;
        fileReader.readAsDataURL(file);
        fileReader.onerror = callback;
        fileReader.onload = e=> callback(null, e.target.result)
    }
};