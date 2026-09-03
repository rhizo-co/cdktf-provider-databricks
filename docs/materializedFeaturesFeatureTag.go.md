# `materializedFeaturesFeatureTag` Submodule <a name="`materializedFeaturesFeatureTag` Submodule" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaterializedFeaturesFeatureTag <a name="MaterializedFeaturesFeatureTag" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/materialized_features_feature_tag databricks_materialized_features_feature_tag}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.NewMaterializedFeaturesFeatureTag(scope Construct, id *string, config MaterializedFeaturesFeatureTagConfig) MaterializedFeaturesFeatureTag
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig">MaterializedFeaturesFeatureTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig">MaterializedFeaturesFeatureTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.putProviderConfig"></a>

```go
func PutProviderConfig(value MaterializedFeaturesFeatureTagProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig">MaterializedFeaturesFeatureTagProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetValue"></a>

```go
func ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTag_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTag_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTag_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTag_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MaterializedFeaturesFeatureTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MaterializedFeaturesFeatureTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/materialized_features_feature_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MaterializedFeaturesFeatureTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference">MaterializedFeaturesFeatureTagProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.providerConfig"></a>

```go
func ProviderConfig() MaterializedFeaturesFeatureTagProviderConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference">MaterializedFeaturesFeatureTagProviderConfigOutputReference</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MaterializedFeaturesFeatureTagConfig <a name="MaterializedFeaturesFeatureTagConfig" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/materializedfeaturesfeaturetag"

&materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTagConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Key: *string,
	ProviderConfig: github.com/rhizo-co/cdktf-provider-databricks-go/databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig">MaterializedFeaturesFeatureTagProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/materialized_features_feature_tag#provider_config MaterializedFeaturesFeatureTag#provider_config}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.providerConfig"></a>

```go
ProviderConfig MaterializedFeaturesFeatureTagProviderConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig">MaterializedFeaturesFeatureTagProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/materialized_features_feature_tag#provider_config MaterializedFeaturesFeatureTag#provider_config}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}.

---

### MaterializedFeaturesFeatureTagProviderConfig <a name="MaterializedFeaturesFeatureTagProviderConfig" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/materializedfeaturesfeaturetag"

&materializedfeaturesfeaturetag.MaterializedFeaturesFeatureTagProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/materialized_features_feature_tag#workspace_id MaterializedFeaturesFeatureTag#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/materialized_features_feature_tag#workspace_id MaterializedFeaturesFeatureTag#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MaterializedFeaturesFeatureTagProviderConfigOutputReference <a name="MaterializedFeaturesFeatureTagProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-databricks-go/databricks/materializedfeaturesfeaturetag"

materializedfeaturesfeaturetag.NewMaterializedFeaturesFeatureTagProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MaterializedFeaturesFeatureTagProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



