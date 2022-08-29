import Detail from '../views/pages/detail';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/resto/:id': Detail,
};

export default routes;
