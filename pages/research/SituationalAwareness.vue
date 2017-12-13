<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
              <h2 id="name">Situational Awareness Under Resource Constraints</h2>
              <img class="research-img" src="/img/research/Overview.png" alt="Overview">
                <p>
                  The goal of this project is to facilitate the timely retrieval of dynamic situational awareness information from field deployed information-rich sensors by an operational center in disaster recovery or search and rescue missions, which are typically characterized by resource-constrained uncertain environments. Towards realizing a networked system that facilitates the retrieval of time-critical, operation-relevant situational awareness this project will address the following (non-exhaustive list) challenges: (a) How do we intelligently activate field sensors and acquire and process data to extract semantically relevant information that is easily interpreted? (b) How do we formulate expressive and effective queries that enable the near-time retrieval of the relevant situational awareness information while adhering to resource constraints? (c) How do we impose a network structure that facilitates cost-effective query propagation and response retrieval? The project encompasses the following three highly inter-related tasks:
                </p>

                <p>
                  <strong>Task A</strong>: Resource-Constrained Data Acquisition and Analysis. This task looks at how to reconfigure the network and adapt video analysis in real time to meet different (sometimes conflicting) application requirements, given resource constraints.
                </p>

                <p>
                  <strong>Task B</strong>: Information Fusion Under Resource Constraints. This task proposes methods to locally process and fuse the content generated, given the query needs and resource constraints. It also considers how to summarize the content received in response to the queries to facilitate further analysis at the operation center.
                </p>

                <p>
                  <strong>Task C</strong>: Cost-effective Query Formulation and Retrieval. This task will address challenges in query formulation, refinement and retrieval, including (i) prioritizing queries as per importance criteria, (ii) effective query dissemination in the field, and (iii) effective retrieval of the sensed information.
                </p>
              <hr/>

              <h3>Video Analysis under Resource Constraints
                <button class="btn btn-primary" @click="showAnalysis = !showAnalysis">
                  <span v-if="!showAnalysis">+</span>
                  <span v-else>-</span>
                </button>
              </h3>
              <div v-show="showAnalysis">
                <img class="research-img" src="/img/research/Video_Analysis_under_Resource_Constraints.png">
                <p>
                  Analysis of videos is known to be time-consuming and resource hungry. We are developing methods for scene understanding in video with limited resources. Specifically, we have developed methods for object detection and tracking that are aware of the resource constraints, as well as object and scene categorization methods which are computationally more efficient than many state-of-the-art methods.
                </p>

                <h4>
                  <span class="publicationHeader">Sample Publications</span>
                  <button class="btn btn-primary" @click="showAnalysisPublications = !showAnalysisPublications">
                    <span v-if="!showAnalysisPublications">+</span>
                    <span v-else>-</span>
                  </button>
                </h4>

                <ul class="list-group" v-show="showAnalysisPublications">
                    <li class="list-group-item" v-for="a in analysisPublications" :key="a.name">
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
  width: 80%;
}
</style>

<script>
export default {
  data: function () {
    return {
      showAnalysis: false,
      showAnalysisPublications: false,
      analysisPublications: [
        {
          name: 'Managing Redundant Content in Bandwidth Constrained Wireless Networks',
          note: 'T. Dao, S. Krishnamurthy, A. Roy-Chowdhury, T. LaPorta, International Conf. on emerging Networking EXperiments and Technologies, 2014.',
          link: '/publications/conext_2014.pdf',
          extras: [
          ],
          year: '2014'
        },
        {
          name: 'Generating Diverse Image Datasets with Limited Labeling',
          note: 'N. C. Mithun, R. Panda, A. Roy-Chowdhury, ACM International Conf. on Multimedia, 2016.',
          link: '/publications/ACM_2016.pdf',
          year: '2016'
        },
        {
          name: 'Opportunistic Image Acquisition of Individual and Group Activities in a Distributed Camera Network',
          note: 'C. Ding, J. H. Bappy, J. A. Farrell, A. Roy-Chowdhury, IEEE Transactions on Circuits and Systems for Video Technology, 2016.',
          link: '/publications/TCSVT_2016.pdf',
          year: '2016'
        },
        {
          name: 'Multi-View Surveillance Video Summarization via Joint Embedding and Sparse Optimization',
          note: 'R. Panda and A. Roy-Chowdhury, IEEE Trans. on Multimedia, 2017.',
          link: '/publications/TMM_Rameswar.pdf',
          year: '2017'
        },
        {
          name: 'Unsupervised Adaptive Re-identification in Open World Dynamic Camera Networks',
          note: 'R. Panda, A. H. Bhuiyan, V. Murino and A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017 (Spotlight).',
          link: '/publications/cvpr2017reid.pdf',
          year: '2017'
        },
        {
          name: 'Weakly Supervised Summarization of Web Videos',
          note: 'R. Panda, A. Das, Z. Wu, J. Ernst and A. Roy-Chowdhury, International Conference on Computer Vision, 2017.',
          link: '/publications/ICCV_Rameswar.pdf',
          year: '2017'
        }
      ]
    }
  }
}
</script>