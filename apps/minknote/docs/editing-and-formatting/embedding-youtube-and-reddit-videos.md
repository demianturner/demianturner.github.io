---
layout: minknote-docs
title: "Embedding YouTube and Reddit videos"
category: editing-and-formatting
category_label: "Editing and Formatting"
nav_order: 50
permalink: /apps/minknote/docs/editing-and-formatting/embedding-youtube-and-reddit-videos/
uuid: 55BDC801-5C6E-46E0-A94D-703B7900B8CA
generated: true
---
![](/apps/minknote/docs/images/editing-and-formatting/yt-reddit-embeds.png)
Add a YouTube or Reddit video to a note with a shortcode. MinkNote turns the shortcode into a visual preview in WYSIWYG mode, while keeping the shortcode as plain text in the Markdown source.

You do not need to paste a video's HTML embed code. Copy its video or post ID and place it inside the matching shortcode.

## Embed a YouTube video

1. Open the video on YouTube and copy its ID from the address bar.
    * For a link like `https://www.youtube.com/watch?v=9tzgwwZOvaE`, the ID is the 11-character value after `v=`. Stop before any `&` and the other URL options.
    * For a short link like `https://youtu.be/9tzgwwZOvaE`, the ID is the part after the final `/`. Stop before any `?` and the other URL options.
2. Add the shortcode to your note, replacing the example ID with the video's ID:

{% raw %}
```
{{youtube:9tzgwwZOvaE}}
```
{% endraw %}

> Switch to MD mode to view embed code

The ID must be 11 characters. In WYSIWYG mode, MinkNote shows a clickable thumbnail. Click it to open the video on YouTube. YouTube videos do not play inside the note.

## Embed a Reddit video

1. Open the Reddit post that contains the video. Use the post's full link, then find the ID immediately after `/comments/` in the address. For example, in `https://www.reddit.com/r/example/comments/1w4fivw/a_video_post/`, the post ID is `1w4fivw`.
2. Add the shortcode to your note, replacing the example ID with the post's ID:

{% raw %}
```
{{reddit:1w4fivw}}
```
{% endraw %}
    
> Switch to MD mode to view embed code

In WYSIWYG mode, MinkNote loads the video in the note with the standard video controls. Reddit video IDs contain 5 to 10 lowercase letters or numbers. MinkNote streams the video from Reddit; it does not save a video file in your project.

## Autoplay Reddit videos

Reddit videos do not autoplay by default. To change this, open **Settings > Appearance > Display Options** and turn on **Autoplay Reddit videos**. Autoplayed videos start muted. Use the video controls to turn on sound.

## If you only see the shortcode

Shortcodes are shown as text in Markdown mode. Switch to WYSIWYG mode to see the video thumbnail or player. The shortcode remains in the note source, so you can edit or copy it at any time.

The preview needs an internet connection. YouTube thumbnails load from YouTube, and Reddit videos are resolved and streamed from Reddit when the player loads. If a Reddit video is unavailable, MinkNote shows a link to open the original post.
