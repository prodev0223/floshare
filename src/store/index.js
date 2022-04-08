import { createStore } from 'vuex'
import AuthModule from './modules/auth';
import LoaderModule from './modules/utils'
import PopupModule from './modules/utils/popup';
import TemplatesModule from './modules/templates';
import CompanyModule from './modules/companies';
import requestDemoModule from './modules/utils/request-demo';

export default createStore({
     modules: {
          auth: AuthModule,
          popup: PopupModule,
          loader: LoaderModule,
          templates: TemplatesModule,
          company: CompanyModule,
          request: requestDemoModule
     }
})