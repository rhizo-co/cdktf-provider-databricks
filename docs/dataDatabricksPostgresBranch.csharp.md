# `dataDatabricksPostgresBranch` Submodule <a name="`dataDatabricksPostgresBranch` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresBranch <a name="DataDatabricksPostgresBranch" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch databricks_postgres_branch}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresBranch(Construct Scope, string Id, DataDatabricksPostgresBranchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig">DataDatabricksPostgresBranchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig">DataDatabricksPostgresBranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksPostgresBranchProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksPostgresBranch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPostgresBranch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPostgresBranch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPostgresBranch.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPostgresBranch.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksPostgresBranch resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresBranch to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.branchId">BranchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference">DataDatabricksPostgresBranchProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.spec">Spec</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference">DataDatabricksPostgresBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.status">Status</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference">DataDatabricksPostgresBranchStatusOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfigInput">ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BranchId`<sup>Required</sup> <a name="BranchId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.branchId"></a>

```csharp
public string BranchId { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresBranchProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference">DataDatabricksPostgresBranchProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.spec"></a>

```csharp
public DataDatabricksPostgresBranchSpecOutputReference Spec { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference">DataDatabricksPostgresBranchSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.status"></a>

```csharp
public DataDatabricksPostgresBranchStatusOutputReference Status { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference">DataDatabricksPostgresBranchStatusOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresBranchProviderConfig ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresBranchConfig <a name="DataDatabricksPostgresBranchConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresBranchConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksPostgresBranchProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresBranchProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}.

---

### DataDatabricksPostgresBranchProviderConfig <a name="DataDatabricksPostgresBranchProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresBranchProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#workspace_id DataDatabricksPostgresBranch#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#workspace_id DataDatabricksPostgresBranch#workspace_id}.

---

### DataDatabricksPostgresBranchSpec <a name="DataDatabricksPostgresBranchSpec" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresBranchSpec {
    string ExpireTime = null,
    bool|IResolvable IsProtected = null,
    bool|IResolvable NoExpiry = null,
    string SourceBranch = null,
    string SourceBranchLsn = null,
    string SourceBranchTime = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.expireTime">ExpireTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#expire_time DataDatabricksPostgresBranch#expire_time}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.isProtected">IsProtected</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#is_protected DataDatabricksPostgresBranch#is_protected}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.noExpiry">NoExpiry</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#no_expiry DataDatabricksPostgresBranch#no_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranch">SourceBranch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#source_branch DataDatabricksPostgresBranch#source_branch}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchLsn">SourceBranchLsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#source_branch_lsn DataDatabricksPostgresBranch#source_branch_lsn}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchTime">SourceBranchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#source_branch_time DataDatabricksPostgresBranch#source_branch_time}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.ttl">Ttl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#ttl DataDatabricksPostgresBranch#ttl}. |

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.expireTime"></a>

```csharp
public string ExpireTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#expire_time DataDatabricksPostgresBranch#expire_time}.

---

##### `IsProtected`<sup>Optional</sup> <a name="IsProtected" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.isProtected"></a>

```csharp
public bool|IResolvable IsProtected { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#is_protected DataDatabricksPostgresBranch#is_protected}.

---

##### `NoExpiry`<sup>Optional</sup> <a name="NoExpiry" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.noExpiry"></a>

```csharp
public bool|IResolvable NoExpiry { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#no_expiry DataDatabricksPostgresBranch#no_expiry}.

---

##### `SourceBranch`<sup>Optional</sup> <a name="SourceBranch" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranch"></a>

```csharp
public string SourceBranch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#source_branch DataDatabricksPostgresBranch#source_branch}.

---

##### `SourceBranchLsn`<sup>Optional</sup> <a name="SourceBranchLsn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchLsn"></a>

```csharp
public string SourceBranchLsn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#source_branch_lsn DataDatabricksPostgresBranch#source_branch_lsn}.

---

##### `SourceBranchTime`<sup>Optional</sup> <a name="SourceBranchTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchTime"></a>

```csharp
public string SourceBranchTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#source_branch_time DataDatabricksPostgresBranch#source_branch_time}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/postgres_branch#ttl DataDatabricksPostgresBranch#ttl}.

---

### DataDatabricksPostgresBranchStatus <a name="DataDatabricksPostgresBranchStatus" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresBranchStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresBranchProviderConfigOutputReference <a name="DataDatabricksPostgresBranchProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresBranchProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresBranchProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

---


### DataDatabricksPostgresBranchSpecOutputReference <a name="DataDatabricksPostgresBranchSpecOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresBranchSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetIsProtected">ResetIsProtected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetNoExpiry">ResetNoExpiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranch">ResetSourceBranch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchLsn">ResetSourceBranchLsn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchTime">ResetSourceBranchTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpireTime` <a name="ResetExpireTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetExpireTime"></a>

```csharp
private void ResetExpireTime()
```

##### `ResetIsProtected` <a name="ResetIsProtected" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetIsProtected"></a>

```csharp
private void ResetIsProtected()
```

##### `ResetNoExpiry` <a name="ResetNoExpiry" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetNoExpiry"></a>

```csharp
private void ResetNoExpiry()
```

##### `ResetSourceBranch` <a name="ResetSourceBranch" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranch"></a>

```csharp
private void ResetSourceBranch()
```

##### `ResetSourceBranchLsn` <a name="ResetSourceBranchLsn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchLsn"></a>

```csharp
private void ResetSourceBranchLsn()
```

##### `ResetSourceBranchTime` <a name="ResetSourceBranchTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchTime"></a>

```csharp
private void ResetSourceBranchTime()
```

##### `ResetTtl` <a name="ResetTtl" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTimeInput">ExpireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtectedInput">IsProtectedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiryInput">NoExpiryInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchInput">SourceBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsnInput">SourceBranchLsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTimeInput">SourceBranchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtected">IsProtected</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiry">NoExpiry</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranch">SourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsn">SourceBranchLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTime">SourceBranchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec">DataDatabricksPostgresBranchSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTimeInput"></a>

```csharp
public string ExpireTimeInput { get; }
```

- *Type:* string

---

##### `IsProtectedInput`<sup>Optional</sup> <a name="IsProtectedInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtectedInput"></a>

```csharp
public bool|IResolvable IsProtectedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NoExpiryInput`<sup>Optional</sup> <a name="NoExpiryInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiryInput"></a>

```csharp
public bool|IResolvable NoExpiryInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SourceBranchInput`<sup>Optional</sup> <a name="SourceBranchInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchInput"></a>

```csharp
public string SourceBranchInput { get; }
```

- *Type:* string

---

##### `SourceBranchLsnInput`<sup>Optional</sup> <a name="SourceBranchLsnInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsnInput"></a>

```csharp
public string SourceBranchLsnInput { get; }
```

- *Type:* string

---

##### `SourceBranchTimeInput`<sup>Optional</sup> <a name="SourceBranchTimeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTimeInput"></a>

```csharp
public string SourceBranchTimeInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `IsProtected`<sup>Required</sup> <a name="IsProtected" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtected"></a>

```csharp
public bool|IResolvable IsProtected { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NoExpiry`<sup>Required</sup> <a name="NoExpiry" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiry"></a>

```csharp
public bool|IResolvable NoExpiry { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SourceBranch`<sup>Required</sup> <a name="SourceBranch" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranch"></a>

```csharp
public string SourceBranch { get; }
```

- *Type:* string

---

##### `SourceBranchLsn`<sup>Required</sup> <a name="SourceBranchLsn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsn"></a>

```csharp
public string SourceBranchLsn { get; }
```

- *Type:* string

---

##### `SourceBranchTime`<sup>Required</sup> <a name="SourceBranchTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTime"></a>

```csharp
public string SourceBranchTime { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresBranchSpec InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec">DataDatabricksPostgresBranchSpec</a>

---


### DataDatabricksPostgresBranchStatusOutputReference <a name="DataDatabricksPostgresBranchStatusOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPostgresBranchStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.branchId">BranchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.currentState">CurrentState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.isProtected">IsProtected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.logicalSizeBytes">LogicalSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.pendingState">PendingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.purgeTime">PurgeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranch">SourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchLsn">SourceBranchLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchTime">SourceBranchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.stateChangeTime">StateChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus">DataDatabricksPostgresBranchStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchId`<sup>Required</sup> <a name="BranchId" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.branchId"></a>

```csharp
public string BranchId { get; }
```

- *Type:* string

---

##### `CurrentState`<sup>Required</sup> <a name="CurrentState" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.currentState"></a>

```csharp
public string CurrentState { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `IsProtected`<sup>Required</sup> <a name="IsProtected" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.isProtected"></a>

```csharp
public IResolvable IsProtected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LogicalSizeBytes`<sup>Required</sup> <a name="LogicalSizeBytes" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.logicalSizeBytes"></a>

```csharp
public double LogicalSizeBytes { get; }
```

- *Type:* double

---

##### `PendingState`<sup>Required</sup> <a name="PendingState" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.pendingState"></a>

```csharp
public string PendingState { get; }
```

- *Type:* string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.purgeTime"></a>

```csharp
public string PurgeTime { get; }
```

- *Type:* string

---

##### `SourceBranch`<sup>Required</sup> <a name="SourceBranch" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranch"></a>

```csharp
public string SourceBranch { get; }
```

- *Type:* string

---

##### `SourceBranchLsn`<sup>Required</sup> <a name="SourceBranchLsn" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchLsn"></a>

```csharp
public string SourceBranchLsn { get; }
```

- *Type:* string

---

##### `SourceBranchTime`<sup>Required</sup> <a name="SourceBranchTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchTime"></a>

```csharp
public string SourceBranchTime { get; }
```

- *Type:* string

---

##### `StateChangeTime`<sup>Required</sup> <a name="StateChangeTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.stateChangeTime"></a>

```csharp
public string StateChangeTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresBranchStatus InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus">DataDatabricksPostgresBranchStatus</a>

---



