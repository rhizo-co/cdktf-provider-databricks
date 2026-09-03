# `dataDatabricksAccountIamGroupsV2` Submodule <a name="`dataDatabricksAccountIamGroupsV2` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamGroupsV2 <a name="DataDatabricksAccountIamGroupsV2" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_groups_v2 databricks_account_iam_groups_v2}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.Initializer"></a>

```typescript
import { dataDatabricksAccountIamGroupsV2 } from 'rhizo-co-terraform-provider-databricks'

new dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2(scope: Construct, id: string, config?: DataDatabricksAccountIamGroupsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config">DataDatabricksAccountIamGroupsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config">DataDatabricksAccountIamGroupsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetPageSize` <a name="resetPageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAccountIamGroupsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isConstruct"></a>

```typescript
import { dataDatabricksAccountIamGroupsV2 } from 'rhizo-co-terraform-provider-databricks'

dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isTerraformElement"></a>

```typescript
import { dataDatabricksAccountIamGroupsV2 } from 'rhizo-co-terraform-provider-databricks'

dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAccountIamGroupsV2 } from 'rhizo-co-terraform-provider-databricks'

dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.generateConfigForImport"></a>

```typescript
import { dataDatabricksAccountIamGroupsV2 } from 'rhizo-co-terraform-provider-databricks'

dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksAccountIamGroupsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountIamGroupsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountIamGroupsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_groups_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamGroupsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList">DataDatabricksAccountIamGroupsV2GroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.groups"></a>

```typescript
public readonly groups: DataDatabricksAccountIamGroupsV2GroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList">DataDatabricksAccountIamGroupsV2GroupsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamGroupsV2Config <a name="DataDatabricksAccountIamGroupsV2Config" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.Initializer"></a>

```typescript
import { dataDatabricksAccountIamGroupsV2 } from 'rhizo-co-terraform-provider-databricks'

const dataDatabricksAccountIamGroupsV2Config: dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_groups_v2#filter DataDatabricksAccountIamGroupsV2#filter}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_groups_v2#page_size DataDatabricksAccountIamGroupsV2#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_groups_v2#filter DataDatabricksAccountIamGroupsV2#filter}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Config.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_groups_v2#page_size DataDatabricksAccountIamGroupsV2#page_size}.

---

### DataDatabricksAccountIamGroupsV2Groups <a name="DataDatabricksAccountIamGroupsV2Groups" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Groups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Groups.Initializer"></a>

```typescript
import { dataDatabricksAccountIamGroupsV2 } from 'rhizo-co-terraform-provider-databricks'

const dataDatabricksAccountIamGroupsV2Groups: dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Groups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Groups.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_groups_v2#group_id DataDatabricksAccountIamGroupsV2#group_id}. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Groups.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/account_iam_groups_v2#group_id DataDatabricksAccountIamGroupsV2#group_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamGroupsV2GroupsList <a name="DataDatabricksAccountIamGroupsV2GroupsList" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.Initializer"></a>

```typescript
import { dataDatabricksAccountIamGroupsV2 } from 'rhizo-co-terraform-provider-databricks'

new dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.get"></a>

```typescript
public get(index: number): DataDatabricksAccountIamGroupsV2GroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Groups">DataDatabricksAccountIamGroupsV2Groups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAccountIamGroupsV2Groups[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Groups">DataDatabricksAccountIamGroupsV2Groups</a>[]

---


### DataDatabricksAccountIamGroupsV2GroupsOutputReference <a name="DataDatabricksAccountIamGroupsV2GroupsOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAccountIamGroupsV2 } from 'rhizo-co-terraform-provider-databricks'

new dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Groups">DataDatabricksAccountIamGroupsV2Groups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2GroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAccountIamGroupsV2Groups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksAccountIamGroupsV2.DataDatabricksAccountIamGroupsV2Groups">DataDatabricksAccountIamGroupsV2Groups</a>

---



