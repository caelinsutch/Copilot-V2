const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('default', ['browserSync', 'sass', 'bootstrap', 'pretty-checkboxes', 'js']);
//compile SASS files into CSS files
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('bootstrap', function(){
  return gulp.src(['./bootstrap.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
})

gulp.task('pretty-checkboxes', function(){
  return gulp.src(['./prettycheckboxes.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
})

gulp.task('js', function(){
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  })
})

gulp.task('watch', ['browserSync', 'sass:watch', 'bootstrap', 'pretty-checkboxes', 'js'], function (){
  gulp.watch('src/scss/**/*.scss', ['sass']);
})
