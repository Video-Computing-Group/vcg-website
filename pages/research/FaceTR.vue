<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
              <h2 id="name">Face Tracking and Recognition</h2>
              <img class="research-img" src="/img/research/Face_Tracking_and_Recognition.png">
              <p>
                 Face recognition continues to be one of the important problems in computer vision. Our goal is to develop video-based face tracking and recognition algorithms that are robust to changes of pose and lighting. 
              </p>

              <h3>Face Recognition in Art Images
                <button class="btn btn-primary" @click="showArt = !showArt">
                  <span v-if="!showArt">+</span>
                  <span v-else>-</span>
                </button>
              </h3>
              <div v-show="showArt">
                <img class="research-img" src="/img/research/FaceRecognition.png" alt="Faces">
                <p>
                  Portraits are subject to several complexities such as aesthetic sensibilities of the artist or social standing of the sitter. Moreover, the number of samples available to model these effects is often limited. For robust automated face recognition, it also becomes important to model the characteristics of the artist. From a set of portraiture where the identities of subjects is known, we derive appropriate features that are based on domain knowledge of artistic renderings and learn statistical models for the distributions of the match and non-match scores, which we refer to as the portrait feature space (PFS). The features considered include well-known facial recognition attributes like local features and anthropometric distances. Thereafter, we learn which of the chosen features were emphasized in various works involving (a) same artist depicting same sitter, (b) same sitter but by different artists, (c) same artist but depicting different sitters, and we show that the knowledge of these specific choices can provide valuable information regarding the sitter and/or artist. Further, we use the learned PFS on a number of cases that have been open questions to art historians. They are usually in the form of validating two portraits as belonging to the same person. Using statistical hypothesis tests on the PFS, we provide quantitative measures of similarity for each of these questions. It is, to the best of our knowledge, the first study that applies automated face recognition technologies to the analysis of portraits of multiple subjects in various forms - paintings, death masks, sculptures.
                </p>

                <h4>
                  <span class="publicationHeader">Sample Publications</span>
                  <button class="btn btn-primary" @click="showArtPublications = !showArtPublications">
                    <span v-if="!showArtPublications">+</span>
                    <span v-else>-</span>
                  </button>
                </h4>

                <ul class="list-group" v-show="showArtPublications">
                    <li class="list-group-item" v-for="a in artPublications" :key="a.name">
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
              <hr/>

              <h3>Face Tracking and Recognition in Video
                <button class="btn btn-primary" @click="showFace = !showFace">
                  <span v-if="!showFace">+</span>
                  <span v-else>-</span>
                </button>
              </h3>
              <div v-show="showFace">
                <video class="research-img" width="25%" controls>
                  <source src="/img/research/CorridorDemo.mp4" type="video/mp4">
                </video>
                <p>
                  In this project, we have studied the problem of robust face tracking and recognition in the presence of large pose and illumination changes. First, we developed a theoretical model for understanding the effects of lighting, motion and shape in the process of image formation, bulding upon multilinear tensor algebra. This has led to the development of robust tracking of facial features and an analysis-by-synthesis framework for face recognition from video sequences.
                </p>

                <h4>
                  <span class="publicationHeader">Sample Publications</span>
                  <button class="btn btn-primary" @click="showFacePublications = !showFacePublications">
                    <span v-if="!showFacePublications">+</span>
                    <span v-else>-</span>
                  </button>
                </h4>

                <ul class="list-group" v-show="showFacePublications">
                    <li class="list-group-item" v-for="a in facePublications" :key="a.name">
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
   </div>
</template>

<style scoped>
.research-img {
  width: 70%;
}
</style>

