<template>
   <div class="body">
    <img src="../assets/image/rightback.png" @click="goIndex" class="backButton"/>
    <div style="padding-left: 3%;padding-bottom: 140px;" v-if="!privacy">
      <strong>隐私声明</strong>
      <p>
        本条例自2014年10月23日起生效
      </p>
      <p>
        此隐私保护条例的中文版本是基于英文条例之翻译版本，如条例中出现解释模糊或定义不清情况最终以英文条例为参考。
      </p>
      <p><strong>个人资料收集</strong></p>
      <p>
        我们对您个人资料的收集目的是为了提供更优质的服务。
      </p>
      <p>
        我们的服务包括但不局限于：
      </p>
      <ul>
        <li>a.处理您的申请与登记</li>
        <li>b.回复您的各项问题及投诉建议</li>
        <li>c.为您及时提供中心的最新消息</li>
        <li>d.为您及时提供孩子的学习状况</li>
        <li>e.为您及时提供最合适孩子的课程以及上课时段</li>
        <li>f.为学生提供上课所需教材</li>
        <li>g.处理您的各项消费记录及单据</li>
      </ul>
      <br/>
      <p>
        我们会尽力确保您可以及时收到最新的信息。
      </p>
      <p>
        如果您不愿接收到我们的新信息，请将以下信息发送至<span><a href="mailto:unsubscribe@monkeytree.com.hk">unsubscribe@monkeytree.com.hk</a></span>
      </p>
      <ul>
        <li>a.您的姓名</li>
        <li>b.您的相关资料</li>
        <li>c.您不愿收到新信息的原因</li>
      </ul>
      <br/>
      <p><strong>保证您个人资料准确无误</strong></p>
      <p>
        我们会尽力保证您的个人资料实时更新及准确无误。
      </p>
      <p>
        我们将会以您留给我们的数据来与您联系。
      </p>
      <p>
        如果您需要更新您的数据请发邮件到<span><a href="mailto:personaldata@monkeytree.com.hk">personaldata@monkeytree.com.hk</a></span>
      </p>
      <p><strong>个人信息保障</strong></p>
      <p>
        我们将会对您的个人资料严格保密。未经您的同意我们不会将您的任何数据用于或公开给非蒙奇千里儿童俱乐部之用途。
      </p>
      <p>
        我们会将您的部分个人资料转给第三方，如：公司雇员、或关联公司其中包括子公司、合作伙伴等，目的是为您提供更好地服务。
      </p>
      <p><strong>个人资料的保存</strong></p>
      <p>
        我们会以适合的安保系统来管理您的数据以防止未经授权的浏览。
      </p>
      <p>
        我们对您个人资料的保留时间不会长于达致数据用途（或任何直接相关的目的）所需的时间，且须受与保留资料有关的法律、法定及监管规定的规限。
      </p>
      <p>
        如果您对我们的相关政策有任何疑问请与我们联系。<span><a href="mailto:personaldata@monkeytree.com.hk">personaldata@monkeytree.com.hk</a></span>或将信件寄往以下地址:
      </p>
      <p>
        香港北角英皇道101号10楼1002室
      </p>
      <p><strong>影像声明</strong></p>
      <p>
        蒙奇千里儿童俱乐部 会在不影响课堂的情况下拍摄一些学生或老师的照片或录像。这些照片或影像会出现在公共场所及网络。如果您拒绝这些照片或影像出现在公共场所及网络，请以邮件的方式告知我们 personaldata@monkeytree.com.hk 邮件内容包括：
      </p>
      <ul>
        <li>a.您和您孩子的姓名</li>
        <li>b.您的联系电话</li>
        <li>c.您所在的分校名称</li>
      </ul>
      <p><strong>隐私声明变更</strong></p>
      <p>我们会不定时对隐私声明进行更新，更新前亦不会做出通知。您可以经常登录本网站已查询最新条款。
      </p>

    </div>
    <div style="padding-left: 3%;padding-bottom: 140px;" v-if="service">
      <strong>用户协议</strong>

      <p>本声明自2014年10月23日起生效</p>

      <p>蒙奇千里儿童俱乐部声明，本APP下的中文内容是根据英文之翻译版本，如若出现解释模糊，定义不清的情况，内容以英文为准。</p>

      <strong>免责声明</strong>

      <p>我们会对载于本APP的内容进行即时更新以便管理，但APP上内容因更新而做出的修改恕不另行通知</p>

      <p>我们不会因为载于APP上的信息错误而导致的损失承担任何责任。</p>

        <strong>声明变更</strong>

      <p>我们会不定时对本APP的各项声明进行更新，更新前亦不会做出通知。您可以经常登录本APP已查询最新条款。</p>

          <strong>版权声明</strong>

      <p>除特殊声明外，载于本APP上的一切资料之版权归蒙奇千里儿童俱乐部所有。</p>

      <p>本APP所载一切资料包括（文字、照片、图画 等）仅限于个人以及非商业之用途。相关资料未经蒙奇千里儿童俱乐部同意，禁止用于公共及其他商业用途。</p>
    </div>
    <div style="padding-left: 3%;padding-bottom: 140px;padding-right:9%;">
        <h4 class="title">Privacy Statement</h4>
        <p class="p1">Effective Date: from 23rd October, 2014</p>
        <p class="p1">This Privacy Statement has been translated into Chinese. In case of inconsistency or ambiguity between the English and Chinese versions, the English version shall prevail.</p>
        <h5 class="mt-4">Collection of Personal Data</h5>
        <p class="p1">Monkey Tree English Learning Center Limited (“Monkey Tree English Learning Center”, “Monkey Tree”, “MTELC”, “we”, “us”, or “our”) collects personal data that we believe to be relevant and required to provide the best service to you.</p>
        <p class="p1">Our services include, but are not limited to, the following:</p>
      <ul class="mt-3 ml-5" style="list-style: disc;">
        <li><p>Processing your application and registration</p></li>
        <li class="mt-2"><p>Replying to your or your child’s inquiries, concerns or complaints</p></li>
        <li class="mt-2"><p>Direct marketing, such as delivering news, offers and promotions relevant for you or your child</p></li>
        <li class="mt-2"><p>Providing up-to-date information regarding your or your child’s attendance, progress and upcoming classes</p></li>
        <li class="mt-2"><p>Assigning available and best suited classes to you or your child</p></li>
        <li class="mt-2"><p>Providing relevant class materials for you or your child during class</p></li>
        <li class="mt-2"><p>Issuing invoices, collecting course fees, issuing receipts, and maintaining your payment history</p></li>
      </ul>
      <ul class="mt-3 ml-5" style="list-style: disc;">
        <li><p>Processing your application and registration</p></li>
        <li class="mt-2"><p>Replying to your or your child’s inquiries, concerns or complaints</p></li>
        <li class="mt-2"><p>Direct marketing, such as delivering news, offers and promotions relevant for you or your child</p></li>
        <li class="mt-2"><p>Providing up-to-date information regarding your or your child’s attendance, progress and upcoming classes</p></li>
        <li class="mt-2"><p>Assigning available and best suited classes to you or your child</p></li>
        <li class="mt-2"><p>Providing relevant class materials for you or your child during class</p></li>
        <li class="mt-2"><p>Issuing invoices, collecting course fees, issuing receipts, and maintaining your payment history</p></li>
      </ul>
      <p class="p1">All direct marketing activities will be relevant to current Monkey Tree events, promotions and updates. Monkey Tree will endeavor to limit all direct marketing activities to contain material strictly relevant to you personally.</p>
      <p class="p1">If you prefer your personal data not to be used for the purposes of direct marketing activities, please send an email to
        <span><a href="mailto:unsubscribe@monkeytree.com.hk">unsubscribe@monkeytree.com.hk</a></span> containing the following information:
      </p>
      <ol type="a" class="mt-3 ml-5">
        <li><p>Your name</p></li>
        <li><p>Your related information</p></li>
        <li><p>Your intention to opt-out of Monkey Tree’s direct marketing activities</p></li>
      </ol>
      <h5 class="mt-4">Accuracy of your Personal Information</h5>
      <p class="p1">We will, as manageable by our best effort, keep your personal data accurate and up-to date.</p>
      <p class="p1">We rely on you to disclose all material information to us and to inform us of any errors or changes in such information.</p>
      <p class="p1">If you would like to notify us of any changes, such as a change of your contact number, please e-mail us at
        <span><a href="mailto:personaldata@monkeytree.com.hk">personaldata@monkeytree.com.hk</a></span>.
      </p>
      <h5 class="mt-4">Disclosing Your Personal Information</h5>
      <p class="p1">We keep all personal data strictly confidential, and we will not disclose personal data outside of Monkey Tree unless we have your consent or are required to by law.</p>
      <p class="p1">We may transfer your personal data to third parties such as employees, related companies, including subsidiaries and associated companies, as necessary to provide the best service to you.</p>

      <h5 class="mt-4">Protecting and Retaining Your Personal Information</h5>
      <p class="p1">We maintain appropriate security systems to prevent unauthorized access to all personal data.</p>
      <p class="p1">We retain personal data for no longer than is required to fulfill the purpose or any directly related purposes for which the data is to be used, subject to legal, statutory and regulatory requirements for the retention of data.</p>
      <p class="p1">If you have any questions or concerns regarding Monkey Tree’s Privacy Statement, please feel free to contact us at personaldata@monkeytree.com.hk or write to the following address:</p>
      <p class="p1">Room 1002, 10/F, 101 King’s Road, North Point, Hong Kong</p>

      <h5 class="mt-4">Statement on Photography and Videography</h5>
      <p class="p1" style="line-height: 30px">Monkey Tree will occasionally take photographs and videos of students and employees with as little disturbance to the class or center environment as possible. Such photographs and videos may be published, and viewed by the general public, in hard copy, via electronic media or on the website. If you object to your or your child’s photograph being published or wish to restrict its use, please notify us at
        <span><a href="mailto:personaldata@monkeytree.com.hk">personaldata@monkeytree.com.hk</a></span> containing the following information:
      </p>
      <ol type="a" class="mt-3 ml-5">
        <li><p>Your or your child’s name</p></li>
        <li><p>Your contact number (as registered at Monkey Tree)</p></li>
        <li><p>The Monkey Tree Center which you or your child attends</p></li>
      </ol>
      <p class="p1">Changes to this Privacy Statement</p>
      <p class="p1">We update our Privacy Statement from time to time without prior notice. We encourage you to check this Website occasionally to ensure that you are aware of the most recent terms.</p>
      <div class="col-lg-5 col-xs-12 col-md-12">
        <p>Headquarters:</p>
        <p>Room 2801, 28/F, Citicorp Centre,</p>
        <p>Causeway Bay, Hong Kong</p>
        <p>Tel: <a href="tel:3563-6771">(852) 3563-6771</a></p>
        <p>Email: <a href="mailto:enquiry@monkeytree.com.hk">enquiry@monkeytree.com.hk</a></p>
      </div>
    </div>
  </div>
  <!--  </html>-->
