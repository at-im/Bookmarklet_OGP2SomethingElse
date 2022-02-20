Bookmarklet_OGP2SomethingElse
====

OGPを取得して、何かの形式に変換するブックマークレット。

使い方
----

目的のスクリプトをブックマークレットに追加します。

### [Convert OGP to Hugo Shortcut format](OGP2HugoShortcut.min.js)

任意のページ上で実行すると、そのページのOGPから`{{< blogcard title="" url="" image="">}}description{{< /blogcard >}}`という形式のショートコードに変換して、以下の処理を実行します。

- クリップボードにコピー。
- アラートに出す。
- cosole.logに出力する。

GitHub.comで実行した例。

```html
{{< blogcard title="Build software better, together" url="https://github.com" image="https://github.githubassets.com/images/modules/open_graph/github-logo.png" >}}GitHub is where people build software. More than 73 million people use GitHub to discover, fork, and contribute to over 200 million projects.{{< /blogcard >}}
```