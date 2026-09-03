# `servicePrincipalFederationPolicy` Submodule <a name="`servicePrincipalFederationPolicy` Submodule" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalFederationPolicy <a name="ServicePrincipalFederationPolicy" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy databricks_service_principal_federation_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ServicePrincipalFederationPolicy(Construct Scope, string Id, ServicePrincipalFederationPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig">ServicePrincipalFederationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig">ServicePrincipalFederationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy">PutOidcPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOidcPolicy">ResetOidcPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetServicePrincipalId">ResetServicePrincipalId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOidcPolicy` <a name="PutOidcPolicy" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy"></a>

```csharp
private void PutOidcPolicy(ServicePrincipalFederationPolicyOidcPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetOidcPolicy` <a name="ResetOidcPolicy" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOidcPolicy"></a>

```csharp
private void ResetOidcPolicy()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetServicePrincipalId` <a name="ResetServicePrincipalId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetServicePrincipalId"></a>

```csharp
private void ResetServicePrincipalId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

ServicePrincipalFederationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

ServicePrincipalFederationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

ServicePrincipalFederationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

ServicePrincipalFederationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicePrincipalFederationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicePrincipalFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference">ServicePrincipalFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicyInput">OidcPolicyInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OidcPolicy`<sup>Required</sup> <a name="OidcPolicy" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicy"></a>

```csharp
public ServicePrincipalFederationPolicyOidcPolicyOutputReference OidcPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference">ServicePrincipalFederationPolicyOidcPolicyOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `OidcPolicyInput`<sup>Optional</sup> <a name="OidcPolicyInput" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicyInput"></a>

```csharp
public IResolvable|ServicePrincipalFederationPolicyOidcPolicy OidcPolicyInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalIdInput"></a>

```csharp
public double ServicePrincipalIdInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalId"></a>

```csharp
public double ServicePrincipalId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalFederationPolicyConfig <a name="ServicePrincipalFederationPolicyConfig" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ServicePrincipalFederationPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description = null,
    ServicePrincipalFederationPolicyOidcPolicy OidcPolicy = null,
    string PolicyId = null,
    double ServicePrincipalId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#description ServicePrincipalFederationPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#oidc_policy ServicePrincipalFederationPolicy#oidc_policy}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#policy_id ServicePrincipalFederationPolicy#policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#service_principal_id ServicePrincipalFederationPolicy#service_principal_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#description ServicePrincipalFederationPolicy#description}.

---

##### `OidcPolicy`<sup>Optional</sup> <a name="OidcPolicy" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.oidcPolicy"></a>

```csharp
public ServicePrincipalFederationPolicyOidcPolicy OidcPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#oidc_policy ServicePrincipalFederationPolicy#oidc_policy}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#policy_id ServicePrincipalFederationPolicy#policy_id}.

---

##### `ServicePrincipalId`<sup>Optional</sup> <a name="ServicePrincipalId" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.servicePrincipalId"></a>

```csharp
public double ServicePrincipalId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#service_principal_id ServicePrincipalFederationPolicy#service_principal_id}.

---

### ServicePrincipalFederationPolicyOidcPolicy <a name="ServicePrincipalFederationPolicyOidcPolicy" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ServicePrincipalFederationPolicyOidcPolicy {
    string[] Audiences = null,
    string Issuer = null,
    string JwksJson = null,
    string JwksUri = null,
    string Subject = null,
    string SubjectClaim = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.audiences">Audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#audiences ServicePrincipalFederationPolicy#audiences}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#issuer ServicePrincipalFederationPolicy#issuer}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksJson">JwksJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#jwks_json ServicePrincipalFederationPolicy#jwks_json}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksUri">JwksUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#jwks_uri ServicePrincipalFederationPolicy#jwks_uri}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#subject ServicePrincipalFederationPolicy#subject}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#subject_claim ServicePrincipalFederationPolicy#subject_claim}. |

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.audiences"></a>

```csharp
public string[] Audiences { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#audiences ServicePrincipalFederationPolicy#audiences}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#issuer ServicePrincipalFederationPolicy#issuer}.

---

##### `JwksJson`<sup>Optional</sup> <a name="JwksJson" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksJson"></a>

```csharp
public string JwksJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#jwks_json ServicePrincipalFederationPolicy#jwks_json}.

---

##### `JwksUri`<sup>Optional</sup> <a name="JwksUri" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksUri"></a>

```csharp
public string JwksUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#jwks_uri ServicePrincipalFederationPolicy#jwks_uri}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#subject ServicePrincipalFederationPolicy#subject}.

---

##### `SubjectClaim`<sup>Optional</sup> <a name="SubjectClaim" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/service_principal_federation_policy#subject_claim ServicePrincipalFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalFederationPolicyOidcPolicyOutputReference <a name="ServicePrincipalFederationPolicyOidcPolicyOutputReference" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ServicePrincipalFederationPolicyOidcPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson">ResetJwksJson</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri">ResetJwksUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">ResetSubjectClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudiences` <a name="ResetAudiences" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```csharp
private void ResetAudiences()
```

##### `ResetIssuer` <a name="ResetIssuer" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetJwksJson` <a name="ResetJwksJson" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```csharp
private void ResetJwksJson()
```

##### `ResetJwksUri` <a name="ResetJwksUri" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```csharp
private void ResetJwksUri()
```

##### `ResetSubject` <a name="ResetSubject" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetSubjectClaim` <a name="ResetSubjectClaim" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```csharp
private void ResetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">JwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">JwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">SubjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson">JwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri">JwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```csharp
public string[] AudiencesInput { get; }
```

- *Type:* string[]

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `JwksJsonInput`<sup>Optional</sup> <a name="JwksJsonInput" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```csharp
public string JwksJsonInput { get; }
```

- *Type:* string

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```csharp
public string JwksUriInput { get; }
```

- *Type:* string

---

##### `SubjectClaimInput`<sup>Optional</sup> <a name="SubjectClaimInput" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```csharp
public string SubjectClaimInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```csharp
public string JwksJson { get; }
```

- *Type:* string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```csharp
public string JwksUri { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicePrincipalFederationPolicyOidcPolicy InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

---



