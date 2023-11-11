import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Demandes'
  },
  {
    name: 'Mes demandes',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Nouvelle demande',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Parametrage',
    title: true
  },
  {
    name: 'Type demandeur',
    url: '/utilisateurs/list'
  },
   
      {
        name: 'Etablissements',
        url: '/etablissements/list'
      },
      {
        name: 'personnel',
        url: '/base/breadcrumbs'
      },

    ]
  
;
