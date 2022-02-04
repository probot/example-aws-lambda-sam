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
1. Populate the values in vars.json with the ones specific for your GitHub app. For the `PRIVATE_KEY` replace newlines with `\\n` to make the string value a single line.
1. run `sam build`
1. Run sam local via bash...
```
sam local invoke -d 9999 webhooks -n vars.json -e events/event.json
```
## License

[ISC](LICENSE)
