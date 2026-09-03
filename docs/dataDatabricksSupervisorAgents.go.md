# `dataDatabricksSupervisorAgents` Submodule <a name="`dataDatabricksSupervisorAgents` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSupervisorAgents <a name="DataDatabricksSupervisorAgents" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents databricks_supervisor_agents}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

datadatabrickssupervisoragents.NewDataDatabricksSupervisorAgents(scope Construct, id *string, config DataDatabricksSupervisorAgentsConfig) DataDatabricksSupervisorAgents
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig">DataDatabricksSupervisorAgentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig">DataDatabricksSupervisorAgentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksSupervisorAgentsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSupervisorAgents resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

datadatabrickssupervisoragents.DataDatabricksSupervisorAgents_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

datadatabrickssupervisoragents.DataDatabricksSupervisorAgents_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

datadatabrickssupervisoragents.DataDatabricksSupervisorAgents_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

datadatabrickssupervisoragents.DataDatabricksSupervisorAgents_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksSupervisorAgents resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksSupervisorAgents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksSupervisorAgents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSupervisorAgents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference">DataDatabricksSupervisorAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.supervisorAgents">SupervisorAgents</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList">DataDatabricksSupervisorAgentsSupervisorAgentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksSupervisorAgentsProviderConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference">DataDatabricksSupervisorAgentsProviderConfigOutputReference</a>

---

##### `SupervisorAgents`<sup>Required</sup> <a name="SupervisorAgents" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.supervisorAgents"></a>

```go
func SupervisorAgents() DataDatabricksSupervisorAgentsSupervisorAgentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList">DataDatabricksSupervisorAgentsSupervisorAgentsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgents.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSupervisorAgentsConfig <a name="DataDatabricksSupervisorAgentsConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

&datadatabrickssupervisoragents.DataDatabricksSupervisorAgentsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PageSize: *f64,
	ProviderConfig: github.com/rhizo-co/cdktf-provider-databricks-go/databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#page_size DataDatabricksSupervisorAgents#page_size}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#provider_config DataDatabricksSupervisorAgents#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#page_size DataDatabricksSupervisorAgents#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksSupervisorAgentsProviderConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#provider_config DataDatabricksSupervisorAgents#provider_config}.

---

### DataDatabricksSupervisorAgentsProviderConfig <a name="DataDatabricksSupervisorAgentsProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

&datadatabrickssupervisoragents.DataDatabricksSupervisorAgentsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#workspace_id DataDatabricksSupervisorAgents#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#workspace_id DataDatabricksSupervisorAgents#workspace_id}.

---

### DataDatabricksSupervisorAgentsSupervisorAgents <a name="DataDatabricksSupervisorAgentsSupervisorAgents" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

&datadatabrickssupervisoragents.DataDatabricksSupervisorAgentsSupervisorAgents {
	Name: *string,
	ProviderConfig: github.com/rhizo-co/cdktf-provider-databricks-go/databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#name DataDatabricksSupervisorAgents#name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#provider_config DataDatabricksSupervisorAgents#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#name DataDatabricksSupervisorAgents#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#provider_config DataDatabricksSupervisorAgents#provider_config}.

---

### DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig <a name="DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

&datadatabrickssupervisoragents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#workspace_id DataDatabricksSupervisorAgents#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/supervisor_agents#workspace_id DataDatabricksSupervisorAgents#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSupervisorAgentsProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentsProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

datadatabrickssupervisoragents.NewDataDatabricksSupervisorAgentsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSupervisorAgentsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksSupervisorAgentsSupervisorAgentsList <a name="DataDatabricksSupervisorAgentsSupervisorAgentsList" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

datadatabrickssupervisoragents.NewDataDatabricksSupervisorAgentsSupervisorAgentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksSupervisorAgentsSupervisorAgentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.get"></a>

```go
func Get(index *f64) DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference <a name="DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

datadatabrickssupervisoragents.NewDataDatabricksSupervisorAgentsSupervisorAgentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.experimentId">ExperimentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.instructions">Instructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.supervisorAgentId">SupervisorAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents">DataDatabricksSupervisorAgentsSupervisorAgents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.experimentId"></a>

```go
func ExperimentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.instructions"></a>

```go
func Instructions() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference">DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference</a>

---

##### `SupervisorAgentId`<sup>Required</sup> <a name="SupervisorAgentId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.supervisorAgentId"></a>

```go
func SupervisorAgentId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksSupervisorAgentsSupervisorAgents
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgents">DataDatabricksSupervisorAgentsSupervisorAgents</a>

---


### DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference <a name="DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabrickssupervisoragents"

datadatabrickssupervisoragents.NewDataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksSupervisorAgents.DataDatabricksSupervisorAgentsSupervisorAgentsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



