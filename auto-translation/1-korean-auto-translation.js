const fs = require('fs');
const readline = require('readline');
const reg = new RegExp(/-+\n.+\d+月\d+日 星期.+\n-+\n/);
const Translate = require('@google-cloud/translate');
const projectId = 'political-life';
const target = 'ko';

// Instantiates a client
const translate = new Translate({
    projectId: projectId,
});

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

fs.readdir(`${__dirname}/../src/pages/ko`, (err, files) => {
    let maxNo = Math.max(...files.map((filename) => parseInt(filename.substr(0, 4))));
    while (++maxNo < 200) {
        const newfilename = maxNo.toString().padStart(4, '0') + ".md";
        fs.readFile(`${__dirname}/../src/pages/cn/${newfilename}`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            const arrayText = data.split("\r\n---\r\n\r\n");
            // console.log(arrayText);
            // return 0;
            let title = arrayText[0];
            title = title.replace(/月/, "월 ");
            title = title.replace(/日/, "일");
            title = title.replace(/星期一/, "월요일");
            title = title.replace(/星期二/, "화요일");
            title = title.replace(/星期三/, "수요일");
            title = title.replace(/星期四/, "목요일");
            title = title.replace(/星期五/, "금요일");
            title = title.replace(/星期六/, "토요일");
            title = title.replace(/星期日/, "일요일");
            title = title + "\n---\n";
            let content = arrayText[1];
            // console.log(title);
            // console.log(content);
            fs.appendFileSync(`${__dirname}/../src/pages/ko/${newfilename}`, title);
            translate
                .translate(content, target)
                .then(results => {
                    const translation = results[0];
                    console.log(title);
                    // console.log(`Text: ${content}`);
                    // console.log(`Translation: ${translation}`);
                    fs.appendFileSync(`${__dirname}/../src/pages/ko/${newfilename}`, translation);
                })
                .catch(err => {
                    console.error('ERROR:', err);
                    maxNo = null;
                });
        });
    }
});