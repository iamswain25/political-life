const fs = require('fs');
fs.readdir(`${__dirname}/../src/pages/cn`, (err, files) => {
    // console.log(files);
    files.forEach((file)=> {
        if(file == '0046.md') {
            fs.readFile(`${__dirname}/../src/pages/cn/${file}`, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                const newdata = data.replace("---\r\n\r\n", "---\n");
                // const newdata = data.replace("---\n\n", "---\n");
                fs.appendFileSync(`${__dirname}/../src/pages/cn/${file}`, newdata);
            });
        }
    });
});

// fs.readFile(`${__dirname}/../src/pages/cn/0046.md`, 'utf8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
//     const newdata = data.replace("---\r\n\r\n", "---\n");

//     fs.appendFileSync(`${__dirname}/test/0046.md`, newdata);
// });