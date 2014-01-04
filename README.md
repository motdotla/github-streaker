# github-streaker

![github-streaker](https://raw.github.com/scottmotte/github-streaker/master/github-streaker.png)

Reminds yourself to keep your GitHub streak going (with a friendly email reminder).
Keep your GitHub streak going just like this [Ryan guy](https://ryanseys.com/blog/177-days-of-github/) did.

![github-streaker](https://raw.github.com/scottmotte/github-streaker/master/current-streak.png)

## Installation

### Heroku

```
heroku create
heroku addons:add scheduler
heroku addons:add sendgrid
heroku config:set TO=you@youremail.com
heroku config:set GITHUB_USERNAME=your_github_username
git push heroku master
```

Then go to <https://addons-sso.heroku.com/apps/your_app_name/addons/scheduler:standard> and set the UTC time to the appropriate time you'd like. For example, I want my reminder to check at 6pm Los Angeles time so I set it to 2am UTC.

![scheduler-screenshot](https://raw.github.com/scottmotte/github-streaker/master/scheduler-screenshot.png)

That's it. You can forget this app is even running.

### Click to cloud (beta)

You can optionally install using `click-to-cloud`. Click to cloud is a binary I'm building to make it easier to deploy
small application to cloud Paas like Heroku. I personally, use this approach, but your mileage may vary. 

First, [install click-to-cloud](https://github.com/scottmotte/click-to-cloud#installation) on your machine.

Second, run the following command.

```bash
click-to-cloud --repo https://github.com/scottmotte/github-streaker.git
```

That's it. That will install your application to Heroku.

## Development

```
cp .env.example .env
```

Configure with your credentials.

```
node ./tasks.js
```

