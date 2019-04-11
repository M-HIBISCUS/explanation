function displayAbbreviations() {
    if(!document.getElementsByTagName) {
        return false;
    }
    if(!document.createElement) {
        return false;
    }
    if(!document.createTextNode) {
        return false;
    }
    //取得缩略词，
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1) {
        return false;
    }
    // 了遍历缩略词
    var defs = new Array();
    for(var i=0; i< abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length < 1) {
            continue;
        }
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表，
    var dlist = document.createElement("dl");
    for(key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length < 1) {
        return false;
    }
    //将定义列表天骄的文档树中， 
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(header);
    body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);