# `dataDatabricksAiSearchIndexes` Submodule <a name="`dataDatabricksAiSearchIndexes` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiSearchIndexes <a name="DataDatabricksAiSearchIndexes" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes databricks_ai_search_indexes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexes(Construct Scope, string Id, DataDatabricksAiSearchIndexesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig">DataDatabricksAiSearchIndexesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig">DataDatabricksAiSearchIndexesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAiSearchIndexesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAiSearchIndexes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAiSearchIndexes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAiSearchIndexes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAiSearchIndexes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAiSearchIndexes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksAiSearchIndexes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAiSearchIndexes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAiSearchIndexes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiSearchIndexes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.indexes">Indexes</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList">DataDatabricksAiSearchIndexesIndexesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference">DataDatabricksAiSearchIndexesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.providerConfigInput">ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Indexes`<sup>Required</sup> <a name="Indexes" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.indexes"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesList Indexes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList">DataDatabricksAiSearchIndexesIndexesList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.providerConfig"></a>

```csharp
public DataDatabricksAiSearchIndexesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference">DataDatabricksAiSearchIndexesProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesProviderConfig ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiSearchIndexesConfig <a name="DataDatabricksAiSearchIndexesConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    double PageSize = null,
    DataDatabricksAiSearchIndexesProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#parent DataDatabricksAiSearchIndexes#parent}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#page_size DataDatabricksAiSearchIndexes#page_size}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#provider_config DataDatabricksAiSearchIndexes#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#parent DataDatabricksAiSearchIndexes#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#page_size DataDatabricksAiSearchIndexes#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesConfig.property.providerConfig"></a>

```csharp
public DataDatabricksAiSearchIndexesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#provider_config DataDatabricksAiSearchIndexes#provider_config}.

---

### DataDatabricksAiSearchIndexesIndexes <a name="DataDatabricksAiSearchIndexesIndexes" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexes {
    string Name,
    DataDatabricksAiSearchIndexesIndexesProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#provider_config DataDatabricksAiSearchIndexes#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes.property.providerConfig"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#provider_config DataDatabricksAiSearchIndexes#provider_config}.

---

### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec {
    string PipelineType,
    string[] ColumnsToSync = null,
    IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns = null,
    IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns = null,
    string EmbeddingWritebackTable = null,
    string SourceTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.pipelineType">PipelineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#pipeline_type DataDatabricksAiSearchIndexes#pipeline_type}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.columnsToSync">ColumnsToSync</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#columns_to_sync DataDatabricksAiSearchIndexes#columns_to_sync}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_source_columns DataDatabricksAiSearchIndexes#embedding_source_columns}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_vector_columns DataDatabricksAiSearchIndexes#embedding_vector_columns}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingWritebackTable">EmbeddingWritebackTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_writeback_table DataDatabricksAiSearchIndexes#embedding_writeback_table}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.sourceTable">SourceTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#source_table DataDatabricksAiSearchIndexes#source_table}. |

---

##### `PipelineType`<sup>Required</sup> <a name="PipelineType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.pipelineType"></a>

