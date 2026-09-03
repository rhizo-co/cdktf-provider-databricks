// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/workspace_iam_workspace_identity_detail_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceIamWorkspaceIdentityDetailV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/workspace_iam_workspace_identity_detail_v2#provider_config WorkspaceIamWorkspaceIdentityDetailV2#provider_config}
  */
  readonly providerConfig?: WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/workspace_iam_workspace_identity_detail_v2#workspace_identity_status WorkspaceIamWorkspaceIdentityDetailV2#workspace_identity_status}
  */
  readonly workspaceIdentityStatus?: string;
}
export interface WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/workspace_iam_workspace_identity_detail_v2#workspace_id WorkspaceIamWorkspaceIdentityDetailV2#workspace_id}
  */
  readonly workspaceId?: string;
}

export function workspaceIamWorkspaceIdentityDetailV2ProviderConfigToTerraform(struct?: WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function workspaceIamWorkspaceIdentityDetailV2ProviderConfigToHclTerraform(struct?: WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig | cdktf.IResolvable): any {
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

export class WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/workspace_iam_workspace_identity_detail_v2 databricks_workspace_iam_workspace_identity_detail_v2}
*/
export class WorkspaceIamWorkspaceIdentityDetailV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_workspace_iam_workspace_identity_detail_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceIamWorkspaceIdentityDetailV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceIamWorkspaceIdentityDetailV2 to import
  * @param importFromId The id of the existing WorkspaceIamWorkspaceIdentityDetailV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/workspace_iam_workspace_identity_detail_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceIamWorkspaceIdentityDetailV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_workspace_iam_workspace_identity_detail_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/workspace_iam_workspace_identity_detail_v2 databricks_workspace_iam_workspace_identity_detail_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceIamWorkspaceIdentityDetailV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: WorkspaceIamWorkspaceIdentityDetailV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_workspace_iam_workspace_identity_detail_v2',
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
    this._providerConfig.internalValue = config.providerConfig;
    this._workspaceIdentityStatus = config.workspaceIdentityStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_type - computed: true, optional: false, required: false
  public get assignmentType() {
    return this.getStringAttribute('assignment_type');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }

  // principal_type - computed: true, optional: false, required: false
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // workspace_identity_status - computed: false, optional: true, required: false
  private _workspaceIdentityStatus?: string; 
  public get workspaceIdentityStatus() {
    return this.getStringAttribute('workspace_identity_status');
  }
  public set workspaceIdentityStatus(value: string) {
    this._workspaceIdentityStatus = value;
  }
  public resetWorkspaceIdentityStatus() {
    this._workspaceIdentityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdentityStatusInput() {
    return this._workspaceIdentityStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      provider_config: workspaceIamWorkspaceIdentityDetailV2ProviderConfigToTerraform(this._providerConfig.internalValue),
      workspace_identity_status: cdktf.stringToTerraform(this._workspaceIdentityStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      provider_config: {
        value: workspaceIamWorkspaceIdentityDetailV2ProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig",
      },
      workspace_identity_status: {
        value: cdktf.stringToHclTerraform(this._workspaceIdentityStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
