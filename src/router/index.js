import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import HowWeHelp from "@/pages/HowWeHelp";
import ContactSupport from "@/pages/contact/ContactSupport";
import ContactUs from "@/pages/contact/ContactUs";
import Login from '@/pages/Login';
import Register from '@/pages/register/Register';
import SignUpPricing from '@/pages/register/SignupPricing';
import Dashboard from '@/pages/dashboard/Dashboard';
import Companies from '@/pages/companies/Companies';
import Admin from '@/components/layout/Admin';
import Templates from '@/pages/templates/Templates';
import ShareFlo from '@/pages/shareFlo/ShareFlo';
import CompaniesContact from '@/pages/companies/CompaniesContact';
import FloCount from '@/pages/companies/FloCount';
import Account from '@/pages/account'
import History from "@/pages/shareFlo/history";
import AddTemplate from '@/pages/templates/AddTemplate';
import UserList from '@/pages/account/user-list';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/help",
    name: "HowWeHelp",
    component: HowWeHelp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/signupPricing",
    name: "SignupPricing",
    component: SignUpPricing
  },
  {
    path: "/admin",
    name: 'Admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      next();
    },
    children: [
      {
        path: 'jeff-block',
        name: 'jeffBlock',
        component: ShareFlo
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'companies',
        name: 'Companies',
        component: Companies
      },
      {
        path: 'templates',
        name: 'Templates',
        component: Templates
      },
      {
        path: 'templates/add',
        name: 'AddTemplate',
        component: AddTemplate
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: ContactSupport
      },
      {
        path: 'share-flo',
        name: 'ShareFlo',
        component: ShareFlo
      },
      {
        path: 'share-flo/history',
        name: 'History',
        component: History
      },
      {
        path: 'account',
        name: 'Account',
        component: Account
      },
      {
        path: 'companies/flo/:id',
        name: 'FloCount',
        component: FloCount
      },
      {
        path: 'companies/contact/:id',
        name: 'CompaniesContact',
        component: CompaniesContact
      },
      {
        path: 'account/user-list',
        name: 'UserList',
        component: UserList
      },
      {
        path: '/admin',
        redirect: '/admin/jeff-block'
      }
    ]
  }
  
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
