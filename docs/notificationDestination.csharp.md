# `notificationDestination` Submodule <a name="`notificationDestination` Submodule" id="rhizo-co-terraform-provider-databricks.notificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationDestination <a name="NotificationDestination" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination databricks_notification_destination}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestination(Construct Scope, string Id, NotificationDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig">NotificationDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig">NotificationDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.putConfig"></a>

```csharp
private void PutConfig(NotificationDestinationConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.putConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.putProviderConfig"></a>

```csharp
private void PutProviderConfig(NotificationDestinationProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.resetDestinationType"></a>

```csharp
private void ResetDestinationType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationDestination resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

NotificationDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

NotificationDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

NotificationDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

NotificationDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NotificationDestination resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NotificationDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference">NotificationDestinationConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference">NotificationDestinationProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.configInput">ConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.config"></a>

```csharp
public NotificationDestinationConfigAOutputReference Config { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference">NotificationDestinationConfigAOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.providerConfig"></a>

```csharp
public NotificationDestinationProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference">NotificationDestinationProviderConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.configInput"></a>

```csharp
public NotificationDestinationConfigA ConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.providerConfigInput"></a>

```csharp
public NotificationDestinationProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationDestinationConfig <a name="NotificationDestinationConfig" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    NotificationDestinationConfigA Config = null,
    string DestinationType = null,
    string Id = null,
    NotificationDestinationProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | config block. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.destinationType">DestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#id NotificationDestination#id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.config"></a>

```csharp
public NotificationDestinationConfigA Config { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#config NotificationDestination#config}

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfig.property.providerConfig"></a>

```csharp
public NotificationDestinationProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#provider_config NotificationDestination#provider_config}

---

### NotificationDestinationConfigA <a name="NotificationDestinationConfigA" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigA {
    NotificationDestinationConfigEmail Email = null,
    NotificationDestinationConfigGenericWebhook GenericWebhook = null,
    NotificationDestinationConfigMicrosoftTeams MicrosoftTeams = null,
    NotificationDestinationConfigPagerduty Pagerduty = null,
    NotificationDestinationConfigSlack Slack = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.property.email">Email</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | email block. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.property.genericWebhook">GenericWebhook</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | generic_webhook block. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.property.microsoftTeams">MicrosoftTeams</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | microsoft_teams block. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.property.pagerduty">Pagerduty</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | pagerduty block. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.property.slack">Slack</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | slack block. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.property.email"></a>

```csharp
public NotificationDestinationConfigEmail Email { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#email NotificationDestination#email}

---

##### `GenericWebhook`<sup>Optional</sup> <a name="GenericWebhook" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.property.genericWebhook"></a>

```csharp
public NotificationDestinationConfigGenericWebhook GenericWebhook { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

generic_webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#generic_webhook NotificationDestination#generic_webhook}

---

##### `MicrosoftTeams`<sup>Optional</sup> <a name="MicrosoftTeams" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.property.microsoftTeams"></a>

```csharp
public NotificationDestinationConfigMicrosoftTeams MicrosoftTeams { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

microsoft_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#microsoft_teams NotificationDestination#microsoft_teams}

---

##### `Pagerduty`<sup>Optional</sup> <a name="Pagerduty" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.property.pagerduty"></a>

```csharp
public NotificationDestinationConfigPagerduty Pagerduty { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#pagerduty NotificationDestination#pagerduty}

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA.property.slack"></a>

```csharp
public NotificationDestinationConfigSlack Slack { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#slack NotificationDestination#slack}

---

### NotificationDestinationConfigEmail <a name="NotificationDestinationConfigEmail" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigEmail {
    string[] Addresses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail.property.addresses">Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#addresses NotificationDestination#addresses}. |

---

##### `Addresses`<sup>Optional</sup> <a name="Addresses" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail.property.addresses"></a>

```csharp
public string[] Addresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#addresses NotificationDestination#addresses}.

---

### NotificationDestinationConfigGenericWebhook <a name="NotificationDestinationConfigGenericWebhook" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigGenericWebhook {
    string Password = null,
    bool|IResolvable PasswordSet = null,
    string Url = null,
    bool|IResolvable UrlSet = null,
    string Username = null,
    bool|IResolvable UsernameSet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#password NotificationDestination#password}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.passwordSet">PasswordSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#password_set NotificationDestination#password_set}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.urlSet">UrlSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#username NotificationDestination#username}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.usernameSet">UsernameSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#username_set NotificationDestination#username_set}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#password NotificationDestination#password}.

---

##### `PasswordSet`<sup>Optional</sup> <a name="PasswordSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.passwordSet"></a>

```csharp
public bool|IResolvable PasswordSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#password_set NotificationDestination#password_set}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `UrlSet`<sup>Optional</sup> <a name="UrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.urlSet"></a>

```csharp
public bool|IResolvable UrlSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#username NotificationDestination#username}.

---

##### `UsernameSet`<sup>Optional</sup> <a name="UsernameSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.usernameSet"></a>

```csharp
public bool|IResolvable UsernameSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#username_set NotificationDestination#username_set}.

---

### NotificationDestinationConfigMicrosoftTeams <a name="NotificationDestinationConfigMicrosoftTeams" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigMicrosoftTeams {
    string AppId = null,
    bool|IResolvable AppIdSet = null,
    string AuthSecret = null,
    bool|IResolvable AuthSecretSet = null,
    string ChannelUrl = null,
    bool|IResolvable ChannelUrlSet = null,
    string TenantId = null,
    bool|IResolvable TenantIdSet = null,
    string Url = null,
    bool|IResolvable UrlSet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appId">AppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#app_id NotificationDestination#app_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appIdSet">AppIdSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#app_id_set NotificationDestination#app_id_set}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecret">AuthSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#auth_secret NotificationDestination#auth_secret}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecretSet">AuthSecretSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#auth_secret_set NotificationDestination#auth_secret_set}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrl">ChannelUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#channel_url NotificationDestination#channel_url}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrlSet">ChannelUrlSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#channel_url_set NotificationDestination#channel_url_set}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#tenant_id NotificationDestination#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantIdSet">TenantIdSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#tenant_id_set NotificationDestination#tenant_id_set}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.urlSet">UrlSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |

---

##### `AppId`<sup>Optional</sup> <a name="AppId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#app_id NotificationDestination#app_id}.

---

##### `AppIdSet`<sup>Optional</sup> <a name="AppIdSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appIdSet"></a>

```csharp
public bool|IResolvable AppIdSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#app_id_set NotificationDestination#app_id_set}.

---

##### `AuthSecret`<sup>Optional</sup> <a name="AuthSecret" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecret"></a>

```csharp
public string AuthSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#auth_secret NotificationDestination#auth_secret}.

---

##### `AuthSecretSet`<sup>Optional</sup> <a name="AuthSecretSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecretSet"></a>

```csharp
public bool|IResolvable AuthSecretSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#auth_secret_set NotificationDestination#auth_secret_set}.

---

##### `ChannelUrl`<sup>Optional</sup> <a name="ChannelUrl" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrl"></a>

```csharp
public string ChannelUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#channel_url NotificationDestination#channel_url}.

---

##### `ChannelUrlSet`<sup>Optional</sup> <a name="ChannelUrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrlSet"></a>

```csharp
public bool|IResolvable ChannelUrlSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#channel_url_set NotificationDestination#channel_url_set}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#tenant_id NotificationDestination#tenant_id}.

---

##### `TenantIdSet`<sup>Optional</sup> <a name="TenantIdSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantIdSet"></a>

```csharp
public bool|IResolvable TenantIdSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#tenant_id_set NotificationDestination#tenant_id_set}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `UrlSet`<sup>Optional</sup> <a name="UrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.urlSet"></a>

```csharp
public bool|IResolvable UrlSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

### NotificationDestinationConfigPagerduty <a name="NotificationDestinationConfigPagerduty" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigPagerduty {
    string IntegrationKey = null,
    bool|IResolvable IntegrationKeySet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKeySet">IntegrationKeySet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}. |

---

##### `IntegrationKey`<sup>Optional</sup> <a name="IntegrationKey" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}.

---

##### `IntegrationKeySet`<sup>Optional</sup> <a name="IntegrationKeySet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKeySet"></a>

```csharp
public bool|IResolvable IntegrationKeySet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}.

---

### NotificationDestinationConfigSlack <a name="NotificationDestinationConfigSlack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigSlack {
    string ChannelId = null,
    bool|IResolvable ChannelIdSet = null,
    string OauthToken = null,
    bool|IResolvable OauthTokenSet = null,
    string Url = null,
    bool|IResolvable UrlSet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelId">ChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#channel_id NotificationDestination#channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelIdSet">ChannelIdSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#channel_id_set NotificationDestination#channel_id_set}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthToken">OauthToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#oauth_token NotificationDestination#oauth_token}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthTokenSet">OauthTokenSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#oauth_token_set NotificationDestination#oauth_token_set}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.urlSet">UrlSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#channel_id NotificationDestination#channel_id}.

---

##### `ChannelIdSet`<sup>Optional</sup> <a name="ChannelIdSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelIdSet"></a>

```csharp
public bool|IResolvable ChannelIdSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#channel_id_set NotificationDestination#channel_id_set}.

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthToken"></a>

```csharp
public string OauthToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#oauth_token NotificationDestination#oauth_token}.

---

##### `OauthTokenSet`<sup>Optional</sup> <a name="OauthTokenSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthTokenSet"></a>

```csharp
public bool|IResolvable OauthTokenSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#oauth_token_set NotificationDestination#oauth_token_set}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `UrlSet`<sup>Optional</sup> <a name="UrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.urlSet"></a>

```csharp
public bool|IResolvable UrlSet { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

### NotificationDestinationProviderConfig <a name="NotificationDestinationProviderConfig" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#workspace_id NotificationDestination#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/notification_destination#workspace_id NotificationDestination#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationDestinationConfigAOutputReference <a name="NotificationDestinationConfigAOutputReference" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook">PutGenericWebhook</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams">PutMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty">PutPagerduty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetGenericWebhook">ResetGenericWebhook</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetMicrosoftTeams">ResetMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetPagerduty">ResetPagerduty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmail` <a name="PutEmail" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail"></a>

```csharp
private void PutEmail(NotificationDestinationConfigEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---

##### `PutGenericWebhook` <a name="PutGenericWebhook" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook"></a>

```csharp
private void PutGenericWebhook(NotificationDestinationConfigGenericWebhook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---

##### `PutMicrosoftTeams` <a name="PutMicrosoftTeams" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams"></a>

```csharp
private void PutMicrosoftTeams(NotificationDestinationConfigMicrosoftTeams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---

##### `PutPagerduty` <a name="PutPagerduty" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty"></a>

```csharp
private void PutPagerduty(NotificationDestinationConfigPagerduty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---

##### `PutSlack` <a name="PutSlack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack"></a>

```csharp
private void PutSlack(NotificationDestinationConfigSlack Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---

##### `ResetEmail` <a name="ResetEmail" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetGenericWebhook` <a name="ResetGenericWebhook" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetGenericWebhook"></a>

```csharp
private void ResetGenericWebhook()
```

##### `ResetMicrosoftTeams` <a name="ResetMicrosoftTeams" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetMicrosoftTeams"></a>

```csharp
private void ResetMicrosoftTeams()
```

##### `ResetPagerduty` <a name="ResetPagerduty" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetPagerduty"></a>

```csharp
private void ResetPagerduty()
```

##### `ResetSlack` <a name="ResetSlack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetSlack"></a>

```csharp
private void ResetSlack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.email">Email</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference">NotificationDestinationConfigEmailOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhook">GenericWebhook</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference">NotificationDestinationConfigGenericWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeams">MicrosoftTeams</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference">NotificationDestinationConfigMicrosoftTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerduty">Pagerduty</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference">NotificationDestinationConfigPagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slack">Slack</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference">NotificationDestinationConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.emailInput">EmailInput</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhookInput">GenericWebhookInput</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeamsInput">MicrosoftTeamsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerdutyInput">PagerdutyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slackInput">SlackInput</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.email"></a>

```csharp
public NotificationDestinationConfigEmailOutputReference Email { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference">NotificationDestinationConfigEmailOutputReference</a>

---

##### `GenericWebhook`<sup>Required</sup> <a name="GenericWebhook" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhook"></a>

```csharp
public NotificationDestinationConfigGenericWebhookOutputReference GenericWebhook { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference">NotificationDestinationConfigGenericWebhookOutputReference</a>

---

##### `MicrosoftTeams`<sup>Required</sup> <a name="MicrosoftTeams" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeams"></a>

```csharp
public NotificationDestinationConfigMicrosoftTeamsOutputReference MicrosoftTeams { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference">NotificationDestinationConfigMicrosoftTeamsOutputReference</a>

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerduty"></a>

```csharp
public NotificationDestinationConfigPagerdutyOutputReference Pagerduty { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference">NotificationDestinationConfigPagerdutyOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slack"></a>

```csharp
public NotificationDestinationConfigSlackOutputReference Slack { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference">NotificationDestinationConfigSlackOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.emailInput"></a>

```csharp
public NotificationDestinationConfigEmail EmailInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---

##### `GenericWebhookInput`<sup>Optional</sup> <a name="GenericWebhookInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhookInput"></a>

```csharp
public NotificationDestinationConfigGenericWebhook GenericWebhookInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---

##### `MicrosoftTeamsInput`<sup>Optional</sup> <a name="MicrosoftTeamsInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeamsInput"></a>

```csharp
public NotificationDestinationConfigMicrosoftTeams MicrosoftTeamsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---

##### `PagerdutyInput`<sup>Optional</sup> <a name="PagerdutyInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerdutyInput"></a>

```csharp
public NotificationDestinationConfigPagerduty PagerdutyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slackInput"></a>

```csharp
public NotificationDestinationConfigSlack SlackInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.internalValue"></a>

```csharp
public NotificationDestinationConfigA InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---


### NotificationDestinationConfigEmailOutputReference <a name="NotificationDestinationConfigEmailOutputReference" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resetAddresses">ResetAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddresses` <a name="ResetAddresses" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resetAddresses"></a>

```csharp
private void ResetAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addressesInput">AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addressesInput"></a>

```csharp
public string[] AddressesInput { get; }
```

- *Type:* string[]

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.internalValue"></a>

```csharp
public NotificationDestinationConfigEmail InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---


### NotificationDestinationConfigGenericWebhookOutputReference <a name="NotificationDestinationConfigGenericWebhookOutputReference" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigGenericWebhookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPasswordSet">ResetPasswordSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrlSet">ResetUrlSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsernameSet">ResetUsernameSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPasswordSet` <a name="ResetPasswordSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPasswordSet"></a>

```csharp
private void ResetPasswordSet()
```

##### `ResetUrl` <a name="ResetUrl" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUrlSet` <a name="ResetUrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrlSet"></a>

```csharp
private void ResetUrlSet()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetUsernameSet` <a name="ResetUsernameSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsernameSet"></a>

```csharp
private void ResetUsernameSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSetInput">PasswordSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSetInput">UrlSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSetInput">UsernameSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSet">PasswordSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSet">UrlSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSet">UsernameSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PasswordSetInput`<sup>Optional</sup> <a name="PasswordSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSetInput"></a>

```csharp
public bool|IResolvable PasswordSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UrlSetInput`<sup>Optional</sup> <a name="UrlSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSetInput"></a>

```csharp
public bool|IResolvable UrlSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UsernameSetInput`<sup>Optional</sup> <a name="UsernameSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSetInput"></a>

```csharp
public bool|IResolvable UsernameSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordSet`<sup>Required</sup> <a name="PasswordSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSet"></a>

```csharp
public bool|IResolvable PasswordSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UrlSet`<sup>Required</sup> <a name="UrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSet"></a>

```csharp
public bool|IResolvable UrlSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UsernameSet`<sup>Required</sup> <a name="UsernameSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSet"></a>

```csharp
public bool|IResolvable UsernameSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.internalValue"></a>

```csharp
public NotificationDestinationConfigGenericWebhook InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---


### NotificationDestinationConfigMicrosoftTeamsOutputReference <a name="NotificationDestinationConfigMicrosoftTeamsOutputReference" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigMicrosoftTeamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppId">ResetAppId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppIdSet">ResetAppIdSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecret">ResetAuthSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecretSet">ResetAuthSecretSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrl">ResetChannelUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrlSet">ResetChannelUrlSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantIdSet">ResetTenantIdSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrlSet">ResetUrlSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppId` <a name="ResetAppId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppId"></a>

```csharp
private void ResetAppId()
```

##### `ResetAppIdSet` <a name="ResetAppIdSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppIdSet"></a>

```csharp
private void ResetAppIdSet()
```

##### `ResetAuthSecret` <a name="ResetAuthSecret" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecret"></a>

```csharp
private void ResetAuthSecret()
```

##### `ResetAuthSecretSet` <a name="ResetAuthSecretSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecretSet"></a>

```csharp
private void ResetAuthSecretSet()
```

##### `ResetChannelUrl` <a name="ResetChannelUrl" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrl"></a>

```csharp
private void ResetChannelUrl()
```

##### `ResetChannelUrlSet` <a name="ResetChannelUrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrlSet"></a>

```csharp
private void ResetChannelUrlSet()
```

##### `ResetTenantId` <a name="ResetTenantId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTenantIdSet` <a name="ResetTenantIdSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantIdSet"></a>

```csharp
private void ResetTenantIdSet()
```

##### `ResetUrl` <a name="ResetUrl" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUrlSet` <a name="ResetUrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrlSet"></a>

```csharp
private void ResetUrlSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSetInput">AppIdSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretInput">AuthSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSetInput">AuthSecretSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlInput">ChannelUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSetInput">ChannelUrlSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSetInput">TenantIdSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSetInput">UrlSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSet">AppIdSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecret">AuthSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSet">AuthSecretSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrl">ChannelUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSet">ChannelUrlSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSet">TenantIdSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSet">UrlSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `AppIdSetInput`<sup>Optional</sup> <a name="AppIdSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSetInput"></a>

```csharp
public bool|IResolvable AppIdSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AuthSecretInput`<sup>Optional</sup> <a name="AuthSecretInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretInput"></a>

```csharp
public string AuthSecretInput { get; }
```

- *Type:* string

---

##### `AuthSecretSetInput`<sup>Optional</sup> <a name="AuthSecretSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSetInput"></a>

```csharp
public bool|IResolvable AuthSecretSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ChannelUrlInput`<sup>Optional</sup> <a name="ChannelUrlInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlInput"></a>

```csharp
public string ChannelUrlInput { get; }
```

- *Type:* string

---

##### `ChannelUrlSetInput`<sup>Optional</sup> <a name="ChannelUrlSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSetInput"></a>

```csharp
public bool|IResolvable ChannelUrlSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TenantIdSetInput`<sup>Optional</sup> <a name="TenantIdSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSetInput"></a>

```csharp
public bool|IResolvable TenantIdSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UrlSetInput`<sup>Optional</sup> <a name="UrlSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSetInput"></a>

```csharp
public bool|IResolvable UrlSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppIdSet`<sup>Required</sup> <a name="AppIdSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSet"></a>

```csharp
public bool|IResolvable AppIdSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AuthSecret`<sup>Required</sup> <a name="AuthSecret" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecret"></a>

```csharp
public string AuthSecret { get; }
```

- *Type:* string

---

##### `AuthSecretSet`<sup>Required</sup> <a name="AuthSecretSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSet"></a>

```csharp
public bool|IResolvable AuthSecretSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ChannelUrl`<sup>Required</sup> <a name="ChannelUrl" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrl"></a>

```csharp
public string ChannelUrl { get; }
```

- *Type:* string

---

##### `ChannelUrlSet`<sup>Required</sup> <a name="ChannelUrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSet"></a>

```csharp
public bool|IResolvable ChannelUrlSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TenantIdSet`<sup>Required</sup> <a name="TenantIdSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSet"></a>

```csharp
public bool|IResolvable TenantIdSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UrlSet`<sup>Required</sup> <a name="UrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSet"></a>

```csharp
public bool|IResolvable UrlSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.internalValue"></a>

```csharp
public NotificationDestinationConfigMicrosoftTeams InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---


### NotificationDestinationConfigPagerdutyOutputReference <a name="NotificationDestinationConfigPagerdutyOutputReference" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigPagerdutyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKey">ResetIntegrationKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKeySet">ResetIntegrationKeySet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntegrationKey` <a name="ResetIntegrationKey" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKey"></a>

```csharp
private void ResetIntegrationKey()
```

##### `ResetIntegrationKeySet` <a name="ResetIntegrationKeySet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKeySet"></a>

```csharp
private void ResetIntegrationKeySet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeyInput">IntegrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySetInput">IntegrationKeySetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySet">IntegrationKeySet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntegrationKeyInput`<sup>Optional</sup> <a name="IntegrationKeyInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeyInput"></a>

```csharp
public string IntegrationKeyInput { get; }
```

- *Type:* string

---

##### `IntegrationKeySetInput`<sup>Optional</sup> <a name="IntegrationKeySetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySetInput"></a>

```csharp
public bool|IResolvable IntegrationKeySetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; }
```

- *Type:* string

---

##### `IntegrationKeySet`<sup>Required</sup> <a name="IntegrationKeySet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySet"></a>

```csharp
public bool|IResolvable IntegrationKeySet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.internalValue"></a>

```csharp
public NotificationDestinationConfigPagerduty InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---


### NotificationDestinationConfigSlackOutputReference <a name="NotificationDestinationConfigSlackOutputReference" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationConfigSlackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelIdSet">ResetChannelIdSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthTokenSet">ResetOauthTokenSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrlSet">ResetUrlSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelId` <a name="ResetChannelId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelId"></a>

```csharp
private void ResetChannelId()
```

##### `ResetChannelIdSet` <a name="ResetChannelIdSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelIdSet"></a>

```csharp
private void ResetChannelIdSet()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthToken"></a>

```csharp
private void ResetOauthToken()
```

##### `ResetOauthTokenSet` <a name="ResetOauthTokenSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthTokenSet"></a>

```csharp
private void ResetOauthTokenSet()
```

##### `ResetUrl` <a name="ResetUrl" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUrlSet` <a name="ResetUrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrlSet"></a>

```csharp
private void ResetUrlSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSetInput">ChannelIdSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenInput">OauthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSetInput">OauthTokenSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSetInput">UrlSetInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSet">ChannelIdSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthToken">OauthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSet">OauthTokenSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSet">UrlSet</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `ChannelIdSetInput`<sup>Optional</sup> <a name="ChannelIdSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSetInput"></a>

```csharp
public bool|IResolvable ChannelIdSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenInput"></a>

```csharp
public string OauthTokenInput { get; }
```

- *Type:* string

---

##### `OauthTokenSetInput`<sup>Optional</sup> <a name="OauthTokenSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSetInput"></a>

```csharp
public bool|IResolvable OauthTokenSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UrlSetInput`<sup>Optional</sup> <a name="UrlSetInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSetInput"></a>

```csharp
public bool|IResolvable UrlSetInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `ChannelIdSet`<sup>Required</sup> <a name="ChannelIdSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSet"></a>

```csharp
public bool|IResolvable ChannelIdSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthToken"></a>

```csharp
public string OauthToken { get; }
```

- *Type:* string

---

##### `OauthTokenSet`<sup>Required</sup> <a name="OauthTokenSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSet"></a>

```csharp
public bool|IResolvable OauthTokenSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UrlSet`<sup>Required</sup> <a name="UrlSet" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSet"></a>

```csharp
public bool|IResolvable UrlSet { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.internalValue"></a>

```csharp
public NotificationDestinationConfigSlack InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---


### NotificationDestinationProviderConfigOutputReference <a name="NotificationDestinationProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new NotificationDestinationProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfigOutputReference.property.internalValue"></a>

```csharp
public NotificationDestinationProviderConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.notificationDestination.NotificationDestinationProviderConfig">NotificationDestinationProviderConfig</a>

---



