Bookmarklet_OGP2SomethingElse
====

Bookmarklet to convert OGP to something else...

[日本語](README.jp.md)

USAGE
----

Add the desired script to your bookmarklet.

### [Convert OGP to Hugo Shortcut format](OGP2HugoShortcut.min.js)

When run on any page, it will convert the OGP of that page into a shortcode of the form `{{< blogcard title=""" url="" image="">}}description{{{< /blogcard >}}`` and perform the following

- Copy it to the clipboard.
- Send it to an alert.
- Output to cosole.log.

Example run on GitHub.com.

```html
{{< blogcard title="Build software better, together" url="https://github.com" image="https://github.githubassets.com/images/modules/open_graph/github-logo.png" >}}GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.{{< /blogcard >}}
```
