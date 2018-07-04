const fs = require('fs');
const Translate = require('@google-cloud/translate');
const projectId = 'political-life';
const target = 'ja';
// const axios = require('axios');

// axios.get('https://translation.googleapis.com/language/translate/v2/languages')
//     .then((result) => {
//         console.log(result);
        
//     });

// Instantiates a client
const translate = new Translate({
    projectId: projectId,
});

// for (let key in translate) {
//     console.log(key);
// }

// translate.getLanguages()
// .then( (res) => console.log(res));

if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}

fs.readdir(`${__dirname}/../src/pages/ja`, (err, files) => {
    console.log(files);
    if (err) {
        return console.log(err);
    }
    let maxNo = Math.max(...files.map((filename) => parseInt(filename.substr(0, 4))));
    if (maxNo < 0) { maxNo = -1; }
    console.log(maxNo);
    while (++maxNo < 200) {
        const newfilename = maxNo.toString().padStart(4, '0') + ".md";
        fs.readFile(`${__dirname}/../src/pages/zh/${newfilename}`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            const arrayText = data.split("\n---\n");
            // console.log(arrayText);
            // return 0;
            let title = arrayText[0];
            // title = title.replace(/月/, "월 ");
            // title = title.replace(/日/, "일");
            title = title.replace(/星期一/, "月曜日");
            title = title.replace(/星期二/, "火曜日");
            title = title.replace(/星期三/, "水曜日");
            title = title.replace(/星期四/, "木曜日");
            title = title.replace(/星期五/, "金曜日");
            title = title.replace(/星期六/, "土曜日");
            title = title.replace(/星期日/, "日曜日");
            title = title + "\n---\n";
            let content = arrayText[1];
            fs.appendFileSync(`${__dirname}/../src/pages/ja/${newfilename}`, title);
            translate
                .translate(content, target)
                .then(results => {
                    const translation = results[0];
                    console.log(title);
                    // console.log(`Translation: ${translation}`);
                    fs.appendFileSync(`${__dirname}/../src/pages/ja/${newfilename}`, translation);
                })
                .catch(err => {
                    console.error('ERROR:', err);
                    maxNo = null;
                });
        });
    }
});