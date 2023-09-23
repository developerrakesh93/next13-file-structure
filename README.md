In this Module will be covering below points

1. Install npm i next-auth
2. Go to documentation and give create folder catch all [...nextauth] insise API
3. To get value for NEXTAUTH_SECRET type this command in the terminal openssl rand -base64 32
4. Configuring google provider for SSO login , Using OAuth google sign in is done with next-auth
5. When user logsin next-auth creates an authentication session for user by default it represent session using JSON web token (jwt).
6. Accessing session on the client with getServerSession so that in the server side only session will be handled.
