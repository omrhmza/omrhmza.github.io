---
layout: page
title: الأقسام والمواضيع
permalink: /tags/
---

{% assign tags = site.tags | sort %}

<div class="tags-container">
  {% for tag in tags %}
    {% capture tag_name %}{{ tag[0] }}{% endcapture %}
    <div id="{{ tag_name | slugify }}" style="margin-top: 40px;">
      <h2 style="border-bottom: 2px solid #eee; padding-bottom: 5px; color: #333;">
        قسم: {{ tag_name }}
      </h2>
      <ul style="list-style-type: circle;">
        {% for post in tag[1] %}
          <li style="margin-bottom: 8px;">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <small style="color: #888;"> - {{ post.date | date: "%Y/%m/%d" }}</small>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

<p style="margin-top: 50px;"><a href="{{ '/' | relative_url }}">← العودة للرئيسية</a></p>
