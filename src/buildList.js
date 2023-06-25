const { version } = require("../package.json");
const polygonMainnet = require("./tokens/polygon-mainnet.json");
const polygonTestnet = require("./tokens/polygon-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "ConeDEX Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://img1.wsimg.com/isteam/ip/9006af7a-daa8-47b2-9d24-e69d2aebb20e/BitCone_Logo_V7_halo_NO_circle_-_double_border.png/:/rs=w:399,h:400,cg:true,m/cr=w:399,h:400/qt=q:95",
    keywords: ["conedex", "default"],
    tokens: [...polygonMainnet, ...polygonTestnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
