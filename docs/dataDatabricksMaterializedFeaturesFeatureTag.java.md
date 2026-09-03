# `dataDatabricksMaterializedFeaturesFeatureTag` Submodule <a name="`dataDatabricksMaterializedFeaturesFeatureTag` Submodule" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMaterializedFeaturesFeatureTag <a name="DataDatabricksMaterializedFeaturesFeatureTag" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag databricks_materialized_features_feature_tag}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_materialized_features_feature_tag.DataDatabricksMaterializedFeaturesFeatureTag;

DataDatabricksMaterializedFeaturesFeatureTag.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .key(java.lang.String)
//  .providerConfig(DataDatabricksMaterializedFeaturesFeatureTagProviderConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#key DataDatabricksMaterializedFeaturesFeatureTag#key}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#provider_config DataDatabricksMaterializedFeaturesFeatureTag#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#key DataDatabricksMaterializedFeaturesFeatureTag#key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#provider_config DataDatabricksMaterializedFeaturesFeatureTag#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProviderConfig` <a name="putProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.putProviderConfig"></a>

```java
public void putProviderConfig(DataDatabricksMaterializedFeaturesFeatureTagProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetProviderConfig"></a>

```java
public void resetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_materialized_features_feature_tag.DataDatabricksMaterializedFeaturesFeatureTag;

DataDatabricksMaterializedFeaturesFeatureTag.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_materialized_features_feature_tag.DataDatabricksMaterializedFeaturesFeatureTag;

DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_materialized_features_feature_tag.DataDatabricksMaterializedFeaturesFeatureTag;

DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_materialized_features_feature_tag.DataDatabricksMaterializedFeaturesFeatureTag;

DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksMaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksMaterializedFeaturesFeatureTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksMaterializedFeaturesFeatureTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMaterializedFeaturesFeatureTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfigInput">providerConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfig"></a>

```java
public DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference getProviderConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference">DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.providerConfigInput"></a>

```java
public IResolvable|DataDatabricksMaterializedFeaturesFeatureTagProviderConfig getProviderConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMaterializedFeaturesFeatureTagConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_materialized_features_feature_tag.DataDatabricksMaterializedFeaturesFeatureTagConfig;

DataDatabricksMaterializedFeaturesFeatureTagConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .key(java.lang.String)
//  .providerConfig(DataDatabricksMaterializedFeaturesFeatureTagProviderConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#key DataDatabricksMaterializedFeaturesFeatureTag#key}. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#provider_config DataDatabricksMaterializedFeaturesFeatureTag#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#key DataDatabricksMaterializedFeaturesFeatureTag#key}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.providerConfig"></a>

```java
public DataDatabricksMaterializedFeaturesFeatureTagProviderConfig getProviderConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#provider_config DataDatabricksMaterializedFeaturesFeatureTag#provider_config}.

---

### DataDatabricksMaterializedFeaturesFeatureTagProviderConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagProviderConfig" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_materialized_features_feature_tag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig;

DataDatabricksMaterializedFeaturesFeatureTagProviderConfig.builder()
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#workspace_id DataDatabricksMaterializedFeaturesFeatureTag#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/materialized_features_feature_tag#workspace_id DataDatabricksMaterializedFeaturesFeatureTag#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_materialized_features_feature_tag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference;

new DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatabricksMaterializedFeaturesFeatureTagProviderConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#rhizo-co-terraform-provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagProviderConfig">DataDatabricksMaterializedFeaturesFeatureTagProviderConfig</a>

---



