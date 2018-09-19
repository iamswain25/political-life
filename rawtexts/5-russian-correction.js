const fs = require('fs');
const target = 'ru'
fs.readdir(`${__dirname}/../src/pages/${target}`, (err, files) => {
    // console.log(files[0]);
    if (err) {
        return console.log(err);
    }
    files.forEach((file) => {
        // console.log(file);
        fs.readFile(`${__dirname}/../src/pages/${target}/${file}`, 'utf8', function (err, data) {
            if (err) {
                console.log(`err filename: ${file}`);
                return console.log(err);
            }
            const translation = data
            const trans1 = translation.split("\n");
            const title = `title: '${trans1[1].split(': ')[1]}'`
            const date = 'date: '+trans1[2].split(': ')[1];
            trans1.splice(1,2,title, date);
            const newData = trans1.join('\n')
            console.log(`Translation:\n${newData}`);
            fs.writeFile(`${__dirname}/../src/pages/${target}/${file}`, newData);
        });
        
    })
        
        
});