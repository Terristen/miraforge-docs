---
title: Organize a novel
description: How a novel sits in an Archive. Both trees, where the prose goes, the Outliner, Scrapbook, and Recycle.
---

A novel is one kind of work you can keep in an Archive. This page is that example. It does not survey other kinds.

Two arrangements are both valid. Act is optional.

- Book → Chapter → Scene
- Book → Act → Chapter → Scene

A book may hold chapters directly. It may also group those chapters into acts. Use acts when a stretch of the book wants a name of its own. Leave them out when it does not.

## Where the prose goes

The Scene is where you put the prose. A scene is a Markdown file.

An act has no prose file. A chapter has no prose file. Opening a chapter shows that chapter’s scenes in order: the chapter title first, then each scene, with a rule between them. Empty scenes show as placeholders. The chapter view is for reading the stretch. You still write in the scene.

Opening an act shows a table of contents of its chapters. Each entry opens that chapter’s view.

## The Outliner

A book has the Outliner. Click the book in the manuscript. The Outliner opens in the center, in place of the editor.

The cards carry short summaries, not the prose: the title, the synopsis, and the point of view when you have set it (the card labels that POV). Open a scene when you want the words. Double-click the scene card, or use Open. If the scene does not have a file yet, Studio creates the Markdown and opens it.

On the canvas:

- Acts, when you use them, stack from top to bottom.
- Chapters run from left to right, inside an act or directly under the book.
- Scenes stack from top to bottom inside a chapter.

To add from the Outliner:

- The control on a chapter adds a chapter after it, in the same place, and seeds one empty scene.
- The control on an act adds an act after it, and seeds one empty chapter with one empty scene.
- The control under the last scene in a chapter adds a scene at the end of that chapter.

You can also add from the Manuscript menu while the Archive is open. A new book starts there. New titles start empty until you name them. Double-click a title to name it. Enter keeps the name. Escape puts the old name back.

While the Outliner is open, clicking a chapter or a scene in the manuscript selects that card and keeps you on the canvas. Open is what leaves the canvas: Open on a scene goes to the prose, Open on a chapter goes to the chapter view.

<figure class="coming-shot">
  <div class="plate" role="img" aria-label="Empty frame"></div>
  <figcaption>This screenshot is coming. It will show the Outliner for a book, with chapter cards and the scene summaries on them.</figcaption>
</figure>

## Scrapbook

Each Archive has one Scrapbook. It is listed beside the books, not inside a book. It is a place to set material aside without deleting it.

Send to Scrapbook is on the context menu for an act, a chapter, or a scene. It asks you to confirm, then moves that part, and everything nested under it, out of the book and into the Scrapbook. The files stay in the Archive. What you parked can go back into a book later: drag it, and drop it where that kind of piece belongs. A scene has to land in a chapter. A chapter has to land in an act, or on the book if you are not using acts.

Clicking the Scrapbook opens it on the same kind of canvas as a book.

## Recycle

Recycle replaces a plain delete. It is on the context menu. It asks you to confirm, then removes that part of the book and what is nested under it.

Any Markdown that nothing remaining still uses is moved into a folder named Recycle at the root of the Archive. Files that are still attached to something you kept are not moved. Studio does not empty Recycle on its own.

To put a file back, move it out of the Recycle folder and attach it to a new or existing scene. There is no automatic undo. To empty the folder, use Empty Recycle Bin on the Recycle folder’s own context menu.

You can recycle a book, after you confirm. You cannot recycle the Scrapbook itself.

Next: [Revise what you wrote](/everyday/revise-what-you-wrote/).
