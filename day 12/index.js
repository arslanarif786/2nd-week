        var a = 1, b = 2;
        sum = a + b ;
        document.getElementById("demo").innerHTML = sum;

        var p=" ahmad";
        document.getElementById("demo2").innerHTML = "2nd javascript element" + " ahmad" + p;

        id = 1;
        var name = 'arslan';
        document.getElementById("demo3").innerHTML = "Show id number and name: " + id + " " + name;

        var a = 5, b = 10;
        var c = "I am Arslan";
        document.getElementById("demo4").innerHTML = "after adding: " + id + " " + name;

        a = a + b;
        b = b + 7;
        c ="Arif";
        sum = a + b + 14;
        document.getElementById("demo5").innerHTML = "Sum of Numbers and Name: " + a + " " + b + " "  + c + " " + sum;

        //case sensitive in variables
        var study, proper;
        study = 10;
        proper = "A string";
        document.getElementById("demo6").innerHTML = "Case sensitive in varibales: " + study + " " + proper;
        
        var fname = "Arslan";
        var lname = "Arif";
        document.getElementById("demo7").innerHTML = "My name is " + fname + " " + lname;

           //functions declaration and definition
        function wordBank(noun,adj,verb)
        {
            let result = "";
            result = "the " + adj + " " + noun + " " + verb;
            return result;
        }
        //function call
        document.getElementById("demo8").innerHTML = wordBank("dog", "black", "ran");
        

        //array
        var array = [ 2, 3, 8 ];
        //assign new element to an index in array
        array [0] = 10;
        document.getElementById("demo9").innerHTML = "assign new element to specific index in array: " + array;

        var array2 = [ 4, 8, 12 ];
        //pop removes last element
        var removefromArray = array2.pop();
        document.getElementById("demo10").innerHTML =  "pop_ removes last element: " + array2;

        // multi dimensional array... element access
        var array2D = [ [1,2,3], [ 4,5,6], [ 7,8,9], [ 10,11,12],  [13,14]]; 
        var myData = array2D [3][1];
        document.getElementById("demo11").innerHTML =  "multi dimensional array... element access: " + myData;

         //shift removes 1st element
        var array3 = [ ["john",1], ["paul",2], ["killer",3], ["clark",4] ];
        var removefromArray3 = array3.shift();    //array3.pop();
        document.getElementById("demo12").innerHTML =  " shift removes 1st element: " + array3;

        //unshift is used to place an element on the 1st index of the array
        array3.unshift(["ahem",1]);
        document.getElementById("demo13").innerHTML =  "unshift is used to place an element on the 1st index of the array: " + array3;

         //push is used to place an element on the last index of the array
        array3.push(["afeer",5]);
        document.getElementById("demo14").innerHTML =  "push is used to place an element on the last index of the array: " + array3;

   
        function myfunc(a,b)
         {
             let r = 0;
             r = a-b;
             return r;
        }
        document.getElementById("demo15").innerHTML =  "Minus two numbers with paramerterized function: " + myfunc(5,2);

        //global scope
        var outwear = "T-shirt";

        //local variabe scope
        function myoutfit() {
            var outwear = "sweater";
             return outwear;
        }
        document.getElementById("demo16").innerHTML =  "Output of a function (variable) whereas its variable scope is local: " + myoutfit();

        //global scope
        document.getElementById("demo17").innerHTML =  "Output from a function whereas its variable scope is global in function: " + outwear;

        //maths
        function change(num) {
            return (num+5)/5;
        }
        document.getElementById("demo18").innerHTML =  "direct return  sum and division from a function: " + change(20);

        //Check equal operators
         function testEqual(val) {
             if(val === 10) {
            return "equal"; }
            return "not equal";
        }
        document.getElementById("demo19").innerHTML =  "Check equal operators : " + testEqual(10);

        //Check equal operators
         function testinEquality(val) {
             if(val !== 10) {
            return "not equal"; }
            return "equal";
        }
        document.getElementById("demo20").innerHTML =  "Check inequal operators : " + testinEquality(5);


        //Check equal operators
         function testGreater(val) {
             if(val >= 100) {
            return "above or equal to 100"; }
             if(val >= 10) {
            return "above or equal to 10"; }
            else {
           return "less then 10";}
        }
        document.getElementById("demo21").innerHTML =  "Check greater operators : " + testGreater(1000);

         function testLess(val) {
             if(val <= 50) {
            return "less than or equal to 50"; }
            if(val <= 100) {
            return "less than or equal to 100"; }
            else {
           return "range not defined in the described function";}
        }
        document.getElementById("demo22").innerHTML =  "Check Less operators : " + testLess(40);


        function textLogicalAND(val) {
             
            if(val >= 90 && val <=100) {
                return "A grade"; }
            else if (val >= 80 && val <=89) {
                return "B grade"; }
            else if (val >= 70 && val <=79) {
                return "C grade"; }
            else  {
                return "D grade"; }
        }
        document.getElementById("demo23").innerHTML =  "Logical Operators checking : " + textLogicalAND(85);

        function chaintoIfElse(val) {
            let info = "";
            if(val === "bob") {
            info = "Marley"; }
            else if(val === 42) {
            info = "Clark"; }
            else if(val === 99) {
            info = "Sepii"; }
            else if(val === 7) {
            info = "Maldale"; }
            else {
            info = "Not defined"; }
            
            return info;
        }
        document.getElementById("demo24").innerHTML =  "if-else statement : " + chaintoIfElse(7);

        function chaintoSwitch(val) {
            let info = "";
            switch (val) {
                case "bob":
                    info = "Marley";
                    break;
            
                case 42:
                    info = "Clark";
                    break;

                case 99:
                    info = "Sepii"; 
                    break;

                case 7:
                    info = "Maldale"; 
                    break;

                default:
                    info = "not defined >> default case run";
                    break;
            }            
            return info;
        }
        document.getElementById("demo25").innerHTML =  "Switch statement : " + chaintoSwitch(10);

        //my JS first function using button
        function myJSfirstfunc() {
            document.getElementById('demo26').style.fontSize='30px';
        }
        
        //my date function called in the innerHTML from the function
        function Datte() {
            document.getElementById('demo27').innerHTML = Date();  
        }

        //with one button, two ids can be accessed in a function
        function myFunc() {
            document.getElementById("demo28").innerHTML = "Hello Dolly!";
            document.getElementById("demo29").innerHTML = "How are you?";
        }
        
        //globaly declare some functions
                                //It's a good programming practice to declare all variables at the beginning of a script.   //use <br> tag
        var num = 1;
        var person = "Arslan", answer = 'How are you!';
        document.getElementById("demo30").innerHTML = num + "<br>" + person + "<br>" + answer;

        //direct declare, assign, sum
        var x = 5 + 2 + 3;
        document.getElementById("demo31").innerHTML = x;

        //make it a  string
        var x = '5' + 2 + 3;        // '5' or "5"  both are same
        document.getElementById("demo32").innerHTML = x;

        //first two numbers are added, but last one i.e. "8" will become a string
        var x = 2 + 2 + "8";
        document.getElementById("demo33").innerHTML = x;




        // Create an Array:         //datatype let can also be used here 
        const cars = ["Saab", "Volvo", "BMW"];
        // Change an element:
        cars[0] = "Toyota";
        // Add an element in the last of the Array:
        cars.push("Audi");

        // Display the ARRAY:
        document.getElementById("demo34").innerHTML = cars; 


        // Create an OBJECT:        //datatype let can also be used here
        const car = {type:"Fiat", model:"2018", color:"white"};
        // Change a property:
        car.color = "red";
        // Add a property:
        car.owner = "Johnson";
        // Display the properties:
        document.getElementById("demo35").innerHTML = "Car owner is " + car.owner + "<br>" + " its color is " + car.color
                                                        + "<br>" + " its model is " + car.model +  "<br>" + " its type is " + car.type; 
        

                // Redeclaring an existing var or let variable to const, in the same scope, is not allowed:
        // var x = 2;     // Allowed
        // const x = 2;   // Not allowed

        // {
        // let x = 2;     // Allowed
        // const x = 2;   // Not allowed
        // }
        // {
        // const x = 2;   // Allowed
        // const x = 2;   // Not allowed
        // }


        // exponent x**2
        let y = 5;
        document.getElementById("demo36").innerHTML = y ** 2;

        // same result as above, exponent x**2
        let t = 5;
        document.getElementById("demo37").innerHTML = Math.pow(t,2);
        
        // typeof operator to find the type of a JavaScript variable
        document.getElementById("demo38").innerHTML = 
        typeof "" + "<br>" +
        typeof "John" + "<br>" + 
        typeof 'John Doe' + "<br>" +
        typeof 50;  

        // a variable without a value, has the value 'undefined'. The type is also 'undefined'.
        let carr;
        document.getElementById("demo39").innerHTML =
        carr + "<br>" + typeof carr;


        // Create an object:
        const person2 = {
        firstName: "John",
        lastName : "Doe",
        id     :  5566,
        fullName: function() {          //method is a property 
            return this.firstName + " " + this.lastName;
            }
        };
        // Display some data from the object:
                         //You can access object properties in two ways:
        document.getElementById("demo40").innerHTML = person2["firstName"] + " " + person2["lastName"] + " " + person2.id + " <br> " + person2.fullName();
                                                                                                    // this keyword refers to the "owner" of the function.

        function a1() {
            document.getElementById('demo41').innerHTML=Date();
        }
        
        // find the length of a string, use the built-in length property
        let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        document.getElementById("demo42").innerHTML = text.length;

        // The sequence \"  inserts a double quote in a string
        let text2 = "We are the so-called \"Vikings\" from the north.";
        document.getElementById("demo43").innerHTML = text2; 

        // not used this method now a days              //object is created here
        let q = "John";        // q is a string
        let w = new String("John");  // w is an object 
        document.getElementById("demo44").innerHTML =
        typeof q + "<br>" + typeof w;

        // slice() extracts a part of a string and returns the extracted part in a new string.
        let newstr = "Apple, Banana, Kiwi";
        document.getElementById("demo45").innerHTML = newstr.slice(7,13); 
                                                     //str.slice(7);    // Returns Banana,Kiwi


        // The replace() method replaces a specified value with another value in a string
                // The replace() method returns a new string.
                        // By default, the replace() method replaces only the first match
        function myFunction3() {
            let text = document.getElementById("demo46").innerHTML; 
            document.getElementById("demo46").innerHTML =
            text.replace(/MICROSOFT/i,"W3Schools");         // To replace case insensitive, use a regular expression with an /i flag (insensitive)
        }                                                   // Note:     Regular expressions are written without quotes

        // concat() joins two or more strings    >> it is used instead of the plus operator
        let text11 = "Hello";
        let text22 = "World!";
        let text33 = text11.concat(" ",text22);                    // text = "Hello".concat(" ", "World!");        ||    //same
        test = "Hello" + " " + "World!";
        document.getElementById("demo47").innerHTML = test;
        document.getElementById("demo48").innerHTML = text33;

        // the charAt() method returns the character at a specified index (position) in a string
        var tex = "HELLO WORLD";
        document.getElementById("demo49").innerHTML = tex.charAt(0);             // Returns H
        document.getElementById("demo50").innerHTML = tex[0];                      // Returns H

              





