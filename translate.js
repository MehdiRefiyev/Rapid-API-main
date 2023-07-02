function Translate(word,lang){
  this.apikey = "9329f7b5b7mshd2f1afcfa668500p1bfe67jsn84d4de213db2";
  this.host ="nlp-translation.p.rapidapi.com"
  this.word = word;
  this.lang = lang;

  // XHR object

  this.xhr = new XMLHttpRequest();

}

Translate.prototype.translated = function(callback){
  const endpoint = `https://nlp-translation.p.rapidapi.com/v1/translate?rapidapi-key=${this.apikey}&x-rapidapi-host=${this.host}&text=${this.word}&to=${this.lang}&from=tr`;

  this.xhr.open("GET",endpoint);

  this.xhr.onload = () =>{
      if(this.xhr.status === 200) {
          const json = JSON.parse(this.xhr.responseText);

          if(json.translated_text.de){
            const text = json.translated_text.de;
            callback(null,text);
          }
          if(json.translated_text.en){
            const text = json.translated_text.en;
            callback(null,text);
          }

      }else {
          callback("Error",null);
      }
  }
  this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord,newLang) {
  this.word = newWord;
  this.lang = newLang; 
}