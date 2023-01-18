/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZnNhbmNoZXoyNTIiLCJhIjoiY2xkMHNqaTB1MnpjdTNubjJrejE4ZGFuYiJ9.ohi72LpZVsWaJVMQJktB8A",
  },
};

module.exports = nextConfig;
