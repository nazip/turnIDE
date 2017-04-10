import { parse } from 'qs';
import { compact } from 'lodash/array';
import { map }   from 'lodash/collection';

export default function(store, state) {
  const { params, location, routes } = state;
  const query = parse(location.search.substr(1));
  const prepareDataFuncs = compact(map(routes, route => route.prepareData));
  return map(prepareDataFuncs,
     prepareData => prepareData(store, query, params, location)
  );
}
