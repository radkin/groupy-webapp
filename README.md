# groupy-webapp
The ReactJS front end to Groupy

### Certified for use with
* Node 10.16.3
* React 16.13.0
* Material-ui 4.9.5
* Apollo Client 2.6.8
* Webpack 4.41.5

![](docs/screenshots/groupy_readme1.png?raw=true)

### Up and running
1. You must have a .env file in the root directory of this repo with the following
fields (Example) populated:

```bash
REACT_APP_PORTNUM='4000'
REACT_APP_GROUPY_GRAPHQL_SERVER='localhost'
REACT_APP_GROUPY_TOKEN='YOUR TOKEN HERE'
REACT_APP_ENV='development'
```
2. The groupy Apollo Server instance must be running to provide API endpoints.
3. For now, the above token must have been obtained via the mobile app or
REST API using a two-step process:

Step 1
```bash
curl -X POST http://localhost:4000/sendVerification/YOUR-PHONE-NUMBER
```
Where localhost and port 4000 are where you are running your instance of the
groupy Apollo Server.

Step 2
```bash
curl -X POST http://localhost:4000/verifyPhone/YOUR-PHONE-NUMBER/MYCODE
```

Please test your code by adding it to the header in the Apollo Server playground
like this:

![](docs/screenshots/groupy_headers.png?raw=true)

You can test the Apollo Server using a getMe query (per the screenshot)
```bash
query getMe {
  me {
    id
    first
    last
    zipCode
    color
    initials
    profileImage   
  }
}
```
##### Author/Maintainer
Noel Miller
radkin@github (not a proper email address)
