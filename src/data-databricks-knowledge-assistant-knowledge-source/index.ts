// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksKnowledgeAssistantKnowledgeSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source#name DataDatabricksKnowledgeAssistantKnowledgeSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source#provider_config DataDatabricksKnowledgeAssistantKnowledgeSource#provider_config}
  */
  readonly providerConfig?: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig;
}
export interface DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source#file_col DataDatabricksKnowledgeAssistantKnowledgeSource#file_col}
  */
  readonly fileCol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source#table_name DataDatabricksKnowledgeAssistantKnowledgeSource#table_name}
  */
  readonly tableName: string;
}

export function dataDatabricksKnowledgeAssistantKnowledgeSourceFileTableToTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_col: cdktf.stringToTerraform(struct!.fileCol),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function dataDatabricksKnowledgeAssistantKnowledgeSourceFileTableToHclTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_col: {
      value: cdktf.stringToHclTerraform(struct!.fileCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileCol = this._fileCol;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksKnowledgeAssistantKnowledgeSourceFileTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileCol = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileCol = value.fileCol;
      this._tableName = value.tableName;
    }
  }

  // file_col - computed: true, optional: false, required: true
  private _fileCol?: string; 
  public get fileCol() {
    return this.getStringAttribute('file_col');
  }
  public set fileCol(value: string) {
    this._fileCol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileColInput() {
    return this._fileCol;
  }

  // table_name - computed: true, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface DataDatabricksKnowledgeAssistantKnowledgeSourceFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source#path DataDatabricksKnowledgeAssistantKnowledgeSource#path}
  */
  readonly path: string;
}

export function dataDatabricksKnowledgeAssistantKnowledgeSourceFilesToTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourceFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataDatabricksKnowledgeAssistantKnowledgeSourceFilesToHclTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourceFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksKnowledgeAssistantKnowledgeSourceFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksKnowledgeAssistantKnowledgeSourceFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: true, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataDatabricksKnowledgeAssistantKnowledgeSourceIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source#doc_uri_col DataDatabricksKnowledgeAssistantKnowledgeSource#doc_uri_col}
  */
  readonly docUriCol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source#index_name DataDatabricksKnowledgeAssistantKnowledgeSource#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source#text_col DataDatabricksKnowledgeAssistantKnowledgeSource#text_col}
  */
  readonly textCol: string;
}

export function dataDatabricksKnowledgeAssistantKnowledgeSourceIndexToTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourceIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    doc_uri_col: cdktf.stringToTerraform(struct!.docUriCol),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    text_col: cdktf.stringToTerraform(struct!.textCol),
  }
}


export function dataDatabricksKnowledgeAssistantKnowledgeSourceIndexToHclTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourceIndex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    doc_uri_col: {
      value: cdktf.stringToHclTerraform(struct!.docUriCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_col: {
      value: cdktf.stringToHclTerraform(struct!.textCol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksKnowledgeAssistantKnowledgeSourceIndex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._docUriCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.docUriCol = this._docUriCol;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._textCol !== undefined) {
      hasAnyValues = true;
      internalValueResult.textCol = this._textCol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksKnowledgeAssistantKnowledgeSourceIndex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._docUriCol = undefined;
      this._indexName = undefined;
      this._textCol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._docUriCol = value.docUriCol;
      this._indexName = value.indexName;
      this._textCol = value.textCol;
    }
  }

  // doc_uri_col - computed: true, optional: false, required: true
  private _docUriCol?: string; 
  public get docUriCol() {
    return this.getStringAttribute('doc_uri_col');
  }
  public set docUriCol(value: string) {
    this._docUriCol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get docUriColInput() {
    return this._docUriCol;
  }

  // index_name - computed: true, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // text_col - computed: true, optional: false, required: true
  private _textCol?: string; 
  public get textCol() {
    return this.getStringAttribute('text_col');
  }
  public set textCol(value: string) {
    this._textCol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textColInput() {
    return this._textCol;
  }
}
export interface DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source#workspace_id DataDatabricksKnowledgeAssistantKnowledgeSource#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigToTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigToHclTerraform(struct?: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig | cdktf.IResolvable): any {
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

export class DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source databricks_knowledge_assistant_knowledge_source}
*/
export class DataDatabricksKnowledgeAssistantKnowledgeSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_knowledge_assistant_knowledge_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksKnowledgeAssistantKnowledgeSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksKnowledgeAssistantKnowledgeSource to import
  * @param importFromId The id of the existing DataDatabricksKnowledgeAssistantKnowledgeSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksKnowledgeAssistantKnowledgeSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_knowledge_assistant_knowledge_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/knowledge_assistant_knowledge_source databricks_knowledge_assistant_knowledge_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksKnowledgeAssistantKnowledgeSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksKnowledgeAssistantKnowledgeSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_knowledge_assistant_knowledge_source',
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
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // file_table - computed: true, optional: false, required: false
  private _fileTable = new DataDatabricksKnowledgeAssistantKnowledgeSourceFileTableOutputReference(this, "file_table");
  public get fileTable() {
    return this._fileTable;
  }

  // files - computed: true, optional: false, required: false
  private _files = new DataDatabricksKnowledgeAssistantKnowledgeSourceFilesOutputReference(this, "files");
  public get files() {
    return this._files;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: true, optional: false, required: false
  private _index = new DataDatabricksKnowledgeAssistantKnowledgeSourceIndexOutputReference(this, "index");
  public get index() {
    return this._index;
  }

  // knowledge_cutoff_time - computed: true, optional: false, required: false
  public get knowledgeCutoffTime() {
    return this.getStringAttribute('knowledge_cutoff_time');
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
  private _providerConfig = new DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      provider_config: dataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksKnowledgeAssistantKnowledgeSourceProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
