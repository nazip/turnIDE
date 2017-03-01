import parse from 'qs';
import { compact, map } from 'lodash';

export default function(store, state) {
  const { params, location, routes } = state;
  console.log('params=',params);
  console.log('location=',location);
  console.log('routes=',routes);
  const a = location.search.substr(1);
  console.log('a=',a.length);

  const query = parse(location.search.substr(1));
  console.log('query=',query);
  const prepareDataFuncs = compact(map(routes, route => route.prepareData));
  map(prepareDataFuncs,
     prepareData => prepareData(store, query, params, location));
}
