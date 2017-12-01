<template>
  <div class="row header-parent">
        <div class="col-md-3 col-xs-3 header-img-container"><img class="header-img" src="/img/amitrc_cover.jpg" alt="The Team"></div>
        <div class="col-md-3 col-xs-3 header-img-container"><img class="header-img" src="/img/research/Activity_Recognition_and_Prediction.png" alt=""></div>
        <div class="col-md-3 col-xs-3 header-img-container"><img class="header-img" src="/img/top_row_3.png" alt=""></div>
        <div class="col-md-3 col-xs-3 header-img-container"><img class="header-img" src="/img/top_row_4.png" alt=""></div>
      </div>
</template>

<style scoped>
.header-img-container {
    padding-left: 0;
    padding-right: 0;
    height: 100%;
}

.header-parent {
    height: 17vh;
    overflow: hidden;
    margin-left: 0;
    margin-right: 0;
    border-top: 5px solid #ffc800;
    border-bottom: 5px solid #ffc800;
}

@media (max-width: 1200px) {
    .header-parent {
        height: 17vh;
        overflow: hidden;
        margin-left: 0;
        margin-right: 0;
        border-top: 5px solid #ffc800;
        border-bottom: 5px solid #ffc800;
    }
}

@media (max-width: 980px) {
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
    height: 100%;
}
</style>
