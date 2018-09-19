# Wang huning - Political Life

Texts & Translation of Wanghuning's '94 journals.
(https://iamswain25.github.io/political-life/)

## Text Reference Link

### PDF

http://att.newsmth.net/nForum/att/Book/62318/296

### Website

http://www.chinareform.net/index.php?m=search&c=index&a=init&typeid=1&siteid=1&q=政治的人生

## Framework

Gatsby.js

### github page deploy command

npm run deploy

## Related Article

### Korean

* http://news.joins.com/article/22367559
* http://www.hani.co.kr/arti/international/china/816071.html
* http://www.koreadaily.com/news/read.asp?art_id=2868796


### English

* https://thediplomat.com/2017/11/wang-huning-chinas-antidote-to-strongman-politics/


## Development Journal

### Translation

Use google api, need to have your own setup on google console and have credential json downloaded.
export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"
Paste your own projectId in ./rawtexts/[to-your-language].js and run node on it.

** make sure have relevant folder generated, and it overwrites in defaults.

### 2018.6.24

Found the full text website on Feburary, copied one by one (until 0045.md). When reached March, searched on the site, found the texts with the whole year, thought to myself there is a possibility of automating the (md) file making process. Pausing here.

### 2018.9.18

Added Russian, French, Spanish
