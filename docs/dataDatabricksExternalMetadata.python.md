# `dataDatabricksExternalMetadata` Submodule <a name="`dataDatabricksExternalMetadata` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksExternalMetadata <a name="DataDatabricksExternalMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata databricks_external_metadata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer"></a>

```python
from rhizo_co_cdktf_provider_databricks import data_databricks_external_metadata

dataDatabricksExternalMetadata.DataDatabricksExternalMetadata(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksExternalMetadataProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#provider_config DataDatabricksExternalMetadata#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#provider_config DataDatabricksExternalMetadata#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#workspace_id DataDatabricksExternalMetadata#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksExternalMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct"></a>

```python
from rhizo_co_cdktf_provider_databricks import data_databricks_external_metadata

dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement"></a>

```python
from rhizo_co_cdktf_provider_databricks import data_databricks_external_metadata

dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource"></a>

```python
from rhizo_co_cdktf_provider_databricks import data_databricks_external_metadata

dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport"></a>

```python
from rhizo_co_cdktf_provider_databricks import data_databricks_external_metadata

dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksExternalMetadata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksExternalMetadata to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksExternalMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksExternalMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.properties">properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.providerConfig">provider_config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference">DataDatabricksExternalMetadataProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemType">system_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.providerConfigInput">provider_config_input</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `columns`<sup>Required</sup> <a name="columns" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.properties"></a>

```python
properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.providerConfig"></a>

```python
provider_config: DataDatabricksExternalMetadataProviderConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference">DataDatabricksExternalMetadataProviderConfigOutputReference</a>

---

##### `system_type`<sup>Required</sup> <a name="system_type" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemType"></a>

```python
system_type: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksExternalMetadataProviderConfig
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksExternalMetadataConfig <a name="DataDatabricksExternalMetadataConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.Initializer"></a>

```python
from rhizo_co_cdktf_provider_databricks import data_databricks_external_metadata

dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksExternalMetadataProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.providerConfig">provider_config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#provider_config DataDatabricksExternalMetadata#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksExternalMetadataProviderConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#provider_config DataDatabricksExternalMetadata#provider_config}.

---

### DataDatabricksExternalMetadataProviderConfig <a name="DataDatabricksExternalMetadataProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig.Initializer"></a>

```python
from rhizo_co_cdktf_provider_databricks import data_databricks_external_metadata

dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#workspace_id DataDatabricksExternalMetadata#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#workspace_id DataDatabricksExternalMetadata#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksExternalMetadataProviderConfigOutputReference <a name="DataDatabricksExternalMetadataProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.Initializer"></a>

```python
from rhizo_co_cdktf_provider_databricks import data_databricks_external_metadata

dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksExternalMetadataProviderConfig
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a>

---



