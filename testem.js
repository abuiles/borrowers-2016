/*jshint node:true*/
module.exports = {
  "framework": "qunit",
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "parallel": 10,
  "launch_in_ci": [
    "PhantomJS"
  ],
  "launch_in_dev": [

  ],
  "launchers": {
    "Selenium": {
      "exe": "./selenium-launcher",
      "args": [],
      "protocol": "browser"

    }
  },
  "browser_disconnect_timeout": 60,
  "browser_start_timeout": 60
};
