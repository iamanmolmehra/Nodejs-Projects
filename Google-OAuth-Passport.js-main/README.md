<h1>Google-OAuth-Passport.js</h1>
<p>I have used to Google developers, Google cloud platform and API console to implement passport.js in creating a Google authentication on my login signup
page in the project.</p>

<h2>Description</h2>
I wanted my project to help the user in signing up directly through his GoogleID, so that it'll save their time. I used passport.js in this process, 
going on their official website i learnt the procedure of the requiring passport.js, we have other applications too for signing up like facebook,
Twitter, github etc, I used Google.
<br></br>
I made three folders, config with a folder model with file user_model in which I have created the Schema for mongodb to pass the data to my collection 
of the database and then we have two file named as keys and passport-setup, where keys is used to specify the client id and client secret and passport-setup 
is the whole setup I made for Google authentication of my user through google, these commands lines can be found on passportjs.org the official websiteo of
passport.js. Then we have routes, where we have two files auth-routes and profile-routes. Auth-routes is made for giving the routing to the user 
authentication and profile-routes is for giving routing to the profile of the user. We have used to ejs templating engine in our views folder where we 
have a file home for home page UI, a file login for the login page UI, and last is the profile page UI, we have made three of them through HTML and CSS and 
connected the files links of user authentication and login through buttons. 
<br></br>
Finally! we have a file app.js which is the base of the project used for connecting and requiring every file for rendering and routing, connecting 
database and at last but not the least giving the port through, storing the port in a env file and requiring it on top.
    
<h2>Depencies</h2>
Install npm package in your project through "npm init -y" and then install these dependencies :
<li>express</li>
<li>mongoose</li>
<li>nodemon</li>
<li>cookie-session</li>
<li>ejs</li>
<li>passport-google-oauth20</li>

<h2>Installation</h2>
To download this project, through the cloning link or you can download the zip file directly.

<h2>Executing Program</h2>
After cloning it from github, run a command on github "npm i" in your file and connect your own database to get the data in your server.
I use linux, ubuntu and run my commands on the terminal.

<h2>Author</h2>
Anmol Mehra<br>
@iamanmolmehra

<h2>License</h2>
<p>This project is licensed under the MIT License - see the LICENSE.md file for details.</p>

<h2>Acknowledgment</h2>
[Here is the link for passport.js](http://www.passportjs.org/)<br>
[Here is the link for Google-OAuth](https://console.cloud.google.com/)<br>
[Here is the link for correctling your errors](https://www.stackoverflow.com)<br>
<br></br>
THANK YOU, HAPPY CODING :)    
