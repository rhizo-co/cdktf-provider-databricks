// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAiSearchIndexesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#page_size DataDatabricksAiSearchIndexes#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#parent DataDatabricksAiSearchIndexes#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#provider_config DataDatabricksAiSearchIndexes#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiSearchIndexesProviderConfig;
}
export interface DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_model_endpoint DataDatabricksAiSearchIndexes#embedding_model_endpoint}
  */
  readonly embeddingModelEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#model_endpoint_name_for_query DataDatabricksAiSearchIndexes#model_endpoint_name_for_query}
  */
  readonly modelEndpointNameForQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}
  */
  readonly name?: string;
}

export function dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsToTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_model_endpoint: cdktf.stringToTerraform(struct!.embeddingModelEndpoint),
    model_endpoint_name_for_query: cdktf.stringToTerraform(struct!.modelEndpointNameForQuery),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsToHclTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_model_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.embeddingModelEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_endpoint_name_for_query: {
      value: cdktf.stringToHclTerraform(struct!.modelEndpointNameForQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModelEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelEndpoint = this._embeddingModelEndpoint;
    }
    if (this._modelEndpointNameForQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelEndpointNameForQuery = this._modelEndpointNameForQuery;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingModelEndpoint = undefined;
      this._modelEndpointNameForQuery = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingModelEndpoint = value.embeddingModelEndpoint;
      this._modelEndpointNameForQuery = value.modelEndpointNameForQuery;
      this._name = value.name;
    }
  }

  // embedding_model_endpoint - computed: true, optional: true, required: false
  private _embeddingModelEndpoint?: string; 
  public get embeddingModelEndpoint() {
    return this.getStringAttribute('embedding_model_endpoint');
  }
  public set embeddingModelEndpoint(value: string) {
    this._embeddingModelEndpoint = value;
  }
  public resetEmbeddingModelEndpoint() {
    this._embeddingModelEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelEndpointInput() {
    return this._embeddingModelEndpoint;
  }

  // model_endpoint_name_for_query - computed: true, optional: true, required: false
  private _modelEndpointNameForQuery?: string; 
  public get modelEndpointNameForQuery() {
    return this.getStringAttribute('model_endpoint_name_for_query');
  }
  public set modelEndpointNameForQuery(value: string) {
    this._modelEndpointNameForQuery = value;
  }
  public resetModelEndpointNameForQuery() {
    this._modelEndpointNameForQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelEndpointNameForQueryInput() {
    return this._modelEndpointNameForQuery;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference {
    return new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_dimension DataDatabricksAiSearchIndexes#embedding_dimension}
  */
  readonly embeddingDimension?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}
  */
  readonly name?: string;
}

export function dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsToTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_dimension: cdktf.numberToTerraform(struct!.embeddingDimension),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsToHclTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_dimension: {
      value: cdktf.numberToHclTerraform(struct!.embeddingDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDimension = this._embeddingDimension;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingDimension = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingDimension = value.embeddingDimension;
      this._name = value.name;
    }
  }

  // embedding_dimension - computed: true, optional: true, required: false
  private _embeddingDimension?: number; 
  public get embeddingDimension() {
    return this.getNumberAttribute('embedding_dimension');
  }
  public set embeddingDimension(value: number) {
    this._embeddingDimension = value;
  }
  public resetEmbeddingDimension() {
    this._embeddingDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDimensionInput() {
    return this._embeddingDimension;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference {
    return new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#columns_to_sync DataDatabricksAiSearchIndexes#columns_to_sync}
  */
  readonly columnsToSync?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_source_columns DataDatabricksAiSearchIndexes#embedding_source_columns}
  */
  readonly embeddingSourceColumns?: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_vector_columns DataDatabricksAiSearchIndexes#embedding_vector_columns}
  */
  readonly embeddingVectorColumns?: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_writeback_table DataDatabricksAiSearchIndexes#embedding_writeback_table}
  */
  readonly embeddingWritebackTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#pipeline_type DataDatabricksAiSearchIndexes#pipeline_type}
  */
  readonly pipelineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#source_table DataDatabricksAiSearchIndexes#source_table}
  */
  readonly sourceTable?: string;
}

export function dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecToTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns_to_sync: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnsToSync),
    embedding_source_columns: cdktf.listMapper(dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsToTerraform, false)(struct!.embeddingSourceColumns),
    embedding_vector_columns: cdktf.listMapper(dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsToTerraform, false)(struct!.embeddingVectorColumns),
    embedding_writeback_table: cdktf.stringToTerraform(struct!.embeddingWritebackTable),
    pipeline_type: cdktf.stringToTerraform(struct!.pipelineType),
    source_table: cdktf.stringToTerraform(struct!.sourceTable),
  }
}


export function dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecToHclTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns_to_sync: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnsToSync),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    embedding_source_columns: {
      value: cdktf.listMapperHcl(dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsToHclTerraform, false)(struct!.embeddingSourceColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList",
    },
    embedding_vector_columns: {
      value: cdktf.listMapperHcl(dataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsToHclTerraform, false)(struct!.embeddingVectorColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList",
    },
    embedding_writeback_table: {
      value: cdktf.stringToHclTerraform(struct!.embeddingWritebackTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_type: {
      value: cdktf.stringToHclTerraform(struct!.pipelineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_table: {
      value: cdktf.stringToHclTerraform(struct!.sourceTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnsToSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnsToSync = this._columnsToSync;
    }
    if (this._embeddingSourceColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingSourceColumns = this._embeddingSourceColumns?.internalValue;
    }
    if (this._embeddingVectorColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingVectorColumns = this._embeddingVectorColumns?.internalValue;
    }
    if (this._embeddingWritebackTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingWritebackTable = this._embeddingWritebackTable;
    }
    if (this._pipelineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineType = this._pipelineType;
    }
    if (this._sourceTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTable = this._sourceTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnsToSync = undefined;
      this._embeddingSourceColumns.internalValue = undefined;
      this._embeddingVectorColumns.internalValue = undefined;
      this._embeddingWritebackTable = undefined;
      this._pipelineType = undefined;
      this._sourceTable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnsToSync = value.columnsToSync;
      this._embeddingSourceColumns.internalValue = value.embeddingSourceColumns;
      this._embeddingVectorColumns.internalValue = value.embeddingVectorColumns;
      this._embeddingWritebackTable = value.embeddingWritebackTable;
      this._pipelineType = value.pipelineType;
      this._sourceTable = value.sourceTable;
    }
  }

  // columns_to_sync - computed: true, optional: true, required: false
  private _columnsToSync?: string[]; 
  public get columnsToSync() {
    return this.getListAttribute('columns_to_sync');
  }
  public set columnsToSync(value: string[]) {
    this._columnsToSync = value;
  }
  public resetColumnsToSync() {
    this._columnsToSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsToSyncInput() {
    return this._columnsToSync;
  }

  // embedding_source_columns - computed: true, optional: true, required: false
  private _embeddingSourceColumns = new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumnsList(this, "embedding_source_columns", false);
  public get embeddingSourceColumns() {
    return this._embeddingSourceColumns;
  }
  public putEmbeddingSourceColumns(value: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable) {
    this._embeddingSourceColumns.internalValue = value;
  }
  public resetEmbeddingSourceColumns() {
    this._embeddingSourceColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingSourceColumnsInput() {
    return this._embeddingSourceColumns.internalValue;
  }

  // embedding_vector_columns - computed: true, optional: true, required: false
  private _embeddingVectorColumns = new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumnsList(this, "embedding_vector_columns", false);
  public get embeddingVectorColumns() {
    return this._embeddingVectorColumns;
  }
  public putEmbeddingVectorColumns(value: DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable) {
    this._embeddingVectorColumns.internalValue = value;
  }
  public resetEmbeddingVectorColumns() {
    this._embeddingVectorColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingVectorColumnsInput() {
    return this._embeddingVectorColumns.internalValue;
  }

  // embedding_writeback_table - computed: true, optional: true, required: false
  private _embeddingWritebackTable?: string; 
  public get embeddingWritebackTable() {
    return this.getStringAttribute('embedding_writeback_table');
  }
  public set embeddingWritebackTable(value: string) {
    this._embeddingWritebackTable = value;
  }
  public resetEmbeddingWritebackTable() {
    this._embeddingWritebackTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingWritebackTableInput() {
    return this._embeddingWritebackTable;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // pipeline_type - computed: true, optional: false, required: true
  private _pipelineType?: string; 
  public get pipelineType() {
    return this.getStringAttribute('pipeline_type');
  }
  public set pipelineType(value: string) {
    this._pipelineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTypeInput() {
    return this._pipelineType;
  }

  // source_table - computed: true, optional: true, required: false
  private _sourceTable?: string; 
  public get sourceTable() {
    return this.getStringAttribute('source_table');
  }
  public set sourceTable(value: string) {
    this._sourceTable = value;
  }
  public resetSourceTable() {
    this._sourceTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableInput() {
    return this._sourceTable;
  }
}
export interface DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_model_endpoint DataDatabricksAiSearchIndexes#embedding_model_endpoint}
  */
  readonly embeddingModelEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#model_endpoint_name_for_query DataDatabricksAiSearchIndexes#model_endpoint_name_for_query}
  */
  readonly modelEndpointNameForQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}
  */
  readonly name?: string;
}

export function dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsToTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_model_endpoint: cdktf.stringToTerraform(struct!.embeddingModelEndpoint),
    model_endpoint_name_for_query: cdktf.stringToTerraform(struct!.modelEndpointNameForQuery),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsToHclTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_model_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.embeddingModelEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_endpoint_name_for_query: {
      value: cdktf.stringToHclTerraform(struct!.modelEndpointNameForQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModelEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelEndpoint = this._embeddingModelEndpoint;
    }
    if (this._modelEndpointNameForQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelEndpointNameForQuery = this._modelEndpointNameForQuery;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingModelEndpoint = undefined;
      this._modelEndpointNameForQuery = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingModelEndpoint = value.embeddingModelEndpoint;
      this._modelEndpointNameForQuery = value.modelEndpointNameForQuery;
      this._name = value.name;
    }
  }

  // embedding_model_endpoint - computed: true, optional: true, required: false
  private _embeddingModelEndpoint?: string; 
  public get embeddingModelEndpoint() {
    return this.getStringAttribute('embedding_model_endpoint');
  }
  public set embeddingModelEndpoint(value: string) {
    this._embeddingModelEndpoint = value;
  }
  public resetEmbeddingModelEndpoint() {
    this._embeddingModelEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelEndpointInput() {
    return this._embeddingModelEndpoint;
  }

  // model_endpoint_name_for_query - computed: true, optional: true, required: false
  private _modelEndpointNameForQuery?: string; 
  public get modelEndpointNameForQuery() {
    return this.getStringAttribute('model_endpoint_name_for_query');
  }
  public set modelEndpointNameForQuery(value: string) {
    this._modelEndpointNameForQuery = value;
  }
  public resetModelEndpointNameForQuery() {
    this._modelEndpointNameForQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelEndpointNameForQueryInput() {
    return this._modelEndpointNameForQuery;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference {
    return new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_dimension DataDatabricksAiSearchIndexes#embedding_dimension}
  */
  readonly embeddingDimension?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}
  */
  readonly name?: string;
}

export function dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsToTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_dimension: cdktf.numberToTerraform(struct!.embeddingDimension),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsToHclTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_dimension: {
      value: cdktf.numberToHclTerraform(struct!.embeddingDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDimension = this._embeddingDimension;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingDimension = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingDimension = value.embeddingDimension;
      this._name = value.name;
    }
  }

  // embedding_dimension - computed: true, optional: true, required: false
  private _embeddingDimension?: number; 
  public get embeddingDimension() {
    return this.getNumberAttribute('embedding_dimension');
  }
  public set embeddingDimension(value: number) {
    this._embeddingDimension = value;
  }
  public resetEmbeddingDimension() {
    this._embeddingDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDimensionInput() {
    return this._embeddingDimension;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference {
    return new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_source_columns DataDatabricksAiSearchIndexes#embedding_source_columns}
  */
  readonly embeddingSourceColumns?: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#embedding_vector_columns DataDatabricksAiSearchIndexes#embedding_vector_columns}
  */
  readonly embeddingVectorColumns?: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#schema_json DataDatabricksAiSearchIndexes#schema_json}
  */
  readonly schemaJson?: string;
}

export function dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecToTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_source_columns: cdktf.listMapper(dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsToTerraform, false)(struct!.embeddingSourceColumns),
    embedding_vector_columns: cdktf.listMapper(dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsToTerraform, false)(struct!.embeddingVectorColumns),
    schema_json: cdktf.stringToTerraform(struct!.schemaJson),
  }
}


export function dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecToHclTerraform(struct?: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_source_columns: {
      value: cdktf.listMapperHcl(dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsToHclTerraform, false)(struct!.embeddingSourceColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList",
    },
    embedding_vector_columns: {
      value: cdktf.listMapperHcl(dataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsToHclTerraform, false)(struct!.embeddingVectorColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList",
    },
    schema_json: {
      value: cdktf.stringToHclTerraform(struct!.schemaJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingSourceColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingSourceColumns = this._embeddingSourceColumns?.internalValue;
    }
    if (this._embeddingVectorColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingVectorColumns = this._embeddingVectorColumns?.internalValue;
    }
    if (this._schemaJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaJson = this._schemaJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._embeddingSourceColumns.internalValue = undefined;
      this._embeddingVectorColumns.internalValue = undefined;
      this._schemaJson = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._embeddingSourceColumns.internalValue = value.embeddingSourceColumns;
      this._embeddingVectorColumns.internalValue = value.embeddingVectorColumns;
      this._schemaJson = value.schemaJson;
    }
  }

  // embedding_source_columns - computed: true, optional: true, required: false
  private _embeddingSourceColumns = new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumnsList(this, "embedding_source_columns", false);
  public get embeddingSourceColumns() {
    return this._embeddingSourceColumns;
  }
  public putEmbeddingSourceColumns(value: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable) {
    this._embeddingSourceColumns.internalValue = value;
  }
  public resetEmbeddingSourceColumns() {
    this._embeddingSourceColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingSourceColumnsInput() {
    return this._embeddingSourceColumns.internalValue;
  }

  // embedding_vector_columns - computed: true, optional: true, required: false
  private _embeddingVectorColumns = new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumnsList(this, "embedding_vector_columns", false);
  public get embeddingVectorColumns() {
    return this._embeddingVectorColumns;
  }
  public putEmbeddingVectorColumns(value: DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable) {
    this._embeddingVectorColumns.internalValue = value;
  }
  public resetEmbeddingVectorColumns() {
    this._embeddingVectorColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingVectorColumnsInput() {
    return this._embeddingVectorColumns.internalValue;
  }

  // schema_json - computed: true, optional: true, required: false
  private _schemaJson?: string; 
  public get schemaJson() {
    return this.getStringAttribute('schema_json');
  }
  public set schemaJson(value: string) {
    this._schemaJson = value;
  }
  public resetSchemaJson() {
    this._schemaJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaJsonInput() {
    return this._schemaJson;
  }
}
export interface DataDatabricksAiSearchIndexesIndexesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#workspace_id DataDatabricksAiSearchIndexes#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiSearchIndexesIndexesProviderConfigToTerraform(struct?: DataDatabricksAiSearchIndexesIndexesProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiSearchIndexesIndexesProviderConfigToHclTerraform(struct?: DataDatabricksAiSearchIndexesIndexesProviderConfig | cdktf.IResolvable): any {
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

export class DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchIndexesIndexesProviderConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiSearchIndexesIndexesProviderConfig | cdktf.IResolvable | undefined) {
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
export interface DataDatabricksAiSearchIndexesIndexesStatus {
}

export function dataDatabricksAiSearchIndexesIndexesStatusToTerraform(struct?: DataDatabricksAiSearchIndexesIndexesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksAiSearchIndexesIndexesStatusToHclTerraform(struct?: DataDatabricksAiSearchIndexesIndexesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAiSearchIndexesIndexesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchIndexesIndexesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexesIndexesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_url - computed: true, optional: false, required: false
  public get indexUrl() {
    return this.getStringAttribute('index_url');
  }

  // indexed_row_count - computed: true, optional: false, required: false
  public get indexedRowCount() {
    return this.getNumberAttribute('indexed_row_count');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getBooleanAttribute('ready');
  }
}
export interface DataDatabricksAiSearchIndexesIndexes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#name DataDatabricksAiSearchIndexes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#provider_config DataDatabricksAiSearchIndexes#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiSearchIndexesIndexesProviderConfig;
}

export function dataDatabricksAiSearchIndexesIndexesToTerraform(struct?: DataDatabricksAiSearchIndexesIndexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    provider_config: dataDatabricksAiSearchIndexesIndexesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksAiSearchIndexesIndexesToHclTerraform(struct?: DataDatabricksAiSearchIndexesIndexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_config: {
      value: dataDatabricksAiSearchIndexesIndexesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiSearchIndexesIndexesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiSearchIndexesIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAiSearchIndexesIndexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiSearchIndexesIndexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // delta_sync_index_spec - computed: true, optional: false, required: false
  private _deltaSyncIndexSpec = new DataDatabricksAiSearchIndexesIndexesDeltaSyncIndexSpecOutputReference(this, "delta_sync_index_spec");
  public get deltaSyncIndexSpec() {
    return this._deltaSyncIndexSpec;
  }

  // direct_access_index_spec - computed: true, optional: false, required: false
  private _directAccessIndexSpec = new DataDatabricksAiSearchIndexesIndexesDirectAccessIndexSpecOutputReference(this, "direct_access_index_spec");
  public get directAccessIndexSpec() {
    return this._directAccessIndexSpec;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // index_subtype - computed: true, optional: false, required: false
  public get indexSubtype() {
    return this.getStringAttribute('index_subtype');
  }

  // index_type - computed: true, optional: false, required: false
  public get indexType() {
    return this.getStringAttribute('index_type');
  }

  // name - computed: true, optional: false, required: true
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

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksAiSearchIndexesIndexesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiSearchIndexesIndexesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataDatabricksAiSearchIndexesIndexesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}

export class DataDatabricksAiSearchIndexesIndexesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAiSearchIndexesIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAiSearchIndexesIndexesOutputReference {
    return new DataDatabricksAiSearchIndexesIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiSearchIndexesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#workspace_id DataDatabricksAiSearchIndexes#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiSearchIndexesProviderConfigToTerraform(struct?: DataDatabricksAiSearchIndexesProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiSearchIndexesProviderConfigToHclTerraform(struct?: DataDatabricksAiSearchIndexesProviderConfig | cdktf.IResolvable): any {
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

export class DataDatabricksAiSearchIndexesProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiSearchIndexesProviderConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiSearchIndexesProviderConfig | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes databricks_ai_search_indexes}
*/
export class DataDatabricksAiSearchIndexes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_search_indexes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksAiSearchIndexes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAiSearchIndexes to import
  * @param importFromId The id of the existing DataDatabricksAiSearchIndexes that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAiSearchIndexes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_search_indexes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_search_indexes databricks_ai_search_indexes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAiSearchIndexesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAiSearchIndexesConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_search_indexes',
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
    this._parent = config.parent;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // indexes - computed: true, optional: false, required: false
  private _indexes = new DataDatabricksAiSearchIndexesIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }

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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksAiSearchIndexesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiSearchIndexesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktf.numberToTerraform(this._pageSize),
      parent: cdktf.stringToTerraform(this._parent),
      provider_config: dataDatabricksAiSearchIndexesProviderConfigToTerraform(this._providerConfig.internalValue),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksAiSearchIndexesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAiSearchIndexesProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
