// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
  let position = url.indexOf("#");
//   if (url.includes("#")){
//      console.log(position);
//     return url.slice(0, position);
//   } else {
//     return url;
   return url.includes("#")? url.slice(0, position): url
  }
  
