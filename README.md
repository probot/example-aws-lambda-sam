# Probot & AWS Lambda example

This repository is an example of how to deploy the "Hello, World" of probot apps to [AWS Lambda](https://aws.amazon.com/lambda/) using [aws sam](https://aws.amazon.com/serverless/sam/).

## Local setup

Install dependencies

```
npm install
```

Start the server

```
npm start
```

Follow the instructions to register a new GitHub app.

## Deployment
Get the following details about your GitHub app:
- `APP_ID`
- `WEBHOOK_SECRET`
- `PRIVATE_KEY`

1. Setup your aws cli creds
1. set your aws profile by running `export AWS_PROFILE=<profile>`
1. run `sam build`
1. run `sam deploy --guided`

Subsequent deploys to the same stack to the default environment...
1. run `sam build`
1. run `sam deploy`

## Debugging locally
There are two options to debug locally.

### Debug via unit tests
1. Intall nyc and mocha: `npm install -g nyc mocha`
1. From the VSCode `RUN AND DEBUG` menu select `Mocha` and click the green arrow to start debugging.

### Debug by launching probot locally and sending it a payload 

1. Point your GitHub app to your local using something like smee.io
1. Copy .env-sample to .env and populate with values specific for your GitHub app. [See here for more details](https://probot.github.io/docs/configuration/).
1. From the VSCode `RUN AND DEBUG` menu select `Launch Probot` and click the green arrow to start debugging.

## Docker

```sh
# 1. Run npm install
npm install

# 2. Build container
docker build -t my-probot-app .

# 3. Srouce your .env file
export $(cat .env | xargs)

# 3. Start container
docker run \
    -e APP_ID=$APP_ID \
    -e PRIVATE_KEY=$PRIVATE_KEY \
    -e WEBHOOK_SECRET=$WEBHOOK_SECRET \
    my-probot-app
```

## License

[ISC](LICENSE)
