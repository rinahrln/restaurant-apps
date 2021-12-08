import AllResto from '../views/pages/all-resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': AllResto,
  '/home': AllResto,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
