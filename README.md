# git2html

This tool allows you to create the git diffs in form of nice-looking HTML files.

## Usage

```bash
git2html output.html "Document title" ...git-diff arguments...
```

For details on git-diff arguments, see https://git-scm.com/docs/git-diff

## Example

Following command will create a `my_latest_commits.html` file
containing last two commits in current git repository. The
document title will be `Diff of my two latest commits`.

```bash
git2html my_latest_commits.html "Diff of my two latest commits" -M HEAD~2
```

## Download

The [latest release](https://github.com/doki-nordic/git2html/releases/latest)
contains executable for different platforms.

The portable version (`git2html-portable-nodejs-bash`) is a bash script that
uses Node.js. You can use it only if you have bash and Node.js (at least 18)
available on your system.
