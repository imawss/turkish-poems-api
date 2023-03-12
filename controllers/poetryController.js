import poetryJson from "../data/poetry.json" assert {type: "json"};
import categoriesJson from "../data/categories.json" assert {type: "json"};

function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function (key) {
        result.push(json[key]);
    });
    return result;
}

export const poetry = json2array(poetryJson);
export const categories = json2array(categoriesJson);

export const randomPoem = async function (req, res) {
    const randomId = Math.floor(Math.random() * poetry.length);
    const data = poetry[randomId];
    const categoryDT = categories.filter(category => category.id == data.categoryId);
    const output = {
        "id": data.id,
        "category": categoryDT,
        "poemName": data.poemName,
        "poem": data.poem,
        "author": data.author
    };

    res.send(200, output);
}