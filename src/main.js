import Vue from 'vue'

import vueRouter from 'vue-router'

import vueResource  from 'vue-resource'

import  VueQuillEditor from 'vue-quill-editor'

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'

import login from './components/account/login.vue'

import register from './components/account/register.vue'

import Competition_management from './components/Page/pilot.vue'

import Competition_information from './components/Page/Competition_information.vue'

import EditCompetition_information from './components/Page/EditCompetition_information.vue'

import AddCompetition from './components/Page/AddCompetition.vue'

import EditCompetition from './components/Page/EditCompetition.vue'

import Release_competition from './components/Page/Release_competition.vue'

import Award from './components/Page/User/Award.vue'

import News from './components/Page/news/News.vue'

import Updata from './components/Page/news/Updata.vue'

import NewsList from './components/Page/news/NewsList.vue'

import EditAward from './components/Page/User/EditAward.vue'

import EditUser from './components/Page/User/editUser.vue'

import Award_management from './components/Page/User/Award_management.vue'

import EditAward_management from './components/Page/User/EditAward_management.vue'

Vue.use(vueRouter)
Vue.use(ElementUI)
Vue.use(vueResource)
Vue.use(VueQuillEditor)

var router = new vueRouter({
    routes:[
        {
            path:'/login',
            component:login
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/Competition_management',
            name:'Competition_management',
            component:Competition_management
        }
        ,
        {
            path:'/Competition_information',
            name:'Competition_information',
            component:Competition_information
        } ,
        {
            path:'/AddCompetition',
            name:'AddCompetition',
            component:AddCompetition
        },
        {
            path:'/EditCompetition',
            name:'EditCompetition',
            component:EditCompetition
        },
        {
            path:'/Release_competition',
            name:'Release_competition',
            component:Release_competition
        },
        {
            path:'/Award',
            name:'Award',
            component:Award
        },
        {
            path:'/News',
            name:'News',
            component:News
        },
        {
            path:'/NewsList',
            name:'NewsList',
            component:NewsList
        },
        {
            path:'/EditAward',
            name:'EditAward',
            component:EditAward
        },
        {
            path:'/Updata',
            name:'Updata',
            component:Updata
        },
        {
            path:'/EditUser',
            name:'EditUser',
            component:EditUser
        },
        {
            path:'/EditCompetition_information',
            name:'EditCompetition_information',
            component:EditCompetition_information
        },
        {
            path:'/Award_management',
            name:'Award_management',
            component:Award_management
        },
        {
            path:'/EditAward_management',
            name:'EditAward_management',
            component:EditAward_management
        }
    ]
})
Vue.filter('time', function (value) {
    return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
})
new Vue({
    el:'#app',
    router:router,
    render:c=>c(App)
})