<script>
export default {
  data: function () {
    return {
      showArt: false,
      showArtPublications: false,
      artPublications: [
        {
          name: 'Computerized Face Recognition in Renaissance Portrait Art',
          note: 'R. Srinivasan, C. Rudolph, and A. K. Roy-Chowdhury, Signal Processing Magazine. 2015.',
          link: '/publications/spm2015.pdf',
          extras: [
            {
              name: 'Supplmental Material',
              path: '/publications/SPM2015_SM.pdf'
            }
          ],
          year: '2015'
        },
        {
          name: 'Recognizing the Royals - Leveraging Computerized Face Recognition for Identifying Subjects in Ancient Artworks',
          note: 'R. Srinivasan, A. Roy-Chowdhury, C. Rudolph, J. Kohl, ACM Intl. Conf. on Multimedia, 2013.',
          link: '/publications/acm-mm2013.pdf',
          extras: [

          ],
          year: '2013'
        },
        {
          name: 'Quantitative Modeling of Artists Styles in Renaissance Face Portraiture',
          note: 'R. Srinivasan, A. Roy-Chowdhury, C.Rudolph, J. Kohl, 2nd International Workshop on Historical Document Imaging and Processing, 2013.',
          link: '/publications/icdar2013.pdf',
          extras: [

          ],
          year: '2013'
        }
      ],
      showFace: false,
      showFacePublications: false,
      facePublications: [
        {
          name: 'A Physics-Based Analysis of Image Appearance Models',
          note: 'Y. Xu, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, August 2011.',
          link: '/publications/PAMI_2011.pdf',
          extras: [
            {
              name: 'Supplmental Material',
              path: '/publications/SupplementaryMaterial_PAMI2011.pdf'
            }
          ],
          year: '2011'
        },
        {
          name: 'A Theoretical Analysis of Linear and Multi-linear Models of Image Appearance',
          note: 'Y. Xu and A. Roy-Chowdhury.  IEEE Conf. on Computer Vision and Pattern Recognition, 2008.',
          link: '/publications/cvpr08_theory.pdf',
          extras: [],
          year: '2008'
        },
        {
          name: 'Learning A Geometry-Integrated Image Appearance Manifold From A Small Training Set',
          note: 'Y. Xu and A. Roy-Chowdhury. IEEE Conf. on Computer Vision and Pattern Recognition, 2008.',
          link: '/publications/cvpr08_GAM.pdf',
          extras: [],
          year: '2008'
        },
        {
          name: 'Inverse Compositional Estimation of 3D Pose And Lighting in Dynamic Scenes',
          note: 'Y. Xu and A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, July 2008.',
          link: '/publications/pami08.pdf',
          extras: [],
          year: '2008'
        },
        {
          name: 'Integrating Illumination, Motion and Shape Models for Robust Face Recognition In Video',
          note: 'Y.Xu, A. Roy-Chowdhury, and K. Patel. EURASIP Journal on Advances in Signal Processing: Advanced Signal Processing and Pattern Recognition Methods for Biometrics, 2008.',
          link: '/publications/integratingillumination.pdf',
          extras: [],
          year: '2008'
        },
        {
          name: 'Integrating Motion, Illumination and Structure in Video Sequences, With Applications in Illumination-Invariant Tracking',
          note: 'Y. Xu and A. Roy-Chowdhury.  IEEE Trans. on Pattern Analysis and Machine Intelligence, May 2007.',
          link: '/publications/integratingmotion.pdf',
          extras: [],
          year: '2007'
        },
        {
          name: 'Integrating the Effects of Motion, Illumination and Structure in Video Sequences',
          note: 'Y. Xu and A. Roy-Chowdhury, IEEE Intl. Conf. on Computer Vision, 2005.',
          link: '/publications/iccv05.pdf',
          extras: [],
          year: '2005'
        },
        {
          name: 'Super-resolved Facial Texture Under Changing Pose and Illumination',
          note: 'J. Yu, B. Bhanu, Y. Xu, A. Roy-Chowdhury, IEEE Intl. Conf. on Image Processing, 2007.',
          link: '/publications/icip07-face.pdf',
          extras: [],
          year: ''
        }
      ]
    }
  }
}
</script>