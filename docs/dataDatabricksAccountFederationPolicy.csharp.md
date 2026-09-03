# `dataDatabricksAccountFederationPolicy` Submodule <a name="`dataDatabricksAccountFederationPolicy` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountFederationPolicy <a name="DataDatabricksAccountFederationPolicy" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy databricks_account_federation_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountFederationPolicy(Construct Scope, string Id, DataDatabricksAccountFederationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig">DataDatabricksAccountFederationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig">DataDatabricksAccountFederationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAccountFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountFederationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountFederationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountFederationPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountFederationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksAccountFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountFederationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference">DataDatabricksAccountFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OidcPolicy`<sup>Required</sup> <a name="OidcPolicy" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.oidcPolicy"></a>

```csharp
public DataDatabricksAccountFederationPolicyOidcPolicyOutputReference OidcPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference">DataDatabricksAccountFederationPolicyOidcPolicyOutputReference</a>

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.servicePrincipalId"></a>

```csharp
public double ServicePrincipalId { get; }
```

- *Type:* double

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountFederationPolicyConfig <a name="DataDatabricksAccountFederationPolicyConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountFederationPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PolicyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#policy_id DataDatabricksAccountFederationPolicy#policy_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#policy_id DataDatabricksAccountFederationPolicy#policy_id}.

---

### DataDatabricksAccountFederationPolicyOidcPolicy <a name="DataDatabricksAccountFederationPolicyOidcPolicy" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountFederationPolicyOidcPolicy {
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
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.audiences">Audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#audiences DataDatabricksAccountFederationPolicy#audiences}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#issuer DataDatabricksAccountFederationPolicy#issuer}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksJson">JwksJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#jwks_json DataDatabricksAccountFederationPolicy#jwks_json}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksUri">JwksUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#jwks_uri DataDatabricksAccountFederationPolicy#jwks_uri}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#subject DataDatabricksAccountFederationPolicy#subject}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#subject_claim DataDatabricksAccountFederationPolicy#subject_claim}. |

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.audiences"></a>

```csharp
public string[] Audiences { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#audiences DataDatabricksAccountFederationPolicy#audiences}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#issuer DataDatabricksAccountFederationPolicy#issuer}.

---

##### `JwksJson`<sup>Optional</sup> <a name="JwksJson" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksJson"></a>

```csharp
public string JwksJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#jwks_json DataDatabricksAccountFederationPolicy#jwks_json}.

---

##### `JwksUri`<sup>Optional</sup> <a name="JwksUri" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.jwksUri"></a>

```csharp
public string JwksUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#jwks_uri DataDatabricksAccountFederationPolicy#jwks_uri}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#subject DataDatabricksAccountFederationPolicy#subject}.

---

##### `SubjectClaim`<sup>Optional</sup> <a name="SubjectClaim" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_federation_policy#subject_claim DataDatabricksAccountFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountFederationPolicyOidcPolicyOutputReference <a name="DataDatabricksAccountFederationPolicyOidcPolicyOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountFederationPolicyOidcPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksJson">ResetJwksJson</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksUri">ResetJwksUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">ResetSubjectClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudiences` <a name="ResetAudiences" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```csharp
private void ResetAudiences()
```

##### `ResetIssuer` <a name="ResetIssuer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetJwksJson` <a name="ResetJwksJson" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```csharp
private void ResetJwksJson()
```

##### `ResetJwksUri` <a name="ResetJwksUri" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```csharp
private void ResetJwksUri()
```

##### `ResetSubject` <a name="ResetSubject" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetSubjectClaim` <a name="ResetSubjectClaim" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```csharp
private void ResetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">JwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">JwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">SubjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJson">JwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUri">JwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```csharp
public string[] AudiencesInput { get; }
```

- *Type:* string[]

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `JwksJsonInput`<sup>Optional</sup> <a name="JwksJsonInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```csharp
public string JwksJsonInput { get; }
```

- *Type:* string

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```csharp
public string JwksUriInput { get; }
```

- *Type:* string

---

##### `SubjectClaimInput`<sup>Optional</sup> <a name="SubjectClaimInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```csharp
public string SubjectClaimInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```csharp
public string JwksJson { get; }
```

- *Type:* string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```csharp
public string JwksUri { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAccountFederationPolicyOidcPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountFederationPolicy.DataDatabricksAccountFederationPolicyOidcPolicy">DataDatabricksAccountFederationPolicyOidcPolicy</a>

---



