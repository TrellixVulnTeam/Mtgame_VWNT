import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import Phonicsmenu from "./views/phonics/Phonicsmenu.vue";
// import Intermenu from "./views/phonics/Intermenu.vue";
// import Advmenu from "./views/advanced/Advmenu.vue";
// import About from "./views/About.vue";
// import Pageto from "./views/Pageto.vue";
// import Result from "./views/Result.vue";
// import Settingto from "./views/settingto.vue";
// import Others from "./views/others/others.vue";
// import Otherstart from "./views/others/otherstart.vue";
// import Part2to from "./views/part2/Part2to.vue";
// import Part3to from "./views/part3/Part3to.vue";
// import Part4to from "./views/part4/Part4to.vue";
// import Part5to from "./views/part5/Part5to.vue";
// import Part6to from "./views/part6/Part6to.vue";
// import Part7to from "./views/part7/Part7to.vue";
// import Part8to from "./views/part8/Part8to.vue";
// import Games from "./views/games/games.vue";
// import Boss from "./views/boss/Boss.vue";
// import Choseboss from "./views/boss/choseboss.vue";
// import Phonics1 from "./views/phonics/phonics1.vue";
// import Phonics2 from "./views/phonics/phonics2.vue";
// import Phonics3 from "./views/phonics/phonics3.vue";
// import Phonics4 from "./views/phonics/phonics4.vue";
// import Phonics5 from "./views/phonics/phonics5.vue";
// import Phonics6 from "./views/phonics/phonics6.vue";
// import Phonics7 from "./views/phonics/phonics7.vue";
// import Phonics8 from "./views/phonics/phonics8.vue";
// import Phonics9 from "./views/phonics/phonics9.vue";
// import Phonics10 from "./views/phonics/phonics10.vue";
// import Presult from "./views/phonics/presult.vue";
// import Chosepboss from "./views/phonics/pboss/chosepboss.vue";
// import Index01 from "./views/index01/Index01.vue";
// import Intermediate1 from "./views/phonics/intermediate1.vue";
// import Intermediate2 from "./views/phonics/intermediate2.vue";
// import Intermediate3 from "./views/phonics/intermediate3.vue";
// import Intermediate4 from "./views/phonics/intermediate4.vue";
// import Intermediate5 from "./views/phonics/intermediate5.vue";
// import Intermediate6 from "./views/phonics/intermediate6.vue";
// import Intermediate7 from "./views/phonics/intermediate7.vue";
// import Intermediate8 from "./views/phonics/intermediate8.vue";
// import Intermediate9 from "./views/phonics/intermediate9.vue";
// import Intermediate10 from "./views/phonics/intermediate10.vue";
// import Advanced1 from "./views/advanced/advanced1.vue";
// import Advanced2 from "./views/advanced/advanced2.vue";
// import Advanced3 from "./views/advanced/advanced3.vue";
// import Advanced4 from "./views/advanced/advanced4.vue";
// import Advanced5 from "./views/advanced/advanced5.vue";
// import Advanced6 from "./views/advanced/advanced6.vue";
// import Advanced7 from "./views/advanced/advanced7.vue";
// import Advanced8 from "./views/advanced/advanced8.vue";
// import Advanced9 from "./views/advanced/advanced9.vue";
// import Advanced10 from "./views/advanced/advanced10.vue";
// import Chatwalker from "./views/flashcard/chatwalker.vue";
// import Flashcard from "./views/courses/flashcard.vue";
 //import Start from "./views/start/start.vue";
// import privacyPolicy from "./views/PrivacyPolicy.vue";
// import Info from "./views/info/info.vue";
// import Chosegame from "./views/chosegame/chosegame.vue";
// import Courses from "./views/courses/courses.vue";
// import Chosepart from "./views/courses/chosepart.vue";
// import Ebooks from "./views/ebooks/ebooks.vue";
// import Ebookchioce from "./views/ebooks/ebookchioce.vue";
// import Pchosegame from "./views/phonics/pchosegame.vue";
// import Login from "./views/login/login.vue";
// import Select from "./views/select/select.vue";
// import Demo from "./views/ebooks/demo.vue";
// import Booksort from "./views/ebooks/booksort";
Vue.use(Router);

