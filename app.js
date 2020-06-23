//Chapter #21-25
//var firstName =prompt("Enter your first name");
//var lastName =prompt("Enter your last name");
//var fullname =firstName + lastName;
//alert(fullname);




 //var favPhone = prompt("Enter your favourite phone");
 //var phoneModel = favPhone.length;
//alert(phoneModel);
//document.write("My favourite Phone is" + ":"  + " " + favPhone  +"Length" + " " +"of" + "String" + ":" + phoneModel);


//var text ="Pakistani";
//var indexNum =text.indexOf('n');
//console.log(indexNum);
//document.write("index of" +  " " + "n" + ":" + indexNum);


//var text ="Hello World";
//var indexNum =text.lastIndexOf('l');
//console.log(indexNum);
//document.write("index of" +  " " + "l" + ":" + indexNum);

//var text ="Pakistani";
//var indexNum =text.charAt(3);
//console.log(indexNum);
//document.write("index of" +  " " + "3" + ":" + indexNum);




//var city1 = "Hyderabad";
//var cityName = city1.replace("Hyder","Islam")
//console.log(cityName)
//document.write("city" + ":" + city1 + "After replacement" + ":" + cityName)


//var msg ="Ali and Sami are best friends. They play cricket and football together.";
//var replacedMsg = msg.replace(/and/g,"&");
//document.write(replacedMsg);


//var value = "472";
//console.log(value.toString());
//document.write(value);
//document.write("Types" +":" + "String"+ "Value" +":" + "472" + "Type" + ":" + "Number");


//var text = prompt("Enter users input");
//var  text2= text.toUpperCase();
//document.write(text2);

//var input = prompt("Enter input");
//var input2 = input.replace("j","J")
//var input3 = input2.toLowerCase();
//document.write(input2);

//var num = "35.36";
//console.log(num.toString());
//var num2 = num.replace("." , "");
//document.write(num2);


//var userName = prompt("Enter your username")
//var arr = ['@','!','.',',']
//for (var i=0; i<arr.length; i++){
  // if (arr[i] === userName){
   //    alert("Please enter a valid user name")
//} else{alert('valid user name')}
//}

//var userName = prompt("Welcome to ABC bakery.What do you want Sir/madam?")

//var firstWord = userName.slice(0,1);
//firstWord= firstWord.toUpperCase()
//var secondWord = userName.slice(1);
//secondWord = secondWord.toLowerCase()


//var userName = firstWord + secondWord;
//console.log(userName)
//var arr = ['cake','apple pie' ,'cookie','chips' , 'patties']
//for (var i=0; i<arr.length; i++){
  // if (arr[i]=== userName)
//{alert(userName );
      
//} else{alert('Not available')}
//break;
//}

//var name = prompt("user input")
//document.write("Last Character of input" +" " + name.slice(-1))




//var uni = "University of Karachi";
//for (var i=0 ;i<=uni.length; uni=i++)
//document.write(uni + " " + "<br>")



//var text = "The quick brown fox jumps over the lazy dog"
//var txt2 = text.split("the").length;
//document.write(text + "<br>" + "There are" + " " + txt2 + " " + "occurance of word the")

//Chapter#26-30

//var num = "3.45214";
//var num2 =Math.round(num);
//var num3 = Math.floor(num);
//var num4 = Math.ceil(num);
//document.write("number" + " " + num + "<br>" +"Round off" + " " + ":" + num2 +"<br>" + "Floor value" + " " + num3 +"<br>"+ "ceil value" + " " + ":" + num4)

//var floatingNegativepoint = "-2.673";
 //var num = Number(floatingNegativepoint);
 //var num1 = Math.round(num);
 //var num2 = Math.floor(num);
 //var num3 = Math.ceil(num);
//document.write("number" + " " + num + "<br>" +"Round off" + " " + ":" + num1 +"<br>" + "Floor value" + " " + num2 +"<br>"+ "ceil value" + " " + num3)


//var num =Math.abs(-4);
//var num1 = Math.abs(5);
//document.write("The absolute value of -4 is"+" " + num + "<br>" + "The absolute value of 5 is" +" "+ num1)

//var diceRoll = Math.floor( Math.random() * 6) +1 ;
//document.write("Random dice value" + " " + diceRoll);

//var toss = Math.floor( Math.random() * 2) ;
//if (toss === 0){
   //document.write(toss + " <br>" + "random coin value heads")
//}else{
  // document.write(toss + "<br>" + "random coin value tails" )
//}

//var randomNum = Math.floor( Math.random() * 100) ;
//document.write("Random number between 1 and 100" + " " +":" + randomNum);

//var user =prompt("input");
//var user =prompt("Enter your weight in kilograms");
//var arr =parseInt("50", "50kgs","50.2kgs", "50.2kilograms" )
//console.log(user)

