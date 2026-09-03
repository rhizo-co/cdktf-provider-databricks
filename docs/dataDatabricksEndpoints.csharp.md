# `dataDatabricksEndpoints` Submodule <a name="`dataDatabricksEndpoints` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEndpoints <a name="DataDatabricksEndpoints" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints databricks_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpoints(Construct Scope, string Id, DataDatabricksEndpointsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig">DataDatabricksEndpointsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig">DataDatabricksEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPageSize` <a name="ResetPageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksEndpoints.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksEndpoints.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksEndpoints.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksEndpoints.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksEndpoints resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksEndpoints to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList">DataDatabricksEndpointsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.items"></a>

```csharp
public DataDatabricksEndpointsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList">DataDatabricksEndpointsItemsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpoints.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEndpointsConfig <a name="DataDatabricksEndpointsConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpointsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#parent DataDatabricksEndpoints#parent}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#page_size DataDatabricksEndpoints#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#parent DataDatabricksEndpoints#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#page_size DataDatabricksEndpoints#page_size}.

---

### DataDatabricksEndpointsItems <a name="DataDatabricksEndpointsItems" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpointsItems {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItems.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#name DataDatabricksEndpoints#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItems.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#name DataDatabricksEndpoints#name}.

---

### DataDatabricksEndpointsItemsAwsVpcEndpointInfo <a name="DataDatabricksEndpointsItemsAwsVpcEndpointInfo" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpointsItemsAwsVpcEndpointInfo {
    string AwsVpcEndpointId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfo.property.awsVpcEndpointId">AwsVpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#aws_vpc_endpoint_id DataDatabricksEndpoints#aws_vpc_endpoint_id}. |

---

##### `AwsVpcEndpointId`<sup>Required</sup> <a name="AwsVpcEndpointId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfo.property.awsVpcEndpointId"></a>

```csharp
public string AwsVpcEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#aws_vpc_endpoint_id DataDatabricksEndpoints#aws_vpc_endpoint_id}.

---

### DataDatabricksEndpointsItemsAzurePrivateEndpointInfo <a name="DataDatabricksEndpointsItemsAzurePrivateEndpointInfo" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpointsItemsAzurePrivateEndpointInfo {
    string PrivateEndpointName,
    string PrivateEndpointResourceGuid
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfo.property.privateEndpointName">PrivateEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#private_endpoint_name DataDatabricksEndpoints#private_endpoint_name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfo.property.privateEndpointResourceGuid">PrivateEndpointResourceGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#private_endpoint_resource_guid DataDatabricksEndpoints#private_endpoint_resource_guid}. |

---

##### `PrivateEndpointName`<sup>Required</sup> <a name="PrivateEndpointName" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfo.property.privateEndpointName"></a>

```csharp
public string PrivateEndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#private_endpoint_name DataDatabricksEndpoints#private_endpoint_name}.

---

##### `PrivateEndpointResourceGuid`<sup>Required</sup> <a name="PrivateEndpointResourceGuid" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfo.property.privateEndpointResourceGuid"></a>

```csharp
public string PrivateEndpointResourceGuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#private_endpoint_resource_guid DataDatabricksEndpoints#private_endpoint_resource_guid}.

---

### DataDatabricksEndpointsItemsGcpPscEndpointInfo <a name="DataDatabricksEndpointsItemsGcpPscEndpointInfo" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpointsItemsGcpPscEndpointInfo {
    string EndpointRegion,
    string ProjectId,
    string PscEndpoint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfo.property.endpointRegion">EndpointRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#endpoint_region DataDatabricksEndpoints#endpoint_region}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfo.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#project_id DataDatabricksEndpoints#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfo.property.pscEndpoint">PscEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#psc_endpoint DataDatabricksEndpoints#psc_endpoint}. |

---

##### `EndpointRegion`<sup>Required</sup> <a name="EndpointRegion" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfo.property.endpointRegion"></a>

```csharp
public string EndpointRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#endpoint_region DataDatabricksEndpoints#endpoint_region}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfo.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#project_id DataDatabricksEndpoints#project_id}.

---

##### `PscEndpoint`<sup>Required</sup> <a name="PscEndpoint" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfo.property.pscEndpoint"></a>

```csharp
public string PscEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/endpoints#psc_endpoint DataDatabricksEndpoints#psc_endpoint}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference <a name="DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.awsEndpointServiceId">AwsEndpointServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointIdInput">AwsVpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointId">AwsVpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfo">DataDatabricksEndpointsItemsAwsVpcEndpointInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsEndpointServiceId`<sup>Required</sup> <a name="AwsEndpointServiceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.awsEndpointServiceId"></a>

```csharp
public string AwsEndpointServiceId { get; }
```

- *Type:* string

---

##### `AwsVpcEndpointIdInput`<sup>Optional</sup> <a name="AwsVpcEndpointIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointIdInput"></a>

```csharp
public string AwsVpcEndpointIdInput { get; }
```

- *Type:* string

---

##### `AwsVpcEndpointId`<sup>Required</sup> <a name="AwsVpcEndpointId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.awsVpcEndpointId"></a>

