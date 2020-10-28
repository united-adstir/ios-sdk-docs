function enableCheck() {
    let checklist = document.querySelector('ul.task-list').children
    Array.prototype.forEach.call(checklist, function(item) {
        item.querySelector('input').id = item.innerText.toLowerCase()
        item.querySelector('input').disabled = false
    })
}

function update_items() {
    var xmlElem = undefined;
    var otherNWelem = new Array()
    let checklist = document.querySelector('ul.task-list').children

    var codehilite = document.querySelector('.codehilite')
    var removePre = codehilite.querySelector('pre')
    if (removePre != null) {
        codehilite.removeChild(removePre)
    }

    Array.prototype.forEach.call(checklist, function(item) {
        if (item.querySelector('input').checked) {
            var e = getSKAdNetworkItemsXml("https://raw.githubusercontent.com/united-adstir/ios-sdk-docs/master/docs/custom/skadnetwork/"+ item.querySelector('input').id +".xml")
            if (e !== undefined && e.context !== undefined) {
                if (xmlElem == undefined) {
                    xmlElem = e
                } else {
                    otherNWelem.push(e)
                }
            }
        }
    })

    // マージ処理
    otherNWelem.forEach( function( item ) {
        if (item.context === undefined) {
            return
        }
        var targetDicts = item.context.getElementsByTagName('dict')
        var e = xmlElem.context.querySelector("array")
        let len = targetDicts.length
        for (var i = 0; i < len; i++ ) {
            if (!isContainElement(xmlElem, targetDicts[i])) {
                cloneElem = targetDicts[i].cloneNode(true)
                e.appendChild(cloneElem)
            }
        }
    });

    if (xmlElem !== undefined) {
        var serializer = new XMLSerializer ();
        var str = serializer.serializeToString (xmlElem.context);
        // スペースを排除?
        str = str.replace(/\s?\n/g, '');
        str = str.split("    ").join("")
        str = formatXml(str)
        // 先頭/末尾削除
        str = str.substr(str.indexOf('\n', 0) + 1)
        str = str.replace(/\s\n<\/plist>/g, '');

        // 各行の先頭スペース削除
        str = str.slice(2)
        str = str.replace(/\s\n  /g, '\n');

        // pre を作って入れ込む
        var preElement = document.createElement("pre"); 
        preElement.innerText = str
        codehilite.appendChild(preElement)
    }
}

function formatXml(xml) {
    var formatted = '';
    var reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    var pad = 0;
    jQuery.each(xml.split('\r\n'), function(index, node) {
        var indent = 0;
        if (node.match( /.+<\/\w[^>]*>$/ )) {
            indent = 0;
        } else if (node.match( /^<\/\w/ )) {
            if (pad != 0) {
                pad -= 1;
            }
        } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
            indent = 1;
        } else {
            indent = 0;
        }

        var padding = '';
        for (var i = 0; i < pad; i++) {
            padding += '  ';
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    });

    return formatted;
}

function isContainElement(array, targetDict) {
    const sknid = targetDict.querySelector('string').innerHTML
    const len = array.context.getElementsByTagName('dict').length
    for (let i = 0; i < len; i++) {
        if (sknid == array.context.getElementsByTagName('dict')[i].querySelector('string').innerHTML ) {
            return true
        }
    }

    return false
}

function getSKAdNetworkItemsXml(path) {
    var xml;
    $.ajax({
        async: false,
        dataType: 'xml',
        url: path,
        success: function(data) {
           xml = $(data);
        }
    });
    return xml
}

$(function () {
    enableCheck()
    update_items()
});