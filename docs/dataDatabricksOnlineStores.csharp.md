# `dataDatabricksOnlineStores` Submodule <a name="`dataDatabricksOnlineStores` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksOnlineStores <a name="DataDatabricksOnlineStores" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores databricks_online_stores}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksOnlineStores(Construct Scope, string Id, DataDatabricksOnlineStoresConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig">DataDatabricksOnlineStoresConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig">DataDatabricksOnlineStoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksOnlineStoresProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig">DataDatabricksOnlineStoresProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksOnlineStores resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksOnlineStores.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksOnlineStores.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksOnlineStores.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksOnlineStores.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksOnlineStores resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksOnlineStores to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksOnlineStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksOnlineStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.onlineStores">OnlineStores</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList">DataDatabricksOnlineStoresOnlineStoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference">DataDatabricksOnlineStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.providerConfigInput">ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig">DataDatabricksOnlineStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `OnlineStores`<sup>Required</sup> <a name="OnlineStores" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.onlineStores"></a>

```csharp
public DataDatabricksOnlineStoresOnlineStoresList OnlineStores { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList">DataDatabricksOnlineStoresOnlineStoresList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.providerConfig"></a>

```csharp
public DataDatabricksOnlineStoresProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference">DataDatabricksOnlineStoresProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksOnlineStoresProviderConfig ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig">DataDatabricksOnlineStoresProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStores.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksOnlineStoresConfig <a name="DataDatabricksOnlineStoresConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksOnlineStoresConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null,
    DataDatabricksOnlineStoresProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#page_size DataDatabricksOnlineStores#page_size}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig">DataDatabricksOnlineStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#provider_config DataDatabricksOnlineStores#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#page_size DataDatabricksOnlineStores#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresConfig.property.providerConfig"></a>

```csharp
public DataDatabricksOnlineStoresProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig">DataDatabricksOnlineStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#provider_config DataDatabricksOnlineStores#provider_config}.

---

### DataDatabricksOnlineStoresOnlineStores <a name="DataDatabricksOnlineStoresOnlineStores" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksOnlineStoresOnlineStores {
    string Name,
    DataDatabricksOnlineStoresOnlineStoresProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#name DataDatabricksOnlineStores#name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig">DataDatabricksOnlineStoresOnlineStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#provider_config DataDatabricksOnlineStores#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#name DataDatabricksOnlineStores#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores.property.providerConfig"></a>

```csharp
public DataDatabricksOnlineStoresOnlineStoresProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig">DataDatabricksOnlineStoresOnlineStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#provider_config DataDatabricksOnlineStores#provider_config}.

---

### DataDatabricksOnlineStoresOnlineStoresProviderConfig <a name="DataDatabricksOnlineStoresOnlineStoresProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksOnlineStoresOnlineStoresProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#workspace_id DataDatabricksOnlineStores#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#workspace_id DataDatabricksOnlineStores#workspace_id}.

---

### DataDatabricksOnlineStoresProviderConfig <a name="DataDatabricksOnlineStoresProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksOnlineStoresProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#workspace_id DataDatabricksOnlineStores#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/online_stores#workspace_id DataDatabricksOnlineStores#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksOnlineStoresOnlineStoresList <a name="DataDatabricksOnlineStoresOnlineStoresList" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksOnlineStoresOnlineStoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.get"></a>

```csharp
private DataDatabricksOnlineStoresOnlineStoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores">DataDatabricksOnlineStoresOnlineStores</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksOnlineStoresOnlineStores[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores">DataDatabricksOnlineStoresOnlineStores</a>[]

---


### DataDatabricksOnlineStoresOnlineStoresOutputReference <a name="DataDatabricksOnlineStoresOnlineStoresOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksOnlineStoresOnlineStoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksOnlineStoresOnlineStoresProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig">DataDatabricksOnlineStoresOnlineStoresProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.capacity">Capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference">DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.readReplicaCount">ReadReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig">DataDatabricksOnlineStoresOnlineStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores">DataDatabricksOnlineStoresOnlineStores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.capacity"></a>

```csharp
public string Capacity { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference">DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference</a>

---

##### `ReadReplicaCount`<sup>Required</sup> <a name="ReadReplicaCount" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.readReplicaCount"></a>

```csharp
public double ReadReplicaCount { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksOnlineStoresOnlineStoresProviderConfig ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig">DataDatabricksOnlineStoresOnlineStoresProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksOnlineStoresOnlineStores InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStores">DataDatabricksOnlineStoresOnlineStores</a>

---


### DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference <a name="DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig">DataDatabricksOnlineStoresOnlineStoresProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksOnlineStoresOnlineStoresProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresOnlineStoresProviderConfig">DataDatabricksOnlineStoresOnlineStoresProviderConfig</a>

---


### DataDatabricksOnlineStoresProviderConfigOutputReference <a name="DataDatabricksOnlineStoresProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksOnlineStoresProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig">DataDatabricksOnlineStoresProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksOnlineStoresProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksOnlineStores.DataDatabricksOnlineStoresProviderConfig">DataDatabricksOnlineStoresProviderConfig</a>

---



