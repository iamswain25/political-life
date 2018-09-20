const fs = require('fs');
const Translate = require('@google-cloud/translate');
const projectId = 'political-life';
const target = 'en';


// Instantiates a client
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

fs.readdir(`${__dirname}/../src/pages/en`, (err, files) => {
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
                console.log(`err filename: ${newfilename}`);
                return console.log(err);
            }
            translate
                .translate(data, target)
                .then(results => {
                    const translation = results[0];
                    console.log(`filename: ${newfilename}`);
                    // console.log(`Translation: ${translation}`);
                    fs.appendFileSync(`${__dirname}/../src/pages/en/${newfilename}`, translation);
                })
                .catch(err => {
                    console.error('ERROR:', err);
                    console.log(`err filename: ${newfilename}`);
                    maxNo = null;
                });
        });
    }
});