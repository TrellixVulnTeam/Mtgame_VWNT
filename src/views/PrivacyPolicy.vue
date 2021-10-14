<template>
   <div class="body">
     <header class="header">
       <img src="../assets/image/rightback.png" @click="goIndex" class="backButton"/>
       <a target="_blank" href="https://www.monkeytree.com.cn/home.jsp">
        <img src="../assets/image/Monkey Town logo final-03.png" class="logo">
       </a>
     </header>
    <div style="padding-left: 3%;padding-bottom: 140px;" v-if="privacy&&local==='cn'">
      <h4 class="title">隐私声明</h4>
      <p class="p1">
        本条例自2014年10月23日起生效
      </p>
      <h5 class="mt-4">个人资料收集</h5>
      <p class="p1">
        为帮助您成为我们的用户，以便我们为您提供用户服务。您需要提供手机号码或者电子邮箱以创建用户名和密码，成为我们的注册用户。
      </p>
      <p class="p1">
        如果您提供真实有效的手机号码、电子邮箱等进行绑定，当您遇到注册帐号丢失、忘记密码等帐号问题时，可以更便捷的找回帐号和密码。但如果您不提供这些信息，将不会影响您使用本产品提供的基础服务，但可能会影响到您使用本产品需要进行个性化服务等的附加功能。
      </p>
      <p class="p1">
        在您主动注销账号时，我们将根据相关法律法规的要求尽快使其匿名或删除您的个人信息。
      </p>
      <p class="p1">
        我们对您个人资料的收集目的是为了提供更优质的服务。
      </p>
      <p class="p1">
        我们的服务包括但不局限于：
      </p>
      <ul>
        <li>1、处理您的申请与登记</li>
        <li>2、回复您的各项问题及投诉建议</li>
        <li>3、为您及时提供中心的最新消息</li>
        <li>4、为您及时提供孩子的学习状况</li>
        <li>5、为您及时提供最合适孩子的课程以及上课时段</li>
        <li>6、为学生提供上课所需教材</li>
        <li>7、处理您的各项消费记录及单据</li>
      </ul>
      <br/>
      <p class="p1">
        我们会尽力确保您可以及时收到最新的信息。
      </p>
      <p class="p1">
        如果您不愿接收到我们的新信息，请将以下信息发送至<span><a target="_blank" style="color:#8a999e;" href="mailto:unsubscribe@monkeytree.com.hk">unsubscribe@monkeytree.com.hk</a></span>
      </p>
      <ul>
        <li>1、您的姓名</li>
        <li>2、您的相关资料</li>
        <li>3、您不愿收到新信息的原因</li>
      </ul>
      <br/>
      <h5 class="mt-4">保证您个人资料准确无误</h5>
      <p class="p1">
        我们会尽力保证您的个人资料实时更新及准确无误。
      </p>
      <p class="p1">
        我们将会以您留给我们的数据来与您联系。
      </p>
      <p class="p1">
        如果您需要更新您的数据请发邮件到<span><a target="_blank" style="color:#8a999e;" href="mailto:personaldata@monkeytree.com.hk">personaldata@monkeytree.com.hk</a></span>
      </p>
      <h5 class="mt-4">个人信息保障</h5>
      <p class="p1">
        我们将会对您的个人资料严格保密。未经您的同意我们不会将您的任何数据用于或公开给非蒙奇千里儿童俱乐部之用途。
      </p>
      <p class="p1">
        我们会将您的部分个人资料转给第三方，如：公司雇员、或关联公司其中包括子公司、合作伙伴等，目的是为您提供更好地服务。
      </p>
      <h5 class="mt-4">个人资料的保存</h5>
      <p class="p1">
        我们会以适合的安保系统来管理您的数据以防止未经授权的浏览。
      </p>
      <p class="p1">
        我们对您个人资料的保留时间不会长于达致数据用途（或任何直接相关的目的）所需的时间，且须受与保留资料有关的法律、法定及监管规定的规限。
      </p>
      <p class="p1">
        如果您对我们的相关政策有任何疑问请与我们联系。<span><a  target="_blank" style="color:#8a999e;" href="mailto:personaldata@monkeytree.com.hk">personaldata@monkeytree.com.hk</a></span>或将信件寄往以下地址:
      </p>
      <p class="p1">
        香港北角英皇道101号10楼1002室
      </p>
      <h5 class="mt-4">影像声明</h5>
      <p class="p1">
        蒙奇千里儿童俱乐部 会在不影响课堂的情况下拍摄一些学生或老师的照片或录像。这些照片或影像会出现在公共场所及网络。如果您拒绝这些照片或影像出现在公共场所及网络，请以邮件的方式告知我们<span><a target="_blank" style="color:#8a999e;" href="mailto:personaldata@monkeytree.com.hk">personaldata@monkeytree.com.hk</a></span>邮件内容包括：
      </p>
      <ul>
        <li>1、您和您孩子的姓名</li>
        <li>2、您的联系电话</li>
        <li>3、您所在的分校名称</li>
      </ul>
      <h5 class="mt-4">日志数据</h5>
      <p class="p1">
        我们想通知您，每当您使用我们的服务时，如果应用程序出现错误，我们会在您的手机上收集数据和信息（通过第三方产品），称为日志数据。该日志数据可能包括您的设备互联网协议（“IP”）地址、设备名称、操作系统版本、使用我们服务时应用程序的配置、您使用服务的时间和日期以及其他统计信息等信息。
      </p>
      <h5 class="mt-4">Cookie</h5>
      <P class="p1">
        Cookie 是包含少量数据的文件，通常用作匿名唯一标识符。这些信息会从您访问的网站发送到您的浏览器，并存储在您设备的内存中。
      </P>
      <p class="p1">
        本服务不会明确使用这些“cookies”。但是，该应用程序可能会使用使用“cookies”的第三方代码和库来收集信息并改进其服务。您可以选择接受或拒绝这些 cookie，并知道何时将 cookie 发送到您的设备。如果您选择拒绝我们的 cookie，您可能无法使用本服务的某些部分。
      </p>
      <h5 class="mt-4">未成年人保护</h5>
      <p class="p1">
        如果没有父母或监护人的同意，未成年人不得创建自己的用户账户。如您为未成年人的，建议您请您的父母或监护人仔细阅读本隐私权政策，并在征得您的父母或监护人同意的前提下使用我们的服务或向我们提供信息。
      </p>
      <p class="p1">
        对于经父母或监护人同意使用我们的产品或服务而收集未成年人个人信息的情况，我们只会在法律法规允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用、共享、转让或披露此信息。
      </p>
      <h5 class="mt-4">征得授权同意的例外</h5>
      <p class="p1">
        根据相关法律法规规定，以下情形中收集您的个人信息无需征得您的授权同意：
      </p>
      <ul>
        <li>1、与国家安全、国防安全有关的;</li>
        <li>2、与公共安全、公共卫生、重大公共利益有关的;</li>
        <li>3、与犯罪侦查、起诉、审判和判决执行等有关的;</li>
        <li>4、出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的;</li>
        <li>5、所收集的个人信息是您自行向社会公众公开的;</li>
        <li>6、从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道;</li>
        <li>7、根据您的要求签订合同所必需的;</li>
        <li>8、用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障;</li>
        <li>9、学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的;</li>
        <li>10、法律法规规定的其他情形。</li>
      </ul>
      <p class="p1">
        如我们停止运营本产品的功能或服务，我们将及时停止继续收集您个人信息的活动，将停止运营信息以通知或公告的形式通知您，对所持有的个人信息进行删除或匿名化处理。
      </p>
      <h5 class="mt-4">隐私声明变更</h5>
      <p class="p1">
        我们会不定时对隐私声明进行更新，更新前亦不会做出通知。您可以经常登录本网站已查询最新条款。
      </p>
      <div class="col-lg-5 col-xs-12 col-md-12">
        <p>总部:</p>

        <p>房间11A,B座,芦山大厦,</p>

        <p>15 江北路,罗湖,</p>

        <p>深圳,中国,</p>

        <p>电话: <a  target="_blank" style="text-decoration: none;color:#8a999e;" href="tel:8234-3045">（0755） 8234-3045</a></p>

        <p>电子邮箱: <a target="_blank" style="text-decoration: none;color:#8a999e;" href="mailto: operation@monkeytree.com.cn"> operation@monkeytree.com.cn</a></p>
      </div>

      <div class="col-lg-5 col-xs-12 col-md-12">
        <p>2607室，IMP，</p>

        <p>广州市天河区华城大道68号</p>

        <p>电话: <a  target="_blank" style="text-decoration: none;color:#8a999e;" href="tel:8362-8303">（020）8362-8303</a></p>

        <p>电子邮箱: <a  target="_blank" style="text-decoration: none;color:#8a999e;" href="mailto: operation@monkeytree.com.cn"> operation@monkeytree.com.cn</a></p>
      </div>
    </div>
    <div style="padding-left: 3%;padding-bottom: 140px;" v-if="service&&local==='cn'">
      <h4 class="title">用户协议</h4>

      <p class="p1">本声明自2014年10月23日起生效</p>

      <p class="p1">蒙奇千里儿童俱乐部声明，本APP下的中文内容是根据英文之翻译版本，如若出现解释模糊，定义不清的情况，内容以英文为准。</p>

      <h5 class="mt-4">免责声明</h5>

      <p class="p1">我们会对载于本APP的内容进行即时更新以便管理，但APP上内容因更新而做出的修改恕不另行通知</p>

      <p class="p1">我们不会因为载于APP上的信息错误而导致的损失承担任何责任。</p>

        <h5 class="mt-4">声明变更</h5>

      <p class="p1">我们会不定时对本APP的各项声明进行更新，更新前亦不会做出通知。您可以经常登录本APP已查询最新条款。</p>

          <h5 class="mt-4">版权声明</h5>

      <p class="p1">除特殊声明外，载于本APP上的一切资料之版权归蒙奇千里儿童俱乐部所有。</p>

      <p class="p1">本APP所载一切资料包括（文字、照片、图画 等）仅限于个人以及非商业之用途。相关资料未经蒙奇千里儿童俱乐部同意，禁止用于公共及其他商业用途。</p>

      <div class="col-lg-5 col-xs-12 col-md-12">
        <p>总部:</p>

        <p>房间11A,B座,芦山大厦,</p>

        <p>15 江北路,罗湖,</p>

        <p>深圳,中国,</p>

        <p>电话: <a  target="_blank" style="text-decoration: none;color:#8a999e;" href="tel:8234-3045">（0755） 8234-3045</a></p>

        <p>电子邮箱: <a target="_blank" style="text-decoration: none;color:#8a999e;" href="mailto: operation@monkeytree.com.cn"> operation@monkeytree.com.cn</a></p>
      </div>

      <div class="col-lg-5 col-xs-12 col-md-12">
        <p>2607室，IMP，</p>

        <p>广州市天河区华城大道68号</p>

        <p>电话: <a  target="_blank" style="text-decoration: none;color:#8a999e;" href="tel:8362-8303">（020）8362-8303</a></p>

        <p>电子邮箱: <a target="_blank" style="text-decoration: none;color:#8a999e;" href="mailto: operation@monkeytree.com.cn"> operation@monkeytree.com.cn</a></p>
      </div>

    </div>
    <div style="padding-left: 3%;padding-bottom: 140px; padding-right:9%;" v-if="local==='hk'">
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
        <span><a target="_blank" style="color:#8a999e;" href="mailto:unsubscribe@monkeytree.com.hk">unsubscribe@monkeytree.com.hk</a></span> containing the following information:
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
        <span><a target="_blank" style="color:#8a999e;" href="mailto:personaldata@monkeytree.com.hk">personaldata@monkeytree.com.hk</a></span>.
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
        <span><a target="_blank" style="color:#8a999e;" href="mailto:personaldata@monkeytree.com.hk">personaldata@monkeytree.com.hk</a></span> containing the following information:
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
        <p>Tel: <a target="_blank" style="color:#8a999e;" href="tel:3563-6771">(852) 3563-6771</a></p>
        <p>Email: <a target="_blank" style="color:#8a999e;" href="mailto:enquiry@monkeytree.com.hk">enquiry@monkeytree.com.hk</a></p>
      </div>
    </div>
     <footer :class="service&&local==='cn' ? 'bottom4':'bottom'">
       <div class="bottom1">Copyright © 2020 深圳蒙奇千里教育咨询有限公司
         <a  style="color: white" data-savepage-href="https://www.beian.miit.gov.cn" href="http://www.beian.miit.gov.cn/" target="_blank"><span>粤ICP备20063293号</span></a>
       </div>
       <div  class="bottom3">
         <a target="_blank" href="https://www.monkeytree.com.cn/privacyStatement.jsp" style="text-decoration: none; color: white;"><span>Privacy Statement</span></a>
         <span>丨</span>
         <a target="_blank" href="https://www.monkeytree.com.cn/termsOfUse.jsp" style="text-decoration: none; color: white"><span>Terms of Use</span></a>
       </div>
     </footer>
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
      local:'',
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
    this.local = localStorage.getItem('local');
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
.bottom3 {
  left: 70%;
  position: absolute;
  top: 20%;
}
.bottom1 {
  left: 3%;
  top: 20%;
  position: absolute;
  color: white;
}
.bottom {
  width: 100%;
  height: 6%;
  background-color: green;
  bottom: 9%;
  position: relative;
}
.bottom4 {
  width: 100%;
  height: 6%;
  background-color: green;
  bottom: 10%;
  position: relative;
}
.logo{
  width: 10%;
  position: absolute;
  left: 70%;
}
.header {
  background-color: green;
  position: absolute;
  top: 0%;
  width: 100%;
  height: 10%;
}
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
  overflow: auto;
  height: 100%;
  margin-top: 6%;
}

