import poetryJson from "../data/poetry.json" assert {type: "json"};

function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function (key) {
        result.push(json[key]);
    });
    return result;
}

export const poetry = json2array(poetryJson);

export const randomPoem = async function (req, res) {
    const randomId = Math.floor(Math.random() * poetry.length);
    const data = poetry[randomId];
    const output = {
        "id": data.id,
        "categoryId": data.categoryId,
        "poemName": data.poemName,
        "poem": data.poem,
        "author": data.author
    };

    res.send(200, output);
}