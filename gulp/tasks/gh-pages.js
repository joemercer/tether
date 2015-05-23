var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var config = require('../config.js').ghPages;

gulp.task('deploy', function() {
  return gulp.src(config.src)
    .pipe(ghPages());
});
