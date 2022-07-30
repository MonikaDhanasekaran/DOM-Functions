//Create a html form which consits of following details
//1.firstname
//2.lastname
//3.email
//4.phonenumber
//collect the above mention details and print it in console...
var firstname=labelcreation("label","for","fname","FirstName");
var b1=linebreak("br");
var inputfirstname=inputfield("input","type","text","id","fname");
var b2=linebreak("br");
var lastname=labelcreation("label","for","lname","LastName");
var b3=linebreak("br");
var inputlastname=inputfield("input","type","text","id","lname");
var b4=linebreak("br");
var email=labelcreation("label","for","email","Email");
var b5=linebreak("br");
var inputemail=inputfield("input","type","email","id","email");
var b6=linebreak("br");
var passwrd=labelcreation("label","for","pass","Password");
var b7=linebreak("br")
var inputpasswrd=inputfield("input","type","password","id","pass");
var b8=linebreak("br");
var button=labelcreation("button","type","button","Submit");
document.body.append(firstname,b1,inputfirstname,b2,lastname,b3,inputlastname,b4,email,b5,inputemail,b6,passwrd,b7,inputpasswrd,b8,button);

function labelcreation(tagname,attrname,attrvalue,content){
    
    var lbl=document.createElement(tagname);
    lbl.setAttribute(attrname,attrvalue);
    lbl.innerHTML=content;
    return lbl;

}

function inputfield(tagname,attrname1,attrvalue1,attrname2,attrvalue2){
var i =document.createElement(tagname);
i.setAttribute(attrname1,attrvalue1);
i.setAttribute(attrname2,attrvalue2);
return i;
}

function linebreak(breaker){
    var lb1=document.createElement(breaker);
    return lb1;
}