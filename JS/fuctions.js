//Ex.1 and Ex.4
function maxNum()
{
    const n = prompt("Please give me some numbers separated by comma ,")
    .split(",").map(Number);
    if(n.length >= 2)
    {
        let max = n[0]>n[1] ? n[0] : n[1];
        for (let i=2; i<n.length; i++) 
        { 
            max = n[i]>max ? n[i] : max;
        }
        document.getElementById("txt6").value = max;
        document.getElementById("txt8").value = max;
    }
    else
    {
        document.getElementById("txt8").value = "Give me more then 1 number"
    }
}
//Ex.2
function sign()
{
    const n = prompt("Please give me some numbers separated by comma ,").split(",");
    let product = 1;
    for (let x of n)
    {
        product *= x;    }
    let res = "not exist";
    if(product !==0)
    {
        res = product>0 ? "+" : "-";
    }
    document.querySelector("#txt7").value = "The sign is " + res;
}
//Ex.3
//according CLRS book
function swap(arr, i, j)
{
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
function partition(arr, low, high)
{
    let pivot = arr[high];
    let i = low - 1;
    for(let j=low; j<high; j++)
    {
        if(arr[j] < pivot)
        {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i+1, high);

    return (i+1);
}
function quickSort(arr, low, high)
{
    if (low < high) 
    {
      let ip = partition(arr, low, high);

      quickSort(arr, low, ip - 1);
      quickSort(arr, ip + 1, high);
    }  
}
function arrSort()
{
    let arr =
        prompt("Please give me some numbers separated by comma ,")
        .split(",").map(Number);

    quickSort(arr, 0, arr.length-1);

    document.querySelector("#txt9").value = arr;
}
//Ex.5
function oddEven()
{
    let range =
    prompt("Please give me 2 nums. for array range separated by comma ,")
    .split(",").map(Number); 
    
    if(range[0] === range[1])
    {
        document.querySelector("#txt10").value = "I need 2 different numbers."; 
        return;
    }
    let min = range[0]<range[1] ? range[0] : range[1];
    let max = min === range[0] ? range[1] : range[0];
    let arr = [];
    let n = min;
    while(n <= max)
    {
        let res = (Boolean(n%2) ? n+" is odd" : n+" is even"); 
        arr.push(res);
        n++;
    }
    document.querySelector("#txt10").value = arr;
}
//Ex.6
function grade()
{
    let ranges =
    prompt("Please rate each student separated by comma ,\n\
           each grade is in range 50-100.\n\
           David, Vinoth, Divya, Ishitha, Thomas ...")
    .split(",").map(Number); 

    let avr = 0;
    ranges.forEach(item => {avr += item});
    avr /= ranges.length;

    const grades = [[60,"F"], [70,"D"], [80,"C"], [90,"B"], [100,"A"]];
    let avrGrade = 0;
    for (let [x, y] of grades)
    {
        if(avr < x)
        {
            avrGrade = y;
            break;
        }
    }
    document.querySelector("#txt11").value = 
    `${avrGrade} is the group grade, ${avr.toPrecision(3)} is the group rate.`;
}
//Ex.7
function fizzBuzz()
{
    let range =
    prompt("Please give me 2 nums. for array range separated by comma ,")
    .split(",").map(Number); 
    
    if(range[0] === range[1])
    {
        document.querySelector("#txt12").value = "I need 2 different numbers."; 
        return;
    }
    let min = range[0]<range[1] ? range[0] : range[1];
    let max = min === range[0] ? range[1] : range[0];
    let arr = [];  
    let n = min;
    while(n <= max)
    {  
        if( ! Boolean(n%15))
        {
            arr.push("FizzBuzz");
            n++;
            continue;
        }
        if( ! Boolean(n%5))
        {
            arr.push("Buzz");
            n++;
            continue;
        }
        if( ! Boolean(n%3))
        {
            arr.push("Fizz");
            n++;
            continue;
        }
        arr.push(n);
        n++;
    }
    document.querySelector("#txt12").value = arr; 
}
//Ex.8
function happyNum()
{    
    let range =
    prompt("Please give me 2 nums. for array range separated by comma ,").split(",")
    .map(Number); 
    
    if(range[0] === range[1])
    {
        document.querySelector("#txt10").value = "I need 2 different numbers."; 
        return;
    }
    let min = range[0]<range[1] ? range[0] : range[1];
    let max = min === range[0] ? range[1] : range[0];

    //Search of happy numbers:
    let happyArr = [];
    let start = min;
    while (start <= max) 
    {
      let num = start; //7;//13;//4;
      let count = 0;      
      do 
      {
        let numArr = num.toString().split("").map(Number);
        num = 0;
        for (let x of numArr) {
          num += x * x;
        }
        count++;
     
        //Just in case:
        if (count > 20) break;

      } while (num !== 1 && num !== Number(start) && num !== 4);

      if (num === 1) happyArr.push(start);

      start++;
    }
    document.querySelector("#txt1").value = happyArr;
}
//Ex.9
function amstrong()
{
    let range =
    prompt("Please give me two 3-digit-nums. for array range separated by comma ,")
    .split(",").map(Number); 
    
    if(range[0] === range[1])
    {
        document.querySelector("#txt10").value = "I need 2 different numbers."; 
        return;
    }
    let min = range[0]<range[1] ? range[0] : range[1];
    let max = min === range[0] ? range[1] : range[0];

    //Search of narcciss numbers:
    let amstrongArr = [];
    let n = min;
    while (n <= max) 
    {
      let numArr = n.toString().split("").map(Number);
      let cubeSum = 0;

      for (let x of numArr) //It maybe any-digit number:
      { 
        cubeSum += x * x * x;
      }
      if (cubeSum === n) amstrongArr.push(cubeSum);

      n++;
    }
    document.querySelector("#txt2").value = amstrongArr;
}
//Ex.10
function stars()
{
    const max = parseInt(prompt("Please give me a max number of stars").toString());
    let stars = "";

    for(var i=max; i>=0; i--)
    {
        stars = "";
        for(var j=max-i; j>0; j--)
        {
            stars = stars + " *";
        }
        console.log(stars);
    }
    document.querySelector("#txt3").value = "The stars are shown on the console"
}
//Ex.11
function EuclideanGCD()
{
    let ab =
    prompt("Please give me 2 nums. to Greatest Common Divisor separated by comma ,")
    .split(",").map(Number);

    let a = Math.max(...ab);
    let b = Math.min(...ab);

    // console.log(`max=${a}, min=${b}`)

    let gcd = (a, b) => {

        if(b === 0){
           return a;
        }
        //recursion:
        return gcd(b, a % b);     
     }
    let res = gcd(a,b);
    document.querySelector("#txt4").value = `The GCD is ${res}.`;
}
//Ex.12
function multiplesSum()
{
    let range =
    prompt("Please give me 2 nums. for array range separated by comma ,").split(",")
    .map(Number); 
    
    if(range[0] === range[1])
    {
        document.querySelector("#txt10").value = "I need 2 different numbers."; 
        return;
    } 
    let max = Math.max(...range);
    let min = Math.min(...range); 

    let n=min;
    let sum = 0;  
    while (n <= max)
    {
        if( ! Boolean(n%15))
        {
            sum += n;
            n++;
            continue;
        }
        if( ! Boolean(n%5))
        {
            sum += n;
            n++;
            continue;
        }
        if( ! Boolean(n%3))
        {
            sum += n;;
            n++;
            continue;
        }
        n++;    
    }
    document.querySelector("#txt5").value = 
    `sum the multiples of 3 and 5 is ${sum}.`
}
//Animation:
let sgn = 1;
setInterval(makeSkew, 3000);
function makeSkew()
{            
    // console.log("sgn: ", sgn);
    document.querySelector("#thDiv").style = 
    'transform: skewX('+sgn*50+'deg); transition: 2s ease;';
    sgn *= -1;
}