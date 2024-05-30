import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "src/components",
    );
    config.resolve.alias["@utils"] = path.join(__dirname, "src/utils");
    config.resolve.alias["@styles"] = path.join(__dirname, "src/styles");
    config.resolve.alias["@hooks"] = path.join(__dirname, "src/hooks");
    config.resolve.alias["@pages"] = path.join(__dirname, "src/pages");
    return config;
  },
};

export default nextConfig;
