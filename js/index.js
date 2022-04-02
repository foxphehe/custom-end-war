function changePage(e) {
    var divs = document.getElementsByClassName("left-box-selected")
    for (var i = 0; i < divs.length; i++) {
        divs[i].setAttribute("class", "left-box")
    }
    var name;
    var id;
    var child;
    name = e.path[0].getAttribute("name");
    id = e.path[0].getAttribute("boxid");
    if (id < 32) {
        child = e.path[0];
        child.setAttribute("class", "left-box-selected")
        var title = document.getElementById("title-right");
        title.innerText = name;
    }
    initRightContent(id);
}

function initLeftContent() {
    var json = JSON.parse(shops);
    var leftContent = document.getElementById("left-content");
    for (var i = 0; i < json.length; i++) {
        if (json[i].name) {
            var divBox = document.createElement("div");
            var img = document.createElement("img");
            var title = document.createElement("div");
            img.setAttribute("src", json[i].icon);
            img.style.width = 80 + "px"
            img.style.height = 80 + "px"
            img.style.pointerEvents = "none"
            title.innerText = json[i].name;
            if (json[i].textColor) {
                title.setAttribute("class", "title-left-" + json[i].textColor);
            } else {
                title.setAttribute("class", "title-left");
            }
            divBox.appendChild(img);
            divBox.appendChild(title);
            divBox.setAttribute("class", "left-box");
            // div.setAttribute("onclick", "changePage('" + div + "','" + json[i].name + "','" + json[i].id + "')");
            var index = i;
            var name = json[index].name
            var id = json[index].id
            divBox.setAttribute("name", name)
            divBox.setAttribute("boxid", id)
            divBox.addEventListener("click", changePage)
            leftContent.appendChild(divBox);
        } else {
            var cutline = document.createElement("div");
            cutline.setAttribute("class", "cutline");
            leftContent.appendChild(cutline);
        }
    }
    var childTitle = document.getElementById("title-child-box");
    for (var i = 0; i < 8; i++) {
        var child = document.createElement("div");
        child.setAttribute("class", "title-child");
        child.innerText = "[等级" + (i * 5 + 1) + "-" + (i * 5 + 5) + "]";
        child.setAttribute("boxid", i + 33)
        childTitle.appendChild(child);
        childTitle.addEventListener("click", changePage)
    }
}

function fullContent(param, append) {
    var json = JSON.parse(param);
    var detailTable = document.getElementById("detailTable");
    var child = detailTable.firstChild;
    if (!append)
        while (child) {
            detailTable.removeChild(child);
            child = detailTable.firstChild;
        }
    for (var i = 0; i < json.length; i++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var icon = document.createElement("div");
        var img = document.createElement("img");
        var name = document.createElement("div");
        var desc = document.createElement("div");
        var gold = document.createElement("div");
        var goldicon = document.createElement("img");
        img.setAttribute("src", json[i].icon);
        icon.appendChild(img);
        icon.setAttribute("class", "icon");
        name.innerText = json[i].name;
        name.setAttribute("class", "name");
        name.style.color = json[i].textColor;
        desc.innerText = json[i].description;
        desc.setAttribute("class", "desc");
        if (json[i].goldcost > 0) {
            goldicon.setAttribute("src", "res/icon/BTNMGExchange.jpg")
        } else {
            goldicon.setAttribute("src", "res/icon/BTNBundleOfLumber.jpg")
        }
        goldicon.setAttribute("class", "gold-img");
        gold.appendChild(goldicon);
        gold.append(json[i].goldcost || json[i].lumbercost);
        gold.setAttribute("class", "gold");

        td.appendChild(icon);
        td.appendChild(name);
        td.appendChild(desc);
        td.appendChild(gold);
        if (json[i].remark) {
            var remark = document.createElement("div");
            remark.innerText = json[i].remark;
            remark.setAttribute("class", "ex");
            td.appendChild(remark);
        };
        // td.setAttribute("class", "td-bg");
        tr.appendChild(td);
        detailTable.appendChild(tr)
    }
}


function initRightContent(index) {
    var childTitle = document.getElementById("title-child-box");
    if (index == 14 || index > 32) {
        childTitle.style.display = "flex";
    } else {
        childTitle.style.display = "none";
    }
    switch (Number(index)) {
        case 12:
            fullContent(books);
            break;
        case 13:
            fullContent(randomItems);
            break;
        case 14:
            fullContent(itemsLevel1);
            fullContent(itemsLevel2, 1);
            fullContent(itemsLevel3, 1);
            fullContent(itemsLevel4, 1);
            fullContent(itemsLevel5, 1);
            break;
        case 15:
            break;
        case 16:
            break;
        case 17:
            break;
        case 18:
            break;
        case 19:
            break;
        case 20:
            break;
        case 21:
            break;
        case 22:
            break;
        case 23:
            break;
        case 24:
            break;
        case 25:
            break;
        case 26:
            break;
        case 27:
            break;
        case 28:
            break;
        case 29:
            break;
        case 30:
            break;
        case 31:
            break;
        case 32:
            break;
        case 33:
            fullContent(itemsLevel1);
            fullContent(itemsLevel2, 1);
            fullContent(itemsLevel3, 1);
            fullContent(itemsLevel4, 1);
            fullContent(itemsLevel5, 1);
            break;
        case 34:
            fullContent(itemsLevel6);
            fullContent(itemsLevel7, 1);
            break;
        case 35:
            break;
        case 36:
            break;
        case 37:
            break;
        case 38:
            break;
        case 39:
            break;
        case 40:
            break;
        default:
            fullContent(books);
            document.getElementsByClassName("left-box")[0].setAttribute("class", "left-box-selected")
            break;
    }

}

function init() {
    initLeftContent();
    initRightContent();

}