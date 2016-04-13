'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-kmaro:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'Marcel'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'kmaro.txt'
    ]);
  });

  it('writes your name, baby', function () {
    assert.fileContent('kmaro.txt', 'Donne moi ton cœur Marcel, ton corps Marcel');
  });
});