</template>

<script>
export default {
  name: "PrivacyPolicy",
  data(){
    return{
      place:'',
      privacy:false,
      service:false,
    }
  },
  methods: {
    goIndex() {
      if (this.place==='start'){
        this.$router.push({ //核心语句,返回开始界面
          path: '/start', //跳转的路径
        })
      }else{
        this.$router.push({ //核心语句，返回info界面
          path: '/info', //跳转的路径
        })
      }
    }
  },
  created() {
    this.place=this.$route.query.place;
    if (this.$route.query.privacy==='service'){
      this.service=true;
      this.privacy=false;
    }else {
      this.service=false;
      this.privacy=true;
    }
  }
}
</script>

<style scoped lang="less">

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 5%;
}
.col-md-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}
.col-lg-5 {
  color: #7e8486;
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}
ol {
  color: #7e8486;
  display: block;
  list-style-type: decimal;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
ul {
  color: #7e8486;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.mt-3, .my-3 {
  margin-top: 1rem!important;
}
h5 {
  display: block;
  font-size: 1.1em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.mt-4, .my-4 {
  margin-top: 1.5rem!important;
}
.p1{
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #7e8486;
}
  h4.title {
    font-size: 1.5rem;
    margin: 20px 0 50px 0;
    color: #333333;
  }
.body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 1em;
  overflow: auto;
  height: 100%;
  margin-top: 6%;
}

.body p {
  margin: 0 0 15px;
}

.backButton {
  width: 6%;
  position: absolute;
  /* top: 0px; */
  /* margin-bottom: 10px; */
  margin: -7% 3%;
}

</style>
