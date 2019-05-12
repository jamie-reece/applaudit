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

{% assign people = site.data.book-data | sort: 'author' %}

<ul class="people-index-navigation">
  {% for p in people %}
  <li class="index-letter">
    <a href="#{{ p.author | slice: 0 }}">{{ p.author | slice: 0 }}</a>
  </li>
  {% endfor %}
</ul>


<ul class="people-index-entries">
  {% for p in people %}
  <li class="index-entry">
    <h2 id="{{ p.author | slice: 0 }}" class="index-heading">{{ p.author | slice: 0 }}</h2>
    <a href="{{ site.baseurl }}/reviews/{{ p.name}}">{{ p.author }} – {{ p.title }}</a>
  </li>
  {% endfor %}
</ul>

</div>