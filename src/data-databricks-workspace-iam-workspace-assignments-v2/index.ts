/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignments_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignments_v2#page_size DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignments_v2#provider_config DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#provider_config}
  */
  readonly providerConfig?: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig;
}
export interface DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignments_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigToTerraform(struct?: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigToHclTerraform(struct?: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig | cdktf.IResolvable): any {
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

export class DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignments_v2#workspace_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigToTerraform(struct?: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigToHclTerraform(struct?: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig | cdktf.IResolvable): any {
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

export class DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
export interface DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignments_v2#principal_id DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#principal_id}
  */
  readonly principalId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignments_v2#provider_config DataDatabricksWorkspaceIamWorkspaceAssignmentsV2#provider_config}
  */
  readonly providerConfig?: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig;
}

export function dataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsToTerraform(struct?: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal_id: cdktf.numberToTerraform(struct!.principalId),
    provider_config: dataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsToHclTerraform(struct?: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principal_id: {
      value: cdktf.numberToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_config: {
      value: dataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._principalId = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._principalId = value.principalId;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // effective_entitlements - computed: true, optional: false, required: false
  public get effectiveEntitlements() {
    return cdktf.Fn.tolist(this.getListAttribute('effective_entitlements'));
  }

  // entitlements - computed: true, optional: false, required: false
  public get entitlements() {
    return cdktf.Fn.tolist(this.getListAttribute('entitlements'));
  }

  // principal_id - computed: true, optional: false, required: true
  private _principalId?: number; 
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }
  public set principalId(value: number) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getNumberAttribute('workspace_id');
  }
}

export class DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignments[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference {
    return new DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignments_v2 databricks_workspace_iam_workspace_assignments_v2}
*/
export class DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_workspace_iam_workspace_assignments_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 to import
  * @param importFromId The id of the existing DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignments_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksWorkspaceIamWorkspaceAssignmentsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_workspace_iam_workspace_assignments_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/workspace_iam_workspace_assignments_v2 databricks_workspace_iam_workspace_assignments_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_workspace_iam_workspace_assignments_v2',
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
    this._pageSize = config.pageSize;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // workspace_assignments - computed: true, optional: false, required: false
  private _workspaceAssignments = new DataDatabricksWorkspaceIamWorkspaceAssignmentsV2WorkspaceAssignmentsList(this, "workspace_assignments", false);
  public get workspaceAssignments() {
    return this._workspaceAssignments;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktf.numberToTerraform(this._pageSize),
      provider_config: dataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_config: {
        value: dataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksWorkspaceIamWorkspaceAssignmentsV2ProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
