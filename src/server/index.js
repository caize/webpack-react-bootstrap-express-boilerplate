import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.config';

const port = process.env.PORT || 8080;
const isDevelopment = process.env.NODE_ENV !== 'production';
const app = express();

if (isDevelopment) {
    console.info("Starting development configuration");
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        stats: {
            colors: true,
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../../dist/index.html')));
        res.end();
    });
} else {
    console.info("Starting production configuration");
    app.use(express.static(path.join(__dirname, '../../dist')));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, '../../dist/index.html'));
    });
}

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('Listening on port %s', port);
});
