# `postgresCdfConfig` Submodule <a name="`postgresCdfConfig` Submodule" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresCdfConfig <a name="PostgresCdfConfig" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config databricks_postgres_cdf_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.postgres_cdf_config.PostgresCdfConfig;

PostgresCdfConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalog(java.lang.String)
    .parent(java.lang.String)
    .postgresSchema(java.lang.String)
    .schema(java.lang.String)
//  .cdfConfigId(java.lang.String)
//  .providerConfig(PostgresCdfConfigProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#catalog PostgresCdfConfig#catalog}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#parent PostgresCdfConfig#parent}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.postgresSchema">postgresSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#postgres_schema PostgresCdfConfig#postgres_schema}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#schema PostgresCdfConfig#schema}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.cdfConfigId">cdfConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#cdf_config_id PostgresCdfConfig#cdf_config_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig">PostgresCdfConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#provider_config PostgresCdfConfig#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#catalog PostgresCdfConfig#catalog}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#parent PostgresCdfConfig#parent}.

---

##### `postgresSchema`<sup>Required</sup> <a name="postgresSchema" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.postgresSchema"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#postgres_schema PostgresCdfConfig#postgres_schema}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#schema PostgresCdfConfig#schema}.

---

##### `cdfConfigId`<sup>Optional</sup> <a name="cdfConfigId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.cdfConfigId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#cdf_config_id PostgresCdfConfig#cdf_config_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig">PostgresCdfConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#provider_config PostgresCdfConfig#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.resetCdfConfigId">resetCdfConfigId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.putProviderConfig"></a>

```java
public void putProviderConfig(PostgresCdfConfigProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig">PostgresCdfConfigProviderConfig</a>

---

##### `resetCdfConfigId` <a name="resetCdfConfigId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.resetCdfConfigId"></a>

```java
public void resetCdfConfigId()
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresCdfConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.postgres_cdf_config.PostgresCdfConfig;

PostgresCdfConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.postgres_cdf_config.PostgresCdfConfig;

PostgresCdfConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.postgres_cdf_config.PostgresCdfConfig;

PostgresCdfConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.postgres_cdf_config.PostgresCdfConfig;

PostgresCdfConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PostgresCdfConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PostgresCdfConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PostgresCdfConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PostgresCdfConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PostgresCdfConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference">PostgresCdfConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.cdfConfigIdInput">cdfConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.postgresSchemaInput">postgresSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.providerConfigInput">providerConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig">PostgresCdfConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.cdfConfigId">cdfConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.postgresSchema">postgresSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.providerConfig"></a>

```java
public PostgresCdfConfigProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference">PostgresCdfConfigProviderConfigOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `cdfConfigIdInput`<sup>Optional</sup> <a name="cdfConfigIdInput" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.cdfConfigIdInput"></a>

```java
public java.lang.String getCdfConfigIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `postgresSchemaInput`<sup>Optional</sup> <a name="postgresSchemaInput" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.postgresSchemaInput"></a>

```java
public java.lang.String getPostgresSchemaInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.providerConfigInput"></a>

```java
public IResolvable|PostgresCdfConfigProviderConfig getProviderConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig">PostgresCdfConfigProviderConfig</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `cdfConfigId`<sup>Required</sup> <a name="cdfConfigId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.cdfConfigId"></a>

```java
public java.lang.String getCdfConfigId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `postgresSchema`<sup>Required</sup> <a name="postgresSchema" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.postgresSchema"></a>

```java
public java.lang.String getPostgresSchema();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresCdfConfigConfig <a name="PostgresCdfConfigConfig" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.postgres_cdf_config.PostgresCdfConfigConfig;

PostgresCdfConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalog(java.lang.String)
    .parent(java.lang.String)
    .postgresSchema(java.lang.String)
    .schema(java.lang.String)
//  .cdfConfigId(java.lang.String)
//  .providerConfig(PostgresCdfConfigProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#catalog PostgresCdfConfig#catalog}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#parent PostgresCdfConfig#parent}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.postgresSchema">postgresSchema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#postgres_schema PostgresCdfConfig#postgres_schema}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#schema PostgresCdfConfig#schema}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.cdfConfigId">cdfConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#cdf_config_id PostgresCdfConfig#cdf_config_id}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig">PostgresCdfConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#provider_config PostgresCdfConfig#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#catalog PostgresCdfConfig#catalog}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#parent PostgresCdfConfig#parent}.

---

##### `postgresSchema`<sup>Required</sup> <a name="postgresSchema" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.postgresSchema"></a>

```java
public java.lang.String getPostgresSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#postgres_schema PostgresCdfConfig#postgres_schema}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#schema PostgresCdfConfig#schema}.

---

##### `cdfConfigId`<sup>Optional</sup> <a name="cdfConfigId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.cdfConfigId"></a>

```java
public java.lang.String getCdfConfigId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#cdf_config_id PostgresCdfConfig#cdf_config_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigConfig.property.providerConfig"></a>

```java
public PostgresCdfConfigProviderConfig getProviderConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig">PostgresCdfConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#provider_config PostgresCdfConfig#provider_config}.

---

### PostgresCdfConfigProviderConfig <a name="PostgresCdfConfigProviderConfig" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.postgres_cdf_config.PostgresCdfConfigProviderConfig;

PostgresCdfConfigProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#workspace_id PostgresCdfConfig#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/postgres_cdf_config#workspace_id PostgresCdfConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresCdfConfigProviderConfigOutputReference <a name="PostgresCdfConfigProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.postgres_cdf_config.PostgresCdfConfigProviderConfigOutputReference;

new PostgresCdfConfigProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig">PostgresCdfConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|PostgresCdfConfigProviderConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.postgresCdfConfig.PostgresCdfConfigProviderConfig">PostgresCdfConfigProviderConfig</a>

---



