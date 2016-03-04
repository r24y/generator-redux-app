/* eslint no-var: 0 */
var yeoman = require('yeoman-generator');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  init: function init() {
    var cb = this.async();

    this.prompt([{
      name: 'moduleName',
      message: 'What do you want to name your app?',
      default: this.appname.replace(/\s/g, '-'),
      filter: function filter(val) {
        return _s.slugify(val);
      },
    }],
    function promptCallback(props) {
      this.moduleName = props.moduleName;
      this.camelModuleName = _s.camelize(props.moduleName);

      this.template('editorconfig', '.editorconfig');
      this.template('gitattributes', '.gitattributes');
      this.template('gitignore', '.gitignore');
      this.template('eslintrc', '.eslintrc');
      this.template('travis.yml', '.travis.yml');
      this.template('index.html');
      this.template('server.js');
      this.template('webpack.config.js');
      this.template('webpack.config.production.js');
      // this.template('LICENSE');
      this.template('CHANGELOG.md');
      // needed so npm doesn't try to use it and fail
      this.template('_package.json', 'package.json');
      this.template('README.md');
      this.template('babelrc', '.babelrc');
      this.directory('src', 'src');
      this.directory('test', 'test');

      cb();
    }.bind(this));
  },
  install: function install() {
    this.installDependencies({ bower: false });
  },
});
