/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Add a custom rule for handling PDF.js worker
      config.module.rules.push({
        test: /pdf\.worker\.(min\.)?js$/, // Target PDF.js worker files
        use: {
          loader: 'file-loader', // Use file-loader to load the worker file
          options: {
            name: '[name].[ext]', // Keep the original file name and extension
          },
        },
      });
  
      return config; // Return the modified config
    },
  };
  
  module.exports = nextConfig;
  