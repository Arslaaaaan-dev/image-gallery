module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",         // Keep this as is - always use HTTPS
        hostname: "res.cloudinary.com",  // Keep this as is - this is Cloudinary's domain
        port: "",                  // Keep empty
        pathname: `/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/**`,  // This is the important change
        search: "",                // Keep empty
      },
    ],
  },
};