.body p {
  margin: 0 0 15px;
}

.backButton {
  width: 5%;
  position: absolute;
  left: 2%;
}
@media (min-width: 812px) and (max-width: 1023px),
only screen and (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 3),
only screen and (min-device-height: 812px) and (max-device-height: 1023px) and (-webkit-device-pixel-ratio: 2) {
  .bottom4 {
    width: 100%;
    height: 14%;
    background-color: green;
    bottom: 10%;
    position: relative;
  }
  .bottom3 {
    left: 70%;
    position: absolute;
    top: 20%;
    font-size: 13px;
  }
  .bottom1 {
    left: 3%;
    top: 27%;
    position: relative;
    color: white;
    font-size: 12px;
  }
  .header {
    background-color: green;
    position: absolute;
    top: 0%;
    width: 100%;
    height: 14%;
  }
  .backButton {
    width: 6%;
    position: absolute;
    left: 2%;
  }
  .bottom {
    width: 100%;
    height: 10%;
    background-color: green;
    bottom: 13%;
    position: relative;
  }
}

@media  (min-width: 375px) and (max-width: 811px),
only screen and (min-device-height: 375px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 3),
only screen and (min-device-height: 375px) and (max-device-height: 811px) and (-webkit-device-pixel-ratio: 2){
  .bottom4 {
    width: 100%;
    height: 10%;
    background-color: green;
    bottom: 10%;
    position: relative;
  }
  .bottom1 {
    left: 3%;
    top: 27%;
    position: absolute;
    color: white;
    font-size: 12px;
  }
  .bottom3 {
    left: 70%;
    position: absolute;
    top: 27%;
    font-size: 12px;
  }
  .header {
    background-color: green;
    position: absolute;
    top: 0%;
    width: 100%;
    height: 12%;
  }
  .bottom {
    width: 100%;
    height: 10%;
    background-color: green;
    bottom: 11%;
    position: relative;
  }
  .backButton {
    width: 6%;
    position: absolute;
    top: 5%;
    left: 2%;
  }
  .logo {
    width: 12%;
    position: absolute;
    left: 70%;
  }
}


@media (min-width: 1024px) and (max-width: 1600px),
only screen and (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 3),
only screen and (min-device-height: 1024px) and (max-device-height: 1600px) and (-webkit-device-pixel-ratio: 2) {
  .bottom4 {
    width: 100%;
    height: 8%;
    background-color: green;
    bottom: 6%;
    position: relative;
  }
  .bottom1 {
    left: 3%;
    top: 20%;
    position: absolute;
    color: white;
    font-size: 1rem;
  }
  .header {
    height: 12%;
  }
  .backButton {
    width: 7%;
    top: 7%;
    position: relative;
    left: 2%;
  }
  .logo {
    width: 12%;
    top: 7%;
    position: relative;
    left: 70%;
  }
  .bottom {
    width: 100%;
    height: 6%;
    background-color: green;
    bottom: 8%;
    position: relative;
  }
  .bottom3 {
    left: 70%;
    position: absolute;
    top: 20%;
    font-size: 1rem;
  }
  h4.title {
    font-size: 1.5rem;
    margin: 50px 0 45px 0;
  }
}
</style>
