'use strict';
var gCounter = 1;

var gProj = [
  createProj(
    'designProject',
    'Design Website Project',
    ' a design practice.ive got a photo of this page and asked to program this page.to do exactly the same px perfect',
    ' url',
    'Denember 21',
    '  basic design',
    'https://odedkovo.github.io/designProject/'
  ),
  createProj(
    'Meme generator',
    'Build website',
    'In this project u used canvas and some more technologies to build the meme generator. in this app you can edit funny imgs!',
    ' url',
    'Januar 22',
    'Building an app ',
    'https://odedkovo.github.io/memeGenerator/'
  ),
  createProj(
    'Apsus',
    'Build website in React ',
    'In this project ive build an app using react in the first time ! this was aPairing exercise i was incharge of the note app.',
    ' url',
    'Januar 22',
    'Building a React  app ',
    'https://nadavinbar8.github.io/Appsus/#/keep'
  ),
  createProj(
    'Taskflow',
    'Build end to end application ',
    'In this project ive build an end to end  app using React ,Redux, React hooks,Nongo db Heroku Sass and more ...  this was a project that practicing team work and has built in two weeks by me and by another two co workers',
    ' url',
    'Januar 22',
    'Building a React  app ',
    'https://taskflow-nadav-tom-oded.herokuapp.com/'
  ),
];

function getGproj() {
  return gProj;
}

function createProj(username, title, dec, url, publishedAt, lables, link) {
  return {
    id: makeId(),
    name: username,
    title: title,
    desc: dec,
    url: url,
    publishedAt: publishedAt,
    lables: lables,
    countId: gCounter++,
    link: link,
  };
}

function makeId(length = 6) {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var txt = '';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

function getProjById(id) {
  var proj = gProj.find((proj) => proj.id === id);
  return proj;
}
