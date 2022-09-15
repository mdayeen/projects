
//decoder//
function Base64() {

    let base64 = document.getElementById("input").value;
    let SplitString = base64.split(""); 
    
    let Base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    
    let regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
  
    if (regex.test(base64)) {
      let value = [];
      for (let i = 0; i < SplitString.length; i++) {
        for (let j = 0; j < Base64.length; j++) {
          if (SplitString[i] == Base64[j]) {
            value.push(Base64.indexOf(Base64[j]));
          }
        }
      }
      
      let binaryCodes = value.map((num) => num.toString(2));
      
      for (let i = 0; i < binaryCodes.length; i++) {
        let n = "0";
        while (binaryCodes[i].length < 6) {
          binaryCodes[i] = n + binaryCodes[i];
        }
      }
      
      let Binaryone = binaryCodes.join("").split("");
      
      let binary8Bit = [];
      while (Binaryone.length != 0) {
        binary8Bit.push(Binaryone.splice(0, 8).join(""));
      }
      
      let BinarytoDecimal = binary8Bit.map((num) => parseInt(num, 2));
      console.log("Decimals:- ", BinarytoDecimal);
      let lastElement = BinarytoDecimal[BinarytoDecimal.length - 1];
      let sum = 0;
      for (let i = 0; i < lastElement; i++) {
        sum += lastElement[i];
      }
      if (sum == 0) {
        BinarytoDecimal.pop();
      }
      let charcters = BinarytoDecimal.map((num) => String.fromCharCode(num));
      
      let final = charcters.join("");
      document.getElementById("output").innerText = final;
    }
     else {
      document.getElementById("output").innerText = "Invalid";
    }
  }


  //encoder
  function encoder(){

    // Step : 1 Accept string Input
    let inputString=document.getElementById("input").value;
    console.log(inputString);

    // Split Characters
    let splitString=inputString.split("")
    console.log("The String is : ",splitString)

    // Get ASCII Decimals
    let ASCIICodes=splitString.map((char)=>char.charCodeAt());
    // let ASCIICodes=splitstring.map(function(char){
        // return char.charCodeAt();
    // })
    console.log("The ASCII Array is : ",ASCIICodes);

    // Converting decimal ASCII to binary
    let binaryCodes=ASCIICodes.map((num)=>num.toString(2));
    console.log("Binary Codes : ",binaryCodes)
    
    let binaryCode8Bit=binaryCodes.map((bin)=>{
        while(bin.length<8){
            bin="0"+bin
        }
        return bin;
    })
    console.log("Binaries of 8 bits are : ",binaryCode8Bit)

    let oneBinary=binaryCode8Bit.join("").split("")
    console.log(oneBinary)

    // Spliting in 6 bits
    let binaryCode6Bit=[]
    while(oneBinary.length!=0){
        binaryCode6Bit.push(oneBinary.splice(0,6).join(""))
    }
    console.log("Binaries of 6 Bits are : ",binaryCode6Bit)

    // Padding and add =
    let lastElement=binaryCode6Bit[binaryCode6Bit.length - 1]
    if(lastElement.length!=6){
        var counter = 0
        while(lastElement.length<6){
            lastElement = lastElement+"0"
            counter++
        }
        binaryCode6Bit[binaryCode6Bit.length-1]=lastElement
    }
    console.log("Binaries of 6 bits are : ",binaryCode6Bit)

    let bintodecimal=binaryCode6Bit.map((str)=>parseInt(str,2))
    console.log("Base 64 Decimal : ",bintodecimal)

    let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    // Decimal to Base 64:-
    let base64final=bintodecimal.map((dec)=>base64[dec])
    console.log("Base 64 String : ",base64final)
    if(counter==2){
        base64final.push("=")
    }else if(counter==4){
        base64final.push("==")
    }

    let finalBase64String=base64final.join("")
    let abc = document.getElementById("output");
    abc.innerText = finalBase64String;
    console.log("Your Base 64 output is : ",finalBase64String)
}


