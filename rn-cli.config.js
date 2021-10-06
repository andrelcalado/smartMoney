// works with older react native versions
// const blacklist = require('metro').createBlacklist;

module.exports = {
    resolver: {
      blacklistRE: /#current-cloud-backend\/.*/,
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
  };