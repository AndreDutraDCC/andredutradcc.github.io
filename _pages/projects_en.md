---
layout: page
title: Portfolio (en)
permalink: /projects_en/
description: This portfolio features my main projects on Data Science and Machine Learning, sorted by subject.

(**WIP - Thise page is currently under translation, since the original projects were made in brazilian portuguese. Translated projects will have English titles)
nav: true
nav_order: 1
display_categories:
  [
    "Explainable AI e Engenharia de Features",
    "Transformer LLMs e Processamento de Linguagem Natural",
    "Computação Visual e Processamento de Imagens",
    "Descriptive Learning, Mineração e Análise de Dados",
    "Heurísticas e Otimização em Espaço de Estados",
    "Machine Learning Clássico",
    "Ética na Computação e no Manejo de IAs",
  ]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects_en | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects_en | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
