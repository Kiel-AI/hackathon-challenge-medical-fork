# Hackathon challenge

## Instructions to test it locally

##### challenge_name

in server.ts at the line 638 there is `hackathon:challenge:medical`,
the name `medical` can be changed to whatever your challenge name in the database will be.
The part `hackathon:challenge` should stay the same.

### frontend

launch the react app

```
cd frontend
yarn serve
```

it will appear at `http://localhost:3000/`

### redis

install redis command line and add a team

```
npm install -g redis-cli
rdcli -p 6380 -a redis
127.0.0.1:6380>HSET hackathon:teams:challenge_name team_name team_psw
```

here the `challenge_name` should be `medical` or whatever you chose in the first place (see above)
launch the redis docker image

```
cd backend
docker-compose up -d
```

### backend

launch the backend
(if you did not launch the redis image, it will complain that there is no connection at the port 6380)

```
cd backend
yarn watch
```
