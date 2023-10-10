function convert(){
    var  typeselector = document.getElementById("typeselector");
    var type = typeselector.options[typeselector.selectedIndex].value;
    sendURL(document.getElementById("url").value,type);
}
    
function sendURL(URL,TYPE) {
    var uri = `http://localhost:3000/download?URL=${URL}&TYPE=${TYPE}`
    download("Video."+TYPE, uri);
}
    
    
function download(filename, url) {
    var element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', filename);
      
    element.style.display = 'none';
    document.body.appendChild(element);
      
    element.click();
      
    document.body.removeChild(element);
}
    