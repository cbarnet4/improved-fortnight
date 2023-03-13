$(document).ready(function() {
  // create the login screen HTML
  var loginScreenHTML = `
    <div id="login-screen">
      <h1>Login</h1>
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <button type="submit">Login</button>
      </form>
    </div>
  `;

  // add the login screen to the body of the page
  $('body').append(loginScreenHTML);

  // style the login screen using CSS
  $('#login-screen').css({
    'position': 'fixed',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    'background-color': 'white',
    'padding': '20px',
    'border-radius': '10px',
    'box-shadow': '0px 0px 10px rgba(0,0,0,0.5)',
    'z-index': '9999',
    'text-align': 'center'
  });
  $('#login-screen h1').css({
    'font-size': '36px',
    'margin-top': '0'
  });
  $('#login-screen form').css({
    'display': 'inline-block',
    'text-align': 'left'
  });
  $('#login-screen form label').css({
    'display': 'block',
    'margin-bottom': '5px',
    'font-size': '18px'
  });
  $('#login-screen form input').css({
    'padding': '5px',
    'font-size': '16px',
    'border-radius': '5px',
    'border': '1px solid #ccc',
    'width': '100%'
  });
  $('#login-screen form button').css({
    'padding': '10px',
    'background-color': '#4CAF50',
    'border': 'none',
    'color': 'white',
    'font-size': '18px',
    'border-radius': '5px',
    'cursor': 'pointer'
  });
});
