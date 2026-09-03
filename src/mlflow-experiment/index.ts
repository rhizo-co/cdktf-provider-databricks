// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MlflowExperimentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}
  */
  readonly artifactLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#description MlflowExperiment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}
  */
  readonly experimentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#id MlflowExperiment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}
  */
  readonly lastUpdateTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}
  */
  readonly lifecycleStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#name MlflowExperiment#name}
  */
  readonly name: string;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#provider_config MlflowExperiment#provider_config}
  */
  readonly providerConfig?: MlflowExperimentProviderConfig;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#tags MlflowExperiment#tags}
  */
  readonly tags?: MlflowExperimentTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#timeouts MlflowExperiment#timeouts}
  */
  readonly timeouts?: MlflowExperimentTimeouts;
  /**
  * trace_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#trace_location MlflowExperiment#trace_location}
  */
  readonly traceLocation?: MlflowExperimentTraceLocation;
}
export interface MlflowExperimentProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#workspace_id MlflowExperiment#workspace_id}
  */
  readonly workspaceId?: string;
}

export function mlflowExperimentProviderConfigToTerraform(struct?: MlflowExperimentProviderConfigOutputReference | MlflowExperimentProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function mlflowExperimentProviderConfigToHclTerraform(struct?: MlflowExperimentProviderConfigOutputReference | MlflowExperimentProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlflowExperimentProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MlflowExperimentProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlflowExperimentProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspaceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspaceId = value.workspaceId;
    }
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface MlflowExperimentTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#key MlflowExperiment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#value MlflowExperiment#value}
  */
  readonly value?: string;
}

