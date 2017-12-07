<template>
  <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container">

          <div class="row">
            <div class="col-md-12 text-center">
              <h2>Faculty Members</h2>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="person">
                  <div class="col-md-3 col-xs-3">
                    <img src="/img/people/amit.jpg" class="img-responsive"/>
                  </div>
                  <div class="col-md-9">
                    <h4><strong>Amit Roy-Chowdhury</strong></h4>
                    <p>Professor, Electrical and Computer Engineering</p>
                  </div>
                  <div class="col-md-12 personActions">
                    <a href="mailto:amitrc@ee.ucr.edu"  class="btn btn-primary btn-sm"><span class="fa fa-envelope-o"></span> Email</a>
                    <router-link to="/amit"  class="btn btn-primary btn-sm"><span class="fa fa-globe"></span> Website</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-center">
              <h2>Graduate Students</h2>
            </div>
            <div class="col-md-6 col-xs-12 personContainer" v-for="member in grads" :key="member.name">
              <div class="row">
                <div class="person" >
                  <div class="col-md-3 col-xs-3" :key="member.name">
                    <img :src="'/img/people/' + member.image" class="img-responsive"/>
                  </div>
                  <div class="col-md-9">
                    <h4><strong>{{member.name}}</strong></h4>
                    <p>{{member.position}}</p>
                  </div>
                  <div class="col-md-12 personActions">
                    <a v-if="member.contact.email.length > 0" :href="'mailto:' + member.contact.email"  class="btn btn-primary btn-sm"><span class="fa fa-envelope-o"></span> Email</a>
                    <a v-if="member.contact.website.length > 0" :href="member.contact.website"  class="btn btn-primary btn-sm"><span class="fa fa-globe"></span> Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-center">
              <h2>Undergradute Students</h2>
            </div>
            <div class="col-md-6 personContainer" v-for="member in undergrads" :key="member.name">
              <div class="row">
                <div class="person" >
                  <div class="col-md-3 col-xs-3" :key="member.name">
                    <img :src="'/img/people/' + member.image" class="img-responsive"/>
                  </div>
                  <div class="col-md-9">
                    <h4><strong>{{member.name}}</strong></h4>
                    <p>{{member.position}}</p>
                    <p v-if="member.contact.mobile.length > 0" disabled><span class="fa fa-phone"></span> {{member.contact.mobile}}</p>
                  </div>
                  <div class="col-md-12 personActions">
                    <a v-if="member.contact.email.length > 0" :href="'mailto:' + member.contact.email"  class="btn btn-primary btn-sm"><span class="fa fa-envelope-o"></span> Email</a>
                    <a v-if="member.contact.website.length > 0" :href="member.contact.website"  class="btn btn-primary btn-sm"><span class="fa fa-globe"></span> Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-center">
              <h2>Visiting Scholars</h2>
            </div>
            <div class="col-md-6 personContainer" v-for="member in visitors" :key="member.name">
              <div class="row">
                <div class="person" >
                  <div class="col-md-3 col-xs-3" :key="member.name">
                    <img :src="'/img/people/' + member.image" class="img-responsive"/>
                  </div>
                  <div class="col-md-9">
                    <h4><strong>{{member.name}}</strong></h4>
                    <p>{{member.position}}</p>
                    <p v-if="member.contact.mobile.length > 0" disabled><span class="fa fa-phone"></span> {{member.contact.mobile}}</p>
                  </div>
                  <div class="col-md-12 personActions">
                    <a v-if="member.contact.email.length > 0" :href="'mailto:' + member.contact.email"  class="btn btn-primary btn-sm"><span class="fa fa-envelope-o"></span> Email</a>
                    <a v-if="member.contact.website.length > 0" :href="member.contact.website"  class="btn btn-primary btn-sm"><span class="fa fa-globe"></span> Website</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-12 text-center">
              <h2>Former Students and Research Collaborators</h2>
            </div>
            <ul class="group-list">
              <li class="group-list-item" v-for="a in alumni" :key="a.name">
                <strong>{{ a.name }}</strong> ({{ a.degree }}) <br>
                {{ a.position }} <br>
                <span v-if="a.thesis.length > 1">
                  Thesis: <a v-if="a.thesisLink.length > 1" :href="'/thesis/' + a.thesisLink">{{ a.thesis }}</a>
                          <span v-else>{{ a.thesis }}</span>
                </span>
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
  data: function () {
    return {
      facultyMembers: [
        {
          name: 'Amit Roy-Chowdhury',
          position: 'Professor, Electrical and Computer Engineering',
          image: '/../../../img/poeple/amit.jpg',
          website: '',
          contact: {
            email: 'amitrc@ece.ucr.edu',
            mobile: '951-827-7886',
            website: '/amit'
          }
        }
      ],
      alumni: [
        {
          name: 'Katya Mkrtchyan',
          position: 'Assistant Professor at Cal State Northridge',
          degree: 'PhD 2016',
          thesis: 'Video Bioinformatics with Applications in Cell Biology and Entomology',
          thesisLink: '.'
        },
        {
          name: 'Mahmudul Hasan',
          position: 'Currently at Comcast Labs',
          degree: 'PhD 2016',
          thesis: 'Online Activity Understanding and Labeling in Natural Videos',
          thesisLink: 'thesis-hasan.pdf'
        },
        {
          name: 'Shu Zhang',
          position: 'Currently at JD.com',
          degree: 'PhD 2015',
          thesis: 'Wide-Area Video Understanding: Tracking, Video Summarization and Algorithm-Platform Co-Design',
          thesisLink: 'Shu Thesis.pdf'
        },
        {
          name: 'Abir Das',
          position: 'Postdoctoral Researcher, Computer Vision and Learning Group, Boston University',
          degree: 'PhD 2015',
          thesis: 'Active Learning in Multi-Camera Networks, With Applications in Person Re-Identification',
          thesisLink: 'thesis-abir.pdf'
        },
        {
          name: 'Ramya Srinivasan',
          position: 'Currently at Fujitsu Lab, USA',
          degree: 'PhD 2015',
          thesis: 'Investigating the Role of Saliency for Face Recognition',
          thesisLink: 'thesis-ramya.pdf'
        },
        {
          name: 'Yingying Zhu',
          position: 'Currently at Honda Research Institute',
          degree: 'PhD 2014',
          thesis: 'Towards Sparse Modeling of Multi-Object Interactions in Video',
          thesisLink: 'thesis-yingying.pdf'
        },
        {
          name: 'Nandita Nayak',
          position: 'Currently at Konica Minolta Lab',
          degree: 'PhD 2014',
          thesis: 'Graphical Models for Wide-Area Activity Analysis in Continuous Videos',
          thesisLink: 'Nandita_thesis.pdf'
        },
        {
          name: 'Anirban Chakraborty',
          position: 'Assistant Professor at Indian Institute of Science',
          degree: 'PhD 2014',
          thesis: 'Exploration of Contextual Relationships for Robust Video Analysis: Applications in Camera Networks, Bio-image Analysis and Activity Forecasting',
          thesisLink: 'thesis-anirban.pdf'
        },
        {
          name: 'Chong Ding',
          position: 'Currently at HRL Lab, USA ',
          degree: 'PhD 2013',
          thesis: 'Coordinated Sensing in Intelligent Camera Networks',
          thesisLink: 'thesis-chong.pdf'
        },
        {
          name: 'Ahmed Tashrif Kamal',
          position: 'Currently at Apple, USA',
          degree: 'PhD 2013',
          thesis: 'Information Weighted Consensus for Distributed Estimation in Vision Networks',
          thesisLink: 'PhD_Dissertation_Ahmed_Kamal.pdf'
        },
        {
          name: 'Min Liu',
          position: 'Associate Prof. at Hunan University, China',
          degree: 'PhD 2012',
          thesis: 'Feature Extraction in Volumetric Bioimages',
          thesisLink: 'thesis-Min.pdf'
        },
        {
          name: 'Antony Lam',
          position: 'Asst. Prof at Saitama University, Japan.',
          degree: 'PhD 2010',
          thesis: 'Learning Ranking Functions for Video Search on the Web (co-advised with Prof. C. Shelton)',
          thesisLink: ''
        },
        {
          name: 'Ricky Sethi',
          position: 'Asst. Prof. at Fitchburg State University',
          degree: 'PhD 2009',
          thesis: 'A Physics-Based Neurobiologically-Inspired Stochastic Framework for Activity Recognition',
          thesisLink: 'thesis-rick.pdf'
        },
        {
          name: 'Bi Song',
          position: 'Currently at Sony Research USA',
          degree: 'PhD 2009',
          thesis: 'Scene Analysis, Control and Communication in Distributed Camera Networks',
          thesisLink: 'Thesis_BiSong.pdf'
        },
        {
          name: 'Yilei Xu',
          position: 'Currently at Nokia',
          degree: 'PhD 2008',
          thesis: 'A Theoretical Analysis of Image Appearance Models With Applications in Face Recognition',
          thesisLink: 'Yilei-Final-Thesis.pdf'
        },
        {
          name: 'Elliot Staudt',
          position: 'Currently at Mayachitra Inc.',
          degree: 'MS 2015',
          thesis: '.',
          thesisLink: '.'
        },
        {
          name: 'Utkarsh Gaur',
          position: 'Currently at Bisque Lab, UCSB',
          degree: 'MS 2010',
          thesis: '.',
          thesisLink: '.'
        },
        {
          name: 'Ting Yeuh Jeng',
          position: 'N/A',
          degree: 'MS 2009',
          thesis: '.',
          thesisLink: '.'
        },
        {
          name: 'Cristian Soto',
          position: 'N/A',
          degree: 'MS Student 2007-2008',
          thesis: '.',
          thesisLink: '.'
        },
        {
          name: 'Luis Gonzalez-Argueta',
          position: 'N/A',
          degree: 'MS Student 2007-2009',
          thesis: '.',
          thesisLink: '.'
        }
      ],
      undergrads: [
        {
          name: 'Cody Simons',
          position: 'Undergraduate Student, Electrical and Computer Engineering',
          image: 'cody.jpg',
          website: '',
          contact: {
            email: 'csimo005@ucr.edu',
            mobile: '',
            website: ''
          }
        }
      ],
      visitors: [
        {
          name: 'Niki Martinel',
          position: 'University of Udine, Italy',
          image: 'Niki.jpg',
          website: 'http://web.uniud.it/didattica/servizi_studenti/international_students_service/university.htm',
          contact: {
            email: '',
            mobile: '',
            website: ''
          }
        },
        {
          name: 'Amran Bhuiyan',
          position: 'Istituto Italiano di Tecnologia, Italy',
          image: 'Amran.jpg',
          website: '',
          contact: {
            email: '',
            mobile: '',
            website: ''
          }
        }
      ],
      grads: [
        {
          name: 'Jawadul H. Bappy',
          position: 'PhD Candidate, Electrical and Computer Engineering',
          image: 'jawad.png',
          website: 'http://www.ee.ucr.edu/~mbappy/',
          contact: {
            email: 'mbapp001@ucr.edu',
            mobile: '951-827-7886',
            website: 'http://www.ee.ucr.edu/~mbappy/'
          }
        },
        {
          name: 'Niluthpol Mithun',
          position: 'PhD Candidate, Electrical and Computer Engineering',
          image: 'niluthpol.png',
          website: '',
          contact: {
            email: 'niluthpol.chy@gmail.com',
            mobile: '',
            website: 'http://www.ee.ucr.edu/~nmithun/'
          }
        },
        {
          name: 'Rameswar Panda',
          position: 'PhD Candidate, Electrical and Computer Engineering',
          image: 'rameswar.png',
          website: '',
          contact: {
            email: 'rpand002@ucr.edu',
            mobile: '',
            website: 'https://rpand002.github.io/'
          }
        },
        {
          name: 'Tahmida Mahmud',
          position: 'PhD Candidate, Electrical and Computer Engineering',
          image: 'tahmida2.jpg',
          website: '',
          contact: {
            email: 'tmahm001@ucr.edu',
            mobile: '',
            website: 'http://www.ece.ucr.edu/~tmahmud/'
          }
        },
        {
          name: 'Sujoy Paul',
          position: 'PhD Candidate, Electrical and Computer Engineering',
          image: 'sujoy.jpg',
          website: '',
          contact: {
            email: 'spaul003@ucr.edu',
            mobile: '',
            website: 'http://ee.ucr.edu/~supaul/'
          }
        },
        {
          name: 'Shuyue Lan',
          position: 'PhD Candidate, Electrical and Computer Engineering',
          image: 'shuyue.jpg',
          website: '',
          contact: {
            email: 'slan001@ucr.edu',
            mobile: '',
            website: 'http://www.ee.ucr.edu/~slan/'
          }
        },
        {
          name: 'Sourya Roy',
          position: 'PhD Candidate, Electrical and Computer Engineering',
          image: 'sourya.jpg',
          website: '',
          contact: {
            email: 'sroy004@ucr.edu',
            mobile: '',
            website: ''
          }
        },
        {
          name: 'Sasha Li',
          position: 'PhD Candidate, Computer Science and Engineering',
          image: 'shasha.jpg',
          website: '',
          contact: {
            email: 'sli057@ucr.edu',
            mobile: '',
            website: ''
          }
        },
        {
          name: 'Akash Gupta',
          position: 'Masters Student, Electrical and Computer Engineering',
          image: 'Akash.jpg',
          website: '',
          contact: {
            email: 'agupt013@ucr.edu',
            mobile: '',
            website: ''
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
  li {
    margin-bottom: 20px;
  }
</style>

