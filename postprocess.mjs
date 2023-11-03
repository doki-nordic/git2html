
import * as fs from 'fs';

const prefix = `
if (global._not_existing) path.join(__dirname, '../template.html');
if (global._not_existing) path.join(__dirname, '../node_modules/diff2html-cli/package.json');
if (global._not_existing) path.join(__dirname, '../node_modules/diff2html-cli/diff2html-cli.js');
if (global._not_existing) path.join(__dirname, '../node_modules/diff2html/package.json');
if (global._not_existing) path.join(__dirname, '../node_modules/diff2html/lib/diff2html.js');
if (global._not_existing) path.join(__dirname, '../node_modules/diff2html/bundles/css/diff2html.min.css');
if (global._not_existing) path.join(__dirname, '../node_modules/diff2html/bundles/js/diff2html-ui-slim.min.js');
`;

let file = fs.readFileSync('dist/src/git2html.js', 'utf-8');
file = file.replace(/import_meta.*\.url/g, 'import_node_url.pathToFileURL(__filename)');
file = prefix + file;
fs.writeFileSync('dist/src/git2html.js', file);

fs.mkdirSync('dist/node_modules/diff2html-cli', { recursive: true });
fs.mkdirSync('dist/node_modules/diff2html/lib', { recursive: true });
fs.mkdirSync('dist/node_modules/diff2html/bundles/css', { recursive: true });
fs.mkdirSync('dist/node_modules/diff2html/bundles/js', { recursive: true });

fs.writeFileSync('dist/node_modules/diff2html-cli/package.json', JSON.stringify({
    "name": "diff2html-cli",
    "main": "diff2html-cli.js"
}));
fs.writeFileSync('dist/node_modules/diff2html-cli/diff2html-cli.js', '');

fs.writeFileSync('dist/node_modules/diff2html/package.json', JSON.stringify({
    "name": "diff2html",
    "main": "lib/diff2html.js"
}));
fs.writeFileSync('dist/node_modules/diff2html/lib/diff2html.js', '');

fs.copyFileSync('node_modules/diff2html/bundles/css/diff2html.min.css', 'dist/node_modules/diff2html/bundles/css/diff2html.min.css');
fs.copyFileSync('node_modules/diff2html/bundles/js/diff2html-ui-slim.min.js', 'dist/node_modules/diff2html/bundles/js/diff2html-ui-slim.min.js');
fs.copyFileSync('node_modules/diff2html-cli/template.html', 'dist/template.html');


file = fs.readFileSync('git2html', 'utf-8');
file = file.replace('<<<PACKAGE>>>', fs.readFileSync('package.json'));
file = file.replace('<<<SOURCE>>>', fs.readFileSync('git2html.mjs'));
fs.writeFileSync('dist/git2html.sh', file, { mode: 0o755 });
