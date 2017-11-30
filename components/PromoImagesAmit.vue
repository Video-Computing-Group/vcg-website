<template>
  <div class="row header-parent">
        <div class="col-md-3 col-xs-3 header-img-container"><img class="header-img" src="/img/amitrc_cover.jpg" alt="The Team"></div>
        <div class="col-md-3 col-xs-3 header-img-container"><img class="header-img" src="/img/top_row_2.png" alt=""></div>
        <div class="col-md-3 col-xs-3 header-img-container"><img class="header-img" src="/img/top_row_3.png" alt=""></div>
        <div class="col-md-3 col-xs-3 header-img-container"><img class="header-img" src="/img/top_row_4.png" alt=""></div>
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

@media (max-width: 900px) {
    .header-parent {
        height: 10vh;
        overflow: hidden;
        margin-left: 0;
        margin-right: 0;
        border-top: 5px solid #ffc800;
        border-bottom: 5px solid #ffc800;
    }
}

@media (max-width: 600px) {
    .header-parent {
        height: 8vh;
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
