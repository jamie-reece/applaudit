---
layout: page
title: People
desc: "Authors &c."
permalink: /people/
icon: "contact-book"
navigation_weight: 1
---

{% assign authors_grouped = site.data.book-data | group_by: 'index' | sort: 'name' %}

<div class="people-index">

{% assign authors_grouped = site.data.book-data | group_by: 'index' | sort: 'name' %}

<ul class="people-index-navigation">
  <li class="index-letter">
    <a href="#A">A</a><span class="index-delimiter">-</span>
    <a href="#B">B</a><span class="index-delimiter">-</span>
    <a href="#C">C</a><span class="index-delimiter">-</span>
    <a href="#D">D</a><span class="index-delimiter">-</span>
    <a href="#E">E</a><span class="index-delimiter">-</span>
    <a href="#F">F</a><span class="index-delimiter">-</span>
    <a href="#G">G</a><span class="index-delimiter">-</span>
    <a href="#H">H</a><span class="index-delimiter">-</span>
    <a href="#I">I</a><span class="index-delimiter">-</span>
    <a href="#J">J</a><span class="index-delimiter">-</span>
    <a href="#K">K</a><span class="index-delimiter">-</span>
    <a href="#L">L</a><span class="index-delimiter">-</span>
    <a href="#M">M</a><span class="index-delimiter">-</span>
    <a href="#N">N</a><span class="index-delimiter">-</span>
    <a href="#O">O</a><span class="index-delimiter">-</span>
    <a href="#P">P</a><span class="index-delimiter">-</span>
    <a href="#Q">Q</a><span class="index-delimiter">-</span>
    <a href="#R">R</a><span class="index-delimiter">-</span>
    <a href="#S">S</a><span class="index-delimiter">-</span>
    <a href="#T">T</a><span class="index-delimiter">-</span>
    <a href="#U">U</a><span class="index-delimiter">-</span>
    <a href="#V">V</a><span class="index-delimiter">-</span>
    <a href="#W">W</a><span class="index-delimiter">-</span>
    <a href="#XYZ">XYZ</a>
  </li>
</ul>

<ul class="people-index-entries">
  {% for index in authors_grouped %}
  <h3 id="{{ index.name }}">{{ index.name }}</h3>
    {% for item in index.items %}
      <li class="index-entry">
        <a class="link-to-post" href="{{ site.baseurl }}/reviews/{{ item.name }}">
          <p>{{ item.author }}–{{ item.title }}</p>
        </a>
      </li>
    {% endfor %}
  {% endfor %}
</ul>

</div>