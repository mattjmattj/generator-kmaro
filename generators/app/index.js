'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your name',
      default: 'Jean-Louis'
    }, function (answers) {
      this.name = answers.name;
      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('kmaro.txt'),
      this.destinationPath('kmaro.txt'),
      {name: this.name}
    );
  }
});
