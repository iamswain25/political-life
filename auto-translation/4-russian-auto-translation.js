const fs = require('fs');
const Translate = require('@google-cloud/translate');
const projectId = 'political-life';
const target = 'ru';
const translate = new Translate({
    projectId: projectId,
});

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

fs.readdir(`${__dirname}/../src/pages/${target}`, (err, files) => {
    // console.log(files);
    if (err) {
        return console.log(err);
    }
    // let maxNo = Math.max(...files.map((filename) => parseInt(filename.substr(0, 4))));
    let maxNo = -1;
    if (maxNo < 0) { maxNo = -1; }
    console.log(maxNo);
    while (++maxNo < 1) {
        const newfilename = maxNo.toString().padStart(4, '0') + ".md";
        fs.readFile(`${__dirname}/../src/pages/zh/${newfilename}`, 'utf8', function (err, data) {
            if (err) {
                console.log(`err filename: ${newfilename}`);
                return console.log(err);
            }
            translate
                .translate(data, target)
                .then(results => {
                    const translation = results[0];
                    console.log(`filename: ${newfilename}`);
                    const trans1 = translation.split("\n");
                    const title = `title: '${trans1[1].split(': ')[1]}'`
                    const date = 'date: '+trans1[2].split(': ')[1];
                    trans1.splice(1,2,title, date);
                    // console.log(`Translation:\n${trans1.join('\n')}`);
                    fs.appendFileSync(`${__dirname}/../src/pages/${target}/${newfilename}`, translation);
                })
                .catch(err => {
                    console.error('ERROR:', err);
                    console.log(`err filename: ${newfilename}`);
                    maxNo = null;
                });
        });
    }
});