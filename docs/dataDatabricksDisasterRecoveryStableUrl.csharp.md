# `dataDatabricksDisasterRecoveryStableUrl` Submodule <a name="`dataDatabricksDisasterRecoveryStableUrl` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDisasterRecoveryStableUrl <a name="DataDatabricksDisasterRecoveryStableUrl" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_url databricks_disaster_recovery_stable_url}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDisasterRecoveryStableUrl(Construct Scope, string Id, DataDatabricksDisasterRecoveryStableUrlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig">DataDatabricksDisasterRecoveryStableUrlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig">DataDatabricksDisasterRecoveryStableUrlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDisasterRecoveryStableUrl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDisasterRecoveryStableUrl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDisasterRecoveryStableUrl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDisasterRecoveryStableUrl.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDisasterRecoveryStableUrl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksDisasterRecoveryStableUrl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDisasterRecoveryStableUrl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDisasterRecoveryStableUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_url#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDisasterRecoveryStableUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.effectiveWorkspaceId">EffectiveWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.failoverGroupName">FailoverGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.initialWorkspaceId">InitialWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.stableWorkspaceId">StableWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EffectiveWorkspaceId`<sup>Required</sup> <a name="EffectiveWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.effectiveWorkspaceId"></a>

```csharp
public string EffectiveWorkspaceId { get; }
```

- *Type:* string

---

##### `FailoverGroupName`<sup>Required</sup> <a name="FailoverGroupName" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.failoverGroupName"></a>

```csharp
public string FailoverGroupName { get; }
```

- *Type:* string

---

##### `InitialWorkspaceId`<sup>Required</sup> <a name="InitialWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.initialWorkspaceId"></a>

```csharp
public string InitialWorkspaceId { get; }
```

- *Type:* string

---

##### `StableWorkspaceId`<sup>Required</sup> <a name="StableWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.stableWorkspaceId"></a>

```csharp
public string StableWorkspaceId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDisasterRecoveryStableUrlConfig <a name="DataDatabricksDisasterRecoveryStableUrlConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDisasterRecoveryStableUrlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_url#name DataDatabricksDisasterRecoveryStableUrl#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksDisasterRecoveryStableUrl.DataDatabricksDisasterRecoveryStableUrlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/disaster_recovery_stable_url#name DataDatabricksDisasterRecoveryStableUrl#name}.

---



