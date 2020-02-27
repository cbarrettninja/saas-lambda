const customerHandler = require('./handlers/customer').handler;
const customerSettingHandler = require('./handlers/customerSetting').handler;
const subscriptionHandler = require('./handlers/subscription').handler;
const subscriptionCouponHandler = require('./handlers/subscriptionCoupon').handler;

const ACTION = require('./constants');
const { successResponse } = require('../../utils/lambda-response');

module.exports.handler = async (event, context) => {
  console.log('=== event log ===', event);
  const response = successResponse({
    message: 'Go Serverless! Your function executed successfully!',
    input: event,
  });
  switch (event.action) {
    case ACTION.CUSTOMER_ROOT:
      return customerHandler(event, context);
    case ACTION.CUSTOMER_SETTING:
      return customerSettingHandler(event, context);
    case ACTION.CREATE_CUSTOMER:
      return subscriptionHandler(event, context);
    case ACTION.LIST_CUSTOMER:
      return subscriptionCouponHandler(event, context);
    default:
      return response;
  }
};
