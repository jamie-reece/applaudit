---
layout: page
title: People
desc: "Authors &c."
permalink: /people/
icon: "contact-book"
navigation_weight: 2
---

{% assign authors_grouped = site.data.book-data | group_by: 'index' | sort: 'name' %}

<div class="people-index">

<ul class="people-index-entries">
  {% for index in authors_grouped %}
  <h3 id="{{ index.name }}">{{ index.name }}</h3>
    {% assign items_grouped = index.items | group_by: 'author' %}
    {% for items in items_grouped %}
      <li class="index-item">
        <p class="author-section" id="{{ items.name | slugify }}">{{ items.name }}</p>
        <ul class="author-titles">
          {% for book in items.items %}
          <li>
            <!-- <img class="list-bullet" src="{{ site.baseurl }}/assets/icons/agenda.png"> -->
            <span>-</span>
            {% if book.name == 'coming-soon' %}
            <a class="link-to-post" href="{{ site.baseurl }}/404.html">
              {{ book.title }}
            </a>
            {% else %}
            <a class="link-to-post" href="{{ site.baseurl }}/reviews/{{ book.name }}">
              {{ book.title }}
            </a>
            {% endif %}
          </li>
          {% endfor %}
        </ul>
      </li>
    {% endfor %}
  {% endfor %}
</ul>

<!-- liquid logic (of above) -->

<!-- {% for index in authors_grouped %}
  {{ index.name }}
  {% assign items_grouped = index.items | group_by: 'author' %}
  {% for items in items_grouped %}
    {{ items.name }}
    {% for book in items.items %}
      {{ book.title }}
    {% endfor %}
  {% endfor %}
{% endfor %} -->

</div>