# `dataDatabricksExternalMetadata` Submodule <a name="`dataDatabricksExternalMetadata` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksExternalMetadata <a name="DataDatabricksExternalMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata databricks_external_metadata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer"></a>

```typescript
import { dataDatabricksExternalMetadata } from 'rhizo-co-terraform-provider-databricks'

new dataDatabricksExternalMetadata.DataDatabricksExternalMetadata(scope: Construct, id: string, config: DataDatabricksExternalMetadataConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig">DataDatabricksExternalMetadataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig">DataDatabricksExternalMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksExternalMetadataProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksExternalMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct"></a>

```typescript
import { dataDatabricksExternalMetadata } from 'rhizo-co-terraform-provider-databricks'

dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement"></a>

```typescript
import { dataDatabricksExternalMetadata } from 'rhizo-co-terraform-provider-databricks'

dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource"></a>

```typescript
import { dataDatabricksExternalMetadata } from 'rhizo-co-terraform-provider-databricks'

dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport"></a>

```typescript
import { dataDatabricksExternalMetadata } from 'rhizo-co-terraform-provider-databricks'

dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksExternalMetadata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksExternalMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksExternalMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksExternalMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.properties">properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference">DataDatabricksExternalMetadataProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemType">systemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `columns`<sup>Required</sup> <a name="columns" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.properties"></a>

```typescript
public readonly properties: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksExternalMetadataProviderConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference">DataDatabricksExternalMetadataProviderConfigOutputReference</a>

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.systemType"></a>

```typescript
public readonly systemType: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksExternalMetadataProviderConfig;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadata.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksExternalMetadataConfig <a name="DataDatabricksExternalMetadataConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.Initializer"></a>

```typescript
import { dataDatabricksExternalMetadata } from 'rhizo-co-terraform-provider-databricks'

const dataDatabricksExternalMetadataConfig: dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#provider_config DataDatabricksExternalMetadata#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#name DataDatabricksExternalMetadata#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksExternalMetadataProviderConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#provider_config DataDatabricksExternalMetadata#provider_config}.

---

### DataDatabricksExternalMetadataProviderConfig <a name="DataDatabricksExternalMetadataProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksExternalMetadata } from 'rhizo-co-terraform-provider-databricks'

const dataDatabricksExternalMetadataProviderConfig: dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#workspace_id DataDatabricksExternalMetadata#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/external_metadata#workspace_id DataDatabricksExternalMetadata#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksExternalMetadataProviderConfigOutputReference <a name="DataDatabricksExternalMetadataProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksExternalMetadata } from 'rhizo-co-terraform-provider-databricks'

new dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksExternalMetadataProviderConfig;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksExternalMetadata.DataDatabricksExternalMetadataProviderConfig">DataDatabricksExternalMetadataProviderConfig</a>

---



