import { createRouter, createWebHistory } from 'vue-router'
import DataProtectionView from '@/views/DataProtectionView.vue'
import DonationView from '@/views/DonationView.vue'
import HelpView from '@/views/HelpView.vue'
import HomeView from '@/views/HomeView.vue'
import LocationView from '@/views/LocationView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import TermsOfUseView from '@/views/TermsOfUseView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      navigationPart: 'header',
      path: '/',
      name: 'home',
      displayName: 'Startseite',
      component: HomeView
    },
    {
      navigationPart: 'header',
      path: '/donation',
      name: 'donation',
      displayName: 'Spende',
      component: DonationView
    },
    {
      navigationPart: 'header',
      path: '/location',
      name: 'location',
      displayName: 'Kontakt',
      component: LocationView
    },
    {
      navigationPart: 'header',
      path: '/help',
      name: 'help',
      displayName: 'Hilfe',
      component: HelpView
    },
    {
      navigationPart: 'footer',
      path: '/data-protection',
      name: 'data-protection',
      displayName: 'Datenschutz',
      component: DataProtectionView
    },
    {
      navigationPart: 'footer',
      path: '/terms-of-use',
      name: 'terms-of-use',
      displayName: 'Nutzungsbedingungen',
      component: TermsOfUseView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})