export default new Router({
	// mode: "history",
	base: process.env.BASE_URL,
	routes: [{
			path: "/source",
			name: "index01",
			//component: Index01,
      component:resolve => {require(['./views/index01/Index01.vue'],resolve)}
			// meta: {
			//         title: '首页',
			// 		 meta: { requiresAuth: true }, // 添加表示需要验证
			//         type: 'login'  // 是否需要判断是否登录,这里是需要判断
			//       }
		},
		{
			path: "/start",
			name: "start",
			//component: Start
      component:resolve => {require(['./views/start/start.vue'],resolve)}
		},
		{
			path: "/home",
			name: "home",
			//component: Home
      component:resolve => {require(['./views/Home.vue'],resolve)}
		},
		{
			path: "/others",
			name: "others",
			//component: Others
      component:resolve => {require(['./views/others/others.vue'],resolve)}
		},
		{
			path: "/otherstart",
			name: "otherstart",
			//component: Otherstart
      component:resolve => {require(['./views/others/otherstart.vue'],resolve)}
		},
    {
    	path: "/games",
    	name: "games",
    	//component: Games
      component:resolve => {require(['./views/games/games.vue'],resolve)}
    },
		{
			path: "/phonicsmenu",
			name: "phonicsmenu",
			//component: Phonicsmenu
      component:resolve => {require(['./views/phonics/Phonicsmenu.vue'],resolve)}
		},
    {
			path: "/intermenu",
			name: "intermenu",
			//component: Intermenu
      component:resolve => {require(['./views/phonics/Intermenu.vue'],resolve)}
		},
    {
			path: "/advmenu",
			name: "advmenu",
			//component: Advmenu
      component:resolve => {require(['./views/advanced/Advmenu.vue'],resolve)}
		},
		{
			path: "/settingto",
			name: "settingto",
			//component: Settingto
      component:resolve => {require(['./views/settingto.vue'],resolve)}
		},
		{
			path: "/about",
			name: "about",
			//component: About
      component:resolve => {require(['./views/About.vue'],resolve)}
		},
    {
      path: "/PrivacyPolicy",
      name: "PrivacyPolicy",
      component:resolve => {require(['./views/PrivacyPolicy.vue'],resolve)}
    },
    {
    	path: "/demo",
    	name: "demo",
    	//component: Demo
      component:resolve => {require(['./views/ebooks/demo.vue'],resolve)}
    },
    {
    	path: "/ebooks",
    	name: "ebooks",
    	//component: Ebooks
      component:resolve => {require(['./views/ebooks/ebooks.vue'],resolve)}
    },
    {
    	path: "/booksort",
    	name: "booksort",
    	//component: Booksort
      component:resolve => {require(['./views/ebooks/booksort.vue'],resolve)}
    },
    {
    	path: "/ebookchioce",
    	name: "ebookchioce",
    	//component: Ebookchioce
      component:resolve => {require(['./views/ebooks/ebookchioce.vue'],resolve)}
    },

		{
			path: "/pageto",
			name: "pageto",
			//component: Pageto
      component:resolve => {require(['./views/Pageto.vue'],resolve)}
		},
		{
			path: "/result",
			name: "result",
			//component: Result
      component:resolve => {require(['./views/Result.vue'],resolve)}
		},
		{
			path: "/part2to",
			name: "part2to",
			//component: Part2to
      component:resolve => {require(['./views/part2/Part2to.vue'],resolve)}
		},
		{
			path: "/part3to",
			name: "part3to",
			//component: Part3to
      component:resolve => {require(['./views/part3/Part3to.vue'],resolve)}
		},
		{
			path: "/part4to",
			name: "part4to",
			//component: Part4to
      component:resolve => {require(['./views/part4/Part4to.vue'],resolve)}
		},
		{
			path: "/part5to",
			name: "part5to",
			//component: Part5to
      component:resolve => {require(['./views/part5/Part5to.vue'],resolve)}
		},
		{
			path: "/part6to",
			name: "part6to",
			//component: Part6to
      component:resolve => {require(['./views/part6/Part6to.vue'],resolve)}
		},
		{
			path: "/part7to",
			name: "part7to",
			//component: Part7to
      component:resolve => {require(['./views/part7/Part7to.vue'],resolve)}
		},
		{
			path: "/part8to",
			name: "part8to",
			//component: Part8to
      component:resolve => {require(['./views/part8/Part8to.vue'],resolve)}
		},
		{
			path: "/boss",
			name: "boss",
			//component: Boss
      component:resolve => {require(['./views/boss/Boss.vue'],resolve)}
		},
		{
			path: "/choseboss",
			name: "choseboss",
			//component: Choseboss
      component:resolve => {require(['./views/boss/choseboss.vue'],resolve)}
		},
		{
			path: "/phonics1",
			name: "phonics1",
			//component: Phonics1
      component:resolve => {require(['./views/phonics/phonics1.vue'],resolve)}
		},
		{
			path: "/phonics2",
			name: "phonics2",
			//component: Phonics2
      component:resolve => {require(['./views/phonics/phonics2.vue'],resolve)}
		},
		{
			path: "/phonics3",
			name: "phonics3",
			//component: Phonics3
      component:resolve => {require(['./views/phonics/phonics3.vue'],resolve)}
		},

		{
			path: "/phonics4",
			name: "phonics4",
			//component: Phonics4
      component:resolve => {require(['./views/phonics/phonics4.vue'],resolve)}
		},
		{
			path: "/phonics5",
			name: "phonics5",
			//component: Phonics5
      component:resolve => {require(['./views/phonics/phonics5.vue'],resolve)}
		},
		{
			path: "/phonics6",
			name: "phonics6",
			//component: Phonics6
      component:resolve => {require(['./views/phonics/phonics6.vue'],resolve)}
		},
		{
			path: "/phonics7",
			name: "phonics7",
			//component: Phonics7
      component:resolve => {require(['./views/phonics/phonics7.vue'],resolve)}
		},
		{
			path: "/phonics8",
			name: "phonics8",
			//component: Phonics8
      component:resolve => {require(['./views/phonics/phonics8.vue'],resolve)}
		},
    {
    	path: "/phonics9",
    	name: "phonics9",
    	//component: Phonics9
      component:resolve => {require(['./views/phonics/phonics9.vue'],resolve)}
    },
		{
			path: "/phonics10",
			name: "phonics10",
			//component: Phonics10
      component:resolve => {require(['./views/phonics/phonics10.vue'],resolve)}
		},
    {
      path: "/intermediate1",
      name: "intermediate1",
      //component: Intermediate1
      component:resolve => {require(['./views/phonics/intermediate1.vue'],resolve)}
    },
    {
      path: "/intermediate2",
      name: "intermediate2",
      //omponent: Intermediate2
      component:resolve => {require(['./views/phonics/intermediate2.vue'],resolve)}
    },
    {
      path: "/intermediate3",
      name: "intermediate3",
      //component: Intermediate3
      component:resolve => {require(['./views/phonics/intermediate3.vue'],resolve)}
    },
    {
      path: "/intermediate4",
      name: "intermediate4",
      //component: Intermediate4
      component:resolve => {require(['./views/phonics/intermediate4.vue'],resolve)}
    },
    {
      path: "/intermediate5",
      name: "intermediate5",
      //component: Intermediate5
      component:resolve => {require(['./views/phonics/intermediate5.vue'],resolve)}
    },
    {
      path: "/intermediate6",
      name: "intermediate6",
      //component: Intermediate6
      component:resolve => {require(['./views/phonics/intermediate6.vue'],resolve)}
    },
    {
      path: "/intermediate7",
      name: "intermediate7",
      //component: Intermediate7
      component:resolve => {require(['./views/phonics/intermediate7.vue'],resolve)}
    },
    {
      path: "/intermediate8",
      name: "intermediate8",
      //component: Intermediate8
      component:resolve => {require(['./views/phonics/intermediate8.vue'],resolve)}
    },
    {
      path: "/intermediate9",
      name: "intermediate9",
      //component: Intermediate9
      component:resolve => {require(['./views/phonics/intermediate9.vue'],resolve)}
    },
    {
      path: "/intermediate10",
      name: "intermediate10",
      //component: Intermediate10
      component:resolve => {require(['./views/phonics/intermediate10.vue'],resolve)}
    },
    {
      path: "/advanced1",
      name: "advanced1",
      //component: Advanced1
      component:resolve => {require(['./views/advanced/advanced1.vue'],resolve)}
    },
    {
      path: "/advanced2",
      name: "advanced2",
      //component: Advanced2
      component:resolve => {require(['./views/advanced/advanced2.vue'],resolve)}
    },
    {
      path: "/advanced3",
      name: "advanced3",
      //component: Advanced3
      component:resolve => {require(['./views/advanced/advanced3.vue'],resolve)}
    },
    {
      path: "/advanced4",
      name: "advanced4",
      //component: Advanced4
      component:resolve => {require(['./views/advanced/advanced4.vue'],resolve)}
    },
    {
      path: "/advanced5",
      name: "advanced5",
      //component: Advanced5
      component:resolve => {require(['./views/advanced/advanced5.vue'],resolve)}
    },
    {
      path: "/advanced6",
      name: "advanced6",
      //component: Advanced6
      component:resolve => {require(['./views/advanced/advanced6.vue'],resolve)}
    },
    {
      path: "/advanced7",
      name: "advanced7",
      //component: Advanced7
      component:resolve => {require(['./views/advanced/advanced7.vue'],resolve)}
    },
    {
      path: "/advanced8",
      name: "advanced8",
      //component: Advanced8
      component:resolve => {require(['./views/advanced/advanced8.vue'],resolve)}
    },
    {
      path: "/advanced9",
      name: "advanced9",
      //component: Advanced9
      component:resolve => {require(['./views/advanced/advanced9.vue'],resolve)}
    },
    {
      path: "/advanced10",
      name: "advanced10",
      //component: Advanced10
      component:resolve => {require(['./views/advanced/advanced10.vue'],resolve)}
    },
    {
      path: "/chatwalker",
      name: "chatwalker",
      //component: Chatwalker
      component:resolve => {require(['./views/flashcard/chatwalker.vue'],resolve)}
    },
    {
    	path: "/presult",
    	name: "presult",
    	//component: Presult
      component:resolve => {require(['./views/phonics/presult.vue'],resolve)}
    },
		{
			path: "/chosepboss",
			name: "chosepboss",
			//component: Chosepboss
      component:resolve => {require(['./views/phonics/pboss/chosepboss.vue'],resolve)}
		},
    {
      path: "/chosepart",
      name: "chosepart",
      //component: Chosepart
      component:resolve => {require(['./views/courses/chosepart.vue'],resolve)}
    },

		{
			path: "/info",
			name: "info",
			//component: Info
      component:resolve => {require(['./views/info/infoNew.vue'],resolve)}
		},
    {
      path: "/infoNew",
      name: "infoNew",
      component:resolve => {require(['./views/info/infoNew.vue'],resolve)}
    },
		{
			path: "/chosegame",
			name: "chosegame",
			//component: Chosegame
      component:resolve => {require(['./views/chosegame/chosegame.vue'],resolve)}
		},
    {
			path: "/courses",
			name: "courses",
			//component: Courses
      component:resolve => {require(['./views/courses/courses.vue'],resolve)}
		},
    {
			path: "/flashcard",
			name: "flashcard",
			//component: Flashcard
      component:resolve => {require(['./views/courses/flashcard.vue'],resolve)}
		},
    {
    	path: "/pchosegame",
    	name: "pchosegame",
    	//component: Pchosegame
      component:resolve => {require(['./views/phonics/pchosegame.vue'],resolve)}
    },
	    {
	    	path: "/login",
	    	name: "login",
	    	//component: Login
        component:resolve => {require(['./views/login/login.vue'],resolve)}
	    },
    {
      path: "/loginhk",
      name: "loginhk",
      //component: Login
      component:resolve => {require(['./views/login/loginhk.vue'],resolve)}
    },
		{
			path: "/select",
			name: "select",
			//component: Select
      component:resolve => {require(['./views/select/select.vue'],resolve)}
		},
	 ]
});