//var user =prompt("Enter your value 1-10")
//var randomNum = Math.floor( Math.random(user) * 10) ;
//if(randomNum === 0){ 
 //document.write("Congratualtion")
//}else {
  // document.write("Try Again!")
//}


//chapter 31 to 34
//var date = new Date()
//document.write(date)


 //var dayNames = ["Janurary", "Feburary", "March", "April", "May", "June", "July" , "August" , "September" , "October" , "November" , "December"];
 //var now = new Date();
 //var theDay = now.getMonth();
//var nameOfMonth = dayNames[theDay];
//document.write("Current month" +" "+ ":" + nameOfMonth);

//var date = new Date()
//var b = date.toString();
//var c = b.slice(0,3);
//document.write("Today is " + c);

//var date = new Date();
//var day = date.getDay();
//if(day >5 ){ 
//document.write("Its Funday")
//}else(day >0)
//document.write(day)
//}
//var a = new Date();
//var b = a.getDay();
//if (b > 15){
  //document.write("First fifteen days of the month.")
//}else {
//document.write("Last days of the month.")
//}


//var date = new Date();
//var user =  new Date(prompt ("Enter your value", "Jan 1,1970"));
//var b =user.getTime();
//var time = date.getTime();
//var diff = time - b;
//var accuage = Math.floor (diff/(1000*60*60));
//console.log(accuage)

//var a = new Date();
//var currentTime = a.getTime();
//if (currentTime < 12){
  //document.write("Its AM")
//}else {
  //document.write("Its PM")
//}


//var a = new Date(2020, 12, 0)
 //document.write("Later Date" + " : " + a);

 //var date = new Date();
//date.setDate(date.getDate() - 59);
//var finalDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();
//document.write("60 days have passed since 1st Ramadan" + finalDate);
//var today = new Date();
//var doomsday = new Date("Jan 1 ,2020");
//var msToday = today.getTime();
//var msDoomsday = doomsday.getTime();
//var msDiff =today - doomsday;
//var dDiff = msDiff / (1000)
//document.write(doomsday + "<br>" +dDiff + "seconds had passed since beginning of 2020")

//var date = new Date();
//var time = date.getTime();
//var hr = date.getHours();
//document.write("Current date" + hr)
//var reset = date.setHours(15);
//document.write("1 hr ago" + "," + date)

//var date = new Date();
//var cm = date.getMonth();
//var years = cm.getFullYear();
//console.log(year)
//var reset = date.setFullYear(99);


//var dob =  new Date(prompt ("Enter your value", "Jan 1,1970"));
//var dobmilli =dob.getTime();
//var year = dob.getFullYear();
//var today = new Date();
//var todaymilli = today.getTime();
//var diff = todaymilli - dobmilli;
//var accuage = Math.floor (diff/(1000*60*60*24*30*12));
//document.write("Your age is" + " " + accuage + "<br>" + "Your Birth Year is" + " " + year)

//var customerName = "ABC Customer";
//var month = "Feburary";
//var noOfUnits = "410";
//var chargesOfUnits = "16";
//var amount = noOfUnits * chargesOfUnits
//console.log(amount) 
//var latePay = "350"
//var aftrDue = amount + 350 ;
//console.log(aftrDue)
//document.write("K-Electric Bill" + "<br>" + "Customer Name" + customerName +"<br>"+ "Month" + ":" + " " +month + "<br>" + "No Of Units "+ " " + " : " +noOfUnits+"<br>" +"Charges per Units" + " " + ":" + chargesOfUnits +"<br>" +"Net Amount Payable Within Due Date" + " " + ":" + amount +"<br>" + "Late Payment Surcharge " + " " + ": " + latePay+ "<br>" + "Gross Amount Payable After Due Date" + " " + " :" +aftrDue)

//chapter #35 to 38
//var date = new Date()
//console.log(date)
//function cd(){
  //document.write(date);
//}
//cd();

//var firstName = prompt("Enter your first name");
  //var lastName = prompt("Enter your last name");
 //var fullName = firstName + lastName;
//function greet(){
  // alert("Hello" + firstName + lastName)
  
//}
//greet();

//var a = prompt("Enter your first value");
//var b = prompt("Enter your second value");
//function add(a,b){
       
  ///document.write(a + b);

//}
//add(a,b);

// function calc(num1,oprtr,num2){
  // if (oprtr === "+"){
    //    return num1 + num2
   //}
   //else if( oprtr === "-"){
     //return num1 - num2
   //}
   //else if ( oprtr === "*"){
     //return num1 * num2
   //}
 //else {
   //return "Incorrect Operator"
 //}  
//}
//var result = calc(5, "-", 5);
//var result1= calc(4,"+",5);
//var result2 = calc(3,"*" ,5);

//document.write(result + "<br>" + result1 + "<br>" + result2)

//function calcHypotenus(base,  per) {
  //return Math.sqrt(base*base  + per*per) ;
//}
//var result = calcHypotenus(4,"+", 6)
//console.log(result)