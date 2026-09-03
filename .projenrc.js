const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  authorName: 'databricks',
  packageName: 'rhizo-co-terraform-provider-databricks',
  githubNamespace: 'rhizo-co',
  useCustomGithubRunner: false,
  terraformProvider: "databricks/databricks@~> 1.130.0",
  cdktfVersion: "0.20.12",
  constructsVersion: "10.4.2",
  minNodeVersion: "20.17.0",
  jsiiVersion: "^5.0.1",
  devDeps: ["@cdktf/provider-project@^0.7.23"],
});

// The github namespace contains a hyphen, which jsii rejects in a Python module
// name. The PyPI dist name may keep it, the importable module may not.
project.package.manifest.jsii.targets.python.module =
  project.package.manifest.jsii.targets.python.module.replace(/-/g, "_");

project.synth();
