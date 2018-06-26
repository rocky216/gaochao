var gulp = require("gulp")
var less = require("gulp-less")
var nodemon = require("gulp-nodemon")
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css');  


gulp.task('less', function(){
  return gulp.src("./Public/less/**/*.less")
          .pipe(less())
          .pipe(minifyCss())
          .pipe(gulp.dest("./Public/css"))

})

gulp.task('browser-sync', function() {
    var files = [
       'Home/views/**/*.ejs',
       'Public/css/**/*.css'
    ];
   browserSync.init({
   	files: files,
    proxy: 'http://localhost:3005',
    port: "5000"
   });
});

gulp.task("watch", function(){
  gulp.watch('./Public/less/**/*.less', ['less'])
})

gulp.task('default', ['watch','browser-sync'])
