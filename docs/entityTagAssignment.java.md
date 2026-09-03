# `entityTagAssignment` Submodule <a name="`entityTagAssignment` Submodule" id="rhizo-co-terraform-provider-databricks.entityTagAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityTagAssignment <a name="EntityTagAssignment" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment databricks_entity_tag_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entity_tag_assignment.EntityTagAssignment;

EntityTagAssignment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entityName(java.lang.String)
    .entityType(java.lang.String)
    .tagKey(java.lang.String)
//  .providerConfig(EntityTagAssignmentProviderConfig)
//  .tagValue(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.entityName">entityName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#entity_name EntityTagAssignment#entity_name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#entity_type EntityTagAssignment#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#tag_key EntityTagAssignment#tag_key}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#provider_config EntityTagAssignment#provider_config}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#tag_value EntityTagAssignment#tag_value}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.entityName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#entity_name EntityTagAssignment#entity_name}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.entityType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#entity_type EntityTagAssignment#entity_type}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.tagKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#tag_key EntityTagAssignment#tag_key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#provider_config EntityTagAssignment#provider_config}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.Initializer.parameter.tagValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#tag_value EntityTagAssignment#tag_value}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.putProviderConfig"></a>

```java
public void putProviderConfig(EntityTagAssignmentProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

##### `resetTagValue` <a name="resetTagValue" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.resetTagValue"></a>

```java
public void resetTagValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EntityTagAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entity_tag_assignment.EntityTagAssignment;

EntityTagAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entity_tag_assignment.EntityTagAssignment;

EntityTagAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entity_tag_assignment.EntityTagAssignment;

EntityTagAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entity_tag_assignment.EntityTagAssignment;

EntityTagAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EntityTagAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EntityTagAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EntityTagAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EntityTagAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EntityTagAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference">EntityTagAssignmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityNameInput">entityNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.providerConfigInput">providerConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityName">entityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.providerConfig"></a>

```java
public EntityTagAssignmentProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference">EntityTagAssignmentProviderConfigOutputReference</a>

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityNameInput"></a>

```java
public java.lang.String getEntityNameInput();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.providerConfigInput"></a>

```java
public IResolvable|EntityTagAssignmentProviderConfig getProviderConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EntityTagAssignmentConfig <a name="EntityTagAssignmentConfig" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entity_tag_assignment.EntityTagAssignmentConfig;

EntityTagAssignmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entityName(java.lang.String)
    .entityType(java.lang.String)
    .tagKey(java.lang.String)
//  .providerConfig(EntityTagAssignmentProviderConfig)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.entityName">entityName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#entity_name EntityTagAssignment#entity_name}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.entityType">entityType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#entity_type EntityTagAssignment#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#tag_key EntityTagAssignment#tag_key}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#provider_config EntityTagAssignment#provider_config}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#tag_value EntityTagAssignment#tag_value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#entity_name EntityTagAssignment#entity_name}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#entity_type EntityTagAssignment#entity_type}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#tag_key EntityTagAssignment#tag_key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.providerConfig"></a>

```java
public EntityTagAssignmentProviderConfig getProviderConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#provider_config EntityTagAssignment#provider_config}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentConfig.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#tag_value EntityTagAssignment#tag_value}.

---

### EntityTagAssignmentProviderConfig <a name="EntityTagAssignmentProviderConfig" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entity_tag_assignment.EntityTagAssignmentProviderConfig;

EntityTagAssignmentProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#workspace_id EntityTagAssignment#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/entity_tag_assignment#workspace_id EntityTagAssignment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EntityTagAssignmentProviderConfigOutputReference <a name="EntityTagAssignmentProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.entity_tag_assignment.EntityTagAssignmentProviderConfigOutputReference;

new EntityTagAssignmentProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|EntityTagAssignmentProviderConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.entityTagAssignment.EntityTagAssignmentProviderConfig">EntityTagAssignmentProviderConfig</a>

---



