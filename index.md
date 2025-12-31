---
layout: home
title: الرئيسية
---

## نبذة عني
مرحباً! أنا صاحب هذه المدونة، مهتم بالتقنية والتدوين. هذا المكان هو مساحتي الخاصة لمشاركة ما أتعلمه.

<a href="{{ '/about' | relative_url }}" style="display: inline-block; padding: 8px 15px; background-color: #0366d6; color: white; border-radius: 5px; text-decoration: none; font-size: 0.9em;">اقرأ المزيد عني</a>

---

### الأقسام
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    {% capture tag_name %}{{ tag[0] }}{% endcapture %}
    <a href="{{ '/tags' | relative_url }}#{{ tag_name | slugify }}" style="background: #f1f8ff; color: #0366d6; border: 1px solid #c8e1ff; padding: 3px 12px; border-radius: 15px; text-decoration: none; font-size: 0.85em;">
      #{{ tag_name }}
    </a>
  {% endfor %}
</div>

---

### أحدث المقالات
<ul style="list-style: none; padding-right: 0;">
  {% for post in site.posts limit:5 %}
    <li style="margin-bottom: 15px;">
      <a href="{{ post.url | relative_url }}" style="font-weight: bold; font-size: 1.1em; text-decoration: none; color: #d33501;">{{ post.title }}</a>
      <br>
      <small style="color: #666;">نُشر في: {{ post.date | date: "%Y/%m/%d" }}</small>
    </li>
  {% endfor %}
</ul>
