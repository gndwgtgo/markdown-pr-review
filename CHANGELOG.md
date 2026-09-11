# Changelog

## 1.0.0 (2026-09-11)


### Features

* add compose box component ([635e838](https://github.com/gndwgtgo/markdown-pr-review/commit/635e838773db2cfd3f9445f5c81f70e14b7034ee))
* add DraftManager for pending review comments ([825b8c6](https://github.com/gndwgtgo/markdown-pr-review/commit/825b8c698fdfadb042de04020340278f25a1d062))
* add GitHub write functions — postComment, postReply, submitDraftReview ([12a30f4](https://github.com/gndwgtgo/markdown-pr-review/commit/12a30f4ee07638b42770e461098da524143d2b0c))
* add GitHub-style table CSS scoped to .pr-content (issue [#22](https://github.com/gndwgtgo/markdown-pr-review/issues/22)) ([8e8f483](https://github.com/gndwgtgo/markdown-pr-review/commit/8e8f48387fd8b09de210488d28b565d3fa824e29))
* add githubGraphQL, fetchThreadMeta, editComment, deleteComment, resolveThread, unresolveThread ([a8ac497](https://github.com/gndwgtgo/markdown-pr-review/commit/a8ac497453ffa7386c5579db2d99533e7e57a8a2))
* add marketplace icon, gallery banner, and rewrite README ([e6a79d8](https://github.com/gndwgtgo/markdown-pr-review/commit/e6a79d89c86493cea7ad555561386903c58a33f8))
* add nav strip styles and highlight keyframe animation ([1c32939](https://github.com/gndwgtgo/markdown-pr-review/commit/1c3293967aeee7abb2822006339980ae83ed8bb5))
* add NavStrip class for comment navigation header ([98f3b0b](https://github.com/gndwgtgo/markdown-pr-review/commit/98f3b0b13de930e9785e3fb960a6b73cced8d9ba))
* add onThreadToggle callback to OverlayCallbacks ([db6d710](https://github.com/gndwgtgo/markdown-pr-review/commit/db6d7109024042171511592e98a70d23b047b39d))
* add output channel logger utility ([9bb4f51](https://github.com/gndwgtgo/markdown-pr-review/commit/9bb4f5163c6f6ab98863df4e38dcf622697db7ef))
* add pr-content class to content div for table style scoping ([63ef25d](https://github.com/gndwgtgo/markdown-pr-review/commit/63ef25deaa3c9b81aac131c11723509e442e5f30))
* add selection handlers, floating button, context menu, Reply button ([6655a6a](https://github.com/gndwgtgo/markdown-pr-review/commit/6655a6ad0dd84949c3e96c52a0bf9d52641bf0de))
* allow comments on any line; annotate non-diff lines with original position ([8a3777c](https://github.com/gndwgtgo/markdown-pr-review/commit/8a3777ce8cb25fa06813b637d8406520599e726d))
* amber add-comment button and snap tooltip on non-diff lines ([1f3fc47](https://github.com/gndwgtgo/markdown-pr-review/commit/1f3fc478d8769c8f7b82cceeaef8ecae755bcb5e))
* anchor code fence comment bubbles to their specific line ([d1b50ff](https://github.com/gndwgtgo/markdown-pr-review/commit/d1b50ff5f4353260b13c133aaccec68fbe6e8fd8))
* comment overlay — thread grouping, bubble positioning, thread expand/collapse ([1bf1cda](https://github.com/gndwgtgo/markdown-pr-review/commit/1bf1cda24a69a83d4df7427940a335e220fc88b0))
* diagram-anchors DOM queries and fallback chain ([de838fb](https://github.com/gndwgtgo/markdown-pr-review/commit/de838fbdb5b9e5d932485cd2118aa4e31302d382))
* diagram-anchors pure parser functions with tests ([19d4616](https://github.com/gndwgtgo/markdown-pr-review/commit/19d4616246caf0a9ed823f3a3383337b9f7b6d0e))
* draggable popover panels ([ccb0d2c](https://github.com/gndwgtgo/markdown-pr-review/commit/ccb0d2c53773fa57503f7deb0a72c74954e89f0e))
* expand all skips floating bubbles; floating threads get close button ([0c45c0f](https://github.com/gndwgtgo/markdown-pr-review/commit/0c45c0f0b940d1dfbca3262b592568b62a4404b3))
* extend message protocol types for Phase 2 ([b9e2b97](https://github.com/gndwgtgo/markdown-pr-review/commit/b9e2b9722a95c27b17bb0460607f5f02c7b25bad))
* extend types for phase 3 — ThreadMeta, edit/delete/resolve messages ([aafcbb7](https://github.com/gndwgtgo/markdown-pr-review/commit/aafcbb70b7faa84a7aa16d1cb63acb7b99271efe))
* extension scaffold — command, title bar icon, webview panel opens ([6a798f7](https://github.com/gndwgtgo/markdown-pr-review/commit/6a798f74993b59f24f59d8ba10cd9f713bd77cd7))
* file dropdown shows open/resolved thread counts instead of dot prefix ([a43ef04](https://github.com/gndwgtgo/markdown-pr-review/commit/a43ef04d2b5118a1a934e1d4eff08dbd9d0c3311))
* GitContext — reads branch and owner/repo from git remote ([29d39e4](https://github.com/gndwgtgo/markdown-pr-review/commit/29d39e4341132836792671cc6107bd2aef3d3211))
* GitHub markdown style, syntax highlighting, inline HTML ([aed1ba0](https://github.com/gndwgtgo/markdown-pr-review/commit/aed1ba009fb49e5498181311dae763e2d4eeeaca))
* GitHub markdown style, syntax highlighting, inline HTML ([1fa9bda](https://github.com/gndwgtgo/markdown-pr-review/commit/1fa9bdac64b371ca555a34f0b7f8ea376d83555e))
* GitHubClient — VS Code auth, find PR by branch, fetch review comments ([c375065](https://github.com/gndwgtgo/markdown-pr-review/commit/c375065b4a2a10026cee4eb29973ea4aecd21d0c))
* inline comments on any line, file-switcher dropdown, table thread rows ([455bd15](https://github.com/gndwgtgo/markdown-pr-review/commit/455bd15060dbf05c7f09dbb76912d6c231f5e24a))
* inline comments on any line, file-switcher dropdown, table thread rows ([455bd15](https://github.com/gndwgtgo/markdown-pr-review/commit/455bd15060dbf05c7f09dbb76912d6c231f5e24a))
* markdown-pr-review.repository setting for virtual workspaces ([d42a6f1](https://github.com/gndwgtgo/markdown-pr-review/commit/d42a6f1e12ad4c9570627048597c4741b2076aa7))
* overlay absolute positioning for diagram bubbles ([bf2adb0](https://github.com/gndwgtgo/markdown-pr-review/commit/bf2adb0822970aadeb1f1bfaec7c132f608fe9f6))
* pass headSha and userLogin from extension command to ReviewPanel ([34f7a96](https://github.com/gndwgtgo/markdown-pr-review/commit/34f7a9601191a17bb33578e0b2bc17a76ca8db8f))
* pick from open PRs instead of typing a number ([32cba58](https://github.com/gndwgtgo/markdown-pr-review/commit/32cba58a5784aab4f0db9b11a83948c1e330b8bb))
* pill-style Expand/Close buttons; full path dropdown on open ([9a1dd77](https://github.com/gndwgtgo/markdown-pr-review/commit/9a1dd7706af7ee7d017995b29fd7ea6017cba3af))
* popover CSS styles ([a860bb6](https://github.com/gndwgtgo/markdown-pr-review/commit/a860bb6772ddcc9c607f54a6b046724c855c6c70))
* publish a sideload site to GitHub Pages ([9ffcf62](https://github.com/gndwgtgo/markdown-pr-review/commit/9ffcf62e995994fb68900cace905eb16859199f2))
* publish a sideload site to GitHub Pages ([baa719e](https://github.com/gndwgtgo/markdown-pr-review/commit/baa719e0f775f798fd22877db08072569ca11036))
* refactor toggleThread to options object; add dot menu, resolve/unresolve button ([11b8d96](https://github.com/gndwgtgo/markdown-pr-review/commit/11b8d966d815aa444cbe99cb5704c493fd7db5b2))
* render YAML front matter as styled key-value block ([bcd7c56](https://github.com/gndwgtgo/markdown-pr-review/commit/bcd7c569307f885933213a33f124756ae1cf50e2))
* restore file-switcher dropdown; fix comment persistence on tab switch ([624298e](https://github.com/gndwgtgo/markdown-pr-review/commit/624298e197a758ceda4d56bee4e7e7a6cff2e966))
* ReviewPanel stores PR context, handles write messages, adds compose CSS ([82e3685](https://github.com/gndwgtgo/markdown-pr-review/commit/82e368506f70039abb698bb928b286b6fd311751))
* run as a web extension on vscode.dev ([6e824cb](https://github.com/gndwgtgo/markdown-pr-review/commit/6e824cb73f0155637bf889139562e6bf0f3021ab))
* run as a web extension on vscode.dev ([767225c](https://github.com/gndwgtgo/markdown-pr-review/commit/767225c186c6cf887331ed60b86c92bc56415bcd))
* shared PRComment and RenderMessage types ([7194f9d](https://github.com/gndwgtgo/markdown-pr-review/commit/7194f9d031a7024678f91ed43deb1133e75f1445))
* show Outdated label on threads anchored to original_line (issue [#25](https://github.com/gndwgtgo/markdown-pr-review/issues/25)) ([7a9f063](https://github.com/gndwgtgo/markdown-pr-review/commit/7a9f0636e2eee6039b19db8402e994229ed6490c))
* status bar PR indicator; smarter default file; comma separator ([c546a5e](https://github.com/gndwgtgo/markdown-pr-review/commit/c546a5ee73734f0f8b0e575fc04d93acbc1b25aa))
* store threadMeta in main; handle commentEdited, commentDeleted, threadResolved, threadUnresolved ([cee3089](https://github.com/gndwgtgo/markdown-pr-review/commit/cee3089838a15d74799d764bce9b631bf797d38a))
* thread popover placement mode ([fa09d59](https://github.com/gndwgtgo/markdown-pr-review/commit/fa09d59ee3c15f60d3a4075e75dd63a5c99c6595))
* update placeOverlays to accept threadMeta and action callbacks; resolved bubble style ([491f0e7](https://github.com/gndwgtgo/markdown-pr-review/commit/491f0e7c793f505445c4ed5618ab594f2397da90))
* use selected text to find exact source line when adding a comment ([5e9f966](https://github.com/gndwgtgo/markdown-pr-review/commit/5e9f966b5f7c5578cf302ef165408440936ff091))
* webview markdown-it renderer with data-line source mapping ([b73cc60](https://github.com/gndwgtgo/markdown-pr-review/commit/b73cc600090ea180cbd510c284ad612ef2079490))
* webview pipeline — markdown render, mermaid, comment overlay wired end-to-end ([c9fd772](https://github.com/gndwgtgo/markdown-pr-review/commit/c9fd772975438915cbeb8f19bfdbaf1c9b212067))
* wire compose, draft, and message handlers in main.ts ([6e12337](https://github.com/gndwgtgo/markdown-pr-review/commit/6e12337745ae0f731f854d4cdf18a88c48a70a8c))
* wire diagram anchor resolution into render pipeline ([80712ad](https://github.com/gndwgtgo/markdown-pr-review/commit/80712ad8e4d507ac4dbf22ef5bfe55a64d7fd2e3))
* wire fetchThreadMeta, handle edit/delete/resolve messages in ReviewPanel ([a00d3f5](https://github.com/gndwgtgo/markdown-pr-review/commit/a00d3f5fc3165cababa2e4c9dc70177719ad5c3f))
* wire NavStrip and open-thread persistence in main.ts ([624e215](https://github.com/gndwgtgo/markdown-pr-review/commit/624e215b29e72faaa4ffbc388afcf30b874710c0))
* wire real GitHub API — branch → PR → comments → overlay ([ff1de33](https://github.com/gndwgtgo/markdown-pr-review/commit/ff1de332cdf559c96b7419722abcb460f871a0ab))


### Bug Fixes

* 1-based line for GitHub API, fixed button position near selection ([6766948](https://github.com/gndwgtgo/markdown-pr-review/commit/6766948928cc2b5ddac72820e92d85f2dce043b7))
* accept .md extension as fallback when languageId is not markdown ([311fae0](https://github.com/gndwgtgo/markdown-pr-review/commit/311fae059fbdd2fb9313a31dbb6009a7c7d79d09))
* activate on startup so status bar appears without running command ([1dd0824](https://github.com/gndwgtgo/markdown-pr-review/commit/1dd082408b217c3a158e8cf577b05336dad75f77))
* activate on startup so status bar appears without running command ([5181888](https://github.com/gndwgtgo/markdown-pr-review/commit/5181888b828e9653ddf37877aa0bb38abe6054d0))
* add markdown-it-anchor for TOC link support; add test fixture doc ([c3d9acb](https://github.com/gndwgtgo/markdown-pr-review/commit/c3d9acb19b255ce2c4c0e0e562b18a450da2d171))
* anchor bubbles to correct list item by normalising line numbers ([ac8fd5e](https://github.com/gndwgtgo/markdown-pr-review/commit/ac8fd5e0fefb9ff080fa75695fa95313387ebc43))
* anchor comment bubbles to table rows, not cells ([65fb184](https://github.com/gndwgtgo/markdown-pr-review/commit/65fb1849f6f099fb088326dc86540d958f520ff9))
* block comments before first diff hunk instead of jumping down ([da0f4c5](https://github.com/gndwgtgo/markdown-pr-review/commit/da0f4c50838354b5093b2ec20e10bbe3a0a1d91c))
* bubble and compose box placement in loose/tight list items ([8cf194a](https://github.com/gndwgtgo/markdown-pr-review/commit/8cf194ad42e48741bba553c78264c682ee687ad0))
* bundle mermaid deps into webview — remove incorrect externals ([21e60d2](https://github.com/gndwgtgo/markdown-pr-review/commit/21e60d2daacaa7f93dc259585697336651f0507e))
* button click suppressed by doc mouseup; clamp btn left; resolve symlinks for relPath ([1ebbf38](https://github.com/gndwgtgo/markdown-pr-review/commit/1ebbf3838ab107b15874b76dc0e2ad3bc025e575))
* clamp relLine at calculation point in resolveDiagramAnchors ([e2352f5](https://github.com/gndwgtgo/markdown-pr-review/commit/e2352f57e37d304328834c2cbd369d8ae1970db8))
* clear draft badge before re-initializing DraftManager on render ([cf0a951](https://github.com/gndwgtgo/markdown-pr-review/commit/cf0a951e44c6b07e055fa213c75adfbc17185fe7))
* compose box placement in list items ([b361c7e](https://github.com/gndwgtgo/markdown-pr-review/commit/b361c7eb67443102c6f3db0f3364cd7f4d7dae1c))
* CSS tooltips on nav arrows and gap between strip and dropdown ([7630403](https://github.com/gndwgtgo/markdown-pr-review/commit/7630403e95c6dc4dc2f8555d88f0534f35c19914))
* drop hardcoded workspace path from launch config ([043f3d7](https://github.com/gndwgtgo/markdown-pr-review/commit/043f3d7b64be12141def3c123e72e736ec39032b))
* extractSequenceActor handles -x arrow and quoted participant names ([db1ccb7](https://github.com/gndwgtgo/markdown-pr-review/commit/db1ccb7181868d60db4eb9c8ebc775255f35df1d))
* extractSequenceActor returns full name for hyphenated participants ([aed5b4e](https://github.com/gndwgtgo/markdown-pr-review/commit/aed5b4e90ec493c44dca85967db1244609c724bc))
* fall back to original_line for outdated PR comments (issue [#25](https://github.com/gndwgtgo/markdown-pr-review/issues/25)) ([a4f68cc](https://github.com/gndwgtgo/markdown-pr-review/commit/a4f68cca702c785d582f892311c3b96622f199aa))
* filter thread counts by file path in dropdown labels ([137a7e3](https://github.com/gndwgtgo/markdown-pr-review/commit/137a7e38cd4a3db8d2aa5286566d32252075fc60))
* find pre via closest() for fenced code block bubble anchoring ([9a556d1](https://github.com/gndwgtgo/markdown-pr-review/commit/9a556d1071fcdd0921e678700927d212ce573f68))
* force arm64 for VS Code build task, add optional esbuild platform deps ([7ab65c9](https://github.com/gndwgtgo/markdown-pr-review/commit/7ab65c9f8bd8b840d2ef70a34a1be64696a32b2f))
* guard contentEl null in message handler; guard draft?.clear in reviewSubmitted ([12d2d58](https://github.com/gndwgtgo/markdown-pr-review/commit/12d2d58c1b9b7267b7a272151a6c0561e3b3ffa9))
* handle #anchor clicks manually to work around VS Code webview navigation intercept ([eba556c](https://github.com/gndwgtgo/markdown-pr-review/commit/eba556ca5c843e40c6a507399e80ba26ee869fbb))
* improve GitContext error messages ([afa5547](https://github.com/gndwgtgo/markdown-pr-review/commit/afa55471bb980b2f363ed4047558921405f3092d))
* keep thread panel open after edit/resolve/unresolve actions ([e6d0ec8](https://github.com/gndwgtgo/markdown-pr-review/commit/e6d0ec8493f4b49193bf3d194175241f3e30748c))
* mapComment throws on null line, postReply accepts fallbackLine ([5ac4903](https://github.com/gndwgtgo/markdown-pr-review/commit/5ac4903947afb889246c4664877721a60ae2e383))
* move bundled deps to devDependencies, update vscodeignore, add types stub ([459e7a9](https://github.com/gndwgtgo/markdown-pr-review/commit/459e7a9d6f387769fbe46e43ff6343b87a9b74cd))
* open thread panel for code block bubbles ([81d5ade](https://github.com/gndwgtgo/markdown-pr-review/commit/81d5ade9ff8109f0e9d37bf91ba679a18b8781c5))
* open worktree folder automatically in Extension Development Host ([57806f2](https://github.com/gndwgtgo/markdown-pr-review/commit/57806f2f15e3783f9f191a9f56d6633d57b4e177))
* popover arrow clamping, dismiss listener cleanup, left-edge guard ([487c811](https://github.com/gndwgtgo/markdown-pr-review/commit/487c811bfbdf0600512390dbd1e1c04ab0fa1f66))
* postinstall ensures x64 esbuild binary for VS Code Rosetta compat ([29773f4](https://github.com/gndwgtgo/markdown-pr-review/commit/29773f47864dcdd3d39b728a9694bc8b56166428))
* prepend bubble instead of append so float:right lands at top-right ([07e783f](https://github.com/gndwgtgo/markdown-pr-review/commit/07e783fa2fab66cd991e4cd67b172ef1c336e660))
* re-render webview when panel becomes visible after being hidden ([b0ef3a0](https://github.com/gndwgtgo/markdown-pr-review/commit/b0ef3a0bfc0942c38bf6f7ab0fd625d147ed39de))
* refresh counter after Close All; clarify update vs refresh contract ([9b8d0a2](https://github.com/gndwgtgo/markdown-pr-review/commit/9b8d0a2053cd688494467b742835fd2bca20f50e))
* refresh status bar on git branch change, not just editor switch ([22aa7c3](https://github.com/gndwgtgo/markdown-pr-review/commit/22aa7c3864d48cd62c92df2255db9a9004435097))
* refresh status bar on git branch change, not just editor switch ([ccbd119](https://github.com/gndwgtgo/markdown-pr-review/commit/ccbd1190ff7c85c66c8413dc8ec2b290f9d4a654))
* remove conflicting margin-right from pr-nav-strip ([48a085b](https://github.com/gndwgtgo/markdown-pr-review/commit/48a085b7e3c2a45435c9c58369532868dd16d49f))
* remove DOM from extension host tsconfig, add skipLibCheck ([8780f4c](https://github.com/gndwgtgo/markdown-pr-review/commit/8780f4ce56185d7242575f731d0dc940e24becea))
* rename release-please job id to avoid hyphen in expression syntax ([9927cf0](https://github.com/gndwgtgo/markdown-pr-review/commit/9927cf009d1496ad0e837cd3685655db69d62a88))
* render &lt;details&gt; blocks as native collapsible widgets ([3985bf7](https://github.com/gndwgtgo/markdown-pr-review/commit/3985bf7701ac28858f909511424ffbd86738dd88))
* render thread panels and compose boxes as full-width table rows ([d85456b](https://github.com/gndwgtgo/markdown-pr-review/commit/d85456b9993af9ebb13a30086df880bd0ce74185))
* resolve build and runtime issues for Phase 1 MVP ([c210c98](https://github.com/gndwgtgo/markdown-pr-review/commit/c210c9839f201e35b6cf100bc5c1c2555cb7fc23))
* restore symlink comment in extension.ts ([42a05c0](https://github.com/gndwgtgo/markdown-pr-review/commit/42a05c0f5498526dcc9bcb5468c84158c9d7ffb2))
* restructure popover to fix drag handle layout ([1bd51d8](https://github.com/gndwgtgo/markdown-pr-review/commit/1bd51d8645ce97a566bbf56382172f2bd1271be3))
* sequence message bubbles anchor to message height, not actor box ([b2d55d4](https://github.com/gndwgtgo/markdown-pr-review/commit/b2d55d4e04d135d163b20870bb4953ee8ff9eb41))
* show bubble for comments on first table row ([7c97fd0](https://github.com/gndwgtgo/markdown-pr-review/commit/7c97fd06804a11d8032e1d400c94f251f501102f))
* show nav button tooltips below, not above header ([29da79d](https://github.com/gndwgtgo/markdown-pr-review/commit/29da79d74bd24b5be6b23ea5492daea5e863e733))
* show status bar in any git repo before auth is available ([818f97d](https://github.com/gndwgtgo/markdown-pr-review/commit/818f97db0ddcdf41e61a0a6bca43a05757dbdc55))
* simplify snap indicator — amber color and tooltip only, no line number ([12a3cfd](https://github.com/gndwgtgo/markdown-pr-review/commit/12a3cfd3bc8c03f503d586139b5499e4dff31b24))
* snap comment line up to nearest diff-visible line; show toast when snapped ([719fe03](https://github.com/gndwgtgo/markdown-pr-review/commit/719fe035e0536dbe99fcd8db075cae41a91ee19b))
* status bar tooltip and icon match extension name and command palette ([4e4e95c](https://github.com/gndwgtgo/markdown-pr-review/commit/4e4e95cc1cd7c553ea47e13a20aeafdceeaef55f))
* status bar tooltip and icon match extension name and command palette ([ad9cfb8](https://github.com/gndwgtgo/markdown-pr-review/commit/ad9cfb8bcc13d328b23e118b032c58ac077a8e7a))
* status bar tooltip and icon match extension name and command palette ([7ce22ea](https://github.com/gndwgtgo/markdown-pr-review/commit/7ce22ea35a8a73363892a74dc15e27df166fa389))
* status bar tooltip and icon match extension name and command palette ([65e7c2c](https://github.com/gndwgtgo/markdown-pr-review/commit/65e7c2c965e083cbb2b2382e712862067779faa7))
* strip HTML comments before rendering markdown ([1e47013](https://github.com/gndwgtgo/markdown-pr-review/commit/1e47013f6352b3e8572d4c9fc02ca63a97c25451))
* submitDraftReview fetches review comments via follow-up GET, reuse mapComment ([a97412b](https://github.com/gndwgtgo/markdown-pr-review/commit/a97412b55a16d3d5cb8c9d82173fbc56bf01d628))
* thread toggle checks nextElementSibling not querySelector ([314c970](https://github.com/gndwgtgo/markdown-pr-review/commit/314c97057a6ff4d5c8860b37426bed9c20d43057))
* tooltip format matches OS shortcut style — no parens, spaced key ([ec719a2](https://github.com/gndwgtgo/markdown-pr-review/commit/ec719a2a204330369ff4b217d229d11a043cca85))
* use env context for secret conditionals in publish job ([c3030a4](https://github.com/gndwgtgo/markdown-pr-review/commit/c3030a4eba89effa2f10ff31392130987f5943cf))
* use popover for code block comment threads ([65d8ea5](https://github.com/gndwgtgo/markdown-pr-review/commit/65d8ea564f456652a92a64e16cff0e97dcb61901))
* use ready message to re-render webview after context is destroyed ([ca9345f](https://github.com/gndwgtgo/markdown-pr-review/commit/ca9345f5ecf4e30f19ce3e45e626aabaf65738ce))
* use refresh() for incremental nav strip updates to preserve nav index ([50fd1d7](https://github.com/gndwgtgo/markdown-pr-review/commit/50fd1d732fa87bc541bef728fd97a6295d60e4c6))
* wrap thread text inside code blocks; fix bubble anchor for pre elements ([ee1585e](https://github.com/gndwgtgo/markdown-pr-review/commit/ee1585e53cc44fa0aeb195f2caa35b777dc210bc))


### Reverts

* drop the GitHub Pages sideload site ([a3bcea2](https://github.com/gndwgtgo/markdown-pr-review/commit/a3bcea2cd204b20d234e210ee7c7da6686fff9f7))
* drop the GitHub Pages sideload site ([5369e17](https://github.com/gndwgtgo/markdown-pr-review/commit/5369e17c8c789bcd3fddd8b053d703b1a2bc6b59))

## [1.6.2](https://github.com/FrankLedo/markdown-pr-review/compare/v1.6.1...v1.6.2) (2026-05-26)


### Bug Fixes

* render &lt;details&gt; blocks as native collapsible widgets ([3985bf7](https://github.com/FrankLedo/markdown-pr-review/commit/3985bf7701ac28858f909511424ffbd86738dd88))

## [1.6.1](https://github.com/FrankLedo/markdown-pr-review/compare/v1.6.0...v1.6.1) (2026-05-11)


### Bug Fixes

* strip HTML comments before rendering markdown ([1e47013](https://github.com/FrankLedo/markdown-pr-review/commit/1e47013f6352b3e8572d4c9fc02ca63a97c25451))

## [1.6.0](https://github.com/FrankLedo/markdown-pr-review/compare/v1.5.1...v1.6.0) (2026-04-28)


### Features

* add output channel logger utility ([9bb4f51](https://github.com/FrankLedo/markdown-pr-review/commit/9bb4f5163c6f6ab98863df4e38dcf622697db7ef))
* anchor code fence comment bubbles to their specific line ([d1b50ff](https://github.com/FrankLedo/markdown-pr-review/commit/d1b50ff5f4353260b13c133aaccec68fbe6e8fd8))
* diagram-anchors DOM queries and fallback chain ([de838fb](https://github.com/FrankLedo/markdown-pr-review/commit/de838fbdb5b9e5d932485cd2118aa4e31302d382))
* diagram-anchors pure parser functions with tests ([19d4616](https://github.com/FrankLedo/markdown-pr-review/commit/19d4616246caf0a9ed823f3a3383337b9f7b6d0e))
* expand all skips floating bubbles; floating threads get close button ([0c45c0f](https://github.com/FrankLedo/markdown-pr-review/commit/0c45c0f0b940d1dfbca3262b592568b62a4404b3))
* overlay absolute positioning for diagram bubbles ([bf2adb0](https://github.com/FrankLedo/markdown-pr-review/commit/bf2adb0822970aadeb1f1bfaec7c132f608fe9f6))
* popover CSS styles ([a860bb6](https://github.com/FrankLedo/markdown-pr-review/commit/a860bb6772ddcc9c607f54a6b046724c855c6c70))
* thread popover placement mode ([fa09d59](https://github.com/FrankLedo/markdown-pr-review/commit/fa09d59ee3c15f60d3a4075e75dd63a5c99c6595))
* use selected text to find exact source line when adding a comment ([5e9f966](https://github.com/FrankLedo/markdown-pr-review/commit/5e9f966b5f7c5578cf302ef165408440936ff091))
* wire diagram anchor resolution into render pipeline ([80712ad](https://github.com/FrankLedo/markdown-pr-review/commit/80712ad8e4d507ac4dbf22ef5bfe55a64d7fd2e3))


### Bug Fixes

* clamp relLine at calculation point in resolveDiagramAnchors ([e2352f5](https://github.com/FrankLedo/markdown-pr-review/commit/e2352f57e37d304328834c2cbd369d8ae1970db8))
* extractSequenceActor handles -x arrow and quoted participant names ([db1ccb7](https://github.com/FrankLedo/markdown-pr-review/commit/db1ccb7181868d60db4eb9c8ebc775255f35df1d))
* extractSequenceActor returns full name for hyphenated participants ([aed5b4e](https://github.com/FrankLedo/markdown-pr-review/commit/aed5b4e90ec493c44dca85967db1244609c724bc))
* popover arrow clamping, dismiss listener cleanup, left-edge guard ([487c811](https://github.com/FrankLedo/markdown-pr-review/commit/487c811bfbdf0600512390dbd1e1c04ab0fa1f66))
* sequence message bubbles anchor to message height, not actor box ([b2d55d4](https://github.com/FrankLedo/markdown-pr-review/commit/b2d55d4e04d135d163b20870bb4953ee8ff9eb41))

## [1.5.1](https://github.com/FrankLedo/markdown-pr-review/compare/v1.5.0...v1.5.1) (2026-04-23)

### Bug Fixes

* anchor comment bubbles to table rows, not cells ([65fb184](https://github.com/FrankLedo/markdown-pr-review/commit/65fb1849f6f099fb088326dc86540d958f520ff9))
* CSS tooltips on nav arrows and gap between strip and dropdown ([7630403](https://github.com/FrankLedo/markdown-pr-review/commit/7630403e95c6dc4dc2f8555d88f0534f35c19914))
* show nav button tooltips below, not above header ([29da79d](https://github.com/FrankLedo/markdown-pr-review/commit/29da79d74bd24b5be6b23ea5492daea5e863e733))
* tooltip format matches OS shortcut style — no parens, spaced key ([ec719a2](https://github.com/FrankLedo/markdown-pr-review/commit/ec719a2a204330369ff4b217d229d11a043cca85))

* Comment bubbles on table rows anchor to a dedicated column instead of floating inside a cell, which was breaking table layout
* Panel tab title is always "Markdown PR Review" instead of the filename
* CSS tooltips on ↑↓ nav buttons (VS Code webviews suppress native `title` tooltips)
* Tooltip text matches OS keyboard shortcut style (`Previous  [` / `Next  ]`)

## [1.5.0] — 2026-04-23

### Added
* Status bar item shows current PR number (`PR #N`); hides on non-PR branches; updates on branch switch
* File switcher dropdown displays full paths when open, short names when closed
* Expand All / Close All buttons with pill styling

### Fixed
* Status bar appears on startup without needing to run a command
* Thread counts in the file dropdown were bleeding across files

## [1.4.0] — 2026-04-23

### Added
* YAML front matter is rendered as a styled key-value block instead of raw text
* Add-comment button turns amber when the selected line is outside the PR diff, signalling that the comment will be anchored to the nearest changed line

## [1.3.0] — 2026-04-23

### Added
* **Comment on any line** — select any text to add a comment; if the line is outside the diff it anchors to the nearest changed line and notes the original line in the comment body
* **File switcher** — dropdown in the review header lets you jump between all markdown files in the PR without reopening the panel

### Fixed
* Thread panels and compose boxes inside tables render as full-width rows, preserving table layout

## [1.2.0] — 2026-04-22

### Added
* **Navigation strip** — header bar with ↑↓ buttons and `[` / `]` keyboard shortcuts to jump between comment threads
* Expand All / Close All controls for thread panels
* Open thread state is preserved when switching between files

## [1.1.0] — 2026-04-22

### Added
* Marketplace icon and gallery banner

### Fixed
* TOC anchor links (`#heading`) now scroll correctly inside the VS Code webview
* Panel re-renders correctly when revealed after being hidden or after the webview context is destroyed

## [1.0.0] — 2026-04-21

Initial release.

* Renders GitHub PR review comments inline on rendered markdown, anchored via source maps
* Full thread lifecycle: reply, edit, delete, resolve, unresolve
* Draft review batching — accumulate comments and submit as one review
* Mermaid diagram support — comments anchor to the fence block; diagrams render in light or dark theme
* GitHub authentication via VS Code's built-in auth provider
