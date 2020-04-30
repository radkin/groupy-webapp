# groupy-webapp
The ReactJS front end to Groupy

### Certified for use with
* Node 10.16.3
* React 16.13.0
* Material-ui 4.9.5
* Apollo Client 2.6.8
* Webpack 4.41.5

![](docs/screenshots/groupy_readme1.png?raw=true)

### Setting up your Developer environment

**Step 1** - install nodeJS
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm install v10.16.3
```
**Step 2** - install git

* Ubuntu - `sudo apt-get install github`
* MacOS - `brew install git`
* RedHat/CentOS - `yum install git`

### Up and running
1. You must have a .env file in the root directory of this repo with the following
fields (Example) populated:

```bash
REACT_APP_PORTNUM='4000'
REACT_APP_GROUPY_GRAPHQL_SERVER='localhost'
REACT_APP_GROUPY_TOKEN='YOUR TOKEN HERE'
REACT_APP_ENV='development'
```

Note: Remaining instructions assume your graphQL server is localhost. If this is not
the case please substitute the "localhost" values for the server DNS name or
IP, IE. REACT_APP_GROUPY_GRAPHQL_SERVER value.

2. The groupy Apollo Server instance must be running to provide API endpoints.
3. For now, the above token must have been obtained via the mobile app or
REST API using a two-step process:

**Step 1** - verification
```bash
curl -X POST http://localhost:4000/sendVerification/YOUR-PHONE-NUMBER
```
Where localhost and port 4000 are where you are running your instance of the
groupy Apollo Server.

**Step 2** - gather your token
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

**Step 3** - start groupy-webapp

Pre-req "setting up developer environment" `node ./scripts/start.js` .You should now see the groupy-webapp at this url
`http://localhost:4000`

### Production
simply run these commands:
```bash
NODE_ENV=production npm run build`
serve -s build
```
If you do not have "serve" installed IE. seeing this on Ubuntu
```bash
Command 'serve' not found, but can be installed with:
sudo snap install serve
```
then `npm -g install serve`
and take a look at `http://localhost:5000`

##### Author/Maintainer
Noel Miller

github.com/radkin
