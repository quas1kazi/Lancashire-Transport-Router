//Basically a Singleton class

const serverURL = "http://localhost:3000/";
const operators = ['ARCT', 'BLAC', 'KLCO', 'SCCU', 'NUTT'];

const getDownloadURL = (id, extension) => `download?id=${id}&extension=${extension}`;



window.Constants = {
    serverURL: serverURL,
    operators,
    getDownloadURL
}