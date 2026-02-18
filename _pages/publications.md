---
layout: page
permalink: /research/
title: RESEARCH
nav_order: 3
nav: true
---

<style>
.pubs-h1{
  font-weight: 400;
  font-size: 1.7rem;
  color: var(--global-theme-color);
  margin: 1.2rem 0 0.8rem 0;
}
.pubs-h2{
  font-weight: 400;
  font-size: 1.3rem;
  color: var(--global-theme-color);
  margin: 1.6rem 0 0.6rem 0;
}

</style>

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">

<h2 class="pubs-h1">Publications</h2>

<h3 class="pubs-h2">Elections and Electoral Manipulation</h3>
{% bibliography --file papers --query @*[section=elections] --group_by none --sort_by year --order descending %}

<h3 class="pubs-h2">Money in Politics</h3>
{% bibliography --file papers --query @*[section=money] --group_by none --sort_by year --order descending %}

<h3 class="pubs-h2">Methodology</h3>
{% bibliography --file papers --query @*[section=methodology] --group_by none --sort_by year --order descending %}

<h3 class="pubs-h2">Conflict</h3>
{% bibliography --file papers --query @*[section=conflict] --group_by none --sort_by year --order descending %}

<h2 class="pubs-h1">Working Papers and Work in Progress</h2>
{% bibliography --file papers --query @*[section=working] --group_by none --sort_by sortkey --order ascending %}


</div>
