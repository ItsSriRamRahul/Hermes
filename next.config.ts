import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
const withVideos = require('next-videos')

module.exports = withVideos()
export default withNextVideo(nextConfig);