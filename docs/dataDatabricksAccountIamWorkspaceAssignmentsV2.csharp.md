# `dataDatabricksAccountIamWorkspaceAssignmentsV2` Submodule <a name="`dataDatabricksAccountIamWorkspaceAssignmentsV2` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamWorkspaceAssignmentsV2 <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignments_v2 databricks_account_iam_workspace_assignments_v2}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountIamWorkspaceAssignmentsV2(Construct Scope, string Id, DataDatabricksAccountIamWorkspaceAssignmentsV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config">DataDatabricksAccountIamWorkspaceAssignmentsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config">DataDatabricksAccountIamWorkspaceAssignmentsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPageSize` <a name="ResetPageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAccountIamWorkspaceAssignmentsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountIamWorkspaceAssignmentsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountIamWorkspaceAssignmentsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountIamWorkspaceAssignmentsV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountIamWorkspaceAssignmentsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksAccountIamWorkspaceAssignmentsV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountIamWorkspaceAssignmentsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountIamWorkspaceAssignmentsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignments_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamWorkspaceAssignmentsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceAssignments">WorkspaceAssignments</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `WorkspaceAssignments`<sup>Required</sup> <a name="WorkspaceAssignments" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceAssignments"></a>

```csharp
public DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList WorkspaceAssignments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceIdInput"></a>

```csharp
public double WorkspaceIdInput { get; }
```

- *Type:* double

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamWorkspaceAssignmentsV2Config <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountIamWorkspaceAssignmentsV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double WorkspaceId,
    double PageSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignments_v2#page_size DataDatabricksAccountIamWorkspaceAssignmentsV2#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2Config.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignments_v2#page_size DataDatabricksAccountIamWorkspaceAssignmentsV2#page_size}.

---

### DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments {
    double PrincipalId,
    double WorkspaceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.principalId">PrincipalId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignments_v2#principal_id DataDatabricksAccountIamWorkspaceAssignmentsV2#principal_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}. |

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.principalId"></a>

```csharp
public double PrincipalId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignments_v2#principal_id DataDatabricksAccountIamWorkspaceAssignmentsV2#principal_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_workspace_assignments_v2#workspace_id DataDatabricksAccountIamWorkspaceAssignmentsV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get"></a>

```csharp
private DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments</a>[]

---


### DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference <a name="DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.effectiveEntitlements">EffectiveEntitlements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.entitlements">Entitlements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalType">PrincipalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalIdInput">PrincipalIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalId">PrincipalId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `EffectiveEntitlements`<sup>Required</sup> <a name="EffectiveEntitlements" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.effectiveEntitlements"></a>

```csharp
public string[] EffectiveEntitlements { get; }
```

- *Type:* string[]

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.entitlements"></a>

```csharp
public string[] Entitlements { get; }
```

- *Type:* string[]

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalType"></a>

```csharp
public string PrincipalType { get; }
```

- *Type:* string

---

##### `PrincipalIdInput`<sup>Optional</sup> <a name="PrincipalIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalIdInput"></a>

```csharp
public double PrincipalIdInput { get; }
```

- *Type:* double

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceIdInput"></a>

```csharp
public double WorkspaceIdInput { get; }
```

- *Type:* double

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.principalId"></a>

```csharp
public double PrincipalId { get; }
```

- *Type:* double

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamWorkspaceAssignmentsV2.DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments">DataDatabricksAccountIamWorkspaceAssignmentsV2WorkspaceAssignments</a>

---



