
function getSKAdNetworkItemsXml(path) {
    var xml;
    $.ajax({
        async: true,
        dataType: 'xml',
        url: path,
        success: function(data) {
           xml = $(data);
           replaceSknidPre(xml.context)
        }
    });
}

function requestSkadnetworkIdXML() {
    var path = location.pathname
    path = path.split('/')
    var loc = path[path.length - 1]
    loc = loc.split('.')
    loc = loc[0]

    getSKAdNetworkItemsXml("https://raw.githubusercontent.com/united-adstir/ios-sdk-docs/master/docs/custom/skadnetwork/"+ loc +".xml")
}

function findSknidPre() {
    let pres = document.querySelectorAll('pre')
    var findedPre

    pres.forEach(function( item ) {
        if (item.innerText.trim() == '<key>SKAdNetworkItems</key>') {
            findedPre = item
        }
    })

    return findedPre
}

function replaceSknidPre(xml) {
    var targetPre = findSknidPre()

    if (xml === undefined || targetPre === undefined) {
        return
    }

    var serializer = new XMLSerializer ();
    var str = serializer.serializeToString (xml);
    // 先頭/末尾削除
    str = str.substr(str.indexOf('\n', 0) + 1)
    str = str.replace(/\s<\/plist>/g, '');

    // 各行の先頭スペース削除
    str = str.replace(/\s\n  /g, '\n');

    targetPre.innerText = str
}

$(function () {
    requestSkadnetworkIdXML()
});
