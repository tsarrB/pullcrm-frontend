import { RouteConfig } from 'vue-router/types'

import { lazyComponent } from '~/utils/lazy-component'

import widgetsRoutes from '~/widgets/routes'

const Landing = lazyComponent(() => import('~/landing/HomePage/HomePage.vue'))

const Login = lazyComponent(() => import('~/pages/Auth/Login/Login.vue'))
const Restore = lazyComponent(() => import('~/pages/Auth/Restore/Restore.vue'))
const Registration = lazyComponent(() => import('~/pages/Auth/Registration/Registration.vue'))
const CompanyCreate = lazyComponent(() => import('~/pages/Auth/CompanyCreate/CompanyCreate.vue'))

const DashboardPage = lazyComponent(() => import('~/pages/DashboardPage/DashboardPage.vue'))
const SchedulePage = lazyComponent(() => import('~/pages/SchedulePage/SchedulePage.vue'))
const SpecialistsPage = lazyComponent(() => import('~/pages/SpecialistsPage/SpecialistsPage.vue'))
const Procedures = lazyComponent(() => import('~/pages/Procedures/Procedures.vue'))
const TimeOff = lazyComponent(() => import('~/pages/TimeOff/TimeOff.vue'))

const SpecialistInfoPage = lazyComponent(() => import('~/pages/SpecialistPage/SpecialistInfoPage/SpecialistInfoPage.vue'))
const SpecialistSchedulePage = lazyComponent(() => import('~/pages/SpecialistPage/SpecialistSchedulePage/SpecialistSchedulePage.vue'))

const SmsSettingsPage = lazyComponent(() => import('~/pages/SettingsPage/SmsSettingsPage/SmsSettingsPage.vue'))
const WidgetSettingsPage = lazyComponent(() => import('~/pages/SettingsPage/WidgetSettingsPage/WidgetSettingsPage.vue'))
const CompanySettingsPage = lazyComponent(() => import('~/pages/SettingsPage/CompanySettingsPage/CompanySettingsPage.vue'))

const AnalyticsAppointmentsPage = lazyComponent(() => import('~/pages/AnalyticsPage/AppointmentsPage/AppointmentsPage.vue'))
const AnalyticsFinancePage = lazyComponent(() => import('~/pages/AnalyticsPage/FinancePage/FinancePage.vue'))

const Error = lazyComponent(() => import('~/pages/Error/404.vue'))

const routes: RouteConfig[] = [
  // Widgets
  ...widgetsRoutes,

  { path: '/', name: 'landing', component: Landing, meta: { public: true } },

  { path: '/dashboard/', name: 'dashboard', component: DashboardPage },

  { path: '/company/create/', name: 'companyCreate', component: CompanyCreate },

  { path: '/schedule/', name: 'schedule', component: SchedulePage },
  { path: '/time-off/', name: 'timeOff', component: TimeOff },
  { path: '/procedures/', name: 'procedures', component: Procedures },
  { path: '/specialists/', name: 'specialists', component: SpecialistsPage },

  { path: '/specialist/:slug/info/', name: 'specialistInfo', component: SpecialistInfoPage },
  { path: '/specialist/:slug/schedule/', name: 'specialistSchedule', component: SpecialistSchedulePage },

  { path: '/settings/', name: 'settings', redirect: '/settings/company/' },
  { path: '/settings/sms/', name: 'smsSettings', component: SmsSettingsPage },
  { path: '/settings/widget/', name: 'widgetSettings', component: WidgetSettingsPage },
  { path: '/settings/company/', name: 'companySettings', component: CompanySettingsPage },

  { path: '/analytics/', name: 'analytics', redirect: '/analytics/appointments/' },
  { path: '/analytics/appointments/', name: 'analyticsAppointments', component: AnalyticsAppointmentsPage },
  { path: '/analytics/finance/', name: 'analyticsFinance', component: AnalyticsFinancePage },

  { path: '/login/', name: 'login', component: Login, meta: { public: true } },
  { path: '/restore/', name: 'restore', component: Restore, meta: { public: true } },
  { path: '/registration/', name: 'registration', component: Registration, meta: { public: true } },

  { path: '*', component: Error, meta: { public: true } }
]

export default routes