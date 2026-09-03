# `dataDatabricksDisasterRecoveryStableUrls` Submodule <a name="`dataDatabricksDisasterRecoveryStableUrls` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDisasterRecoveryStableUrls <a name="DataDatabricksDisasterRecoveryStableUrls" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_urls databricks_disaster_recovery_stable_urls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDisasterRecoveryStableUrls(Construct Scope, string Id, DataDatabricksDisasterRecoveryStableUrlsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig">DataDatabricksDisasterRecoveryStableUrlsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig">DataDatabricksDisasterRecoveryStableUrlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPageSize` <a name="ResetPageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDisasterRecoveryStableUrls resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDisasterRecoveryStableUrls.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDisasterRecoveryStableUrls.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDisasterRecoveryStableUrls.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDisasterRecoveryStableUrls.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksDisasterRecoveryStableUrls resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDisasterRecoveryStableUrls to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDisasterRecoveryStableUrls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_urls#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDisasterRecoveryStableUrls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.stableUrls">StableUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList">DataDatabricksDisasterRecoveryStableUrlsStableUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `StableUrls`<sup>Required</sup> <a name="StableUrls" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.stableUrls"></a>

```csharp
public DataDatabricksDisasterRecoveryStableUrlsStableUrlsList StableUrls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList">DataDatabricksDisasterRecoveryStableUrlsStableUrlsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDisasterRecoveryStableUrlsConfig <a name="DataDatabricksDisasterRecoveryStableUrlsConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDisasterRecoveryStableUrlsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    double PageSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_urls#parent DataDatabricksDisasterRecoveryStableUrls#parent}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_urls#page_size DataDatabricksDisasterRecoveryStableUrls#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_urls#parent DataDatabricksDisasterRecoveryStableUrls#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_urls#page_size DataDatabricksDisasterRecoveryStableUrls#page_size}.

---

### DataDatabricksDisasterRecoveryStableUrlsStableUrls <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrls" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDisasterRecoveryStableUrlsStableUrls {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_urls#name DataDatabricksDisasterRecoveryStableUrls#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_urls#name DataDatabricksDisasterRecoveryStableUrls#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDisasterRecoveryStableUrlsStableUrlsList <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrlsList" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDisasterRecoveryStableUrlsStableUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get"></a>

```csharp
private DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDisasterRecoveryStableUrlsStableUrls[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a>[]

---


### DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.effectiveWorkspaceId">EffectiveWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.failoverGroupName">FailoverGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.initialWorkspaceId">InitialWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.stableWorkspaceId">StableWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveWorkspaceId`<sup>Required</sup> <a name="EffectiveWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.effectiveWorkspaceId"></a>

```csharp
public string EffectiveWorkspaceId { get; }
```

- *Type:* string

---

##### `FailoverGroupName`<sup>Required</sup> <a name="FailoverGroupName" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.failoverGroupName"></a>

```csharp
public string FailoverGroupName { get; }
```

- *Type:* string

---

##### `InitialWorkspaceId`<sup>Required</sup> <a name="InitialWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.initialWorkspaceId"></a>

```csharp
public string InitialWorkspaceId { get; }
```

- *Type:* string

---

##### `StableWorkspaceId`<sup>Required</sup> <a name="StableWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.stableWorkspaceId"></a>

```csharp
public string StableWorkspaceId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDisasterRecoveryStableUrlsStableUrls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a>

---



