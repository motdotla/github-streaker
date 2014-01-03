#!/usr/bin/env node

var dotenv  = require('dotenv');
dotenv.load();

var GITHUB_USERNAME   = process.env.GITHUB_USERNAME;
var SENDGRID_USERNAME = process.env.SENDGRID_USERNAME;
var SENDGRID_PASSWORD = process.env.SENDGRID_PASSWORD;
var TO                = process.env.TO;
var FROM              = process.env.FROM || TO;

var request   = require('request');
var sendgrid  = require('sendgrid')(SENDGRID_USERNAME, SENDGRID_PASSWORD);

var url = "https://github.com/users/"+GITHUB_USERNAME+"/contributions_calendar_data";

function commit_count(commit) {
  return commit[1];
}

function warnOfImpendingStreakDoom() {
  sendgrid.send({
    to:       TO,
    from:     FROM,
    subject:  "[github-streaker] Don't break the streak.",
    text:     'Your GitHub streak is about to break. Go and make a commit quick!'
  }, function(err, json) {
    if (err) { return console.error(err); }
    console.log(json);
  });
}

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var json = JSON.parse(body); 
    // I think I'm going to have to do something here with timezones here. Maybe GitHub handles this already though based on user.
    var most_recent         = json[json.length-1];
    var second_most_recent  = json[json.length-2];

    var count = commit_count(most_recent);
    if (count <= 0) {
      warnOfImpendingStreakDoom();
    } else {
      console.log(count + " commit(s) today");
    } 
  }
});

