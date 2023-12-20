const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://basketcraft.net/uv/service/hvtrs8%2F-nmw%2Cge%2Frlcy-rmbnoz-aoppmrctkol%2F7369-rmbnoz"; // Your website URL
  //   if (
  //     req.url.startsWith("/api") ||
  //     req.url.startsWith("/auth") ||
  //     req.url.startsWith("/banner") ||
  //     req.url.startsWith("/CollegeTask")
  //   ) {
  //     target = "http://106.15.2.32:6969";
  //   }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // rewrite request path `/backend`
      //  /backend/user/login => https://108.181.34.45/play/roblox-corporation/5349/roblox?__cpo=aHR0cHM6Ly9ub3cuZ2c
      //   "^/backend/": "/",d
    },
  })(req, res);
};
