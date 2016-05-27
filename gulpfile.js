var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('task-name', function(){
  // say gulp, there's a task, and 'task-name' will be the name of it
  console.log("Hello");

  // to see the words hello go into terminal and type in gulp task-name
});


gulp.task('sass', function(){
  return gulp.src('app/scss/main.scss')
    .pipe(sass()) //refering to var sass
    .pipe(gulp.dest('app/css'))
})
