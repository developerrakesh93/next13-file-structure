In this Module will be covering below points

1. Middleware
2. Database Adapter
3. General login with username and password and registering the user with bcrypt

   1. Middleware is executed before request is getting completed. If the user is trying to access the route without session, user will be loggedout immediately. Mainly middleware protects the routes which is declared as in the path .
   2. After SSO sign in we need to store data of the signin users thats where database adaptors come in picture.
   3. POST API for registering username and password.
