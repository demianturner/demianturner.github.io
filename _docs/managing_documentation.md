# Managing MinkNote documentation

Product docs at `/apps/minknote/docs/` are generated from a MinkNote journal. Edit the source notes, then re-run the importer. Do not hand-edit the generated Markdown.

The importer lives in the installed skill [minknote-docs-import](https://github.com/demianturner/minknote-skills), currently at `.cursor/skills/minknote-docs-import/`.

## Update Getting Started

From the site repo root:

```bash
python3 .cursor/skills/minknote-docs-import/scripts/import_docs.py import \
  --source "/Users/demianturner/Developer/Github/demianturner/ProjectJournal/ProjectJournal/Resources/sample-files/Getting Started" \
  --site-root "/Users/demianturner/Developer/Github/demianturner/demianturner.github.io" \
  --ignore changelog.md roadmap.md
```

`--ignore changelog.md roadmap.md` skips those two source notes. The site already has Changelog and Roadmap pages, so they must not be imported into Docs.

`--ignore` accepts one or more source filenames or source-relative glob patterns. Nothing is skipped unless you pass it.

## What gets regenerated

- Markdown pages under `apps/minknote/docs/`
- Images under `apps/minknote/docs/images/`
- Sidebar data in `_data/minknote_docs.yml`

The Jekyll layout (`_layouts/minknote-docs.html`), docs CSS, and the Docs nav link are site files. They are not overwritten by the importer.

## After import

Review `/apps/minknote/docs/` locally, then commit the generated files with any source-driven content changes.
