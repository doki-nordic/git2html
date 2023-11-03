import { main } from 'diff2html-cli/lib/main.js';

if (process.argv.length < 4) {
    console.log(`
USAGE:
    git2html output.html \"Document title\" ...git-diff arguments...

See:
    https://git-scm.com/docs/git-diff

Example:
    git2html my_latest_commits.html \"Diff of my two latest commits\" -M HEAD~2
`);
    process.exit(1);
}

process.argv = [
    ...process.argv.slice(0, 2),
    '-s', 'line',
    '-f', 'html',
    '-d', 'word',
    '-i', 'command',
    '-F', process.argv[2],
    '-t', process.argv[3],
    '--fct', 'false',
    '--', ...process.argv.slice(4)
];

main();
