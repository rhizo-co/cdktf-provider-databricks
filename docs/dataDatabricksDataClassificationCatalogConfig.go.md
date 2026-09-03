# `dataDatabricksDataClassificationCatalogConfig` Submodule <a name="`dataDatabricksDataClassificationCatalogConfig` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataClassificationCatalogConfig <a name="DataDatabricksDataClassificationCatalogConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config databricks_data_classification_catalog_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

datadatabricksdataclassificationcatalogconfig.NewDataDatabricksDataClassificationCatalogConfig(scope Construct, id *string, config DataDatabricksDataClassificationCatalogConfigConfig) DataDatabricksDataClassificationCatalogConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig">DataDatabricksDataClassificationCatalogConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig">DataDatabricksDataClassificationCatalogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksDataClassificationCatalogConfigProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDataClassificationCatalogConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

datadatabricksdataclassificationcatalogconfig.DataDatabricksDataClassificationCatalogConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

datadatabricksdataclassificationcatalogconfig.DataDatabricksDataClassificationCatalogConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

datadatabricksdataclassificationcatalogconfig.DataDatabricksDataClassificationCatalogConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

datadatabricksdataclassificationcatalogconfig.DataDatabricksDataClassificationCatalogConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksDataClassificationCatalogConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDataClassificationCatalogConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDataClassificationCatalogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataClassificationCatalogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.autoTagConfigs">AutoTagConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList">DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.excludedSchemas">ExcludedSchemas</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.includedSchemas">IncludedSchemas</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference">DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutoTagConfigs`<sup>Required</sup> <a name="AutoTagConfigs" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.autoTagConfigs"></a>

```go
func AutoTagConfigs() DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList">DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList</a>

---

##### `ExcludedSchemas`<sup>Required</sup> <a name="ExcludedSchemas" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.excludedSchemas"></a>

```go
func ExcludedSchemas() DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference</a>

---

##### `IncludedSchemas`<sup>Required</sup> <a name="IncludedSchemas" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.includedSchemas"></a>

```go
func IncludedSchemas() DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference">DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference">DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataClassificationCatalogConfigAutoTagConfigs <a name="DataDatabricksDataClassificationCatalogConfigAutoTagConfigs" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

&datadatabricksdataclassificationcatalogconfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs {
	AutoTaggingMode: *string,
	ClassificationTag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode">AutoTaggingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#auto_tagging_mode DataDatabricksDataClassificationCatalogConfig#auto_tagging_mode}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.classificationTag">ClassificationTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#classification_tag DataDatabricksDataClassificationCatalogConfig#classification_tag}. |

---

##### `AutoTaggingMode`<sup>Required</sup> <a name="AutoTaggingMode" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode"></a>

```go
AutoTaggingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#auto_tagging_mode DataDatabricksDataClassificationCatalogConfig#auto_tagging_mode}.

---

##### `ClassificationTag`<sup>Required</sup> <a name="ClassificationTag" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs.property.classificationTag"></a>

```go
ClassificationTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#classification_tag DataDatabricksDataClassificationCatalogConfig#classification_tag}.

---

### DataDatabricksDataClassificationCatalogConfigConfig <a name="DataDatabricksDataClassificationCatalogConfigConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

&datadatabricksdataclassificationcatalogconfig.DataDatabricksDataClassificationCatalogConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/rhizo-co/cdktf-provider-databricks-go/databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#name DataDatabricksDataClassificationCatalogConfig#name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#provider_config DataDatabricksDataClassificationCatalogConfig#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#name DataDatabricksDataClassificationCatalogConfig#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksDataClassificationCatalogConfigProviderConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig">DataDatabricksDataClassificationCatalogConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#provider_config DataDatabricksDataClassificationCatalogConfig#provider_config}.

---

### DataDatabricksDataClassificationCatalogConfigExcludedSchemas <a name="DataDatabricksDataClassificationCatalogConfigExcludedSchemas" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

&datadatabricksdataclassificationcatalogconfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas {
	Names: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas.property.names">Names</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}. |

---

##### `Names`<sup>Required</sup> <a name="Names" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas.property.names"></a>

```go
Names *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}.

---

### DataDatabricksDataClassificationCatalogConfigIncludedSchemas <a name="DataDatabricksDataClassificationCatalogConfigIncludedSchemas" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

&datadatabricksdataclassificationcatalogconfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas {
	Names: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas.property.names">Names</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}. |

---

##### `Names`<sup>Required</sup> <a name="Names" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas.property.names"></a>

```go
Names *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#names DataDatabricksDataClassificationCatalogConfig#names}.

---

### DataDatabricksDataClassificationCatalogConfigProviderConfig <a name="DataDatabricksDataClassificationCatalogConfigProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

&datadatabricksdataclassificationcatalogconfig.DataDatabricksDataClassificationCatalogConfigProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#workspace_id DataDatabricksDataClassificationCatalogConfig#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/data_classification_catalog_config#workspace_id DataDatabricksDataClassificationCatalogConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList <a name="DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

datadatabricksdataclassificationcatalogconfig.NewDataDatabricksDataClassificationCatalogConfigAutoTagConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.get"></a>

```go
func Get(index *f64) DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference <a name="DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

datadatabricksdataclassificationcatalogconfig.NewDataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput">AutoTaggingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput">ClassificationTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode">AutoTaggingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag">ClassificationTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs">DataDatabricksDataClassificationCatalogConfigAutoTagConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoTaggingModeInput`<sup>Optional</sup> <a name="AutoTaggingModeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput"></a>

```go
func AutoTaggingModeInput() *string
```

- *Type:* *string

---

##### `ClassificationTagInput`<sup>Optional</sup> <a name="ClassificationTagInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput"></a>

```go
func ClassificationTagInput() *string
```

- *Type:* *string

---

##### `AutoTaggingMode`<sup>Required</sup> <a name="AutoTaggingMode" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode"></a>

```go
func AutoTaggingMode() *string
```

- *Type:* *string

---

##### `ClassificationTag`<sup>Required</sup> <a name="ClassificationTag" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag"></a>

```go
func ClassificationTag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDataClassificationCatalogConfigAutoTagConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigAutoTagConfigs">DataDatabricksDataClassificationCatalogConfigAutoTagConfigs</a>

---


### DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference <a name="DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

datadatabricksdataclassificationcatalogconfig.NewDataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.namesInput">NamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.names">Names</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas">DataDatabricksDataClassificationCatalogConfigExcludedSchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamesInput`<sup>Optional</sup> <a name="NamesInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.namesInput"></a>

```go
func NamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Names`<sup>Required</sup> <a name="Names" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.names"></a>

```go
func Names() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDataClassificationCatalogConfigExcludedSchemas
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigExcludedSchemas">DataDatabricksDataClassificationCatalogConfigExcludedSchemas</a>

---


### DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference <a name="DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

datadatabricksdataclassificationcatalogconfig.NewDataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput">NamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.names">Names</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas">DataDatabricksDataClassificationCatalogConfigIncludedSchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamesInput`<sup>Optional</sup> <a name="NamesInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput"></a>

```go
func NamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Names`<sup>Required</sup> <a name="Names" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.names"></a>

```go
func Names() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDataClassificationCatalogConfigIncludedSchemas
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigIncludedSchemas">DataDatabricksDataClassificationCatalogConfigIncludedSchemas</a>

---


### DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference <a name="DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksdataclassificationcatalogconfig"

datadatabricksdataclassificationcatalogconfig.NewDataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksDataClassificationCatalogConfig.DataDatabricksDataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