```csharp
public string PipelineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#pipeline_type DataDatabricksAiSearchIndexes#pipeline_type}.

---

##### `ColumnsToSync`<sup>Optional</sup> <a name="ColumnsToSync" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.columnsToSync"></a>

```csharp
public string[] ColumnsToSync { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#columns_to_sync DataDatabricksAiSearchIndexes#columns_to_sync}.

---

##### `EmbeddingSourceColumns`<sup>Optional</sup> <a name="EmbeddingSourceColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_source_columns DataDatabricksAiSearchIndexes#embedding_source_columns}.

---

##### `EmbeddingVectorColumns`<sup>Optional</sup> <a name="EmbeddingVectorColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_vector_columns DataDatabricksAiSearchIndexes#embedding_vector_columns}.

---

##### `EmbeddingWritebackTable`<sup>Optional</sup> <a name="EmbeddingWritebackTable" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```csharp
public string EmbeddingWritebackTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_writeback_table DataDatabricksAiSearchIndexes#embedding_writeback_table}.

---

##### `SourceTable`<sup>Optional</sup> <a name="SourceTable" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec.property.sourceTable"></a>

```csharp
public string SourceTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#source_table DataDatabricksAiSearchIndexes#source_table}.

---

### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns {
    string EmbeddingModelEndpoint = null,
    string ModelEndpointNameForQuery = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_model_endpoint DataDatabricksAiSearchIndexes#embedding_model_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#model_endpoint_name_for_query DataDatabricksAiSearchIndexes#model_endpoint_name_for_query}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}. |

---

##### `EmbeddingModelEndpoint`<sup>Optional</sup> <a name="EmbeddingModelEndpoint" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_model_endpoint DataDatabricksAiSearchIndexes#embedding_model_endpoint}.

---

##### `ModelEndpointNameForQuery`<sup>Optional</sup> <a name="ModelEndpointNameForQuery" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#model_endpoint_name_for_query DataDatabricksAiSearchIndexes#model_endpoint_name_for_query}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}.

---

### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns {
    double EmbeddingDimension = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_dimension DataDatabricksAiSearchIndexes#embedding_dimension}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}. |

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_dimension DataDatabricksAiSearchIndexes#embedding_dimension}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}.

---

### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec {
    IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns = null,
    IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns = null,
    string SchemaJson = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_source_columns DataDatabricksAiSearchIndexes#embedding_source_columns}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_vector_columns DataDatabricksAiSearchIndexes#embedding_vector_columns}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.schemaJson">SchemaJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#schema_json DataDatabricksAiSearchIndexes#schema_json}. |

---

##### `EmbeddingSourceColumns`<sup>Optional</sup> <a name="EmbeddingSourceColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_source_columns DataDatabricksAiSearchIndexes#embedding_source_columns}.

---

##### `EmbeddingVectorColumns`<sup>Optional</sup> <a name="EmbeddingVectorColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_vector_columns DataDatabricksAiSearchIndexes#embedding_vector_columns}.

---

##### `SchemaJson`<sup>Optional</sup> <a name="SchemaJson" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec.property.schemaJson"></a>

```csharp
public string SchemaJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#schema_json DataDatabricksAiSearchIndexes#schema_json}.

---

### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns {
    string EmbeddingModelEndpoint = null,
    string ModelEndpointNameForQuery = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_model_endpoint DataDatabricksAiSearchIndexes#embedding_model_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#model_endpoint_name_for_query DataDatabricksAiSearchIndexes#model_endpoint_name_for_query}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}. |

---

##### `EmbeddingModelEndpoint`<sup>Optional</sup> <a name="EmbeddingModelEndpoint" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_model_endpoint DataDatabricksAiSearchIndexes#embedding_model_endpoint}.

---

##### `ModelEndpointNameForQuery`<sup>Optional</sup> <a name="ModelEndpointNameForQuery" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#model_endpoint_name_for_query DataDatabricksAiSearchIndexes#model_endpoint_name_for_query}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}.

---

### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns {
    double EmbeddingDimension = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_dimension DataDatabricksAiSearchIndexes#embedding_dimension}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}. |

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_dimension DataDatabricksAiSearchIndexes#embedding_dimension}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}.

---

### DataDatabricksAiSearchIndexesIndexesProviderConfig <a name="DataDatabricksAiSearchIndexesIndexesProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#workspace_id DataDatabricksAiSearchIndexes#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#workspace_id DataDatabricksAiSearchIndexes#workspace_id}.

---

### DataDatabricksAiSearchIndexesIndexesStatus <a name="DataDatabricksAiSearchIndexesIndexesStatus" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesStatus {

};
```


### DataDatabricksAiSearchIndexesProviderConfig <a name="DataDatabricksAiSearchIndexesProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#workspace_id DataDatabricksAiSearchIndexes#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#workspace_id DataDatabricksAiSearchIndexes#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```csharp
private DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---


### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">ResetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">ResetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingModelEndpoint` <a name="ResetEmbeddingModelEndpoint" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```csharp
private void ResetEmbeddingModelEndpoint()
```

##### `ResetModelEndpointNameForQuery` <a name="ResetModelEndpointNameForQuery" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```csharp
private void ResetModelEndpointNameForQuery()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">EmbeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">ModelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpointInput`<sup>Optional</sup> <a name="EmbeddingModelEndpointInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```csharp
public string EmbeddingModelEndpointInput { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQueryInput`<sup>Optional</sup> <a name="ModelEndpointNameForQueryInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```csharp
public string ModelEndpointNameForQueryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpoint`<sup>Required</sup> <a name="EmbeddingModelEndpoint" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQuery`<sup>Required</sup> <a name="ModelEndpointNameForQuery" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>

---


### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```csharp
private DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---


### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```csharp
private void ResetEmbeddingDimension()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```csharp
public double EmbeddingDimensionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>

---


### DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">PutEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">PutEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetColumnsToSync">ResetColumnsToSync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">ResetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">ResetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">ResetEmbeddingWritebackTable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetSourceTable">ResetSourceTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingSourceColumns` <a name="PutEmbeddingSourceColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```csharp
private void PutEmbeddingSourceColumns(IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `PutEmbeddingVectorColumns` <a name="PutEmbeddingVectorColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```csharp
private void PutEmbeddingVectorColumns(IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `ResetColumnsToSync` <a name="ResetColumnsToSync" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetColumnsToSync"></a>

```csharp
private void ResetColumnsToSync()
```

##### `ResetEmbeddingSourceColumns` <a name="ResetEmbeddingSourceColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```csharp
private void ResetEmbeddingSourceColumns()
```

##### `ResetEmbeddingVectorColumns` <a name="ResetEmbeddingVectorColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```csharp
private void ResetEmbeddingVectorColumns()
```

##### `ResetEmbeddingWritebackTable` <a name="ResetEmbeddingWritebackTable" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```csharp
private void ResetEmbeddingWritebackTable()
```

##### `ResetSourceTable` <a name="ResetSourceTable" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```csharp
private void ResetSourceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput">ColumnsToSyncInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">EmbeddingSourceColumnsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">EmbeddingVectorColumnsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">EmbeddingWritebackTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">PipelineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.sourceTableInput">SourceTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.columnsToSync">ColumnsToSync</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">EmbeddingWritebackTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineType">PipelineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.sourceTable">SourceTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingSourceColumns`<sup>Required</sup> <a name="EmbeddingSourceColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList EmbeddingSourceColumns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `EmbeddingVectorColumns`<sup>Required</sup> <a name="EmbeddingVectorColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList EmbeddingVectorColumns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `ColumnsToSyncInput`<sup>Optional</sup> <a name="ColumnsToSyncInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput"></a>

```csharp
public string[] ColumnsToSyncInput { get; }
```

- *Type:* string[]

---

##### `EmbeddingSourceColumnsInput`<sup>Optional</sup> <a name="EmbeddingSourceColumnsInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumnsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `EmbeddingVectorColumnsInput`<sup>Optional</sup> <a name="EmbeddingVectorColumnsInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumnsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `EmbeddingWritebackTableInput`<sup>Optional</sup> <a name="EmbeddingWritebackTableInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```csharp
public string EmbeddingWritebackTableInput { get; }
```

- *Type:* string

---

##### `PipelineTypeInput`<sup>Optional</sup> <a name="PipelineTypeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```csharp
public string PipelineTypeInput { get; }
```

- *Type:* string

---

##### `SourceTableInput`<sup>Optional</sup> <a name="SourceTableInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```csharp
public string SourceTableInput { get; }
```

- *Type:* string

---

##### `ColumnsToSync`<sup>Required</sup> <a name="ColumnsToSync" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.columnsToSync"></a>

```csharp
public string[] ColumnsToSync { get; }
```

- *Type:* string[]

---

##### `EmbeddingWritebackTable`<sup>Required</sup> <a name="EmbeddingWritebackTable" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```csharp
public string EmbeddingWritebackTable { get; }
```

- *Type:* string

---

##### `PipelineType`<sup>Required</sup> <a name="PipelineType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```csharp
public string PipelineType { get; }
```

- *Type:* string

---

##### `SourceTable`<sup>Required</sup> <a name="SourceTable" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```csharp
public string SourceTable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec</a>

---


### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```csharp
private DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---


### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">ResetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">ResetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingModelEndpoint` <a name="ResetEmbeddingModelEndpoint" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```csharp
private void ResetEmbeddingModelEndpoint()
```

##### `ResetModelEndpointNameForQuery` <a name="ResetModelEndpointNameForQuery" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```csharp
private void ResetModelEndpointNameForQuery()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">EmbeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">ModelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpointInput`<sup>Optional</sup> <a name="EmbeddingModelEndpointInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```csharp
public string EmbeddingModelEndpointInput { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQueryInput`<sup>Optional</sup> <a name="ModelEndpointNameForQueryInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```csharp
public string ModelEndpointNameForQueryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpoint`<sup>Required</sup> <a name="EmbeddingModelEndpoint" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQuery`<sup>Required</sup> <a name="ModelEndpointNameForQuery" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>

---


### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```csharp
private DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---


### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```csharp
private void ResetEmbeddingDimension()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```csharp
public double EmbeddingDimensionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>

---


### DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference <a name="DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">PutEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">PutEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">ResetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">ResetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetSchemaJson">ResetSchemaJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingSourceColumns` <a name="PutEmbeddingSourceColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```csharp
private void PutEmbeddingSourceColumns(IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `PutEmbeddingVectorColumns` <a name="PutEmbeddingVectorColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```csharp
private void PutEmbeddingVectorColumns(IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `ResetEmbeddingSourceColumns` <a name="ResetEmbeddingSourceColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```csharp
private void ResetEmbeddingSourceColumns()
```

##### `ResetEmbeddingVectorColumns` <a name="ResetEmbeddingVectorColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```csharp
private void ResetEmbeddingVectorColumns()
```

##### `ResetSchemaJson` <a name="ResetSchemaJson" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```csharp
private void ResetSchemaJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">EmbeddingSourceColumnsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">EmbeddingVectorColumnsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.schemaJsonInput">SchemaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.schemaJson">SchemaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingSourceColumns`<sup>Required</sup> <a name="EmbeddingSourceColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList EmbeddingSourceColumns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `EmbeddingVectorColumns`<sup>Required</sup> <a name="EmbeddingVectorColumns" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList EmbeddingVectorColumns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `EmbeddingSourceColumnsInput`<sup>Optional</sup> <a name="EmbeddingSourceColumnsInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumnsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `EmbeddingVectorColumnsInput`<sup>Optional</sup> <a name="EmbeddingVectorColumnsInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumnsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `SchemaJsonInput`<sup>Optional</sup> <a name="SchemaJsonInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```csharp
public string SchemaJsonInput { get; }
```

- *Type:* string

---

##### `SchemaJson`<sup>Required</sup> <a name="SchemaJson" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```csharp
public string SchemaJson { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec</a>

---


### DataDatabricksAiSearchIndexesIndexesList <a name="DataDatabricksAiSearchIndexesIndexesList" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.get"></a>

```csharp
private DataDatabricksAiSearchIndexesIndexesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes">DataDatabricksAiSearchIndexesIndexes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexes[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes">DataDatabricksAiSearchIndexesIndexes</a>[]

---


### DataDatabricksAiSearchIndexesIndexesOutputReference <a name="DataDatabricksAiSearchIndexesIndexesOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAiSearchIndexesIndexesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.deltaSyncIndexSpec">DeltaSyncIndexSpec</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.directAccessIndexSpec">DirectAccessIndexSpec</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.indexSubtype">IndexSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.indexType">IndexType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference">DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.status">Status</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference">DataDatabricksAiSearchIndexesIndexesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes">DataDatabricksAiSearchIndexesIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DeltaSyncIndexSpec`<sup>Required</sup> <a name="DeltaSyncIndexSpec" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.deltaSyncIndexSpec"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference DeltaSyncIndexSpec { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference">DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference</a>

---

##### `DirectAccessIndexSpec`<sup>Required</sup> <a name="DirectAccessIndexSpec" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.directAccessIndexSpec"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference DirectAccessIndexSpec { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference">DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `IndexSubtype`<sup>Required</sup> <a name="IndexSubtype" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.indexSubtype"></a>

```csharp
public string IndexSubtype { get; }
```

- *Type:* string

---

##### `IndexType`<sup>Required</sup> <a name="IndexType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.indexType"></a>

```csharp
public string IndexType { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference">DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.status"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesStatusOutputReference Status { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference">DataDatabricksAiSearchIndexesIndexesStatusOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesProviderConfig ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexes">DataDatabricksAiSearchIndexesIndexes</a>

---


### DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference <a name="DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesIndexesProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesProviderConfig">DataDatabricksAiSearchIndexesIndexesProviderConfig</a>

---


### DataDatabricksAiSearchIndexesIndexesStatusOutputReference <a name="DataDatabricksAiSearchIndexesIndexesStatusOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesIndexesStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.indexedRowCount">IndexedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.indexUrl">IndexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.ready">Ready</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatus">DataDatabricksAiSearchIndexesIndexesStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexedRowCount`<sup>Required</sup> <a name="IndexedRowCount" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.indexedRowCount"></a>

```csharp
public double IndexedRowCount { get; }
```

- *Type:* double

---

##### `IndexUrl`<sup>Required</sup> <a name="IndexUrl" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.indexUrl"></a>

```csharp
public string IndexUrl { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.ready"></a>

```csharp
public IResolvable Ready { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchIndexesIndexesStatus InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesIndexesStatus">DataDatabricksAiSearchIndexesIndexesStatus</a>

---


### DataDatabricksAiSearchIndexesProviderConfigOutputReference <a name="DataDatabricksAiSearchIndexesProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAiSearchIndexesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexesProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAiSearchIndexes.DataDatabricksAiSearchIndexesProviderConfig">DataDatabricksAiSearchIndexesProviderConfig</a>

---



