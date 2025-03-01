var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');
var template = require('gulp-template-html');

var browserSync = require('browser-sync');
var reload = browserSync.reload;


/*
  Styles Task
*/

gulp.task('styles',function() {
  // move over fonts

  gulp.src('css/fonts/**.*')
    .pipe(gulp.dest('build/css/fonts'))

  gulp.src('css/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream:true}))

  gulp.src('css/ie.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'))
    .pipe(reload({stream:true}))
});

/*
  Images
*/
gulp.task('images',function(){
  return gulp.src('css/images/**')
    .pipe(gulp.dest('./build/images'))
    .pipe(reload({stream:true}))
  // gulp.src('css/images/*/**')
  //   .pipe(gulp.dest('./build/images'))
  //   .pipe(reload({stream:true}))
  // gulp.src('css/images/*/*/**')
  //   .pipe(gulp.dest('./build/images'))
  //   .pipe(reload({stream:true}))
});

gulp.task('videos',function(){
  gulp.src('css/video/**/**')
    .pipe(gulp.dest('./build/videos'))
    .pipe(reload({stream:true}))
});

/*
  HTML
*/
gulp.task('html',function() {
   gulp.src('html/pages/*.html')
     .pipe(template('html/template.html'))


  //gulp.src('html/*.html')
    .pipe(gulp.dest('./build/'))
    .pipe(reload({stream:true}))
  gulp.src('html/*.html')
    .pipe(gulp.dest('./build/'))
    .pipe(reload({stream:true}))
});

/*
  AJAX
*/
gulp.task('ajax', function() {
  gulp.src('ajax/*.php')
    .pipe(gulp.dest('./build/ajax'))
    .pipe(reload({stream:true}))
});

/*
  Browser Sync
*/
gulp.task('browser-sync', function() {
    browserSync({
        // we need to disable clicks and forms for when we test multiple rooms
        server : './build',
        ghostMode: false
    });
});

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
  var props = {
    entries: ['./scripts/' + file],
    debug : true,
    cache: {},
    packageCache: {},
    transform:  [babelify.configure({stage : 0 })]
  };

  // watchify() if watch requested, otherwise run browserify() once 
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest('./build/'))
      // If you also want to uglify it
      // .pipe(buffer())
      // .pipe(uglify())
      // .pipe(rename('app.min.js'))
      // .pipe(gulp.dest('./build'))
      .pipe(reload({stream:true}))
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('main.js', false); // this will run once because we set watch to false
});

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['images','videos', 'styles','scripts','html', 'ajax', 'browser-sync'], function() {
  gulp.watch('css/**/*', ['styles']); // gulp watch for stylus changes
  gulp.watch('html/**/*', ['html']);
  return buildScript('main.js', true); // browserify watch for JS changes
});
