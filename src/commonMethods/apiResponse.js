const WebServices = require('../apiCalls/api').WebServices;

exports.callToApi = (method, apiUrl, data, token) => new Promise((res, rej) => {
    new Promise(function(resolve) {
          if (method === 'POST') {
              resolve(WebServices.callWebService(apiUrl, data, token));
          } else {
              resolve(WebServices.callWebService_GET(apiUrl, token));
          }
      }).then((jsonRes) => {
          if ((!jsonRes) || (!jsonRes.success)) {
            rej(jsonRes.message);
          } else {
            res(jsonRes.result);
          }
      }).catch((error) => {
          rej(error);
      })
    });