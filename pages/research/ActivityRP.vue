<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
              <h2 id="name">Activity Recognition and Prediction</h2>
              <img class="research-img" src="/img/research/Activity_Recognition_and_Prediction.png" alt="Scene1Cam37">
              <p>
                The goal of this project is to retrieve segments from a video database given a video clip of an activity of interest. Not only does this require development of activity recognition algorithms, these algorithms need to be integrated with video search and retrieval methods in large databases.
              </p>

              <h3>Activity Forecasting <button class="btn btn-primary" @click="showActivity = !showActivity">View</button></h3>
              <div v-show="showActivity">
                <img class="research-img" src="/img/research/Activity_Forecasting.png" alt="Context in Activity">
                <p>
                    In this project, we investigate the problem of forecasting future activities in continuous videos. Ability to successfully forecast activities that are yet to be observed is a very important video understanding problem, and is starting to receive attention in the computer vision literature. An activity forecasting strategy that models the simultaneous and/or sequential nature of human activities on a graph and combines that with the interrelationship between  scene cues and dynamic target trajectories is explored.
                </p>

                <h4><span class="publicationHeader">Sample Publications</span> <button class="btn btn-primary" @click="showActivityPublications = !showActivityPublications">Toggle</button></h4>

                  <ul class="list-group" v-show="showActivityPublications">
                      <li class="list-group-item" v-for="a in activityPublications" :key="a.name">
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

              <h3>Context-Aware Activity Recognition <button class="btn btn-primary" @click="showContent = !showContent">View</button></h3>
              <div v-show="showContent">
                <p>
                    In this project, we are developing methods for recognition of complex activities in video. A core focus area has been on context-aware modeling and recognition strategies, where neighborhood information is exploited to recognize the activities on the targets of interest. We have also shown the utility of usage statistics in searching large video datasets.
                </p>

                <h4><span class="publicationHeader">Sample Publications</span> <button class="btn btn-primary" @click="showContentPublications = !showContentPublications">Toggle</button></h4>

                <ul class="list-group" v-show="showContentPublications">
                    <li class="list-group-item" v-for="a in contentPublications" :key="a.name">
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
      showActivity: false,
      showActivityPublications: false,
      activityPublications: [
        {
          name: 'Joint Prediction of Activity Labels and Starting Times in Untrimmed Videos',
          note: 'T. Mahmud, M. Hasan and A. Roy-Chowdhury, International Conference on Computer Vision, 2017.',
          link: '/publications/ICCV_Tahmida.pdf',
          year: '2017'
        },
        {
          name: 'Learning Temporal Regularity in Video Sequences',
          note: 'M. Hasan, J. Choi, J. Neumann, A. Roy-Chowdhury, and L. Davis, IEEE Conf. on Computer Vision and Pattern Recognition, 2016.',
          link: '/publications/cvpr2016_regularity.pdf',
          extras: [
            {
              name: 'Code',
              path: '/publications/regularity.html'
            }
          ],
          year: '2016'
        },
        {
          name: 'A Poisson Process Model for Activity Forecasting',
          note: 'T. Mahmud, M. Hasan, A. Chakraborty, A. Roy-Chowdhury, IEEE International Conf. on Image Processing, 2016.',
          link: '/publications/icip2016_timeforecast.pdf',
          year: '2016'
        },
        {
          name: 'Context-Aware Activity Forecasting',
          note: 'A. Chakraborty, A. Roy-Chowdhury, Asian Conf. on Computer Vision, 2014.',
          link: '/publications/ACCV_2014.pdf',
          extras: [
          ],
          year: '2014'
        }
      ],
      showContent: false,
      showContentPublications: false,
      contentPublications: [
        {
          name: 'Context Aware Active Learning of Activity Recognition Models',
          note: 'M. Hasan, A. Roy-Chowdhury, International Conference on Computer Vision, 2015.',
          link: '/publications/ICCV2015.pdf',
          extras: [
            {
              name: 'Code',
              path: '/publications/caal.html'
            }
          ],
          year: '2015'
        },
        {
          name: 'Hierarchical Graphical Models for Simultaneous Tracking and Recognition in Wide-Area Scenes',
          note: 'N. M. Nayak, Y. Zhu, and A. K. Roy-Chowdhury, IEEE Transactions on Image Processing, 2015.',
          link: '/publications/tip_twocolumn_revised.pdf',
          year: '2015'
        },
        {
          name: 'Context-Aware Activity Modeling using Hierarchical Conditional Random Fields',
          note: 'Y. Zhu, N. Nayak, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2015.',
          link: '/publications/PAMI14-Activity.pdf',
          extras: [
            {
              name: 'Code',
              path: '/publications/download.html'
            }
          ],
          year: '2015'
        },
        {
          name: 'Modeling Multi-object Interactions using "String of Feature Graphs"',
          note: 'Y. Zhu, N. Nayak, U. Gaur, B. Song, A. Roy-Chowdhury, Computer Vision and Image Understanding, 2013.',
          link: '/publications/cviu13.pdf',
          extras: [

          ],
          year: '2013'
        },
        {
          name: 'Context-Aware Activity Recognition and Anomaly Detection in Video',
          note: 'Y. Zhu, N. Nayak, A. Roy-Chowdhury, IEEE Journal on Selected Topics in Signal Processing, Special Issue on Anomalous Pattern Discovery, February 2013.',
          link: '/publications/jstsp13.pdf',
          extras: [
            {
              name: 'Code',
              path: '/publications/download (2).html'
            }
          ],
          year: '2013'
        },
        {
          name: 'Vector Field Analysis for Multi-Object Behavior Modeling',
          note: 'N. Nayak, Y. Zhu, A. Roy-Chowdhury, Image and Vision Computing, 2013.',
          link: '/publications/N. Nayak, Y. Zhu, A. Roy-Chowdhury, Image and Vision Computing, 2013.',
          extras: [

          ],
          year: '2013'
        },
        {
          name: 'A "String of Feature Graphs" Model for Recognition of Complex Activities in Natural Videos',
          note: 'U. Gaur, Y. Zhu, B. Song, A. Roy-Chowdhury, IEEE Conf. on Computer Vision, 2011.',
          link: '/publications/iccv-SFG.pdf',
          extras: [

          ],
          year: '2011'
        },
        {
          name: 'Features with Feeling - Incorporating User Preferences in Video Categorization',
          note: 'R. Srinivasan, A. Roy-Chowdhury, Asian Conference on Computer Vision, 2012.',
          link: '/publications/accv-2012-final.pdf',
          extras: [

          ],
          year: '2012'
        }
      ]
    }
  }
}
</script>