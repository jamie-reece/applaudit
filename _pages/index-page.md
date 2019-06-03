---
layout: page
title: Index
desc: "Review by author"
permalink: /index/
icon: "index"
navigation_weight: 2
---

<!-- site-wide index of authors and associated titles -->

<div class="people-index">

{% assign authors_grouped = site.data.book-data | group_by: 'index' | sort: 'name' %}

<ul class="people-index-entries">
  {% for index in authors_grouped %}
  <h3 id="{{ index.name }}">{{ index.name }}</h3>
    <div class="index-entry-block">
    {% for item in index.items %}
      <li class="index-entry">
        <div class="book-cover">
          <img src="{{ site.baseurl }}/assets/images/{{ item.thumbnail }}">
        </div>
        <div class="book-info">
        <a class="post-link" href="{{ site.baseurl }}/reviews/{{ item.name }}">
          <p>{{ item.author }}</p>
          <p>{{ item.title }}</p>
        </a>
          <p>{{ item.pub-date }}</p>
          <p>{{ item.publisher }}</p>
          <p>{{ item.extents }}</p>
        </div>
      </li>
    {% endfor %}
    </div>
  {% endfor %}
</ul>

</div>