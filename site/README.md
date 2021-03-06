---
layout: home
footer: Copyright © 2007-present Open Knowledge and Datopian
heroImage: '/hero.svg'
heroText: Frictionless Data
tagline: Bringing simplicity & grace to the data experience
---

<div class="flex flex-row flex-wrap">
  <div class="w-1/3 mx-auto">
    <div class="text-gray-800 text-center p-6">
      <img class="forwho mx-auto py-12" src="/img/for-researchers.svg"></img>
      <h2 class="text-3xl">For Researchers</h2>
      <p class="text-gray-800 text-xl pt-2 font-light pb-12">Easily create reproducible<br> research</p>
    </div>
  </div>
  <div class="w-1/3 mx-auto">
    <div class="text-gray-800 text-center p-6">
      <img class="forwho mx-auto py-12" src="/img/for-data-scientists.svg"></img>
      <h2 class="text-3xl">For Data Scientists</h2>
      <p class="text-gray-800 text-xl pt-2 font-light pb-12">Create pipelines without<br> effort</p>
    </div>
  </div>
  <div class="w-1/3 mx-auto">
    <div class="text-gray-800 text-center p-6">
      <img class="forwho mx-auto py-12" src="/img/for-data-engineers.svg"></img>
      <h2 class="text-3xl">For Data Engineers</h2>
      <p class="text-gray-800 text-xl pt-2 font-light pb-12">Standardize data<br> platforms</p>
    </div>
  </div>
</div>

<div class="banner problems pb-24">
  <h2 class="text-3xl pt-32 pl-8">
    Problems that we solve
  </h2>
  <p class="description text-lg font-light pt-4 pl-8">Those are the problems that we solve..</p>
  <JobsDiagram class="px-48 pt-12"></JobsDiagram>
</div>

<div class="banner">
  <h2 class="text-3xl pl-8">Some of Our Tooling</h2>
  <div class="banner flex flex-row pt-12">
    <div class="w-1/4 text-center mx-auto p-8">
      <img class="w-32 mx-auto py-12" src="/img/data-package.svg"></img>
      <h2 class="text-xl">Data Package</h2>
      <p class="text-lg font-light pt-4">This tool is doing X and Y and also doing Z..</p>
      <a href="www.github.com" class="links-github">GitHub <img src="https://image.flaticon.com/icons/png/512/724/724827.png" class="w-4 h-4 inline"/></a>
    </div>
      <div class="w-1/4 mx-auto text-center p-8">
      <img class="w-24 mx-auto py-12" src="/img/goodtables.svg"></img>
      <h2 class="text-xl pt-4">GoodTables</h2>
      <p class="text-lg font-light pt-4">This tool is doing X and Y and also doing Z..</p>
      <a href="www.github.com" class="links-github">GitHub <img src="https://image.flaticon.com/icons/png/512/724/724827.png" class="w-4 h-4 inline"/></a>
    </div>
      <div class="w-1/4 mx-auto text-center p-8">
      <img class="w-24 mx-auto py-12" src="/img/datahub.svg"></img>
      <h2 class="text-xl pt-4">DataHub</h2>
      <p class="text-lg font-light pt-4">This tool is doing X and Y and also doing Z..</p>
      <a href="www.github.com" class="links-github">GitHub <img src="https://image.flaticon.com/icons/png/512/724/724827.png" class="w-4 h-4 inline"/></a>
    </div>
      <div class="w-1/4 mx-auto text-center p-8">
      <img class="w-24 mx-auto py-12" src="/img/dataflows.svg"></img>
      <h2 class="text-xl pt-4">DataFlows</h2>
      <p class="text-lg font-light pt-4">This tool is doing X and Y and also doing Z..</p>
      <a href="www.github.com" class="links-github">GitHub <img src="https://image.flaticon.com/icons/png/512/724/724827.png" class="w-4 h-4 inline"/></a>
    </div>
  </div>
</div>

<div class="banner pt-24 pb-40">
  <div class="flex flex-row mx-auto">
    <div class="w-1/2 pt-12 pl-8">
      <img src="/img/json-file-dp.png" class="shadow-xl"/>
    </div>
    <div class="w-1/2 pl-20 pt-6">
      <h2 class="text-3xl font-light pb-4">Any dataset format,<br> compatible with <span class="highlighted"> everything </span> </h2>
    </div>
  </div>
</div>

<div class="banner pb-40 ">
  <div class="flex flex-row mx-auto text-right">
    <div class="w-1/2 pr-20">
      <h2 class="text-3xl font-light pt-6 pb-4">Declarative <span class="highlighted">pipelines</span></h2>
    </div>
    <div class="w-1/2 pt-12">
      <img src="/img/json-file-dp.png" class="shadow-xl"/>
    </div>
  </div>
</div>

<div class="banner py-24">
  <h2 class="text-3xl">Trusted by</h2>
  <div class="banner flex flex-row flex-wrap mx-40">
    <div class="w-1/5 mx-auto py-12">
      <img class="w-32 mx-auto py-16" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png"></img>
    </div>
    <div class="w-1/5 mx-auto py-12">
      <img class="w-64 mx-auto py-16" src="https://numfocus.org/wp-content/uploads/2016/07/pandas-logo-300.png"></img>
    </div>
    <div class="w-1/5 mx-auto py-12">
      <img class="w-32 mx-auto py-16" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png"></img>
    </div>
    <div class="w-1/5 mx-auto py-12">
      <img class="w-64 mx-auto py-16" src="https://numfocus.org/wp-content/uploads/2016/07/pandas-logo-300.png"></img>
    </div>
    <div class="w-1/5 mx-auto py-12">
      <img class="w-32 mx-auto py-16" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Kaggle_logo.png"></img>
    </div>
  </div>
</div>

</div>

</div>

</div>


<script>
import JobsDiagram from "@theme/components/JobsDiagram.vue";

export default {
  components: { JobsDiagram }
};
</script>

<style>

.forwho {
  width: 800px;
}

.highlighted {
  color: #1A98FF;
  font-weight: 400;
}

.links-github {
  color: #1A98FF;

}

</style>