export function mlflowExperimentTagsToTerraform(struct?: MlflowExperimentTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mlflowExperimentTagsToHclTerraform(struct?: MlflowExperimentTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlflowExperimentTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MlflowExperimentTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlflowExperimentTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MlflowExperimentTagsList extends cdktf.ComplexList {
  public internalValue? : MlflowExperimentTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MlflowExperimentTagsOutputReference {
    return new MlflowExperimentTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MlflowExperimentTimeouts {
}

export function mlflowExperimentTimeoutsToTerraform(struct?: MlflowExperimentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mlflowExperimentTimeoutsToHclTerraform(struct?: MlflowExperimentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MlflowExperimentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MlflowExperimentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlflowExperimentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface MlflowExperimentTraceLocationUcTraceLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#catalog MlflowExperiment#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#effective_table_prefix MlflowExperiment#effective_table_prefix}
  */
  readonly effectiveTablePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#schema MlflowExperiment#schema}
  */
  readonly schema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#table_prefix MlflowExperiment#table_prefix}
  */
  readonly tablePrefix?: string;
}

export function mlflowExperimentTraceLocationUcTraceLocationToTerraform(struct?: MlflowExperimentTraceLocationUcTraceLocationOutputReference | MlflowExperimentTraceLocationUcTraceLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    effective_table_prefix: cdktf.stringToTerraform(struct!.effectiveTablePrefix),
    schema: cdktf.stringToTerraform(struct!.schema),
    table_prefix: cdktf.stringToTerraform(struct!.tablePrefix),
  }
}


export function mlflowExperimentTraceLocationUcTraceLocationToHclTerraform(struct?: MlflowExperimentTraceLocationUcTraceLocationOutputReference | MlflowExperimentTraceLocationUcTraceLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_table_prefix: {
      value: cdktf.stringToHclTerraform(struct!.effectiveTablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlflowExperimentTraceLocationUcTraceLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MlflowExperimentTraceLocationUcTraceLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._effectiveTablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveTablePrefix = this._effectiveTablePrefix;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._tablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePrefix = this._tablePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlflowExperimentTraceLocationUcTraceLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._effectiveTablePrefix = undefined;
      this._schema = undefined;
      this._tablePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._effectiveTablePrefix = value.effectiveTablePrefix;
      this._schema = value.schema;
      this._tablePrefix = value.tablePrefix;
    }
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // effective_table_prefix - computed: true, optional: true, required: false
  private _effectiveTablePrefix?: string; 
  public get effectiveTablePrefix() {
    return this.getStringAttribute('effective_table_prefix');
  }
  public set effectiveTablePrefix(value: string) {
    this._effectiveTablePrefix = value;
  }
  public resetEffectiveTablePrefix() {
    this._effectiveTablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTablePrefixInput() {
    return this._effectiveTablePrefix;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table_prefix - computed: false, optional: true, required: false
  private _tablePrefix?: string; 
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string) {
    this._tablePrefix = value;
  }
  public resetTablePrefix() {
    this._tablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrefixInput() {
    return this._tablePrefix;
  }
}
export interface MlflowExperimentTraceLocation {
  /**
  * uc_trace_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#uc_trace_location MlflowExperiment#uc_trace_location}
  */
  readonly ucTraceLocation?: MlflowExperimentTraceLocationUcTraceLocation;
}

export function mlflowExperimentTraceLocationToTerraform(struct?: MlflowExperimentTraceLocationOutputReference | MlflowExperimentTraceLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uc_trace_location: mlflowExperimentTraceLocationUcTraceLocationToTerraform(struct!.ucTraceLocation),
  }
}


export function mlflowExperimentTraceLocationToHclTerraform(struct?: MlflowExperimentTraceLocationOutputReference | MlflowExperimentTraceLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uc_trace_location: {
      value: mlflowExperimentTraceLocationUcTraceLocationToHclTerraform(struct!.ucTraceLocation),
      isBlock: true,
      type: "list",
      storageClassType: "MlflowExperimentTraceLocationUcTraceLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlflowExperimentTraceLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MlflowExperimentTraceLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ucTraceLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucTraceLocation = this._ucTraceLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlflowExperimentTraceLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ucTraceLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ucTraceLocation.internalValue = value.ucTraceLocation;
    }
  }

  // uc_trace_location - computed: false, optional: true, required: false
  private _ucTraceLocation = new MlflowExperimentTraceLocationUcTraceLocationOutputReference(this, "uc_trace_location");
  public get ucTraceLocation() {
    return this._ucTraceLocation;
  }
  public putUcTraceLocation(value: MlflowExperimentTraceLocationUcTraceLocation) {
    this._ucTraceLocation.internalValue = value;
  }
  public resetUcTraceLocation() {
    this._ucTraceLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucTraceLocationInput() {
    return this._ucTraceLocation.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment databricks_mlflow_experiment}
*/
export class MlflowExperiment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_mlflow_experiment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MlflowExperiment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MlflowExperiment to import
  * @param importFromId The id of the existing MlflowExperiment that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MlflowExperiment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_mlflow_experiment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/mlflow_experiment databricks_mlflow_experiment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MlflowExperimentConfig
  */
  public constructor(scope: Construct, id: string, config: MlflowExperimentConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_mlflow_experiment',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.130.0',
        providerVersionConstraint: '~> 1.130.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactLocation = config.artifactLocation;
    this._creationTime = config.creationTime;
    this._description = config.description;
    this._experimentId = config.experimentId;
    this._id = config.id;
    this._lastUpdateTime = config.lastUpdateTime;
    this._lifecycleStage = config.lifecycleStage;
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._traceLocation.internalValue = config.traceLocation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_location - computed: false, optional: true, required: false
  private _artifactLocation?: string; 
  public get artifactLocation() {
    return this.getStringAttribute('artifact_location');
  }
  public set artifactLocation(value: string) {
    this._artifactLocation = value;
  }
  public resetArtifactLocation() {
    this._artifactLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactLocationInput() {
    return this._artifactLocation;
  }

  // creation_time - computed: true, optional: true, required: false
  private _creationTime?: number; 
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }
  public set creationTime(value: number) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // experiment_id - computed: true, optional: true, required: false
  private _experimentId?: string; 
  public get experimentId() {
    return this.getStringAttribute('experiment_id');
  }
  public set experimentId(value: string) {
    this._experimentId = value;
  }
  public resetExperimentId() {
    this._experimentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentIdInput() {
    return this._experimentId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_update_time - computed: true, optional: true, required: false
  private _lastUpdateTime?: number; 
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }
  public set lastUpdateTime(value: number) {
    this._lastUpdateTime = value;
  }
  public resetLastUpdateTime() {
    this._lastUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateTimeInput() {
    return this._lastUpdateTime;
  }

  // lifecycle_stage - computed: true, optional: true, required: false
  private _lifecycleStage?: string; 
  public get lifecycleStage() {
    return this.getStringAttribute('lifecycle_stage');
  }
  public set lifecycleStage(value: string) {
    this._lifecycleStage = value;
  }
  public resetLifecycleStage() {
    this._lifecycleStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStageInput() {
    return this._lifecycleStage;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new MlflowExperimentProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: MlflowExperimentProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new MlflowExperimentTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MlflowExperimentTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: true
  private _timeouts = new MlflowExperimentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MlflowExperimentTimeouts) {
    this._timeouts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trace_location - computed: false, optional: true, required: false
  private _traceLocation = new MlflowExperimentTraceLocationOutputReference(this, "trace_location");
  public get traceLocation() {
    return this._traceLocation;
  }
  public putTraceLocation(value: MlflowExperimentTraceLocation) {
    this._traceLocation.internalValue = value;
  }
  public resetTraceLocation() {
    this._traceLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLocationInput() {
    return this._traceLocation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_location: cdktf.stringToTerraform(this._artifactLocation),
      creation_time: cdktf.numberToTerraform(this._creationTime),
      description: cdktf.stringToTerraform(this._description),
      experiment_id: cdktf.stringToTerraform(this._experimentId),
      id: cdktf.stringToTerraform(this._id),
      last_update_time: cdktf.numberToTerraform(this._lastUpdateTime),
      lifecycle_stage: cdktf.stringToTerraform(this._lifecycleStage),
      name: cdktf.stringToTerraform(this._name),
      provider_config: mlflowExperimentProviderConfigToTerraform(this._providerConfig.internalValue),
      tags: cdktf.listMapper(mlflowExperimentTagsToTerraform, true)(this._tags.internalValue),
      timeouts: mlflowExperimentTimeoutsToTerraform(this._timeouts.internalValue),
      trace_location: mlflowExperimentTraceLocationToTerraform(this._traceLocation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_location: {
        value: cdktf.stringToHclTerraform(this._artifactLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_time: {
        value: cdktf.numberToHclTerraform(this._creationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      experiment_id: {
        value: cdktf.stringToHclTerraform(this._experimentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_update_time: {
        value: cdktf.numberToHclTerraform(this._lastUpdateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lifecycle_stage: {
        value: cdktf.stringToHclTerraform(this._lifecycleStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: mlflowExperimentProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MlflowExperimentProviderConfigList",
      },
      tags: {
        value: cdktf.listMapperHcl(mlflowExperimentTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MlflowExperimentTagsList",
      },
      timeouts: {
        value: mlflowExperimentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MlflowExperimentTimeouts",
      },
      trace_location: {
        value: mlflowExperimentTraceLocationToHclTerraform(this._traceLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MlflowExperimentTraceLocationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
