# Managing MinkNote documentation

Product docs at `/apps/minknote/docs/` are generated from a MinkNote journal. Edit the source notes, then re-run the importer. Do not hand-edit the generated Markdown.

The importer is the **minknote-docs-import** skill from [demianturner/minknote-skills](https://github.com/demianturner/minknote-skills), installed at `.cursor/skills/minknote-docs-import/`.

## How the Docs section was added

These site files were set up once. Re-running the importer does not replace them.

- **`_config.yml`** — added a path default so every page under `apps/minknote/docs` uses `layout: minknote-docs`.
- **`_data/minknote_docs.yml`** — sidebar map of categories and page URLs. The importer regenerates this file from the MinkNote journal.
- **`_layouts/minknote-docs.html`** — custom Jekyll layout: MinkNote top nav, left docs sidebar (from the YAML map), article column, footer.
- **`apps/minknote/assets/css/docs.css`** — docs shell, sidebar, breadcrumbs, and prose styles using existing MinkNote colours and Inter.
- **Two JS updates**
  - `apps/minknote/assets/js/partials.js` — inserted **Docs** after Pricing in the top nav and footer, and computed a deeper asset prefix for nested docs URLs.
  - `apps/minknote/assets/js/main.js` — highlighted the Docs nav link on any `/docs` path.
- **Markdown transformation via minknote-docs-import** — the [minknote-docs-import](https://github.com/demianturner/minknote-skills) skill converts the Getting Started journal into Jekyll pages: front matter, rewritten `minknote://` links, copied images, YouTube embeds, and the sidebar YAML. Root notes become **Getting Started**; each top-level journal folder becomes its own sidebar section.

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
