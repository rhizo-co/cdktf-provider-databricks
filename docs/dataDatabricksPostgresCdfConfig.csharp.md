# `dataDatabricksPostgresCdfConfig` Submodule <a name="`dataDatabricksPostgresCdfConfig` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresCdfConfig <a name="DataDatabricksPostgresCdfConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_cdf_config databricks_postgres_cdf_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresCdfConfig(Construct Scope, string Id, DataDatabricksPostgresCdfConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig">DataDatabricksPostgresCdfConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig">DataDatabricksPostgresCdfConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksPostgresCdfConfigProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig">DataDatabricksPostgresCdfConfigProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksPostgresCdfConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPostgresCdfConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPostgresCdfConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPostgresCdfConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPostgresCdfConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksPostgresCdfConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresCdfConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresCdfConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_cdf_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresCdfConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.cdfConfigId">CdfConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.postgresSchema">PostgresSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference">DataDatabricksPostgresCdfConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.providerConfigInput">ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig">DataDatabricksPostgresCdfConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `CdfConfigId`<sup>Required</sup> <a name="CdfConfigId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.cdfConfigId"></a>

```csharp
public string CdfConfigId { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `PostgresSchema`<sup>Required</sup> <a name="PostgresSchema" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.postgresSchema"></a>

```csharp
public string PostgresSchema { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresCdfConfigProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference">DataDatabricksPostgresCdfConfigProviderConfigOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresCdfConfigProviderConfig ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig">DataDatabricksPostgresCdfConfigProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresCdfConfigConfig <a name="DataDatabricksPostgresCdfConfigConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresCdfConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksPostgresCdfConfigProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_cdf_config#name DataDatabricksPostgresCdfConfig#name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig">DataDatabricksPostgresCdfConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_cdf_config#provider_config DataDatabricksPostgresCdfConfig#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_cdf_config#name DataDatabricksPostgresCdfConfig#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigConfig.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresCdfConfigProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig">DataDatabricksPostgresCdfConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_cdf_config#provider_config DataDatabricksPostgresCdfConfig#provider_config}.

---

### DataDatabricksPostgresCdfConfigProviderConfig <a name="DataDatabricksPostgresCdfConfigProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresCdfConfigProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_cdf_config#workspace_id DataDatabricksPostgresCdfConfig#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_cdf_config#workspace_id DataDatabricksPostgresCdfConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresCdfConfigProviderConfigOutputReference <a name="DataDatabricksPostgresCdfConfigProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresCdfConfigProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig">DataDatabricksPostgresCdfConfigProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresCdfConfigProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresCdfConfig.DataDatabricksPostgresCdfConfigProviderConfig">DataDatabricksPostgresCdfConfigProviderConfig</a>

---