```csharp
public string AwsVpcEndpointId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksEndpointsItemsAwsVpcEndpointInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfo">DataDatabricksEndpointsItemsAwsVpcEndpointInfo</a>

---


### DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference <a name="DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceId">PrivateEndpointResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateLinkServiceId">PrivateLinkServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateEndpointNameInput">PrivateEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuidInput">PrivateEndpointResourceGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateEndpointName">PrivateEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuid">PrivateEndpointResourceGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfo">DataDatabricksEndpointsItemsAzurePrivateEndpointInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateEndpointResourceId`<sup>Required</sup> <a name="PrivateEndpointResourceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceId"></a>

```csharp
public string PrivateEndpointResourceId { get; }
```

- *Type:* string

---

##### `PrivateLinkServiceId`<sup>Required</sup> <a name="PrivateLinkServiceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateLinkServiceId"></a>

```csharp
public string PrivateLinkServiceId { get; }
```

- *Type:* string

---

##### `PrivateEndpointNameInput`<sup>Optional</sup> <a name="PrivateEndpointNameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateEndpointNameInput"></a>

```csharp
public string PrivateEndpointNameInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointResourceGuidInput`<sup>Optional</sup> <a name="PrivateEndpointResourceGuidInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuidInput"></a>

```csharp
public string PrivateEndpointResourceGuidInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointName`<sup>Required</sup> <a name="PrivateEndpointName" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateEndpointName"></a>

```csharp
public string PrivateEndpointName { get; }
```

- *Type:* string

---

##### `PrivateEndpointResourceGuid`<sup>Required</sup> <a name="PrivateEndpointResourceGuid" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.privateEndpointResourceGuid"></a>

```csharp
public string PrivateEndpointResourceGuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksEndpointsItemsAzurePrivateEndpointInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfo">DataDatabricksEndpointsItemsAzurePrivateEndpointInfo</a>

---


### DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference <a name="DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.serviceAttachmentId">ServiceAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.endpointRegionInput">EndpointRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.pscEndpointInput">PscEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.endpointRegion">EndpointRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.pscEndpoint">PscEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfo">DataDatabricksEndpointsItemsGcpPscEndpointInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `ServiceAttachmentId`<sup>Required</sup> <a name="ServiceAttachmentId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.serviceAttachmentId"></a>

```csharp
public string ServiceAttachmentId { get; }
```

- *Type:* string

---

##### `EndpointRegionInput`<sup>Optional</sup> <a name="EndpointRegionInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.endpointRegionInput"></a>

```csharp
public string EndpointRegionInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `PscEndpointInput`<sup>Optional</sup> <a name="PscEndpointInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.pscEndpointInput"></a>

```csharp
public string PscEndpointInput { get; }
```

- *Type:* string

---

##### `EndpointRegion`<sup>Required</sup> <a name="EndpointRegion" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.endpointRegion"></a>

```csharp
public string EndpointRegion { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `PscEndpoint`<sup>Required</sup> <a name="PscEndpoint" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.pscEndpoint"></a>

```csharp
public string PscEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksEndpointsItemsGcpPscEndpointInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfo">DataDatabricksEndpointsItemsGcpPscEndpointInfo</a>

---


### DataDatabricksEndpointsItemsList <a name="DataDatabricksEndpointsItemsList" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpointsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.get"></a>

```csharp
private DataDatabricksEndpointsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItems">DataDatabricksEndpointsItems</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksEndpointsItems[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItems">DataDatabricksEndpointsItems</a>[]

---


### DataDatabricksEndpointsItemsOutputReference <a name="DataDatabricksEndpointsItemsOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksEndpointsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.awsVpcEndpointInfo">AwsVpcEndpointInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference">DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.azurePrivateEndpointInfo">AzurePrivateEndpointInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference">DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.gcpPscEndpointInfo">GcpPscEndpointInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference">DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.useCase">UseCase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItems">DataDatabricksEndpointsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AwsVpcEndpointInfo`<sup>Required</sup> <a name="AwsVpcEndpointInfo" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.awsVpcEndpointInfo"></a>

```csharp
public DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference AwsVpcEndpointInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference">DataDatabricksEndpointsItemsAwsVpcEndpointInfoOutputReference</a>

---

##### `AzurePrivateEndpointInfo`<sup>Required</sup> <a name="AzurePrivateEndpointInfo" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.azurePrivateEndpointInfo"></a>

```csharp
public DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference AzurePrivateEndpointInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference">DataDatabricksEndpointsItemsAzurePrivateEndpointInfoOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `GcpPscEndpointInfo`<sup>Required</sup> <a name="GcpPscEndpointInfo" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.gcpPscEndpointInfo"></a>

```csharp
public DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference GcpPscEndpointInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference">DataDatabricksEndpointsItemsGcpPscEndpointInfoOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UseCase`<sup>Required</sup> <a name="UseCase" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.useCase"></a>

```csharp
public string UseCase { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItemsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksEndpointsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksEndpoints.DataDatabricksEndpointsItems">DataDatabricksEndpointsItems</a>

---



