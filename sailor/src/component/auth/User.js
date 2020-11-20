var User = (function() {
    var user_email = "";
  
    var getEmail = function() {
      return user_email;
    };
  
    var setEmail = function(email) {
      user_email = email;     
    };
  
    return {
      getEmail: getEmail,
      setEmail: setEmail
    }
  
  })();
  
  export default User;