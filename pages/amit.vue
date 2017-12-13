<template>
   <div id="data" class="inherit-height">
      <div id="home-body">
        <div class="container row">
          <div class="col-md-3 col-xs-6">
              <img id="profile-picture" src="/img/people/amit.jpg" alt="Amit">
          </div>
          <div class="col-md-4">
              <h3 id="name">Amit Roy-Chowdhury</h3>
              <p><strong>Professor</strong>, <a href="http://ece.ucr.edu">Electrical and Computing Enginering</a></p>
              <p><strong>Cooperating Faculty</strong>, <a href="http://ece.ucr.edu">Computer Science and Engineering</a></p>
              <p><strong>Principal Investigator</strong>, <router-link to="/">Video Computing Group</router-link></p>
              <p><strong>Winston Chung Hall 431</strong>, UC Riverside</p>
              <div class="row">
                  <div class="col-md-12">
                      <span><strong>Phone</strong>: (951) 827-7886</span>
                  </div>
                  <div class="col-md-12">
                      <span><strong>Fax</strong>: (951) 827-2425</span>
                  </div>
                  <div class="col-md-12">
                      <span><strong>Email</strong>: <a href="mailto:amitrc@ee.ucr.edu">amitrc@ee.ucr.edu</a></span>
                  </div>
                  <div class="col-md-12">
                      <span><strong>Calendar</strong>: <a href="https://exchange.engr.ucr.edu/owa/calendar/d2383983d21c431c88e35b4c56929342@ee.ucr.edu/664d22dea30e4cbe833cc229f2961a444807192837336123402/calendar.html">Outlook Exchange</a></span>
                  </div>
              </div>
          </div>
          <div class="col-md-5">
              <h3>Research Interests</h3>
              <ul>
                  <li>Computer Vision and Image Processing</li>
                  <li>Statistical Signal Processing and Pattern Recognition</li>
                  <li>Biometrics, especially face and soft biometrics</li>
                  <li>Vision sensor networks</li>
                  <li>Machine Learning</li>
                  <li>Multimedia</li>
                  <li>Biomedical Image Processing</li>
              </ul>
          </div>
        </div>
        <div class="container row">
            <div class="col-md-12">
                <p>
                    Dr. Roy-Chowdhury leads the Video Computing Group at UCR, with research interests in computer vision, image processing, pattern recognition, and statistical signal processing. His group is involved in research projects related to camera networks, human behavior modeling, face recognition, and bioimage analysis. Prof. Roy-Chowdhury's research has been supported by various US government agencies and private industries. His research group has published close to 200 papers in peer-reviewed journals and top conferences, including ~50 journal papers and another ~40 in highly competitive computer vision conferences. He is the first author of the book Camera Networks: The Acquisition and Analysis of Videos Over Wide Areas, the first monograph on the topic. His work on face recognition in art was featured widely in the news media, including a PBS/National Geographic documentary and in The Economist. He is on the editorial boards of major journals and program committees of the main conferences in his area. He is a Fellow of the IAPR. For more details, please see his <a href="people/amitcv.pdf">CV</a>.
                </p>
            </div>
        </div>
        <div class="container">
            <h2>Teaching</h2>

            <ul>
                <li :key="t.name" v-for="t in teachings">{{ t.number }} - {{ t.name }} ({{ t.type }})</li>
            </ul>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  data: function () {
    return {
      teachings: [
        {
          number: 'EE114',
          name:
            'Probability, Random Variables and Processes in Electrical Engineering',
          type: 'Undergraduate Core Class'
        },
        {
          number: 'EE215',
          name: 'Stochastic Processes',
          type: 'Graduate Core Class'
        },
        {
          number: 'EE236',
          name: 'State and Parameter Estimation',
          type: 'Graduate Elective Class'
        },
        {
          number: 'EE241',
          name: 'Advanced Digital Image Processing',
          type: 'Graduate Elective Class'
        },
        {
          number: 'EE243',
          name: 'Advanced Computer Vision',
          type: 'Graduate Elective Class'
        },
        {
          number: 'EE247',
          name: 'Current Topics in Computer Vision',
          type: 'Graduate Elective Class'
        }
      ]
    }
  }
}
</script>
<style scoped>
#profile-picture {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
}
#name {
  /* padding-bottom: 5px;
  border-bottom: #234674 solid 2px; */
  font-weight: 800;
}
</style>

