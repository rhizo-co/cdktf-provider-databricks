# `accountIamServicePrincipalV2` Submodule <a name="`accountIamServicePrincipalV2` Submodule" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountIamServicePrincipalV2 <a name="AccountIamServicePrincipalV2" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_iam_service_principal_v2 databricks_account_iam_service_principal_v2}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountIamServicePrincipalV2(Construct Scope, string Id, AccountIamServicePrincipalV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config">AccountIamServicePrincipalV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config">AccountIamServicePrincipalV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.resetExternalId">ResetExternalId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApplicationId` <a name="ResetApplicationId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetExternalId` <a name="ResetExternalId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccountIamServicePrincipalV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountIamServicePrincipalV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountIamServicePrincipalV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountIamServicePrincipalV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountIamServicePrincipalV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccountIamServicePrincipalV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountIamServicePrincipalV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountIamServicePrincipalV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_iam_service_principal_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccountIamServicePrincipalV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.accountSpStatusInput">AccountSpStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.accountSpStatus">AccountSpStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; }
```

- *Type:* string

---

##### `AccountSpStatusInput`<sup>Optional</sup> <a name="AccountSpStatusInput" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.accountSpStatusInput"></a>

```csharp
public string AccountSpStatusInput { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `AccountSpStatus`<sup>Required</sup> <a name="AccountSpStatus" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.accountSpStatus"></a>

```csharp
public string AccountSpStatus { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountIamServicePrincipalV2Config <a name="AccountIamServicePrincipalV2Config" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountIamServicePrincipalV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountSpStatus,
    string DisplayName,
    string ApplicationId = null,
    string ExternalId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.accountSpStatus">AccountSpStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_iam_service_principal_v2#account_sp_status AccountIamServicePrincipalV2#account_sp_status}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_iam_service_principal_v2#display_name AccountIamServicePrincipalV2#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_iam_service_principal_v2#application_id AccountIamServicePrincipalV2#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_iam_service_principal_v2#external_id AccountIamServicePrincipalV2#external_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountSpStatus`<sup>Required</sup> <a name="AccountSpStatus" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.accountSpStatus"></a>

```csharp
public string AccountSpStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_iam_service_principal_v2#account_sp_status AccountIamServicePrincipalV2#account_sp_status}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_iam_service_principal_v2#display_name AccountIamServicePrincipalV2#display_name}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_iam_service_principal_v2#application_id AccountIamServicePrincipalV2#application_id}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-databricks.accountIamServicePrincipalV2.AccountIamServicePrincipalV2Config.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_iam_service_principal_v2#external_id AccountIamServicePrincipalV2#external_id}.

---



