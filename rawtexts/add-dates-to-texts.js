const fs = require('fs');
const reg = new RegExp(/.?(\d{1,2}).\s(\d{1,2}).+/g);
fs.readdir(`${__dirname}/../src/pages/ko`, (err, files) => {
    // console.log(files);
    // return 0;
    files.forEach((file) => {
        console.log(file);
        const indexfile = parseInt(file);
        if (indexfile > 0) {
            fs.readFile(`${__dirname}/../src/pages/ko/${file}`, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                // console.log(data.split("\n")[1]);
                const date = "date: '" + data.split("\n")[1].split(":")[1].replace(reg, "1994-$1-$2") + "'";
                const arrayString = data.split("\n");
                arrayString.splice(2, 1, date);
                // arrayString.pop();
                const newstuff = arrayString.join("\n")
                console.log(newstuff);
                fs.writeFile(`${__dirname}/../src/pages/ko/${file}`, newstuff, 'utf8', function (err) {
                    if (err) return console.log(err);
                    console.log(file);
                });
            });
        }
    });
});