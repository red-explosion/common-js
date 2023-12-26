import {
  cpSync,
  existsSync,
  readFileSync,
  rmdirSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import pkg from "../../package.json" assert { type: "json" };

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const packageName = process.argv[2];

const root = resolve(__dirname, "../../");

if (!packageName) {
  console.error(
    "Please provide a package name, i.e. `pnpm make:package my-package`",
  );

  process.exit();
}

const packageDirectory = resolve(root, "./packages", packageName);

if (existsSync(packageDirectory)) {
  console.error("Package already exists");

  process.exit();
}

try {
  cpSync(resolve(__dirname, "./stubs"), packageDirectory, {
    recursive: true,
  });

  const packageJson = JSON.parse(
    readFileSync(resolve(packageDirectory, "./package.json"), "utf-8"),
  );

  packageJson.version = pkg.version;
  packageJson.name = `@red-explosion/${packageName}`;
  packageJson.homepage = `https://github.com/red-explosion/common-js/tree/main/packages/${packageName}`;

  writeFileSync(
    resolve(packageDirectory, "package.json"),
    JSON.stringify(packageJson, null, 2),
    "utf-8",
  );

  const readmeContents = readFileSync(
    resolve(packageDirectory, "./README.md"),
    "utf-8",
  );

  writeFileSync(
    resolve(packageDirectory, "README.md"),
    readmeContents.replace(/{{PACKAGE_NAME}}/g, packageName),
    "utf-8",
  );

  console.log(`✅ @red-explosion/${packageName} bootstrapped successfully`);
} catch (e) {
  rmdirSync(packageDirectory, {
    recursive: true,
  });

  throw e;
}
