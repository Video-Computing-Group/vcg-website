<template>
  <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-12">
            <p><small></small></p>
            <div class="alert alert-danger" role="alert">The contributing authors include the documents contained in these directories as a means to ensure timely dissemination of scholarly and technical work on a non-commercial basis. Copyright and all rights therein are maintained by the authors or by other copyright holders, notwithstanding that they have offered their works here electronically. It is understood that all persons copying this information will adhere to the terms and constraints invoked by each author's copyright. These works may not be reposted without the explicit permission of the copyright holder.</div>
            <div class="alert alert-info">
              A complete list of articles by publication category is available <a href="../../static/publications/publications.pdf"><strong>here</strong></a>.
            </div>

            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">Books and Edited Books <span @click="showBooks = !showBooks" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showBooks" class="list-group">
                <li class="list-group-item" v-for="book in books" :key="book.name">
                  <a :href="book.link">
                    <h3>{{book.name}}</h3>
                    <p><small>{{book.note}}</small></p>
                  </a>
                </li>
              </ul>
            </div>
            
            <h2>Publications</h2>
            
            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2017 <span @click="showPublications2017 = !showPublications2017" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2017" class="list-group">
                <li class="list-group-item" v-for="a in articles2017" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2016 <span @click="showPublications2016 = !showPublications2016" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2016" class="list-group">
                <li class="list-group-item" v-for="a in articles2016" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2015 <span @click="showPublications2015 = !showPublications2015" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2015" class="list-group">
                <li class="list-group-item" v-for="a in articles2015" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2014 <span @click="showPublications2014 = !showPublications2014" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2014" class="list-group">
                <li class="list-group-item" v-for="a in articles2014" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2013 <span @click="showPublications2013 = !showPublications2013" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2013" class="list-group">
                <li class="list-group-item" v-for="a in articles2013" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2012 <span @click="showPublications2012 = !showPublications2012" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2012" class="list-group">
                <li class="list-group-item" v-for="a in articles2012" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>
            
            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2011 <span @click="showPublications2011 = !showPublications2011" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2011" class="list-group">
                <li class="list-group-item" v-for="a in articles2011" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2010 <span @click="showPublications2010 = !showPublications2010" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2010" class="list-group">
                <li class="list-group-item" v-for="a in articles2010" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2009 <span @click="showPublications2009 = !showPublications2009" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2009" class="list-group">
                <li class="list-group-item" v-for="a in articles2009" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2008 <span @click="showPublications2008 = !showPublications2008" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2008" class="list-group">
                <li class="list-group-item" v-for="a in articles2008" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2007 <span @click="showPublications2007 = !showPublications2007" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2007" class="list-group">
                <li class="list-group-item" v-for="a in articles2007" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2006 <span @click="showPublications2006 = !showPublications2006" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2006" class="list-group">
                <li class="list-group-item" v-for="a in articles2006" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2005 <span @click="showPublications2005 = !showPublications2005" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2005" class="list-group">
                <li class="list-group-item" v-for="a in articles2005" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2004 <span @click="showPublications2004 = !showPublications2004" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2004" class="list-group">
                <li class="list-group-item" v-for="a in articles2004" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">2003 <span @click="showPublications2003 = !showPublications2003" class="fa fa-bars toggle"></span></h3>
              </div> 
              
              <ul v-show="showPublications2003" class="list-group">
                <li class="list-group-item" v-for="a in articles2003" :key="a.name">
                  <h3><a :href="a.link">{{a.name}}</a>
                    <small>
                      <span v-if="a.extras !== undefined"><a class v-for="extra in a.extras" :href="extra.path" :key="extra.path">[{{extra.name}}]</a></span>
                    </small>
                  </h3>
                  <p><small>{{a.note}}</small></p>
                  <div class="extraContainer" v-if="a.extras !== undefined"></div>
                </li>
              </ul>
            </div>

          </div>
        </div> 
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'publications',
  data: function () {
    return {
      showPublications2017: false,
      showPublications2016: false,
      showPublications2015: false,
      showPublications2014: false,
      showPublications2013: false,
      showPublications2012: false,
      showPublications2011: false,
      showPublications2010: false,
      showPublications2009: false,
      showPublications2008: false,
      showPublications2007: false,
      showPublications2006: false,
      showPublications2005: false,
      showPublications2004: false,
      showPublications2003: false,
      showBooks: false,
      showMagazines: false,
      showThesis: false,
      books: [
        {
          name:
            'Camera Networks: The Acquisition and Analysis of Videos Over Wide Areas',
          note:
            'A. Roy-Chowdhury and B. Song. Morgan and Claypool (Synthesis Lectures in Computer Vision), 2012.',
          link:
            'http://www.morganclaypool.com/doi/abs/10.2200/S00400ED1V01Y201201COV004'
        },
        {
          name: 'Distributed Video Sensor Networks',
          note:
            'Eds. B. Bhanu, C. Ravishankar, A. Roy-Chowdhury, H. Aghajan, D. Terzopoulos. Springer, 2010.',
          link:
            'http://www.springer.com/computer/image+processing/book/978-0-85729-126-4'
        },
        {
          name: 'Recognition of Humans and Their Activities Using Video',
          note:
            'R. Chellappa, A. Roy-Chowdhury, S. Zhou. Morgan and Claypool (Synthesis Lectures in Image, Video, & Multimedia Processing), 2005.',
          link:
            'http://www.amazon.com/gp/product/1598290061/qid=1134776125/sr=1-1/ref=sr_1_1/104-3732392-4137503?s=books&v=glance&n=283155'
        }
      ],
      articles2017: [
        {
          name:
            'Joint Prediction of Activity Labels and Starting Times in Untrimmed Videos',
          note:
            'T. Mahmud, M. Hasan and A. Roy-Chowdhury, International Conference on Computer Vision, 2017.',
          link: 'static/publications/ICCV_Tahmida.pdf',
          year: '2017'
        },
        {
          name:
            'Exploiting Spatial Structure for Localizing Manipulated Image Regions',
          note:
            'J. H. Bappy, A. Roy-Chowdhury, J. Bunk, L. Nataraj and B. S. Manjunath, International Conference on Computer Vision, 2017.',
          link: 'static/publications/ICCV_Jawad.pdf',
          year: '2017'
        },
        {
          name: 'Weakly Supervised Summarization of Web Videos',
          note:
            'R. Panda, A. Das, Z. Wu, J. Ernst and A. Roy-Chowdhury, International Conference on Computer Vision, 2017.',
          link: 'static/publications/ICCV_Jawad.pdf',
          year: '2017'
        },
        {
          name: 'Diversity-aware Multi-Video Summarization',
          note:
            'R. Panda, N. C. Mithun and A. Roy-Chowdhury, IEEE Trans. on Image Processing, 2017.',
          link: 'static/publications/TIP_Rameswar.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/TIP_Supp_Rameswar.pdf'
            }
          ],
          year: '2017'
        },
        {
          name:
            'Multi-View Surveillance Video Summarization via Joint Embedding and Sparse Optimization',
          note:
            'R. Panda and A. Roy-Chowdhury, IEEE Trans. on Multimedia, 2017.',
          link: 'static/publications/TMM_Rameswar.pdf',
          year: '2017'
        },
        {
          name:
            'Detection and Localization of Image Forgeries using Resampling Features and Deep Learning',
          note:
            'J. Bunk, J. H. Bappy, T. M. Mohammed, L. Nataraj, A. Flenner, B.S. Manjunath, S. Chandrasekaran, A. Roy-Chowdhury and L. Peterson, IEEE Conf. on Computer Vision and Pattern Recognition Workshop, 2017.',
          link: 'static/publications/CVPR_Workshop_Jawad.pdf',
          year: '2017'
        },
        {
          name:
            'Unsupervised Adaptive Re-identification in Open World Dynamic Camera Networks',
          note:
            'R. Panda, A. H. Bhuiyan, V. Murino and A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017 (Spotlight).',
          link: 'static/publications/cvpr2017reid.pdf',
          year: '2017'
        },
        {
          name: 'Collaborative Summarization of Topic-Related Videos',
          note:
            'R. Panda and A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017.',
          link: 'static/publications/cvpr2017summ.pdf',
          year: '2017'
        },
        {
          name:
            'Non-Uniform Subset Selection for Active Learning in Structured Data',
          note:
            'S. Paul, J. H. Bappy, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017.',
          link: 'static/publications/cvpr2017subset.pdf',
          year: '2017'
        },
        {
          name:
            'The Impact of Typicality for Informative Representative Selection',
          note:
            'J. H. Bappy, S. Paul, E. Tuncel and A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2017.',
          link: 'static/publications/cvpr2017typicality.pdf',
          year: '2017'
        }
      ],
      articles2016: [
        {
          name:
            'Continuous adaptation of multi-camera person identification models through sparse non-redundant representative selection',
          note:
            'A. Das, R. Panda, A. Roy-Chowdhury, Computer Vision and Image Understanding, 2016.',
          link: 'static/publications/CVIU_2016_Abir.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/Supplementary_CVIU_2016_Abir.pdf'
            }
          ],
          year: '2016'
        },
        {
          name:
            'Distributed Multi-target Tracking and Data Association in Vision Networks',
          note:
            'A. T. Kamal, J. H. Bappy, J. A. Farrell, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2016.',
          link: 'static/publications/MTIC-TPAMI.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/MTIC_Matlab_Code.zip'
            }
          ],
          year: '2016'
        },
        {
          name: 'Network Consistent Data Association',
          note:
            'A. Chakraborty, A. Das, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2016.',
          link: 'static/publications/Camera_Ready_Manuscript.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/supp_NCDA.pdf'
            },
            {
              name: 'Code',
              path: 'static/publications/NCDA_Code.zip'
            }
          ],
          year: '2016'
        },
        {
          name: 'Online Adaptation for Joint Scene and Object Classification',
          note:
            'J. H. Bappy, S. Paul, A. Roy-Chowdhury, European Conf. on Computer Vision, 2016.',
          link: 'static/publications/eccv2016_jawad.pdf',
          year: '2016'
        },
        {
          name: 'Temporal Model Adaptation for Person Re-Identification',
          note:
            'N. Martinel, C. Micheloni, A. Roy-Chowdhury, European Conf. on Computer Vision, 2016.',
          link: 'static/publications/niki-eccv16.pdf',
          year: '2016'
        },
        {
          name: 'Context-Aware Video Summarization',
          note:
            'S. Zhang, Y. Zhu, A. Roy-Chowdhury, IEEE Trans. on Image Processing, 2016.',
          link: 'static/publications/TIP2016_summarization.pdf',
          year: '2016'
        },
        {
          name: 'Learning Temporal Regularity in Video Sequences',
          note:
            'M. Hasan, J. Choi, J. Neumann, A. Roy-Chowdhury, and L. Davis, IEEE Conf. on Computer Vision and Pattern Recognition, 2016.',
          link: 'static/publications/cvpr2016_regularity.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/regularity.html'
            }
          ],
          year: '2016'
        },
        {
          name:
            'Opportunistic Image Acquisition of Individual and Group Activities in a Distributed Camera Network',
          note:
            'C. Ding, J. H. Bappy, J. A. Farrell, A. Roy-Chowdhury, IEEE Transactions on Circuits and Systems for Video Technology, 2016.',
          link: 'static/publications/TCSVT_2016.pdf',
          year: '2016'
        },
        {
          name: 'Generating Diverse Image Datasets with Limited Labeling',
          note:
            'N. C. Mithun, R. Panda, A. Roy-Chowdhury, ACM International Conf. on Multimedia, 2016.',
          link: 'static/publications/ACM_2016.pdf',
          year: '2016'
        },
        {
          name: 'Incremental Learning of Human Activity Models from Videos',
          note:
            'M. Hasan, and A. Roy-Chowdhury, Computer Vision and Image Understanding, 2016.',
          link: 'static/publications/2016_cviu.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/incremental.html'
            }
          ],
          year: '2016'
        },
        {
          name:
            'Optimal Landmark Selection for Registration of 4D Confocal Image Stacks in Arabidopsis',
          note:
            'K. Mkrtchyan, A. Chakraborty, and A. Roy-Chowdhury, IEEE/ACM Transactions on Computational Biology and Bioinformatics, 2016.',
          link: 'static/publications/TCBB.pdf',
          year: '2016'
        },
        {
          name: 'Video Summarization in a Multi-View Camera Network',
          note:
            'R. Panda, A. Das, A. Roy-Chowdhury, International Conf. on Pattern Recognition, 2016.',
          link: 'static/publications/ICPR_Rameswar.pdf',
          year: '2016'
        },
        {
          name: 'Inter-dependent CNNs for Joint Scene and Object Recognition',
          note:
            'J. H. Bappy, A. Roy-Chowdhury, International Conf. on Pattern Recognition, 2016.',
          link: 'static/publications/ICPR2016_SO_Jawad.pdf',
          year: '2016'
        },
        {
          name: 'A Poisson Process Model for Activity Forecasting',
          note:
            'T. Mahmud, M. Hasan, A. Chakraborty, A. Roy-Chowdhury, IEEE International Conf. on Image Processing, 2016.',
          link: 'static/publications/icip2016_timeforecast.pdf',
          year: '2016'
        },
        {
          name:
            'Efficient Selection of Informative and Diverse Training Samples with Applications in Scene Classification',
          note:
            'S. Paul, J. H. Bappy, A. Roy-Chowdhury, IEEE International Conf. on Image Processing, 2016.',
          link: 'static/publications/icip2016_trainingsampleselection.pdf',
          year: '2016'
        },
        {
          name:
            'Adaptive Algorithm Selection, with Applications in Pedestrian Detection',
          note:
            'S. Zhang, Q. Zhu, A. Roy-Chowdhury, IEEE International Conf. on Image Processing, 2016.',
          link: 'static/publications/icip2016_pedestrian.pdf',
          year: '2016'
        }
      ],
      articles2015: [
        {
          name: 'Context Aware Active Learning of Activity Recognition Models',
          note:
            'M. Hasan, A. Roy-Chowdhury, International Conference on Computer Vision, 2015.',
          link: 'static/publications/ICCV2015.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/caal.html'
            }
          ],
          year: '2015'
        },
        {
          name:
            'A Continuous Learning Framework for Activity Recognition Using Deep Hybrid Feature Models',
          note: 'M. Hasan, A. Roy-Chowdhury, IEEE Trans. on Multimedia, 2015.',
          link: 'static/publications/tmm2015.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/hybrid.html'
            }
          ],
          year: '2015'
        },
        {
          name: 'Re-Identification in the Function Space of Feature Warps',
          note:
            'A. Das, N. Martinel, C. Micheloni, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2015.',
          link: 'static/publications/PAMI14-Reid.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/Supplementary-PAMI2014-Reid.pdf'
            }
          ],
          year: '2015'
        },
        {
          name:
            'Context-Aware Activity Modeling using Hierarchical Conditional Random Fields',
          note:
            'Y. Zhu, N. Nayak, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, 2015.',
          link: 'static/publications/PAMI14-Activity.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/download.html'
            }
          ],
          year: '2015'
        },
        {
          name: 'Computerized Face Recognition in Renaissance Portrait Art',
          note:
            'R. Srinivasan, C. Rudolph, and A. K. Roy-Chowdhury, Signal Processing Magazine. 2015.',
          link: 'static/publications/spm2015.pdf',
          extras: [
            {
              name: 'Supplmental Material',
              path: 'static/publications/SPM2015_SM.pdf'
            }
          ],
          year: '2015'
        },
        {
          name: 'Tracking multiple interacting targets in a camera network',
          note:
            'S. Zhang, Y. Zhu, and A. K. Roy-Chowdhury, Computer Vision and Image Understanding special issue on Image Understanding for Real-world Distributed Video Networks. 2015.',
          link: 'static/publications/Shu CVIU final.pdf',
          year: '2015'
        },
        {
          name:
            'Hierarchical Graphical Models for Simultaneous Tracking and Recognition in Wide-Area Scenes',
          note:
            'N. M. Nayak, Y. Zhu, and A. K. Roy-Chowdhury, IEEE Transactions on Image Processing, 2015.',
          link: 'static/publications/tip_twocolumn_revised.pdf',
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
                'static/publications/0B7uDdIqGrZlVfmdlOFZyUEg3RHUxaUdSaGVGTTNDT3R0dUNLSFdCSkZYVWk0dE16TFg4cTA.html'
            }
          ],
          year: '2015'
        }
      ],
      articles2014: [
        {
          name:
            'Context Aware Spatio-temporal Cell Tracking In Densely Packed Multilayer Tissues',
          note:
            'A. Chakraborty, A. Roy-Chowdhury, Medical Image Analysis, 2014.',
          link: 'static/publications/MedIA-14.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/MedIA-Supplementary.pdf'
            },
            {
              name: 'Code',
              path: 'static/publications/Context-CRF-Tracker.zip'
            }
          ],
          year: '2014'
        },
        {
          name: 'Context-Aware Activity Forecasting',
          note:
            'A. Chakraborty, A. Roy-Chowdhury, Asian Conf. on Computer Vision, 2014.',
          link: 'static/publications/ACCV_2014.pdf',
          extras: [],
          year: '2014'
        },
        {
          name: 'Consistent Re-identification In A Camera Network',
          note:
            'A. Das, A. Chakraborty, A. Roy-Chowdhury, European Conf. on Computer Vision, 2014.',
          link: 'static/publications/eccv2014-2.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/NCR_ECCV2014_Supplementary.pdf'
            },
            {
              name: 'Code',
              path: 'static/publications/NCR_Code.html'
            }
          ],
          year: '2014'
        },
        {
          name: 'Continuous Learning of Human Activity Models Using Deep Nets',
          note:
            'M. Hasan, A. Roy-Chowdhury, European Conf. on Computer Vision, 2014.',
          link: 'static/publications/eccv2014-1.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/hybrid (1).html'
            }
          ],
          year: '2014'
        },
        {
          name:
            'Incremental Activity Modeling and Recognition in Streaming Videos',
          note:
            'M. Hasan, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2014.',
          link: 'static/publications/cvpr2014.pdf',
          extras: [],
          year: '2014'
        },
        {
          name:
            'Learning A Sparse Dictionary of Video Structure for Activity Modeling',
          note:
            'N. Nayak, A. Roy-Chowdhury, IEEE Intl. Conf. on Image Processing, 2014.',
          link: 'static/publications/icip2014.pdf',
          extras: [],
          year: '2014'
        },
        {
          name:
            'Distributed Constrained Optimization for Bayesian Opportunistic Visual Sensing',
          note:
            'A. Morye, C. Ding, J. A. Farrell, A. Roy-Chowdhury, IEEE Trans. on Control Systems Technology, 2014.',
          link: 'static/publications/akshay_tcst.pdf',
          extras: [],
          year: '2014'
        },
        {
          name:
            'Managing Redundant Content in Bandwidth Constrained Wireless Networks',
          note:
            'T. Dao, S. Krishnamurthy, A. Roy-Chowdhury, T. LaPorta, International Conf. on emerging Networking EXperiments and Technologies, 2014.',
          link: 'static/publications/conext_2014.pdf',
          extras: [],
          year: '2014'
        }
      ],
      articles2013: [
        {
          name:
            'Exploiting Spatio-Temporal Scene Structure for Wide-Area Activity Analysis in Unconstrained Environments',
          note:
            'N. Nayak, Y. Zhu, A. Roy-Chowdhury, IEEE Trans. on Information Forensics and Security (Special Issue on Intelligent Video Surveillance), 2013.',
          link: 'static/publications/tifs_context.pdf',
          extras: [],
          year: '2013'
        },
        {
          name:
            'Information Weighted Consensus Filters and their Application in Distributed Camera Networks',
          note:
            'A. Kamal, J. A. Farrell, A. Roy-Chowdhury, IEEE Trans. on Automatic Control, 2013.',
          link: 'static/publications/ICF_TAC.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/ICF_Matlab_Code.zip'
            }
          ],
          year: '2013'
        },
        {
          name: 'Context-Aware Modeling and Recognition of Activities in Video',
          note:
            'Y. Zhu, N. Nayak, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2013 (Oral).',
          link: 'static/publications/cvpr2013_context.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/download (1).html'
            }
          ],
          year: '2013'
        },
        {
          name:
            'Recognizing the Royals - Leveraging Computerized Face Recognition for Identifying Subjects in Ancient Artworks',
          note:
            'R. Srinivasan, A. Roy-Chowdhury, C. Rudolph, J. Kohl, ACM Intl. Conf. on Multimedia, 2013.',
          link: 'static/publications/acm-mm2013.pdf',
          extras: [],
          year: '2013'
        },
        {
          name: 'Information Consensus for Distributed Multi-Target Tracking',
          note:
            'A. Kamal, J. A. Farrell, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2013.',
          link: 'static/publications/CVPR2013_MTIC.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publication/CVPR2013_MTIC_Supplementary.pdf'
            },
            {
              name: 'Code',
              path: 'static/publication/MTIC_Matlab_Code (1).zip'
            }
          ],
          year: '2013'
        },
        {
          name:
            'Modeling Multi-object Interactions using "String of Feature Graphs"',
          note:
            'Y. Zhu, N. Nayak, U. Gaur, B. Song, A. Roy-Chowdhury, Computer Vision and Image Understanding, 2013.',
          link: 'static/publications/cviu13.pdf',
          extras: [],
          year: '2013'
        },
        {
          name:
            'Adaptive Geometric Tessellation For 3D Reconstruction of Anisotropically Developing Cells In Multilayer Tissues From Sparse Volumetric Microscopy Images',
          note:
            'A. Chakraborty, M. Perales, G. V. Reddy, A. Roy-Chowdhury, PLOS One, 2013.',
          link: 'static/publications/article.html',
          extras: [],
          year: '2013'
        },
        {
          name:
            'Context-Aware Activity Recognition and Anomaly Detection in Video',
          note:
            'Y. Zhu, N. Nayak, A. Roy-Chowdhury, IEEE Journal on Selected Topics in Signal Processing, Special Issue on Anomalous Pattern Discovery, February 2013.',
          link: 'static/publications/jstsp13.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/download (2).html'
            }
          ],
          year: '2013'
        },
        {
          name: 'Vector Field Analysis for Multi-Object Behavior Modeling',
          note:
            'N. Nayak, Y. Zhu, A. Roy-Chowdhury, Image and Vision Computing, 2013.',
          link:
            'static/publications/N. Nayak, Y. Zhu, A. Roy-Chowdhury, Image and Vision Computing, 2013.',
          extras: [],
          year: '2013'
        },
        {
          name:
            'Quantitative Analysis of Live-Cell Growth at the Shoot Apex of Arabidopsis thaliana: Algorithms for Feature Measurement and Temporal alignment',
          note:
            'M. Tataw, V. Reddy, E. Keogh, A. Roy-Chowdhury, IEEE/ACM Trans. on Computational Biology and Biomedicine, 2013 (In Press).',
          link: 'static/publications/tataw_tcbb_final.pdf',
          extras: [],
          year: '2013'
        },
        {
          name: 'Automated Registration of Live Imaging Stacks of Arabidopsis',
          note:
            'K. Mkrtchyan, A. Chakraborty, A. Roy-Chowdhury, International Symposium on Biomedical Imaging, 2013.',
          link: 'static/publications/isbi2013_Katya.pdf',
          extras: [],
          year: '2013'
        }
      ],
      articles2012: [
        {
          name: 'Collaborative Sensing In A Distributed PTZ Camera Network',
          note:
            'C. Ding, B. Song, A. Morye, J. A. Farrell, A. Roy-Chowdhury, IEEE Trans. on Image Processing, 2012.',
          link: 'static/publications/tip_cding2012.pdf',
          extras: [],
          year: '2012'
        },
        {
          name:
            'Features with Feeling - Incorporating User Preferences in Video Categorization',
          note:
            'R. Srinivasan, A. Roy-Chowdhury, Asian Conference on Computer Vision, 2012.',
          link: 'static/publications/accv-2012-final.pdf',
          extras: [],
          year: '2012'
        },
        {
          name: 'Information Weighted Consensus',
          note:
            'A. Kamal, J. A. Farrell, A. Roy-Chowdhury, IEEE Controls and Decision Conf., 2012.',
          link: 'static/publications/CDC_2012.pdf',
          extras: [
            {
              name: 'Code',
              path: 'static/publications/CameraNetworks.php'
            }
          ],
          year: '2012'
        },
        {
          name:
            'Alignment of Real-Time Live-Cell Growth Data for Quantitative Analysis of Growth at the Shoot Apex of Arabidopsis thaliana',
          note:
            'M. Tataw, V. Reddy, A. Roy-Chowdhury, ACM Conference on Bioinformatics, Computational Biology and Biomedicine, 2012.',
          link: 'static/publications/publications.php',
          extras: [],
          year: '2012'
        },
        {
          name: 'Opportunistic Sensing In A Distributed PTZ Camera Network',
          note:
            'C. Ding, A. Morye, J. A. Farrell, A. Roy-Chowdhury, IEEE Intl. Conf. on Distributed Smart Cameras, 2012.',
          link: 'static/publications/icdsc2012.pdf',
          extras: [],
          year: '2012'
        },
        {
          name: 'Coordinated Sensing and Tracking for Mobile Camera Platforms',
          note:
            'C. Ding, A. Morye, J. A. Farrell, A. Roy-Chowdhury, American Controls Conf., 2012.',
          link: 'static/publications/ACC_2012.pdf',
          extras: [],
          year: '2012'
        }
      ],
      articles2011: [
        {
          name:
            'Integrated Sensing and Analysis for Wide Area Scene Understanding',
          note:
            'B. Song, C. Ding, A. Kamal, J. Farrell, A. Roy-Chowdhury, Signal Processing Magazine, May 2011.',
          link: 'static/publications/SPM_camnetwork.pdf',
          extras: [],
          year: '2011'
        },
        {
          name: 'A Physics-Based Analysis of Image Appearance Models',
          note:
            'Y. Xu, A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, August 2011.',
          link: 'static/publications/PAMI_2011.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publication/SupplementaryMaterial_PAMI2011.pdf'
            }
          ],
          year: '2011'
        },
        {
          name:
            'A "String of Feature Graphs" Model for Recognition of Complex Activities in Natural Videos',
          note:
            'U. Gaur, Y. Zhu, B. Song, A. Roy-Chowdhury, IEEE Conf. on Computer Vision, 2011.',
          link: 'static/publications/iccv-SFG.pdf',
          extras: [],
          year: '2011'
        },
        {
          name:
            'Cell Resolution 3D Reconstruction of Developing Multilayer Tissues from Sparsely Sampled Volumetric Microscopy Images',
          note:
            'A. Chakraborty, R. Yadav, G. V. Reddy, A. Roy-Chowdhury, IEEE Intl. Conf. on Bioinformatics and Biomedicine, 2011.',
          link: 'static/publications/bibm11-anirban.pdf',
          extras: [],
          year: '2011'
        },
        {
          name:
            'A Large-scale Benchmark Dataset for Event Recognition in Surveillance Video',
          note:
            'Sangmin Oh, Anthony Hoogs, Amitha Perera, Naresh Cuntoor, C.-C. Chen, Jong Taek Lee, Saurajit Mukherjee, J. K. Aggarwal, Hyungtae Lee, Larry Davis, Eran Swears, Xioyang Wang, Qiang Ji, Kishore Reddy, Mubarak Shah, Carl Vondrick, Hamed Pirsiavash, Deva Ramanan, Jenny Yuen, Antonio Torralba, Bi Song, Anesco Fong, Amit Roy-Chowdhury, and Mita Desai, IEEE Conf. on Computer Vision and Pattern Recognition, 2011.',
          link: 'static/publications/cvpr2011.pdf',
          extras: [],
          year: '2011'
        },
        {
          name:
            'Adaptive Cell Segmentation and Tracking for Volumetric Confocal Microscopy Images of A Developing Plant Meristem',
          note:
            'M. Liu, A. Chakraborty, D. Singh, M. Gopi, R. Yadav, G.V. Reddy, and A. Roy-Chowdhury, Molecular Plant, 2011.',
          link: 'static/publications/tracking-molplant.pdf',
          extras: [],
          year: '2011'
        },
        {
          name:
            'Motion Pattern Analysis for Modeling and Recognition of Complex Human Activities',
          note:
            'N. Nayak, R. Sethi, B. Song, A. Roy-Chowdhury, in Guide to Video Analysis of Humans: Looking at People (Eds., T. Moeslund, A. Hilton, V. Kruger, L. Sigal), Springer 2011.',
          link: 'static/publications/Activity_chapter_nandita.pdf',
          extras: [],
          year: '2011'
        },
        {
          name: 'Robust Wide Area Tracking in Single and Multiple Views',
          note:
            'B. Song, R. Sethi, A. Roy-Chowdhury, in Guide to Video Analysis of Humans: Looking at People (Eds., T. Moeslund, A. Hilton, V. Kruger, L. Sigal), Springer 2011',
          link: 'static/publications/LAPbook_tracking.pdf',
          extras: [],
          year: '2011'
        },
        {
          name:
            'A Generalized Kalman Consensus Filter for Wide Area Video Networks',
          note:
            'A. Kamal, C. Ding, B. Song, J. A. Farrell, A. Roy-Chowdhury, Controls and Decision Conference, 2011.',
          link: 'static/publications/cdc11.pdf',
          extras: [],
          year: '2011'
        }
      ],
      articles2010: [
        {
          name:
            'Tracking and Activity Recognition Through Consensus in Distributed Camera Networks',
          note:
            'B. Song, A. Kamal, C. Soto, C. Ding, J. Farrell, A. Roy-Chowdhury, IEEE Trans. on Image Processing, 2010.',
          link: 'static/publications/TIP_consensus2010.pdf',
          extras: [],
          year: '2010'
        },
        {
          name:
            'Automated tracking of stem cell lineages of Arabidopsis shoot apex using local graph matching',
          note:
            'M. Liu, R. Yadav, A. Roy-Chowdhury, G.V. Reddy, The Plant Journal, 2010.',
          link: 'static/publications/tracking-plantjournal.pdf',
          extras: [
            {
              name: 'Supplemental Material',
              path: 'static/publications/Supplementary Data_PlantJournal.pdf'
            }
          ],
          year: '2010'
        },
        {
          name:
            'A Stochastic Graph Evolution Framework for Robust Multi-Target Tracking,',
          note:
            'B. Song, T. Jeng, E. Staudt, A. Roy-Chowdhury, European Conference on Computer Vision, 2010.',
          link: 'static/publications/eccv2010.pdf',
          extras: [],
          year: '2010'
        },
        {
          name:
            'Multilinear Feature Extraction and Classification of Multi-Focal Images, With Applications in Nematode Taxonomy',
          note:
            'M. Liu, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2010.',
          link: 'static/publications/cvpr2010.pdf',
          extras: [],
          year: '2010'
        },
        {
          name: 'Interactive Event Search Using Transfer Learning',
          note:
            'A. Lam, A. Roy-Chowdhury, C. Shelton, Asian Conf. on Computer Vision, 2010.',
          link: 'static/publications/accv10.pdf',
          extras: [],
          year: '2010'
        },
        {
          name: 'The Human Action Image',
          note:
            'R.J. Sethi, A. Roy-Chowdhury, Intl. Conf. on Pattern Recognition, 2010.',
          link: 'static/publications/icpr2010_hai.pdf',
          extras: [],
          year: '2010'
        },
        {
          name:
            'A Neurobiologically Motivated Stochastic Method for Analysis of Human Activities in Video',
          note:
            'R. Sethi, A. Roy-Chowdhury, Intl. Conf. on Pattern Recognition, 2010.',
          link: 'static/publications/icpr2010_ddhmc.pdf',
          extras: [],
          year: '2010'
        }
      ],
      articles2009: [
        {
          name: 'Rate-invariant Recognition of Humans and Their Activities',
          note:
            'A. Veeraraghavan, A. Srivastava, A. Roy-Chowdhury and R. Chellappa, IEEE Trans. on Image Processing, June 2009.',
          link: 'static/publications/Rate-invariant.pdf',
          extras: [],
          year: '2009'
        },
        {
          name:
            'Distributed Multi-Target Tracking In A Self-Configuring Camera Network',
          note:
            'C. Soto, B. Song, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2009.',
          link: 'static/publications/cvpr09.pdf',
          extras: [],
          year: '2009'
        },
        {
          name: 'Face Tracking',
          note:
            'A. Roy-Chowdhury and Y. Xu, Encyclopedia of Biometrics, Springer, 2009.',
          link: 'static/publications/encycl_biometrics.pdf',
          extras: [],
          year: '2009'
        },
        {
          name:
            'Model-based Multi-view Video Compression Using Distributed Source Coding Principles',
          note:
            'J. Nayak, B. Song, E. Tuncel, A. Roy-Chowdhury. Distributed Source Coding: Theory, Algorithms and Applications (Eds. P. Luigi and M. Gatspar), Elsevier, 2009.',
          link: 'static/publications/MultiViewDVC.pdf',
          extras: [],
          year: '2009'
        },
        {
          name:
            'Combining Geometrical and Statistical Models for Video-based Face Recognition',
          note:
            'A. Roy-Chowdhury and Y. Xu., Multi-Biometric Systems for Identity Recognition: Theory and Experiments, (Eds. N.V. Boulgouris, K.N. Plataniotis and E. Micheli-Tzanakou), IEEE Press, In Press.',
          link: 'static/publications/GAM BookChapter.pdf',
          extras: [],
          year: '2009'
        },
        {
          name:
            'Query-based Retrieval of Complex Activities using �Strings of Motion-Words�',
          note:
            'U. Gaur, B. Song, A. Roy-Chowdhury, IEEE Workshop on Motion and Video Computing, 2009.',
          link: 'static/publications/wmvc09-2.pdf',
          extras: [],
          year: '2009'
        }
      ],
      articles2008: [
        {
          name:
            'Robust Tracking in A Camera Network: A Multi-Objective Optimization Framework',
          note:
            'B. Song and A. Roy-Chowdhury, IEEE Journal on Selected Topics in Signal Processing: Special Issue on Distributed Processing in Vision Networks, August 2008.',
          link: 'static/publications/stamp.html',
          extras: [],
          year: '2008'
        },
        {
          name:
            'Inverse Compositional Estimation of 3D Pose And Lighting in Dynamic Scenes',
          note:
            'Y. Xu and A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, July 2008.',
          link: 'static/publications/pami08.pdf',
          extras: [],
          year: '2008'
        },
        {
          name:
            'A Theoretical Analysis of Linear and Multi-linear Models of Image Appearance',
          note:
            'Y. Xu, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2008.',
          link: 'static/publications/cvpr08_theory.pdf',
          extras: [],
          year: '2008'
        },
        {
          name:
            'Learning A Geometry-Integrated Image Appearance Manifold From A Small Training Set',
          note:
            'Y. Xu, A. Roy-Chowdhury, IEEE Conf. on Computer Vision and Pattern Recognition, 2008.',
          link: 'static/publications/cvpr08_GAM.pdf',
          extras: [],
          year: '2008'
        },
        {
          name:
            'Integrating Illumination, Motion and Shape Models for Robust Face Recognition In Video',
          note:
            'Y.Xu, A. Roy-Chowdhury and K. Patel, EURASIP Journal on Advances in Signal Processing: Advanced Signal Processing and Pattern Recognition Methods for Biometrics, 2008.',
          link: 'static/publications/download (3).html',
          extras: [],
          year: '2008'
        },
        {
          name: 'Activity Representation Using 3D Shape Models',
          note:
            'M. Abdelkader, A. Roy-Chowdhury, R. Chellappa and U. Akdemir, EURASIP Journal on Image and Video Processing: Special Issue on Anthropocentric Video Analysis: Tools and Applications, 2008.',
          link: 'static/publications/paper_Eurasip.pdf',
          extras: [],
          year: '2008'
        },
        {
          name:
            'Multi-Target Tracking Through Opportunistic Camera Control In A Resource Constrained Multimodal Sensor Network',
          note:
            'J. Nayak, L. Gonzalez-Argueta, B. Song, A. Roy-Chowdhury, and E. Tuncel, IEEE/ACM Intl. Conf. on Distributed Smart Cameras, 2008.',
          link: 'static/publications/icdsc08.pdf',
          extras: [],
          year: '2008'
        }
      ],
      articles2007: [
        {
          name:
            'Integrating Motion, Illumination and Structure in Video Sequences, With Applications in Illumination-Invariant Tracking',
          note:
            'Y. Xu and A. Roy-Chowdhury, IEEE Trans. on Pattern Analysis and Machine Intelligence, May 2007.',
          link: 'static/publications/stamp (1).html',
          extras: [],
          year: '2007'
        },
        {
          name: 'Towards A Measure of Deformability of Shape Sequences',
          note: 'A. Roy-Chowdhury, Pattern Recognition Letters, Vol. 28, 2007.',
          link: 'static/publications/shape_prl.pdf',
          extras: [],
          year: '2007'
        },
        {
          name: 'Stochastic Adaptive Tracking In A Camera Network',
          note:
            'B. Song, A. Roy-Chowdhury, IEEE Intl. Conf. on Computer Vision, 2007.',
          link: 'static/publications/iccv07.pdf',
          extras: [],
          year: '2007'
        },
        {
          name:
            'Closed-loop Tracking and Change Detection in Multi-Activity Sequences',
          note:
            'B. Song, N. Vaswani, A. Roy-Chowdhury, IEEE Computer Vision and Pattern Recognition, 2007.',
          link: 'static/publications/cvpr07.pdf',
          extras: [],
          year: '2007'
        },
        {
          name:
            'Pose and Illumination Invariant Face Recognition Using Video Sequences',
          note:
            'A. Roy-Chowdhury, Y. Xu, Multi-Biometric Systems for Identity Recognition: Theory and Experiments, (Eds. R. Hammoud, M. Abidi and B. Abidi), Springer-Verlag, 2007.',
          link: 'static/publications/face-chapter.pdf',
          extras: [],
          year: '2007'
        },
        {
          name:
            'Super-resolved Facial Texture Under Changing Pose and Illumination',
          note:
            'J. Yu, B. Bhanu, Y. Xu, A. Roy-Chowdhury, IEEE Intl. Conf. on Image Processing, 2007.',
          link: 'static/publications/icip07-face.pdf',
          extras: [],
          year: '2007'
        }
      ],
      articles2006: [
        {
          name: 'The Function Space of an Activity',
          note:
            'A. Veeraraghavan, R. Chellappa, A. Roy-Chowdhury, IEEE Computer Vision and Pattern Recognition, 2006.',
          link: 'static/publications/cvpr06.pdf',
          extras: [],
          year: '2006'
        },
        {
          name: 'A Multi-Terminal Model-Based Video Compression Algorithm',
          note:
            'B. Song, A. Roy-Chowdhury, E. Tuncel, IEEE Intl. Conf. on Image Processing, 2006.',
          link: 'static/publications/icip06-distributed.pdf',
          extras: [],
          year: '2006'
        },
        {
          name:
            'Towards A Multi-Terminal Video Compression Algorithm Using Epipolar Geometry',
          note:
            'B. Song, O. Bursalioglu, E. Tuncel, A. Roy-Chowdhury, IEEE Intl. Conf. on Acoustics, Speech and Signal Processing, 2006. (Best Student Paper Award)',
          link: 'static/publications/icassp06.pdf',
          extras: [],
          year: '2006'
        }
      ],
      articles2005: [
        {
          name:
            'Matching Shape Sequences in Video with Applications in Human Motion Analysis',
          note:
            'A. Veeraraghavan, A. Roy-Chowdhury, R. Chellappa, IEEE Trans. on Pattern Analysis and Machine Intelligence, pp. 1896-1909, December, 2005.',
          link: 'static/publications/Comp_Shape_Seq_final.pdf',
          extras: [],
          year: '2005'
        },
        {
          name:
            '"Shape Activity" : A Continuous State HMM for Moving/Deforming Shapes with Application to Abnormal Activity Detection',
          note:
            'N. Vaswani, A. Roy-Chowdhury, R. Chellappa, IEEE Trans. on Image Processing, pp. 1603-1616, October, 2005.',
          link: 'static/publications/tip_activity.pdf',
          extras: [],
          year: '2005'
        },
        {
          name: 'Statistical Bias in 3D Reconstruction from A Monocular Video',
          note:
            'Amit K. Roy-Chowdhury, R. Chellappa, IEEE Trans. on Image Processing, pp. 1057-1062, August, 2005.',
          link: 'static/publications/bias_pap.pdf',
          extras: [],
          year: '2005'
        },
        {
          name:
            'Integrating the Effects of Motion, Illumination and Structure in Video Sequences',
          note:
            'Y. Xu, A. Roy-Chowdhury. IEEE Intl. Conf. on Computer Vision, 2005.',
          link: 'static/publications/iccv05.pdf',
          extras: [],
          year: '2005'
        },
        {
          name:
            'A Measure of Deformability of Shapes, With Applications to Human Motion Analysis',
          note:
            'A. Roy-Chowdhury. IEEE Computer Vision and Pattern Recognition, 2005.',
          link: 'static/publications/cvpr05.pdf',
          extras: [],
          year: '2005'
        },
        {
          name: '3D Face Modeling From Monocular Video Sequences',
          note:
            'A. Roy-Chowdhury, R. Chellappa, H. Gupta, Face Processing: Advanced Modeling and Methods (Eds. R.Chellappa and W.Zhao), Academic Press, 2005.',
          link: 'static/publications/face-book-chapter.pdf',
          extras: [],
          year: '2005'
        },
        {
          name: 'Statistics in Computer Vision and Image Processing',
          note:
            'R. Chellappa, A Roy-Chowdhury, Encyclopedia of Statistical Sciences, 2nd ed., Vol. 2, (S. Kotz et al., eds.), John Wiley & Sons, Hoboken, pp. 1164-1173, 2005.',
          link: 'static/publications/ess.pdf',
          extras: [],
          year: '2005'
        }
      ],
      articles2004: [
        {
          name: 'Identification of Humans Using Gait',
          note:
            'A. Kale, A.N. Rajagopalan, A. Sunderesan, N. Cuntoor, A. Roy-Chowdhury, V. Krueger, R. Chellappa, IEEE Trans. on Image Processing, pp. 1163-1173, Sept. 2004.',
          link: 'static/publications/iptrans_gait.pdf',
          extras: [],
          year: '2004'
        },
        {
          name:
            'An Information Theoretic Criterion for Evaluating the Quality of 3D Reconstructions from Video',
          note:
            'Amit K. Roy-Chowdhury, R. Chellappa, IEEE Trans. on Image Processing, pp. 960-973, July 2004.',
          link: 'static/publications/iptrans04_info.pdf',
          extras: [],
          year: '2004'
        },
        {
          name:
            'Wide Baseline Image Registration with Application to 3D Face Modeling',
          note:
            'Amit K. Roy-Chowdhury, R. Chellappa, Trish Keaton, IEEE Transactions on Multimedia, pp. 423-434, June 2004.',
          link: 'static/publications/mm_trans.pdf',
          extras: [],
          year: '2004'
        },
        {
          name: 'Role of Shape and Kinematics in Human Movement Analysis',
          note:
            'A. Veeraraghavan, A. Roy-Chowdhury, R. Chellappa. IEEE Computer Vision and Pattern Recognition, 2004.',
          link: 'static/publications/cvpr04.pdf',
          extras: [],
          year: '2004'
        },
        {
          name:
            'Multiple View Tracking of Human Motion Modeled by Kinematic Chains',
          note:
            'A. Sundaresan, A. Roy-Chowdhury, R. Chellappa, IEEE Int. Conf. on Image Processing, 2004.',
          link: 'static/publications/kinematic-model.pdf',
          extras: [],
          year: '2004'
        },
        {
          name:
            'A System Identification Approach for Video-Based Face Recognition',
          note:
            'G. Aggarwal, Amit K. Roy-Chowdhury, R. Chellappa. International Conference on Pattern Recognition, 2004.',
          link: 'static/publications/icpr04.pdf',
          extras: [],
          year: '2004'
        }
      ],
      articles2003: [
        {
          name:
            'Stochastic Approximation and Rate Distortion Analysis for Robust Structure and Motion Estimation',
          note:
            'Amit K. Roy-Chowdhury, R. Chellappa, International Journal on Computer Vision. Volume 55(1), pp. 27-53, October 2003.',
          link: 'static/publications/ijcv_paper.pdf',
          extras: [],
          year: '2003'
        },
        {
          name:
            'Face Reconstruction From Video Using Uncertainty Analysis and a Generic Model',
          note:
            'Amit K. Roy-Chowdhury, R. Chellappa, Computer Vision and Image Understanding, 91(1-2), pp. 188-213, July-August 2003.',
          link: 'static/publications/cviu-face.pdf',
          extras: [],
          year: '2003'
        },
        {
          name:
            'Activity Recognition Using the Dynamics of the Configuration of Interacting Objects Namrata Vaswani',
          note:
            'Amit K. Roy-Chowdhury, R. Chellappa. IEEE Computer Vision and Pattern Recognition, 2003.',
          link: 'static/publications/hai.pdf',
          extras: [],
          year: '2003'
        },
        {
          name: 'A Factorization Approach to Activity Recognition',
          note:
            'Amit K. Roy-Chowdhury, R. Chellappa. CVPR Workshop on Event Mining, 2003.',
          link: 'static/publications/cvpr03-wrkshp.pdf',
          extras: [],
          year: '2003'
        },
        {
          name: 'Towards A View Invariant Gait Recognition Algorithm',
          note:
            'Amit K. Roy-Chowdhury, A. Kale, R. Chellappa. IEEE Intl. Conf. on Advanced Video and Signal Based Surveillance, 2003.',
          link: 'static/publications/avss03.pdf',
          extras: [],
          year: '2003'
        },
        {
          name:
            'Deterministic and Statistical Properties of Multi-resolution 3D Modeling',
          note:
            'A. Roy-Chowdhury, H. Liu, R. Chellappa. ICCV Workshop on Statistical and Computational Theories in Vision, 2003.',
          link: 'static/publications/multi_sctv.pdf',
          extras: [],
          year: '2003'
        }
      ],
      magazines: [
        {
          name: '"About Face" - National Geographic, November 2003.',
          note:
            'Work on Face Recognition under pose, illumination variations and disguise was featured in this issue (Pages 18-19). The box on the right of the above link illustrates our work.',
          link: 'static/publications/index.html',
          year: '2003'
        }
      ],
      papers: [
        {
          name:
            'Statistical Analysis of 3D Modeling From Monocular Video Streams',
          note: '',
          link: 'static/publications/dissertation.pdf',
          year: '2002'
        }
      ]
    }
  }
}
</script>

<style scoped>
.toggle {
  cursor: pointer;
  right: 5%;
  position: absolute;
}
</style>


