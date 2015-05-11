// dependances
var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// variables
var pjson = require('./package.json');
var basePaths = {
  src: './app/',
  dest: './public/'
};
var paths = {
  html: {
      src: basePaths.src + 'assets/**/*.html',
      dest: basePaths.dest
  },
  styles: {
      src: basePaths.src + 'styles/**/*.scss',
      dest: basePaths.dest + 'css/'
  }
};

// ******************************************
// DELETE TASKS
// ******************************************

gulp.task('clean', function (cb) {
  del([
    // delete everything under public directory
    './public/*',
    // except Git files
    '!./public/.git',
    '!./public/.gitignore'
  ], cb);
});

// ******************************************
// SRC TASKS
// ******************************************

gulp.task('css', function () {
  // keep stream CSS after Sass pre-processing
  gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(reload({stream: true}));
});

gulp.task('html', function() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(reload({stream: true}));
});

// ******************************************
// COPY TASKS
// ******************************************

gulp.task('copy-fonts', [], function() {
  return gulp.src(['./app/assets/css/fonts/**'])
    .pipe(gulp.dest('./public/css/fonts'));
});

// ******************************************
// DEV TASKS
// ******************************************

// Static server
gulp.task('serve', ['build'], function() {
    browserSync({
        server: {
            baseDir: basePaths.dest
        }
    });

    gulp.watch(paths.html.src, ['html']);
    gulp.watch(paths.styles.src, ['css']);
});

// ******************************************
// MASTER TASKS
// ******************************************

gulp.task('build', ['copy-fonts', 'css', 'html']);

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});