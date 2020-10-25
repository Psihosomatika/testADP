//Задача первая, про скобки
console.log('Первая задача');
function checkSyntax(string){
    const arr = string.match(/[\{\}\[\]\(\)\>\<]/g);
    const brackets = {
        '}':'{',
        ']':'[',
        ')':'(',
        '>':'<',
    }
    const close = Object.keys(brackets).join('');
    let oops = 0;
    if(arr == null){ 
      //проверка на пустоту массива
       return oops;
    } else {
        while(arr.length > 0){
            arr.some(function(item, i) {
                let previous = 0;
                if(close.indexOf(`${item}`)!=-1){
                    if(i > 0){
                        //если закрывающаяся скобочка стоит первой - сразу понятно, что вложенность не соблюдена
                        previous = i-1;
                        if(arr[previous] == brackets[`${item}`]){
                            arr.splice(previous, 2);
                            return arr;
                        } else {
                            //открывающая скобка не соответствует закрывающей
                            arr.length = 0;
                            oops = 1;
                            return oops;
                        }   
                    }else{
                        oops = 1;
                        arr.length = 0;
                        return oops;
                    }
                } 
            });
        }
        if(oops > 0){
            //что-то пошло не так
            return oops;
        }else{
            //если все скобки уравновешены и сбалансированны
            return oops;
        }
    }
};
console.log(checkSyntax(""));
console.log(checkSyntax("---(++++)----"));
console.log(checkSyntax("before ( middle []) after "));
console.log(checkSyntax(")("));
console.log(checkSyntax("} {"));
console.log(checkSyntax("<(   >)"));
console.log(checkSyntax("(  [  <>  ()  ]  <>  )"));
console.log(checkSyntax("   (      [)"));