---
layout: minknote-post
title: What’s New in MinkNote 1.6
date: 2026-09-21 13:12 +0100
description: MinkNote 1.6 makes working with your notes outside MinkNote safer and more reliable.
---

<div class="docs-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/iywQBm588Kw" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>


MinkNote 1.6 makes working with your notes outside MinkNote safer and more reliable.

Because MinkNote stores your notes as ordinary Markdown files, they have never been locked inside the app. You can open them in another editor, work with them from the command line, use them with AI tools, or keep them in iCloud Drive.

With 1.6, MinkNote is much more aware of what is happening to those files outside the app.

## **Safely edit notes in other apps**

You can now edit a note in another app while it is open in MinkNote.

For example, open the Markdown file in Sublime Text, make a change and save it. MinkNote detects that the file has changed and lets you decide what to do.

You can accept the external update, keep the version you have in MinkNote, or simply carry on editing and decide later.

MinkNote also checks the file again before replacing anything, helping protect against another external change arriving while you are making that decision.

The important part is that MinkNote doesn’t silently overwrite either version. Your Markdown files remain yours to work with however you want, while MinkNote keeps track of changes that could otherwise cause a conflict.

## **Changes work both ways**

This isn’t just about detecting changes made by another editor.

Make a change in MinkNote and the underlying Markdown file is updated as usual. If that file is also open in an editor such as Sublime Text, you’ll see the MinkNote change there too.

This makes it much more practical to use MinkNote alongside other tools rather than having to choose one application as the only place you can safely work with your notes.

It’s particularly useful if you use command-line tools, scripts or AI coding agents that read and modify Markdown directly.

## **Better iCloud Drive support**

External change tracking also works with notes stored in iCloud Drive.

If you have the same project available on two Macs, changes made on one Mac can appear in MinkNote on the other once iCloud has made the updated file available locally.

MinkNote treats these just as carefully as local changes. If an iCloud file is temporarily unavailable, MinkNote keeps your current note and any unsaved work intact rather than assuming the file has disappeared or been successfully saved.

This isn’t a new proprietary sync system. It’s still your files, your folders and iCloud doing the syncing. MinkNote 1.6 simply does a better job of responding to those files changing around it.

## **Folder Repair**

MinkNote 1.6 also adds **Folder Repair**.

MinkNote relies on macOS for permission to access the folders containing your projects. In rare cases that permission can be lost or expire, or a folder MinkNote expects may have been moved or removed.

If MinkNote loses access to a project, you can now reconnect it to its existing folder. MinkNote restores access without moving, recreating or modifying your notes.

There’s also a **Repair Folders** option for restoring MinkNote’s standard folder structure when necessary.

Folder Repair is deliberately non-destructive. Existing folders and notes are preserved, and most users will probably never need to use it. It’s there to provide a safe recovery path when macOS permissions or folders aren’t in the state MinkNote expects.

## **Your files, with fewer boundaries**

The theme of 1.6 is interoperability.

MinkNote’s Markdown files aren’t an export format or a copy of your data. **They are your data.** Version 1.6 makes that model more robust when those files are being edited by other apps, changed by tools and agents, or synchronised between Macs.

You can use MinkNote as your editor without making MinkNote the boundary around your notes.