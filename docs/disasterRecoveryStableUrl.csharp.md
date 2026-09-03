# `disasterRecoveryStableUrl` Submodule <a name="`disasterRecoveryStableUrl` Submodule" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryStableUrl <a name="DisasterRecoveryStableUrl" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/disaster_recovery_stable_url databricks_disaster_recovery_stable_url}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DisasterRecoveryStableUrl(Construct Scope, string Id, DisasterRecoveryStableUrlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig">DisasterRecoveryStableUrlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig">DisasterRecoveryStableUrlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DisasterRecoveryStableUrl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DisasterRecoveryStableUrl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DisasterRecoveryStableUrl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DisasterRecoveryStableUrl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DisasterRecoveryStableUrl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DisasterRecoveryStableUrl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisasterRecoveryStableUrl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisasterRecoveryStableUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/disaster_recovery_stable_url#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryStableUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.effectiveWorkspaceId">EffectiveWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.failoverGroupName">FailoverGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.stableWorkspaceId">StableWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.initialWorkspaceIdInput">InitialWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.stableUrlIdInput">StableUrlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.initialWorkspaceId">InitialWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.stableUrlId">StableUrlId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EffectiveWorkspaceId`<sup>Required</sup> <a name="EffectiveWorkspaceId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.effectiveWorkspaceId"></a>

```csharp
public string EffectiveWorkspaceId { get; }
```

- *Type:* string

---

##### `FailoverGroupName`<sup>Required</sup> <a name="FailoverGroupName" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.failoverGroupName"></a>

```csharp
public string FailoverGroupName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StableWorkspaceId`<sup>Required</sup> <a name="StableWorkspaceId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.stableWorkspaceId"></a>

```csharp
public string StableWorkspaceId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InitialWorkspaceIdInput`<sup>Optional</sup> <a name="InitialWorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.initialWorkspaceIdInput"></a>

```csharp
public string InitialWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `StableUrlIdInput`<sup>Optional</sup> <a name="StableUrlIdInput" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.stableUrlIdInput"></a>

```csharp
public string StableUrlIdInput { get; }
```

- *Type:* string

---

##### `InitialWorkspaceId`<sup>Required</sup> <a name="InitialWorkspaceId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.initialWorkspaceId"></a>

```csharp
public string InitialWorkspaceId { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `StableUrlId`<sup>Required</sup> <a name="StableUrlId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.stableUrlId"></a>

```csharp
public string StableUrlId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryStableUrlConfig <a name="DisasterRecoveryStableUrlConfig" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DisasterRecoveryStableUrlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InitialWorkspaceId,
    string Parent,
    string StableUrlId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.initialWorkspaceId">InitialWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/disaster_recovery_stable_url#initial_workspace_id DisasterRecoveryStableUrl#initial_workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/disaster_recovery_stable_url#parent DisasterRecoveryStableUrl#parent}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.stableUrlId">StableUrlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/disaster_recovery_stable_url#stable_url_id DisasterRecoveryStableUrl#stable_url_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `InitialWorkspaceId`<sup>Required</sup> <a name="InitialWorkspaceId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.initialWorkspaceId"></a>

```csharp
public string InitialWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/disaster_recovery_stable_url#initial_workspace_id DisasterRecoveryStableUrl#initial_workspace_id}.

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/disaster_recovery_stable_url#parent DisasterRecoveryStableUrl#parent}.

---

##### `StableUrlId`<sup>Required</sup> <a name="StableUrlId" id="rhizo-co-terraform-provider-databricks.disasterRecoveryStableUrl.DisasterRecoveryStableUrlConfig.property.stableUrlId"></a>

```csharp
public string StableUrlId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/disaster_recovery_stable_url#stable_url_id DisasterRecoveryStableUrl#stable_url_id}.

---



