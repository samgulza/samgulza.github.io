---
layout: default
title: "카테고리"
---

<div class="container">
  <h1>카테고리</h1>

  {% for category in site.categories %}
    {% assign category_name = category[0] %}
    {% if category_name == "수술 전 교육" %}
      {% assign display_name = "💉 수술 전 교육" %}
    {% elsif category_name == "수술 후 교육" %}
      {% assign display_name = "🩺 수술 후 교육" %}
    {% elsif category_name == "퇴원 교육" %}
      {% assign display_name = "🏥 퇴원 교육" %}
    {% elsif category_name == "자주 묻는 질문" %}
      {% assign display_name = "❓ 자주 묻는 질문" %}
    {% else %}
      {% assign display_name = category_name %}
    {% endif %}

    <h2 id="{{ category_name | slugify }}">{{ display_name }}</h2>
    <ul>
      {% for post in category[1] %}
        <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>
