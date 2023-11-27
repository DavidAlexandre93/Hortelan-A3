// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'IOT and multilingual websites',
    path: '/iot-presentation',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'monitoring',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'garden',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Page for Error Usage',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
  {
    title: 'members',
    path: '/dashboard/members',
    icon: getIcon('eva:people-fill'),
  },
];

export default navConfig;
