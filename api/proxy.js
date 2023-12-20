const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://108.181.32.61/__cpi.php?s=UkQ2YXlSaWJuc3ZoeGR2dG04WW9LcTAzRnJmN2ladlZmem1WbUkydXhzWTlNRFFRRmovbW00RW1QYWRjb1JkMlBlTy9KNDFkSi9GTU1YR2s3VTEvNjRNb1VGSys3Y3BZbVdRcC8xM2luYVE9&r=aHR0cHM6Ly8xMDguMTgxLjMyLjYxLz9fX2Nwbz1hSFIwY0hNNkx5OXViM2N1WjJj&__cpo=1"; // Your website URL
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
