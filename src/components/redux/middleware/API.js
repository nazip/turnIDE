import request from 'superagent';
import { assign, pick } from 'lodash/object';
import { stringify } from 'qs';
import  API_ROOT  from 'components/const/StaticData';

function APICall({ endpoint, method, query, payload, attachment = false }) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${API_ROOT}${endpoint}`);
    // if ((attachment) && (method.toLowerCase() == 'post') || 
    //    (method.toLowerCase() == 'put')) {
    //   const formData = new FormData();
    //   formData.append(payload.key, payload.file);
    //   r = r.send(formData);
    // }
    if (query)
      r.query(stringify(query));
    if (payload) {
      const formData = new FormData();
      formData.append(payload.key, payload.file);
      r = r.send(formData);
      // r = r.send(payload);
    }
    r.end((error, data) => (
      error ?
        reject(error)
      : resolve(data.body)
    ));
  });
}

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  assign({}, action, data, {[API_CALL]: undefined})
);

export default (store) => (next) => (action) => { // eslint-disable-line
  if (!action[API_CALL]) return next(action);

  const [requestType, successType, failureType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType }));

  const promise = APICall(
    pick(action[API_CALL], ['endpoint', 'method', 'query', 'payload'])
  );

  promise.then(
    (response) => next(
      nextAction(action, { response, type: successType })
    ),
    (error) => next(
      nextAction(action, { error, type: failureType })
    )
  );

  return promise;
};
