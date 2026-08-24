---
layout: minknote-docs
title: "Understanding MinkNote Structure"
category: understanding-minknote
category_label: "Understanding MinkNote"
nav_order: 50
permalink: /apps/minknote/docs/understanding-minknote/understanding-minknote-structure/
uuid: 52FD42B0-73A3-40F1-AF51-00E4C3E62D7F
generated: true
---
MinkNote follows conventions used by many note-taking and personal knowledge management (PKM) apps. Apps tend to using slightly different naming for similar ideas, so here's the terminology MinkNote uses.

**At a glance:**

* **Projects** – top-level containers, holds one or more journals
* **Journals** – group related notes and media
* **Folders** – optional sub-grouping inside journals for related notes and media
* **Notes** – text content that can reference media
* **Frontmatter** - a hidden section at the top of each note that stores info about tags and note metadata
* **Media** – files stored alongside notes
* **Tags** – themes that cut across notes and journals
* **Favourites** - mark important notes for quick access in the sidebar

This keeps the mental model simple:

**Project → Journals → Folders → Notes** (with associated ​**Media**​)

## Projects

A project is simply a folder on your Mac.

You can maintain multiple projects and switch between them at any time. Each project is just a view of the files and folders you choose to work with. It can contain unlimited journals, subfolders, notes, files, and media.

MinkNote does not create a database or lock your content in any way. It reads and edits Markdown files only when you actively work on them. Other file types are left untouched.

The default location is managed by macOS for convenience and security. You can also choose any folder on your system if you prefer full control over where your files live.

Currently, MinkNote supports ​**one project open at a time**​.

> **Example**
> One project for *work* notes, another for *personal* or *family* material, another for *code samples* or *research*.

## Journals

Within a project, you'll usually have multiple journals. A journal is simply a folder, but with extra meaning inside MinkNote.

Soon, journals will support **custom icons and colours** to make them easier to recognise.

> **Example**
> In a *Work* project, you might have journals like ​*Marketing*​, ​*Finance*​, or ​*HR*​.

## Folders

Folders are an optional way to organise notes and media inside a journal. They're useful for broad categorisation but never required.

> **Example**
> Inside a *Marketing* journal, you might group content by year: ​*2026*​, ​*2025*​, and so on.

## Notes

Notes are the core unit of content in MinkNote. A note contains text, supports formatting, and can include media such as images displayed inline.

You can drag files directly into a note to attach them.

## Front Matter

Front matter is a hidden section at the very top of each note that stores metadata in YAML format. When you create a new note in MinkNote, front matter is automatically generated.

Front matter includes:

* **uuid** – a unique identifier for the note
* **title** – the note's title
* **tags** – a list of tags assigned to the note
* **starred** – whether the note is marked as a favourite
* **isPinned** – whether the note is pinned to the top of lists
* **timeZone** – the time zone where the note was created
* **creationDevice** – information about the device that created the note

Front matter is required for certain features to work:

* **Tags** – you can only add tags to notes that have front matter
* **Favourites** – marking a note as a favourite requires front matter

Notes without front matter (such as plain Markdown files from other apps) will still display and edit normally, but these features will be unavailable until front matter is added.

> **Tip**
> Front matter is a widely used convention in static site generators and note-taking apps, making your notes portable and compatible with other tools.

## Media

Media refers to files stored in a journal. Some media can be embedded directly in notes, while others can exist on their own.

Currently supported inside notes:

* Images
* PDFs (coming soon)

Standalone media can include:

* Excel files
* PowerPoint files
* Video and audio
* Images and PDFs
* Etc

## Tags

Tags let you group ideas and themes across notes and journals, without relying on folders.

> **Example**
> `urgent` , `my_project` , `app_ideas`

Tags are optional, but powerful if you like organising by topic rather than location.

## Favourites

Favourites let you mark important notes for quick access. When you favourite a note, it is included in the **Favourites** filter in the sidebar.

To favourite a note, right-click on it in the note list and select **Favorite** from the context menu.

Favourites work across all journals, so you can quickly see your most important notes regardless of where they're stored.

## Work in Progress

Some features described above are still in development:

* Only images can currently be dragged into notes (PDFs and more file types are coming)
* Multiple projects will be supported in the future, but for now only one project can be open at a time
