# github-streaker

![github-streaker](https://raw.github.com/scottmotte/github-streaker/master/github-streaker.png)

Reminds yourself not to stop your streak on GitHub (with a friendly email reminder). Keep your GitHub streak going just like this [Ryan guy](https://ryanseys.com/blog/177-days-of-github/) did.

![github-streaker](https://raw.github.com/scottmotte/github-streaker/master/current-streak.png)

## Installation

### Production

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

### Development

```
cp .env.example .env
```

Configure with your credentials.

```
node ./tasks.js
```

