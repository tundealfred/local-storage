let first1 = {
  name: "John",
  age: 40,
  city: "Liverpool",
  hobbies: ["walking", "gaming", "reading"],
};

let second2 = {
  name: "Jane",
  age: 35,
  city: "Wirral",
  hobbies: ["reading", "chatting", "movies"],
};

//convert to JSON Format
let jsonString1 = JSON.stringify(first1);
let jsonString2 = JSON.stringify(second2);

//storing in local storage
localStorage.setItem("first1", jsonString1);
localStorage.setItem("second2", jsonString2);

//retrieve data
let getData1 = localStorage.getItem("first1");
let getData2 = localStorage.getItem("second2");

//parse data
let parseData1 = JSON.parse(getData1);
let parseData2 = JSON.parse(getData2);

//display on HTML Page
document.getElementById("demo1").innerHTML = localStorage.getItem("first1");
document.getElementById("demo2").innerHTML = localStorage.getItem("second2");
