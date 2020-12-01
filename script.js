function getJsonData(){
    var url = "https://jsonplaceholder.typicode.com/users";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if (xhr.status==200 && xhr.readyState==4) {
            return getJson(xhr.responseText);
        }
    }
    xhr.open("GET",url,true);
    xhr.send();
}

function getJson(xml) {
  let json = JSON.parse(xml);
  txt = "";
  json.forEach((item)=>{
    document.getElementById(
      "demo"
    ).innerHTML += `<li> name :  ${item.name}  email :  ${item.email} </li>`;
  })
}