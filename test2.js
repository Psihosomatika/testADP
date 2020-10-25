//Задача 2. Парсер
console.log('Парсер. Задача 2');
function parseUrl(string){
    //можно, конечно делать так. Это я показываю, что умею пользоваться регулярками =) 
   /* const obj = {};
    obj.protocol = string.match(/(http|ftp|https)\:/g).join();
    obj.hash = string.match(/#.+/g).join();*/

    //Но эффективнее будет так: 
    const result = {};
    const obj = new URL(`${string}`);
    for (let property in obj){
        result[property] = obj[property];
    }
    result.href = `${result.origin}`+`${result.pathname}`;
    let hostString = obj.host;
    const indexPoint = hostString.indexOf('.');
    result.host = hostString.substr(`${indexPoint+1}`);
    return result;
}

const a = parseUrl(`https://www.admitad.com:8080/ru/webmaster/websites/111111/?a=1&b[]=a&b[]=b#foo`);
console.log(a.href);
console.log(a.hash);
console.log(a.port);
console.log(a.host);//"admitad.com:8080" такой хост - неккоректен, т.к. субдомен www 
                    //является частью адреса этого host'a. www.adres.com и adres.com могут ссылаться на 
                    //разные IP адреса;
console.log(a.protocol);
console.log(a.hostname);
console.log(a.pathname);
console.log(a.origin);