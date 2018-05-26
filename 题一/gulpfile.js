const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const Proxy = require('gulp-connect-proxy');
const connect = require('gulp-connect');
// const proxy = require('http-proxy-middleware');


const concat = require("gulp-concat");
const uglify = require('gulp-uglify');
const sass = require("gulp-sass-china");

// ./   当前路径;
// **/* 无论层级无论任何内容;
//css的预编译器; => SASS;
//监听目录下的所有scss文件并建立对应的css文件
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/style'))
      .pipe(connect.reload())
});
//监听目录下的所有html文件并在dist下建立相应的文件
gulp.task("html",function(){
    return gulp.src("./html/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload())
});
//监听目录下的所有js文件并在dist下建立相应的文件
gulp.task('javasrcipt',function () {
    return gulp.src('./js/lib/**/*.js')
        .pipe(gulp.dest("./dist/js/lib"))
        .pipe(connect.reload())
})
// gulp.task('javasrciptJs',function () {
//     return gulp.src('./src/js/*.js')
//         .pipe(gulp.dest("./dist/src/js"))
//         .pipe(connect.reload())
// })
//gulp服务器
gulp.task('connect', function() {
    connect.server({
        port: 8999,
        root:"dist",
        livereload:true,
        // middleware: function(connect, opt) {
        //     return [
        //         proxy('/meixi',{
        //             target:'http://www.meici.com/sale/index/lists',
        //             changeOrigin:true
        //         })
        //
        //     ]
        //
        //
        // }

        // middleware: function(connect, opt) {
        //     opt.route = '/appche';
        //     var proxy = new Proxy(opt);
        //     return [proxy];
        // }

    });
    // run some headless tests with phantomjs
    // when process exits:
    // connect.serverClose();
});
 
gulp.task('babelparse', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
);

// gulp.task('Imagemin', function () {
//     gulp.src('images/*.{png,jpg,gif,ico,jpeg}')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/img'));
// });.
gulp.task('Imagemin', function () {
    gulp.src('./images/*.{png,jpg,gif,ico,jpeg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
gulp.task('scripts', function() {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task("watch",()=>{
    gulp.watch("./html/**/*.html",["html"])
    gulp.watch("./sass/**/*.scss",["sass"])
    gulp.watch("./js/**/*.js",["javasrcipt"])
    gulp.watch("./images/**/*.{png,jpg,gif,ico,jpeg}",["Imagemin"])
    // gulp.watch("./src/js/**/*.js",["javasrciptJs"])
})


gulp.task("build",["scripts","index","Imagemin"])

gulp.task('default', ['connect', 'watch']);
