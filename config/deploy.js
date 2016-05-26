module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-101',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
