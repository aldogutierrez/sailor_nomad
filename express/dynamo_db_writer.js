var SHA256 = require("crypto-js/sha256");
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "users";

function signup(email,password){

    var params = {
        TableName: table,
        Key:{
            "email": email
        }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            if(data["Item"]){
                console.log("Account Already Exists")
                return "Account Already Exists"
            } else {
            var params = {
                TableName: table,
                Item:{
                    "email": email,
                    "password": SHA256(password).toString()
                }
            };
            console.log("Adding a new item...");
            docClient.put(params, function(err, data) {
                if (err) {
                    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                    return "Unable to add item. Error JSON:", JSON.stringify(err, null, 2);
                } else {
                    console.log("Added item:", JSON.stringify(data, null, 2));
                    return "Added item:", JSON.stringify(data, null, 2);
                }
            });
            }
        }
    });
        
}

function login(email,password){

    var params = {
        TableName: table,
        Key:{
            "email": email
        }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            if(data["Item"]){
                console.log("Account Already Exists")
                if(data["Item"].password == SHA256(password).toString()){
                    console.log("Valid sign in")
                    return "valid sign in"
                } else {
                    console.log("Wrong password")
                    return "incorrect password"
                }
            } else {
                console.log("No account exists with that email")
                return "No account with that email"
            }
        }
    });
        
}

signup('raza@gmail.com', 'abcabbcabc'); 

exports.signup = signup;
exports.login = login;