var textTranslate = document.querySelector("textarea");
var button = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/navi.json";

function getTranslationURL(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert ("Something went wrong with ur request! Try again after some time.")
}

function handleTranslate() {
  var inputText = textTranslate.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler);
}

button.addEventListener("click", handleTranslate);
