const UrlPattern = require('url-pattern');

const {
  successResponse,
  InvalidResponse,
} = require('../../../utils/lambda-response');
const models = require('../../../models');

const Organization = models.organizations;

module.exports.handler = async (event, eventRoute) => {
  const { path } = event;
  const { httpMethod } = event;

  const pattern = new UrlPattern(eventRoute);
  const endpointInfo = pattern.match(path);
  console.log(endpointInfo); // eslint-disable-line no-console

  let responseData;
  let response;
  switch (httpMethod) {
    case 'GET':
      responseData = await Organization.findAll({
        attributes: ['id', 'organization_name', 'settings'],
      });
      response = successResponse({
        message: 'We are getting your requested customer information!',
        input: event,
        content: responseData,
      });
      return response;
    case 'PUT':
      responseData = await Organization.update(
        { organization_name: 'new Organization' },
        {
          where: {
            id: 2,
          },
        }
      );
      response = successResponse({
        message: 'We are updating your requested customer information!',
        input: event,
        content: responseData,
      });
      return response;
    default:
      response = InvalidResponse({
        message: 'We can not handle your request!',
        input: event,
      });
      return response;
  }
};