'use strict';
var gCounter = 1;

var gProj = [
  createProj(
    'library1',
    'the library project',
    ' A small project that show an online library you can upload,read,delete and update the books in the library.',
    'url',
    'Denember 21',
    ' coding basic'
  ),
  createProj(
    'jini',
    'jini',
    'a small jini that can guess whoever you think about ..if he didnt guess you can add the character you thought about and he will learn fron time to time',
    'url',
    'Denember 21',
    ' basic game'
  ),
  createProj(
    'mines-sweeper',
    'mines sweeper',
    'my first project! mines sweeper with endless levels. if you lose all your lifes than you have to start from the first level (3X3) hint and timer inside.',
    ' url',
    'Denember 21',
    ' basic game'
  ),
  createProj(
    'designProject',
    'Design Website Project',
    ' a design practice.ive got a photo of this page and asked to program this page.to do exactly the same px perfect',
    ' url',
    'Denember 21',
    '  basic design'
  ),
  createProj(
    'usersAdmin',
    'Users Admins Project',
    'the first local storage project.a simple website.if you are registerd you can get inside by username and password and if you are an admin you can get inside the admin page try the users name : oded,galia and the passwords: 7644,1234',
    ' url',
    'Denember 21',
    ' basic users site'
  ),
];

function getGproj() {
  return gProj;
}

function createProj(username, title, dec, url, publishedAt, lables) {
  return {
    id: makeId(),
    name: username,
    title: title,
    desc: dec,
    url: url,
    publishedAt: publishedAt,
    lables: lables,
    countId: gCounter++,
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
