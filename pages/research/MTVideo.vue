<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
              <h2 id="name">Multi-terminal Video Compression</h2>
              <img class="research-img" src="/img/research/Figure2.png" alt="Pictorial description of the proposed correspondence tracking algorithm. The numbers in circles indicate the steps of the algorithm.">
                <p>
                  Traditional video compression deals with encoding a video sequence after removing the spatial redundancy in each video frame and the temporal redundancy between the frames. On the other hand, if we have multiple video sequences from different cameras where there is a significant overlap between the sequences, these methods are inefficient since they do not consider the redundancy between the video sequences at different sensors. In our research, we develop a distributed video compression scheme that can exploit this inter-sensor redundancy, with minimal communication between the sensors. The scheme is based on transform coding of distributed sources and exploiting the geometrical relationships between the locations of the sensors. The geometry is used to align the video sequences and distributed quantization of transform coefficients is used to eliminate spatial and inter-sensor redundancy. We develop a Distributed Motion Estimation (DME) algorithm that combines traditional block-matching based motion estimation with the epipolar geometry of two cameras. Results demonstrate that our algorithm yields a significant saving in bit rate on the overlapping portion of multiple views. The project involved active collaboration with <a href="http://www.ee.ucr.edu/~ertem/">Prof. E. Tuncel of Electrical Engineering at UCR</a>.
                </p>

               <h4><span class="publicationHeader">Sample Publications</span> <button class="btn btn-primary" @click="showVideoPublications = !showVideoPublications">Toggle</button></h4>

                <ul class="list-group" v-show="showVideoPublications">
                    <li class="list-group-item" v-for="a in videoPublications" :key="a.name">
                    <a :href="a.link">
                        <h5>{{a.name}}</h5>
                        <p><small>{{a.note}}</small></p>
                    </a>
                    <div class="extraContainer" v-if="a.extras !== undefined">
                        <a class="btn btn-primary" v-for="extra in a.extras" :href="extra.path" :key="extra.path">{{extra.name}}</a>
                    </div>
                    </li>
                </ul>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  data: function () {
    return {
      showVideoPublications: false,
      videoPublications: [
        {
          name: 'Model-based Multi-view Video Compression Using Distributed Source Coding Principles',
          note: 'J. Nayak, B. Song, E. Tuncel, A. Roy-Chowdhury. Distributed Source Coding: Theory, Algorithms and Applications (Eds. P. Luigi and M. Gatspar), Elsevier, 2009.',
          link: '/publications/MultiViewDVC.pdf',
          extras: [

          ],
          year: '2009'
        },
        {
          name: 'A Multi-Terminal Model-Based Video Compression Algorithm',
          note: 'B. Song, A. Roy-Chowdhury, E. Tuncel, IEEE Intl. Conf. on Image Processing, 2006.',
          link: '/publications/icip06-distributed.pdf',
          extras: [

          ],
          year: '2006'
        },
        {
          name: 'Towards A Multi-Terminal Video Compression Algorithm Using Epipolar Geometry',
          note: 'B. Song, O. Bursalioglu, E. Tuncel, A. Roy-Chowdhury, IEEE Intl. Conf. on Acoustics, Speech and Signal Processing, 2006. (Best Student Paper Award)',
          link: '/publications/icassp06.pdf',
          extras: [

          ],
          year: '2006'
        }
      ]
    }
  }
}
</script>