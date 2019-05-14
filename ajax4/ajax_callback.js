
function makeAjaxCall(url, methodType){
   let promiseObj = new Promise(function(resolve, reject){
         debug ? console.log(url) : "" ; // conditional ternary
       let xmlhttp = new XMLHttpRequest();
         xmlhttp.open(methodType, url, true);
         xmlhttp.send();
         xmlhttp.onreadystatechange = function(){
           if (xmlhttp.readyState === 4){
              if (xmlhttp.status === 200){
                 debug ? console.log("xmlhttp done successfully") : "";
                 let serverResponse = xmlhttp.responseText; //server antwoord met string
                 debug ? console.log(serverResponse) : ""; // debug
                 resolve(serverResponse); // wordt via return promiseObj teruggegeven
              } else {
               reject(xmlhttp.status);
                console.log("xmlhttp failed");
              }
           } else {
              debug ? console.log("xmlhttp processing going on") : "";
           }
        }
        debug ? console.log("request sent succesfully") : "";
      });
   return promiseObj;
  }
function errorHandler(statusCode){
    console.log("failed with status", status);
  }


/*
function makeAjaxCall(url, methodType){
  let promiseObj = new Promise(function(resolve, reject){
    debug ? console.log(url) : "";
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open(methodType, url true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState == 4){
            if (xmlhttp.status == 200){
              debug ? console.log("xmlhttp done succesfully :)") : "";
              let serverResponse = xmlhttp.responseText;
              debug ? console.log(serverResponse) : "";
              resolve(serverResponse);
            } else {
              reject(xmlhttp.status);
              console.log("xmlhttp failed :(");
            }
          } else {
            debug ? console.log("xmlhttp processing going in") : "";
          }
        }
        debug ? console.log("request sent succesfully") : "";
  });
return promiseObj;
}
function errorhandler(statusCode){
      console.log("failed with status", status);
    }
*/
