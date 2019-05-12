---
layout: page
title: People
desc: "Authors &c."
permalink: /people/
icon: "contact-book"
navigation_weight: 1
---

<!-- site-wide index of authors and associated titles -->

<div class="people-index">

{% assign authors_grouped = site.data.book-data | group_by: 'index' | sort: 'name' %}

<ul class="people-index-navigation">
{% for index in authors_grouped %}
  <li class="index-letter">
    <a href="#{{ index.name }}">{{ index.name }}</a>
  </li>
{% endfor %}
</ul>

<ul class="people-index-entries">
  {% for index in authors_grouped %}
  <h3 id="{{ index.name }}">{{ index.name }}</h3>
    {% for item in index.items %}
    <li>
      <a href="{{ site.baseurl }}/reviews/{{ item.name }}">{{ item.author }} – {{ item.title }}</a>
    </li>
    {% endfor %}
  {% endfor %}
</ul>

</div>