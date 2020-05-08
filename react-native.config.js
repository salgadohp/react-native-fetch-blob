module.exports = {
  // config for a library is scoped under "dependency" key
  dependency: {
    platforms: {
      ios: {},
      android: {}, // projects are grouped into "platforms"
    },
    assets: ['./path-to-assets'], // stays the same
    // hooks are considered anti-pattern, please avoid them
    hooks: {
      prelink:"node ./node_modules/react-native-fetch-blob/scripts/prelink.js",
    },
  },
};
