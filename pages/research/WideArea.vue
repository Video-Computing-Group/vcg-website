<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
              <h2 id="name">Wide Area Scene Analysis in Vision Network</h2>
              <center>
                <video id="video" width="60%" controls>
                    <source src="/img/research/Tracking_results.mp4" type="video/mp4">
                    Your browser does not support HTML5 video
                </video>
              </center>
                <p>
                    Networks of cameras are nowadays installed in various places. However, most of the data collected by such networks are analyzed manually, thus severely limiting their application. In this research, which is divided into different sub-projects, we are studying the core scientific and technical issues related to camera networks, such as information fusion, network control, activity analysis, the interplay between networking and computer vision, and computational complexity. 
                </p>

              <hr/>

              <h3>Camera Network Tracking and Re-identification <button class="btn btn-primary" @click="showCameraNetwork = !showCameraNetwork">View</button></h3>
              
              <div v-show="showCameraNetwork">
                <p>
                    In many computer vision tasks it is often desirable to identify and monitor people as they move through a network of non-overlapping cameras. This is especially challenging as for a network of cameras issues such as changes of scale, illumination, viewing angle and pose start to arise. In this project we try to address this inter camera person association problem. We have shown that incorporating a consistency requirement of re-identification results across the camera network can significantly improve the re-identification performance even in the challenging scenarios where the illumination changes between the cameras are large.
                </p>

                <h4><span class="publicationHeader">Sample Publications</span> <button class="btn btn-primary" @click="showCameraPublications = !showCameraPublications">Toggle</button></h4>

                <ul class="list-group" v-show="showCameraPublications">
                    <li class="list-group-item" v-for="a in cameraPublications" :key="a.name">
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

            <h3>Distributed Estimation <button class="btn btn-primary" @click="showDistributed = !showDistributed">View</button></h3>
            <div v-show="showDistributed">
                <p>
                    In this project, we are developing methods for estimation and control in distributed camera networks. Specifically, we have looked at the following problems.
                </p>
                <ul>
                    <li>Distributed estimation algorithms that are aware of the specific constraints of camera networks</li>
                    <li>Distributed control for collaborative and opportunistic sensing in wide-area camera networks</li>
                </ul>

                <h4>Demos</h4>
                <p>Information-Weighted Consensus in a Distributed Camera Network</p>
                <ul>
                    <li><a href="../../../static/img/research/ICF_Matlab_Code.zip">Matlab code for Distributed Single Target Tracking</a></li>
                    <li><a href="../../../static/img/research/MTIC_Matlab_Code.zip">Matlab code for Distributed Multi-target Tracking</a></li>
                </ul>

                <h4><span class="publicationHeader">Sample Publications</span> <button class="btn btn-primary" @click="showDistributedPublications = !showDistributedPublications">Toggle</button></h4>

                <ul class="list-group" v-show="showDistributedPublications">
                    <li class="list-group-item" v-for="a in cameraPublications" :key="a.name">
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
             

            <hr />

            <h3>Active Sensing <button class="btn btn-primary" @click="showActiveSensing = !showActiveSensing">View</button></h3>
            <div v-show="showActiveSensing">
                <p>
                    We are developing methods for optimizing the image acquisition capabilities of the cameras so as to maximize the performance of the methods used to analyze these image. This needs to be done through collaboration between the cameras in a network, as each camera's parameters entail constraints on the others. We have developed distributed control methods for collaborative and opportunistic sensing in wide-area camera networks.
                </p>

                <h4><span class="publicationHeader">Sample Publications</span> <button class="btn btn-primary" @click="showActiveSensingPublications = !showActiveSensingPublications">Toggle</button></h4>

                <ul class="list-group" v-show="showActiveSensingPublications">
                    <li class="list-group-item" v-for="a in activeSensingPublications" :key="a.name">
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

            <hr />
            
            <p>
                <em>Parts of this work have been supported by the NSF CPS program under the project <a href="http://www.vislab.ucr.edu/PROJECTS/CPS/CPS.php">Distributed Sensing, Learning and Control in Dynamic Environments</a>.</em>
            </p>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  data: function () {
    return {
      showCameraNetwork: false,
      showCameraPublications: false,
      cameraPublications: [
        {
          name:
            'Unsupervised Adaptive Re-identification in Open World Dynamic Camera Networks',
          note:
            'R. Panda, A. H. Bhuiyan, V. Murino and A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017 (Spotlight).',
          link: '/publications/cvpr2017reid.pdf',
          year: '2017'
        },
        {
          name:
            'Continuous adaptation of multi-camera person identification models through sparse non-redundant representative selection',
          note:
            'A. Das, R. Panda, A. Roy-Chowdhury, Computer Vision and Image Understanding, 2016.',
          link: '/publications/CVIU_2016_Abir.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: '/publications/Supplementary_CVIU_2016_Abir.pdf'
            }
          ],
          year: '2016'
        },
        {
          name: 'Temporal Model Adaptation for Person Re-Identification',
          note:
            'N. Martinel, C. Micheloni, A. Roy-Chowdhury, European Conf. on Computer Vision, 2016.',
          link: '/publications/niki-eccv16.pdf',
          year: '2016'
        },
        {
          name: 'Tracking multiple interacting targets in a camera network',
          note:
            'S. Zhang, Y. Zhu, and A. K. Roy-Chowdhury, Computer Vision and Image Understanding special issue on Image Understanding for Real-world Distributed Video Networks. 2015.',
          link: '/publications/Shu CVIU final.pdf',
          year: '2015'
        },
        {
          name: 'Re-Identification in the Function Space of Feature Warps',
          note:
            'A. Das, N. Martinel, C. Micheloni, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2015.',
          link: '/publications/PAMI14-Reid.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: '/publications/Supplementary-PAMI2014-Reid.pdf'
            }
          ],
          year: '2015'
        },
        {
          name:
            'A Camera Network Tracking (CamNet) Dataset and Performance Baseline',
          note:
            'S. Zhang, E. Staudt, T. Faltemier, A. Roy-Chowdhury, IEEE Winter Conference on Applications of Computer Vision, 2015.',
          link: 'egpaper_final.pdf',
          extras: [
            {
              name: 'CamNeT Dataset',
              path:
                '/publications/0B7uDdIqGrZlVfmdlOFZyUEg3RHUxaUdSaGVGTTNDT3R0dUNLSFdCSkZYVWk0dE16TFg4cTA.html'
            }
          ],
          year: '2015'
        },
        {
          name: 'Consistent Re-identification In A Camera Network',
          note:
            'A. Das, A. Chakraborty, A. Roy-Chowdhury, European Conf. on Computer Vision, 2014.',
          link: '/publications/eccv2014-2.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: '/publications/NCR_ECCV2014_Supplementary.pdf'
            },
            {
              name: 'Code',
              path: '/publications/NCR_Code.html'
            }
          ],
          year: '2014'
        },
        {
          name:
            'A Stochastic Graph Evolution Framework for Robust Multi-Target Tracking,',
          note:
            'B. Song, T. Jeng, E. Staudt, A. Roy-Chowdhury, European Conference on Computer Vision, 2010.',
          link: '/publications/eccv2010.pdf',
          extras: [],
          year: '2010'
        },
        {
          name:
            'Distributed Multi-Target Tracking In A Self-Configuring Camera Network',
          note:
            'C. Soto, B. Song, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2009.',
          link: '/publications/cvpr09.pdf',
          extras: [],
          year: '2009'
        },
        {
          name:
            'Robust Tracking in A Camera Network: A Multi-Objective Optimization Framework',
          note:
            'B. Song and A. Roy-Chowdhury, IEEE Journal on Selected Topics in Signal Processing: Special Issue on Distributed Processing in Vision Networks, August 2008.',
          link: '/publications/stamp.html',
          extras: [],
          year: '2008'
        },
        {
          name: 'Stochastic Adaptive Tracking In A Camera Network',
          note:
            'B. Song, A. Roy-Chowdhury, IEEE Intl. Conf. on Computer Vision, 2007.',
          link: '/publications/iccv07.pdf',
          extras: [],
          year: '2007'
        }
      ],
      showDistributed: false,
      showDistributedPublications: false,
      distributedPublications: [
        {
          name:
            'Distributed Multi-target Tracking and Data Association in Vision Networks',
          note:
            'A. T. Kamal, J. H. Bappy, J. A. Farrell, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2016.',
          link: '/publications/MTIC-TPAMI.pdf',
          extras: [
            {
              name: 'Code',
              path: '/publications/MTIC_Matlab_Code.zip'
            }
          ],
          year: '2016'
        },
        {
          name:
            'Information Weighted Consensus Filters and their Application in Distributed Camera Networks',
          note:
            'A. Kamal, J. A. Farrell, A. Roy-Chowdhury, IEEE Trans. on Automatic Control, 2013.',
          link: '/publications/ICF_TAC.pdf',
          extras: [
            {
              name: 'Code',
              path: '/publications/ICF_Matlab_Code.zip'
            }
          ],
          year: '2013'
        },
        {
          name: 'Information Consensus for Distributed Multi-Target Tracking',
          note:
            'A. Kamal, J. A. Farrell, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2013.',
          link: '/publications/CVPR2013_MTIC.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: '/publication/CVPR2013_MTIC_Supplementary.pdf'
            },
            {
              name: 'Code',
              path: '/publication/MTIC_Matlab_Code (1).zip'
            }
          ],
          year: '2013'
        },
        {
          name: 'Information Weighted Consensus',
          note:
            'A. Kamal, J. A. Farrell, A. Roy-Chowdhury, IEEE Controls and Decision Conf., 2012.',
          link: '/publications/CDC_2012.pdf',
          extras: [
            {
              name: 'Code',
              path: '/publications/CameraNetworks.php'
            }
          ],
          year: '2012'
        },
        {
          name:
            'Integrated Sensing and Analysis for Wide Area Scene Understanding',
          note:
            'B. Song, C. Ding, A. Kamal, J. Farrell, A. Roy-Chowdhury, Signal Processing Magazine, May 2011.',
          link: '/publications/SPM_camnetwork.pdf',
          extras: [],
          year: '2011'
        },
        {
          name:
            'Tracking and Activity Recognition Through Consensus in Distributed Camera Networks',
          note:
            'B. Song, A. Kamal, C. Soto, C. Ding, J. Farrell, A. Roy-Chowdhury, IEEE Trans. on Image Processing, 2010.',
          link: '/publications/TIP_consensus2010.pdf',
          extras: [],
          year: '2010'
        },
        {
          name:
            'Distributed Multi-Target Tracking In A Self-Configuring Camera Network',
          note:
            'C. Soto, B. Song, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2009.',
          link: '/publications/cvpr09.pdf',
          extras: [],
          year: '2009'
        },
        {
          name:
            'Robust Tracking in A Camera Network: A Multi-Objective Optimization Framework',
          note:
            'B. Song and A. Roy-Chowdhury, IEEE Journal on Selected Topics in Signal Processing: Special Issue on Distributed Processing in Vision Networks, August 2008.',
          link: '/publications/stamp.html',
          extras: [],
          year: '2008'
        },
        {
          name: 'Stochastic Adaptive Tracking In A Camera Network',
          note:
            'B. Song, A. Roy-Chowdhury, IEEE Intl. Conf. on Computer Vision, 2007.',
          link: '/publications/iccv07.pdf',
          extras: [],
          year: '2007'
        }
      ],
      showActiveSensing: false,
      showActiveSensingPublications: false,
      activeSensingPublications: [
        {
          name:
            'Opportunistic Image Acquisition of Individual and Group Activities in a Distributed Camera Network',
          note:
            'C. Ding, J. H. Bappy, J. A. Farrell, A. Roy-Chowdhury, IEEE Transactions on Circuits and Systems for Video Technology, 2016.',
          link: '/publications/TCSVT_2016.pdf',
          year: '2016'
        },
        {
          name:
            'Distributed Constrained Optimization for Bayesian Opportunistic Visual Sensing',
          note:
            'A. Morye, C. Ding, J. A. Farrell, A. Roy-Chowdhury, IEEE Trans. on Control Systems Technology, 2014.',
          link: '/publications/akshay_tcst.pdf',
          extras: [],
          year: '2014'
        },
        {
          name: 'Collaborative Sensing In A Distributed PTZ Camera Network',
          note:
            'C. Ding, B. Song, A. Morye, J. A. Farrell, A. Roy-Chowdhury, IEEE Trans. on Image Processing, 2012.',
          link: '/publications/tip_cding2012.pdf',
          extras: [],
          year: '2012'
        },
        {
          name: 'Coordinated Sensing and Tracking for Mobile Camera Platforms',
          note:
            'C. Ding, A. Morye, J. A. Farrell, A. Roy-Chowdhury, American Controls Conf., 2012.',
          link: '/publications/ACC_2012.pdf',
          extras: [],
          year: '2012'
        }
      ]
    }
  }
}
</script>
