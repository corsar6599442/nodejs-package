const path = require ('path') //получаем объект path

console.log(__filename) //возвращает полный путь+имя файла в котором вызван
console.log(path.basename(__filename)) //возвращает название текущего файла с расширением
console.log(path.dirname(__filename)) //возвращает директорию в которой лежит файл
console.log(path.extname(__filename)) //возвращает расширение файла

console.log(path.parse(__filename)) //возвращает информацию о текущем файле в виде объекта
console.log(path.parse(__filename).ext) //возвращает поле ext
console.log(path.parse(__filename).base) //возвращает поле base и т.д.

console.log(path.join(__dirname, 'test', 'second.html')) //генерирует путь к файлу second.html до текущей директории
console.log(path.resolve(__dirname, './test', '/second.html')) // '/'-перед названием файла указывает на относительный путь
