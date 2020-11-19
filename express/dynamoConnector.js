var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-1",
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "users";
var email = 'test@gmail.com'

var params = {
    TableName: table,
    Key:{
        "email": email,
      //  "password": 
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});