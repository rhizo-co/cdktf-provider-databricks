# `dataDatabricksAccountIamUserV2` Submodule <a name="`dataDatabricksAccountIamUserV2` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamUserV2 <a name="DataDatabricksAccountIamUserV2" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_user_v2 databricks_account_iam_user_v2}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountIamUserV2(Construct Scope, string Id, DataDatabricksAccountIamUserV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config">DataDatabricksAccountIamUserV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config">DataDatabricksAccountIamUserV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAccountIamUserV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountIamUserV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountIamUserV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountIamUserV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountIamUserV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksAccountIamUserV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountIamUserV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountIamUserV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_user_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamUserV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.accountUserStatus">AccountUserStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.fullName">FullName</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference">DataDatabricksAccountIamUserV2FullNameOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountUserStatus`<sup>Required</sup> <a name="AccountUserStatus" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.accountUserStatus"></a>

```csharp
public string AccountUserStatus { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.fullName"></a>

```csharp
public DataDatabricksAccountIamUserV2FullNameOutputReference FullName { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference">DataDatabricksAccountIamUserV2FullNameOutputReference</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamUserV2Config <a name="DataDatabricksAccountIamUserV2Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountIamUserV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string UserId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_user_v2#user_id DataDatabricksAccountIamUserV2#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2Config.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_user_v2#user_id DataDatabricksAccountIamUserV2#user_id}.

---

### DataDatabricksAccountIamUserV2FullName <a name="DataDatabricksAccountIamUserV2FullName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountIamUserV2FullName {
    string FamilyName = null,
    string GivenName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullName.property.familyName">FamilyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_user_v2#family_name DataDatabricksAccountIamUserV2#family_name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullName.property.givenName">GivenName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_user_v2#given_name DataDatabricksAccountIamUserV2#given_name}. |

---

##### `FamilyName`<sup>Optional</sup> <a name="FamilyName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullName.property.familyName"></a>

```csharp
public string FamilyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_user_v2#family_name DataDatabricksAccountIamUserV2#family_name}.

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullName.property.givenName"></a>

```csharp
public string GivenName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_user_v2#given_name DataDatabricksAccountIamUserV2#given_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamUserV2FullNameOutputReference <a name="DataDatabricksAccountIamUserV2FullNameOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountIamUserV2FullNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.resetFamilyName">ResetFamilyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.resetGivenName">ResetGivenName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFamilyName` <a name="ResetFamilyName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.resetFamilyName"></a>

```csharp
private void ResetFamilyName()
```

##### `ResetGivenName` <a name="ResetGivenName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.resetGivenName"></a>

```csharp
private void ResetGivenName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.familyNameInput">FamilyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.givenNameInput">GivenNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.familyName">FamilyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullName">DataDatabricksAccountIamUserV2FullName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyNameInput`<sup>Optional</sup> <a name="FamilyNameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.familyNameInput"></a>

```csharp
public string FamilyNameInput { get; }
```

- *Type:* string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.givenNameInput"></a>

```csharp
public string GivenNameInput { get; }
```

- *Type:* string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.familyName"></a>

```csharp
public string FamilyName { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullNameOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAccountIamUserV2FullName InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamUserV2.DataDatabricksAccountIamUserV2FullName">DataDatabricksAccountIamUserV2FullName</a>

---



