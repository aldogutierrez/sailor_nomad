var SHA256 = require("crypto-js/sha256");
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "users";

var email = "aldopf27@gmail.com";
var password = "testingpassword123";

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
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
