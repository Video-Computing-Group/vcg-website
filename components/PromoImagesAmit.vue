<template>
  <div class="row header-parent">
        <div class="col-md-3 col-xs-6 header-img-container"><img class="header-img" src="/img/amitrc_cover.jpg" alt="The Team"></div>
        <div class="col-md-3 col-xs-6 header-img-container"><img class="header-img" src="/img/image3.png" alt=""></div>
        <div class="col-md-3 col-xs-6 header-img-container"><img class="header-img" src="/img/image4.png" alt=""></div>
        <div class="col-md-3 col-xs-6 header-img-container"><img class="header-img" src="/img/image5.png" alt=""></div>
      </div>
</template>

<style scoped>
.header-img-container {
    padding-left: 0;
    padding-right: 0;
}

.header-parent {
    height: 15vh;
    overflow: hidden;
    margin-left: 0;
    margin-right: 0;
    border-top: 5px solid #ffc800;
    border-bottom: 5px solid #ffc800;
}

@media (max-width: 700px) {
    .header-parent {
        height: 13vh;
        overflow: hidden;
        margin-left: 0;
        margin-right: 0;
        border-top: 5px solid #ffc800;
        border-bottom: 5px solid #ffc800;
    }
}

.header-img {
    width: 100%;
}
</style>
