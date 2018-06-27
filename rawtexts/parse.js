const rawText = `11.txt`;
const readline = require('readline');
const fs = require('fs');
let writeStream = null;
const reg = new RegExp(/(\d+月\d+日)(星期.)/);
let newfilename = null;

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

fs.readdir(`${__dirname}/../src/pages/cn`, (err, files) => {
    let maxNo = Math.max(...files.map((filename) => parseInt(filename.substr(0, 4))));

    const rl = readline.createInterface({
        input: fs.createReadStream(`${__dirname}/${rawText}`)
    });
    rl.on('line', function (line) {
        if (line.match(reg)) {
            maxNo++;
            newfilename = maxNo.toString().padStart(4, '0') + ".md";
            let newline = line.trim().replace(reg, "title: '$1 $2'");

            fs.appendFileSync(`${__dirname}/../src/pages/test/${newfilename}`, `---\n`);
            fs.appendFileSync(`${__dirname}/../src/pages/test/${newfilename}`, `${newline}\n`);
            fs.appendFileSync(`${__dirname}/../src/pages/test/${newfilename}`, `---\n`);
        }
        else {
            fs.appendFileSync(`${__dirname}/../src/pages/test/${newfilename}`, `${line.trim()}\n`);
        }
    });
});
