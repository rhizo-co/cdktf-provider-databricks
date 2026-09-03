# `dataDatabricksAccountIamDirectGroupMembersV2` Submodule <a name="`dataDatabricksAccountIamDirectGroupMembersV2` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamDirectGroupMembersV2 <a name="DataDatabricksAccountIamDirectGroupMembersV2" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_direct_group_members_v2 databricks_account_iam_direct_group_members_v2}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksaccountiamdirectgroupmembersv2"

datadatabricksaccountiamdirectgroupmembersv2.NewDataDatabricksAccountIamDirectGroupMembersV2(scope Construct, id *string, config DataDatabricksAccountIamDirectGroupMembersV2Config) DataDatabricksAccountIamDirectGroupMembersV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config">DataDatabricksAccountIamDirectGroupMembersV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config">DataDatabricksAccountIamDirectGroupMembersV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPageSize` <a name="ResetPageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.resetPageSize"></a>

```go
func ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAccountIamDirectGroupMembersV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksaccountiamdirectgroupmembersv2"

datadatabricksaccountiamdirectgroupmembersv2.DataDatabricksAccountIamDirectGroupMembersV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksaccountiamdirectgroupmembersv2"

datadatabricksaccountiamdirectgroupmembersv2.DataDatabricksAccountIamDirectGroupMembersV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksaccountiamdirectgroupmembersv2"

datadatabricksaccountiamdirectgroupmembersv2.DataDatabricksAccountIamDirectGroupMembersV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksaccountiamdirectgroupmembersv2"

datadatabricksaccountiamdirectgroupmembersv2.DataDatabricksAccountIamDirectGroupMembersV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksAccountIamDirectGroupMembersV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAccountIamDirectGroupMembersV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAccountIamDirectGroupMembersV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_direct_group_members_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamDirectGroupMembersV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.directGroupMembers">DirectGroupMembers</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DirectGroupMembers`<sup>Required</sup> <a name="DirectGroupMembers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.directGroupMembers"></a>

```go
func DirectGroupMembers() DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList</a>

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamDirectGroupMembersV2Config <a name="DataDatabricksAccountIamDirectGroupMembersV2Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksaccountiamdirectgroupmembersv2"

&datadatabricksaccountiamdirectgroupmembersv2.DataDatabricksAccountIamDirectGroupMembersV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *f64,
	PageSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.groupId">GroupId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_direct_group_members_v2#page_size DataDatabricksAccountIamDirectGroupMembersV2#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2Config.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_direct_group_members_v2#page_size DataDatabricksAccountIamDirectGroupMembersV2#page_size}.

---

### DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers <a name="DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksaccountiamdirectgroupmembersv2"

&datadatabricksaccountiamdirectgroupmembersv2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers {
	GroupId: *f64,
	PrincipalId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.groupId">GroupId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.principalId">PrincipalId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_direct_group_members_v2#principal_id DataDatabricksAccountIamDirectGroupMembersV2#principal_id}. |

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_direct_group_members_v2#group_id DataDatabricksAccountIamDirectGroupMembersV2#group_id}.

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers.property.principalId"></a>

```go
PrincipalId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_direct_group_members_v2#principal_id DataDatabricksAccountIamDirectGroupMembersV2#principal_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList <a name="DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksaccountiamdirectgroupmembersv2"

datadatabricksaccountiamdirectgroupmembersv2.NewDataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.get"></a>

```go
func Get(index *f64) DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference <a name="DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/datadatabricksaccountiamdirectgroupmembersv2"

datadatabricksaccountiamdirectgroupmembersv2.NewDataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.membershipSource">MembershipSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalId">PrincipalId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `MembershipSource`<sup>Required</sup> <a name="MembershipSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.membershipSource"></a>

```go
func MembershipSource() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalIdInput"></a>

```go
func PrincipalIdInput() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.principalId"></a>

```go
func PrincipalId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamDirectGroupMembersV2.DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers">DataDatabricksAccountIamDirectGroupMembersV2DirectGroupMembers</a>

---



