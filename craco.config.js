const { POSTCSS_MODES } = require('@craco/craco');

let target = 'web';
if (process.env.REACT_APP_MODE === 'electron') {
  target = 'electron-renderer';
}
console.log(`craco.config.js: setting webpack target to: ${target}`);

module.exports = {
  webpack: {
    configure: {
      target: target
    }
  },
  style: {
    postcss: {
      mode: POSTCSS_MODES.file
    }
  }
};
