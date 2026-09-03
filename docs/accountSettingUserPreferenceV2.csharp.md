# `accountSettingUserPreferenceV2` Submodule <a name="`accountSettingUserPreferenceV2` Submodule" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountSettingUserPreferenceV2 <a name="AccountSettingUserPreferenceV2" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2 databricks_account_setting_user_preference_v2}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountSettingUserPreferenceV2(Construct Scope, string Id, AccountSettingUserPreferenceV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config">AccountSettingUserPreferenceV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config">AccountSettingUserPreferenceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putBooleanVal">PutBooleanVal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putStringVal">PutStringVal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetBooleanVal">ResetBooleanVal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetStringVal">ResetStringVal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBooleanVal` <a name="PutBooleanVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putBooleanVal"></a>

```csharp
private void PutBooleanVal(AccountSettingUserPreferenceV2BooleanVal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putBooleanVal.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal">AccountSettingUserPreferenceV2BooleanVal</a>

---

##### `PutStringVal` <a name="PutStringVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putStringVal"></a>

```csharp
private void PutStringVal(AccountSettingUserPreferenceV2StringVal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.putStringVal.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal">AccountSettingUserPreferenceV2StringVal</a>

---

##### `ResetBooleanVal` <a name="ResetBooleanVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetBooleanVal"></a>

```csharp
private void ResetBooleanVal()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStringVal` <a name="ResetStringVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetStringVal"></a>

```csharp
private void ResetStringVal()
```

##### `ResetUserId` <a name="ResetUserId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.resetUserId"></a>

```csharp
private void ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccountSettingUserPreferenceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountSettingUserPreferenceV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountSettingUserPreferenceV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountSettingUserPreferenceV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountSettingUserPreferenceV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccountSettingUserPreferenceV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountSettingUserPreferenceV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountSettingUserPreferenceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccountSettingUserPreferenceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.booleanVal">BooleanVal</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference">AccountSettingUserPreferenceV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.effectiveBooleanVal">EffectiveBooleanVal</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.effectiveStringVal">EffectiveStringVal</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference">AccountSettingUserPreferenceV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.stringVal">StringVal</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference">AccountSettingUserPreferenceV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.booleanValInput">BooleanValInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal">AccountSettingUserPreferenceV2BooleanVal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.stringValInput">StringValInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal">AccountSettingUserPreferenceV2StringVal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BooleanVal`<sup>Required</sup> <a name="BooleanVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.booleanVal"></a>

```csharp
public AccountSettingUserPreferenceV2BooleanValOutputReference BooleanVal { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference">AccountSettingUserPreferenceV2BooleanValOutputReference</a>

---

##### `EffectiveBooleanVal`<sup>Required</sup> <a name="EffectiveBooleanVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.effectiveBooleanVal"></a>

```csharp
public AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference EffectiveBooleanVal { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a>

---

##### `EffectiveStringVal`<sup>Required</sup> <a name="EffectiveStringVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.effectiveStringVal"></a>

```csharp
public AccountSettingUserPreferenceV2EffectiveStringValOutputReference EffectiveStringVal { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference">AccountSettingUserPreferenceV2EffectiveStringValOutputReference</a>

---

##### `StringVal`<sup>Required</sup> <a name="StringVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.stringVal"></a>

```csharp
public AccountSettingUserPreferenceV2StringValOutputReference StringVal { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference">AccountSettingUserPreferenceV2StringValOutputReference</a>

---

##### `BooleanValInput`<sup>Optional</sup> <a name="BooleanValInput" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.booleanValInput"></a>

```csharp
public IResolvable|AccountSettingUserPreferenceV2BooleanVal BooleanValInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal">AccountSettingUserPreferenceV2BooleanVal</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StringValInput`<sup>Optional</sup> <a name="StringValInput" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.stringValInput"></a>

```csharp
public IResolvable|AccountSettingUserPreferenceV2StringVal StringValInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal">AccountSettingUserPreferenceV2StringVal</a>

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountSettingUserPreferenceV2BooleanVal <a name="AccountSettingUserPreferenceV2BooleanVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountSettingUserPreferenceV2BooleanVal {
    bool|IResolvable Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal.property.value">Value</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal.property.value"></a>

```csharp
public bool|IResolvable Value { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}.

---

### AccountSettingUserPreferenceV2Config <a name="AccountSettingUserPreferenceV2Config" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountSettingUserPreferenceV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    AccountSettingUserPreferenceV2BooleanVal BooleanVal = null,
    string Name = null,
    AccountSettingUserPreferenceV2StringVal StringVal = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.booleanVal">BooleanVal</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal">AccountSettingUserPreferenceV2BooleanVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#boolean_val AccountSettingUserPreferenceV2#boolean_val}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#name AccountSettingUserPreferenceV2#name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.stringVal">StringVal</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal">AccountSettingUserPreferenceV2StringVal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#string_val AccountSettingUserPreferenceV2#string_val}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#user_id AccountSettingUserPreferenceV2#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BooleanVal`<sup>Optional</sup> <a name="BooleanVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.booleanVal"></a>

```csharp
public AccountSettingUserPreferenceV2BooleanVal BooleanVal { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal">AccountSettingUserPreferenceV2BooleanVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#boolean_val AccountSettingUserPreferenceV2#boolean_val}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#name AccountSettingUserPreferenceV2#name}.

---

##### `StringVal`<sup>Optional</sup> <a name="StringVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.stringVal"></a>

```csharp
public AccountSettingUserPreferenceV2StringVal StringVal { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal">AccountSettingUserPreferenceV2StringVal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#string_val AccountSettingUserPreferenceV2#string_val}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2Config.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#user_id AccountSettingUserPreferenceV2#user_id}.

---

### AccountSettingUserPreferenceV2EffectiveBooleanVal <a name="AccountSettingUserPreferenceV2EffectiveBooleanVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountSettingUserPreferenceV2EffectiveBooleanVal {
    bool|IResolvable Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal.property.value">Value</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal.property.value"></a>

```csharp
public bool|IResolvable Value { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}.

---

### AccountSettingUserPreferenceV2EffectiveStringVal <a name="AccountSettingUserPreferenceV2EffectiveStringVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountSettingUserPreferenceV2EffectiveStringVal {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}.

---

### AccountSettingUserPreferenceV2StringVal <a name="AccountSettingUserPreferenceV2StringVal" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountSettingUserPreferenceV2StringVal {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/account_setting_user_preference_v2#value AccountSettingUserPreferenceV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountSettingUserPreferenceV2BooleanValOutputReference <a name="AccountSettingUserPreferenceV2BooleanValOutputReference" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountSettingUserPreferenceV2BooleanValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput">ValueInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.value">Value</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal">AccountSettingUserPreferenceV2BooleanVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput"></a>

```csharp
public bool|IResolvable ValueInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.value"></a>

```csharp
public bool|IResolvable Value { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AccountSettingUserPreferenceV2BooleanVal InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2BooleanVal">AccountSettingUserPreferenceV2BooleanVal</a>

---


### AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference <a name="AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput">ValueInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value">Value</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal">AccountSettingUserPreferenceV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```csharp
public bool|IResolvable ValueInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value"></a>

```csharp
public bool|IResolvable Value { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```csharp
public AccountSettingUserPreferenceV2EffectiveBooleanVal InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveBooleanVal">AccountSettingUserPreferenceV2EffectiveBooleanVal</a>

---


### AccountSettingUserPreferenceV2EffectiveStringValOutputReference <a name="AccountSettingUserPreferenceV2EffectiveStringValOutputReference" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountSettingUserPreferenceV2EffectiveStringValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal">AccountSettingUserPreferenceV2EffectiveStringVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue"></a>

```csharp
public AccountSettingUserPreferenceV2EffectiveStringVal InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2EffectiveStringVal">AccountSettingUserPreferenceV2EffectiveStringVal</a>

---


### AccountSettingUserPreferenceV2StringValOutputReference <a name="AccountSettingUserPreferenceV2StringValOutputReference" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountSettingUserPreferenceV2StringValOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal">AccountSettingUserPreferenceV2StringVal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringValOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AccountSettingUserPreferenceV2StringVal InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.accountSettingUserPreferenceV2.AccountSettingUserPreferenceV2StringVal">AccountSettingUserPreferenceV2StringVal</a>

---



