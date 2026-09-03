// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksAiGatewayModelServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#page_size DataDatabricksAiGatewayModelServices#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#parent DataDatabricksAiGatewayModelServices#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#provider_config DataDatabricksAiGatewayModelServices#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiGatewayModelServicesProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#view DataDatabricksAiGatewayModelServices#view}
  */
  readonly view?: string;
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#disabled DataDatabricksAiGatewayModelServices#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#parent DataDatabricksAiGatewayModelServices#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#table_name_prefix DataDatabricksAiGatewayModelServices#table_name_prefix}
  */
  readonly tableNamePrefix?: string;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTableToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    parent: cdktf.stringToTerraform(struct!.parent),
    table_name_prefix: cdktf.stringToTerraform(struct!.tableNamePrefix),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTableToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tableNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._tableNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNamePrefix = this._tableNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._parent = undefined;
      this._tableNamePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._parent = value.parent;
      this._tableNamePrefix = value.tableNamePrefix;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // is_deleted - computed: true, optional: false, required: false
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }

  // parent - computed: true, optional: false, required: true
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

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // table_name_prefix - computed: true, optional: true, required: false
  private _tableNamePrefix?: string; 
  public get tableNamePrefix() {
    return this.getStringAttribute('table_name_prefix');
  }
  public set tableNamePrefix(value: string) {
    this._tableNamePrefix = value;
  }
  public resetTableNamePrefix() {
    this._tableNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNamePrefixInput() {
    return this._tableNamePrefix;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#key DataDatabricksAiGatewayModelServices#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#principal DataDatabricksAiGatewayModelServices#principal}
  */
  readonly principal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#renewal_period DataDatabricksAiGatewayModelServices#renewal_period}
  */
  readonly renewalPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#request_tag_key DataDatabricksAiGatewayModelServices#request_tag_key}
  */
  readonly requestTagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#request_tag_value DataDatabricksAiGatewayModelServices#request_tag_value}
  */
  readonly requestTagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#requests DataDatabricksAiGatewayModelServices#requests}
  */
  readonly requests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#tokens DataDatabricksAiGatewayModelServices#tokens}
  */
  readonly tokens?: number;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRateLimitsToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    principal: cdktf.stringToTerraform(struct!.principal),
    renewal_period: cdktf.stringToTerraform(struct!.renewalPeriod),
    request_tag_key: cdktf.stringToTerraform(struct!.requestTagKey),
    request_tag_value: cdktf.stringToTerraform(struct!.requestTagValue),
    requests: cdktf.numberToTerraform(struct!.requests),
    tokens: cdktf.numberToTerraform(struct!.tokens),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRateLimitsToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimits | cdktf.IResolvable): any {
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
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renewal_period: {
      value: cdktf.stringToHclTerraform(struct!.renewalPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_tag_key: {
      value: cdktf.stringToHclTerraform(struct!.requestTagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_tag_value: {
      value: cdktf.stringToHclTerraform(struct!.requestTagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests: {
      value: cdktf.numberToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tokens: {
      value: cdktf.numberToHclTerraform(struct!.tokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._renewalPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewalPeriod = this._renewalPeriod;
    }
    if (this._requestTagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTagKey = this._requestTagKey;
    }
    if (this._requestTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTagValue = this._requestTagValue;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    if (this._tokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._principal = undefined;
      this._renewalPeriod = undefined;
      this._requestTagKey = undefined;
      this._requestTagValue = undefined;
      this._requests = undefined;
      this._tokens = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._principal = value.principal;
      this._renewalPeriod = value.renewalPeriod;
      this._requestTagKey = value.requestTagKey;
      this._requestTagValue = value.requestTagValue;
      this._requests = value.requests;
      this._tokens = value.tokens;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // principal - computed: true, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // renewal_period - computed: true, optional: false, required: true
  private _renewalPeriod?: string; 
  public get renewalPeriod() {
    return this.getStringAttribute('renewal_period');
  }
  public set renewalPeriod(value: string) {
    this._renewalPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalPeriodInput() {
    return this._renewalPeriod;
  }

  // request_tag_key - computed: true, optional: true, required: false
  private _requestTagKey?: string; 
  public get requestTagKey() {
    return this.getStringAttribute('request_tag_key');
  }
  public set requestTagKey(value: string) {
    this._requestTagKey = value;
  }
  public resetRequestTagKey() {
    this._requestTagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTagKeyInput() {
    return this._requestTagKey;
  }

  // request_tag_value - computed: true, optional: true, required: false
  private _requestTagValue?: string; 
  public get requestTagValue() {
    return this.getStringAttribute('request_tag_value');
  }
  public set requestTagValue(value: string) {
    this._requestTagValue = value;
  }
  public resetRequestTagValue() {
    this._requestTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTagValueInput() {
    return this._requestTagValue;
  }

  // requests - computed: true, optional: true, required: false
  private _requests?: number; 
  public get requests() {
    return this.getNumberAttribute('requests');
  }
  public set requests(value: number) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }

  // tokens - computed: true, optional: true, required: false
  private _tokens?: number; 
  public get tokens() {
    return this.getNumberAttribute('tokens');
  }
  public set tokens(value: number) {
    this._tokens = value;
  }
  public resetTokens() {
    this._tokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens;
  }
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimitsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimits[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimitsOutputReference {
    return new DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#model DataDatabricksAiGatewayModelServices#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#native_api_types DataDatabricksAiGatewayModelServices#native_api_types}
  */
  readonly nativeApiTypes?: string[];
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTargetToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    native_api_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nativeApiTypes),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTargetToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_api_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nativeApiTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._nativeApiTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeApiTypes = this._nativeApiTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._nativeApiTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._nativeApiTypes = value.nativeApiTypes;
    }
  }

  // model - computed: true, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // native_api_types - computed: true, optional: true, required: false
  private _nativeApiTypes?: string[]; 
  public get nativeApiTypes() {
    return this.getListAttribute('native_api_types');
  }
  public set nativeApiTypes(value: string[]) {
    this._nativeApiTypes = value;
  }
  public resetNativeApiTypes() {
    this._nativeApiTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeApiTypesInput() {
    return this._nativeApiTypes;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#model_provider_service DataDatabricksAiGatewayModelServices#model_provider_service}
  */
  readonly modelProviderService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#target DataDatabricksAiGatewayModelServices#target}
  */
  readonly target: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTarget;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_provider_service: cdktf.stringToTerraform(struct!.modelProviderService),
    target: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTargetToTerraform(struct!.target),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_provider_service: {
      value: cdktf.stringToHclTerraform(struct!.modelProviderService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelProviderService !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelProviderService = this._modelProviderService;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelProviderService = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelProviderService = value.modelProviderService;
      this._target.internalValue = value.target;
    }
  }

  // model_provider_service - computed: true, optional: false, required: true
  private _modelProviderService?: string; 
  public get modelProviderService() {
    return this.getStringAttribute('model_provider_service');
  }
  public set modelProviderService(value: string) {
    this._modelProviderService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelProviderServiceInput() {
    return this._modelProviderService;
  }

  // target - computed: true, optional: false, required: true
  private _target = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#model DataDatabricksAiGatewayModelServices#model}
  */
  readonly model: string;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfigToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
    }
  }

  // model - computed: true, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#model_serving_endpoint DataDatabricksAiGatewayModelServices#model_serving_endpoint}
  */
  readonly modelServingEndpoint: string;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfigToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_serving_endpoint: cdktf.stringToTerraform(struct!.modelServingEndpoint),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_serving_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.modelServingEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelServingEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelServingEndpoint = this._modelServingEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelServingEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelServingEndpoint = value.modelServingEndpoint;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // model_serving_endpoint - computed: true, optional: false, required: true
  private _modelServingEndpoint?: string; 
  public get modelServingEndpoint() {
    return this.getStringAttribute('model_serving_endpoint');
  }
  public set modelServingEndpoint(value: string) {
    this._modelServingEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelServingEndpointInput() {
    return this._modelServingEndpoint;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#destination_type DataDatabricksAiGatewayModelServices#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#external_model_config DataDatabricksAiGatewayModelServices#external_model_config}
  */
  readonly externalModelConfig?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#name DataDatabricksAiGatewayModelServices#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#pay_per_token_config DataDatabricksAiGatewayModelServices#pay_per_token_config}
  */
  readonly payPerTokenConfig?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#provisioned_throughput_config DataDatabricksAiGatewayModelServices#provisioned_throughput_config}
  */
  readonly provisionedThroughputConfig?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#traffic_percentage DataDatabricksAiGatewayModelServices#traffic_percentage}
  */
  readonly trafficPercentage?: number;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    external_model_config: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigToTerraform(struct!.externalModelConfig),
    name: cdktf.stringToTerraform(struct!.name),
    pay_per_token_config: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfigToTerraform(struct!.payPerTokenConfig),
    provisioned_throughput_config: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfigToTerraform(struct!.provisionedThroughputConfig),
    traffic_percentage: cdktf.numberToTerraform(struct!.trafficPercentage),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_model_config: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigToHclTerraform(struct!.externalModelConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfig",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pay_per_token_config: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfigToHclTerraform(struct!.payPerTokenConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfig",
    },
    provisioned_throughput_config: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfigToHclTerraform(struct!.provisionedThroughputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfig",
    },
    traffic_percentage: {
      value: cdktf.numberToHclTerraform(struct!.trafficPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._externalModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalModelConfig = this._externalModelConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._payPerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payPerTokenConfig = this._payPerTokenConfig?.internalValue;
    }
    if (this._provisionedThroughputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughputConfig = this._provisionedThroughputConfig?.internalValue;
    }
    if (this._trafficPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPercentage = this._trafficPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationType = undefined;
      this._externalModelConfig.internalValue = undefined;
      this._name = undefined;
      this._payPerTokenConfig.internalValue = undefined;
      this._provisionedThroughputConfig.internalValue = undefined;
      this._trafficPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationType = value.destinationType;
      this._externalModelConfig.internalValue = value.externalModelConfig;
      this._name = value.name;
      this._payPerTokenConfig.internalValue = value.payPerTokenConfig;
      this._provisionedThroughputConfig.internalValue = value.provisionedThroughputConfig;
      this._trafficPercentage = value.trafficPercentage;
    }
  }

  // destination_type - computed: true, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // external_model_config - computed: true, optional: true, required: false
  private _externalModelConfig = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfigOutputReference(this, "external_model_config");
  public get externalModelConfig() {
    return this._externalModelConfig;
  }
  public putExternalModelConfig(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsExternalModelConfig) {
    this._externalModelConfig.internalValue = value;
  }
  public resetExternalModelConfig() {
    this._externalModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalModelConfigInput() {
    return this._externalModelConfig.internalValue;
  }

  // is_deleted - computed: true, optional: false, required: false
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
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

  // pay_per_token_config - computed: true, optional: true, required: false
  private _payPerTokenConfig = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfigOutputReference(this, "pay_per_token_config");
  public get payPerTokenConfig() {
    return this._payPerTokenConfig;
  }
  public putPayPerTokenConfig(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsPayPerTokenConfig) {
    this._payPerTokenConfig.internalValue = value;
  }
  public resetPayPerTokenConfig() {
    this._payPerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payPerTokenConfigInput() {
    return this._payPerTokenConfig.internalValue;
  }

  // provisioned_throughput_config - computed: true, optional: true, required: false
  private _provisionedThroughputConfig = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfigOutputReference(this, "provisioned_throughput_config");
  public get provisionedThroughputConfig() {
    return this._provisionedThroughputConfig;
  }
  public putProvisionedThroughputConfig(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsProvisionedThroughputConfig) {
    this._provisionedThroughputConfig.internalValue = value;
  }
  public resetProvisionedThroughputConfig() {
    this._provisionedThroughputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputConfigInput() {
    return this._provisionedThroughputConfig.internalValue;
  }

  // traffic_percentage - computed: true, optional: true, required: false
  private _trafficPercentage?: number; 
  public get trafficPercentage() {
    return this.getNumberAttribute('traffic_percentage');
  }
  public set trafficPercentage(value: number) {
    this._trafficPercentage = value;
  }
  public resetTrafficPercentage() {
    this._trafficPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPercentageInput() {
    return this._trafficPercentage;
  }
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsOutputReference {
    return new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#model DataDatabricksAiGatewayModelServices#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#native_api_types DataDatabricksAiGatewayModelServices#native_api_types}
  */
  readonly nativeApiTypes?: string[];
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTargetToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    native_api_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nativeApiTypes),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTargetToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_api_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nativeApiTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._nativeApiTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeApiTypes = this._nativeApiTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._nativeApiTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._nativeApiTypes = value.nativeApiTypes;
    }
  }

  // model - computed: true, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // native_api_types - computed: true, optional: true, required: false
  private _nativeApiTypes?: string[]; 
  public get nativeApiTypes() {
    return this.getListAttribute('native_api_types');
  }
  public set nativeApiTypes(value: string[]) {
    this._nativeApiTypes = value;
  }
  public resetNativeApiTypes() {
    this._nativeApiTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeApiTypesInput() {
    return this._nativeApiTypes;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#model_provider_service DataDatabricksAiGatewayModelServices#model_provider_service}
  */
  readonly modelProviderService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#target DataDatabricksAiGatewayModelServices#target}
  */
  readonly target: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTarget;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_provider_service: cdktf.stringToTerraform(struct!.modelProviderService),
    target: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTargetToTerraform(struct!.target),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_provider_service: {
      value: cdktf.stringToHclTerraform(struct!.modelProviderService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelProviderService !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelProviderService = this._modelProviderService;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelProviderService = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelProviderService = value.modelProviderService;
      this._target.internalValue = value.target;
    }
  }

  // model_provider_service - computed: true, optional: false, required: true
  private _modelProviderService?: string; 
  public get modelProviderService() {
    return this.getStringAttribute('model_provider_service');
  }
  public set modelProviderService(value: string) {
    this._modelProviderService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelProviderServiceInput() {
    return this._modelProviderService;
  }

  // target - computed: true, optional: false, required: true
  private _target = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#model DataDatabricksAiGatewayModelServices#model}
  */
  readonly model: string;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfigToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
    }
  }

  // model - computed: true, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#model_serving_endpoint DataDatabricksAiGatewayModelServices#model_serving_endpoint}
  */
  readonly modelServingEndpoint: string;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfigToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_serving_endpoint: cdktf.stringToTerraform(struct!.modelServingEndpoint),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_serving_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.modelServingEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelServingEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelServingEndpoint = this._modelServingEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelServingEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelServingEndpoint = value.modelServingEndpoint;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // model_serving_endpoint - computed: true, optional: false, required: true
  private _modelServingEndpoint?: string; 
  public get modelServingEndpoint() {
    return this.getStringAttribute('model_serving_endpoint');
  }
  public set modelServingEndpoint(value: string) {
    this._modelServingEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelServingEndpointInput() {
    return this._modelServingEndpoint;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#destination_type DataDatabricksAiGatewayModelServices#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#external_model_config DataDatabricksAiGatewayModelServices#external_model_config}
  */
  readonly externalModelConfig?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#name DataDatabricksAiGatewayModelServices#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#pay_per_token_config DataDatabricksAiGatewayModelServices#pay_per_token_config}
  */
  readonly payPerTokenConfig?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#provisioned_throughput_config DataDatabricksAiGatewayModelServices#provisioned_throughput_config}
  */
  readonly provisionedThroughputConfig?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#traffic_percentage DataDatabricksAiGatewayModelServices#traffic_percentage}
  */
  readonly trafficPercentage?: number;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    external_model_config: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigToTerraform(struct!.externalModelConfig),
    name: cdktf.stringToTerraform(struct!.name),
    pay_per_token_config: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfigToTerraform(struct!.payPerTokenConfig),
    provisioned_throughput_config: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfigToTerraform(struct!.provisionedThroughputConfig),
    traffic_percentage: cdktf.numberToTerraform(struct!.trafficPercentage),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_model_config: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigToHclTerraform(struct!.externalModelConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfig",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pay_per_token_config: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfigToHclTerraform(struct!.payPerTokenConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfig",
    },
    provisioned_throughput_config: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfigToHclTerraform(struct!.provisionedThroughputConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfig",
    },
    traffic_percentage: {
      value: cdktf.numberToHclTerraform(struct!.trafficPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._externalModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalModelConfig = this._externalModelConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._payPerTokenConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payPerTokenConfig = this._payPerTokenConfig?.internalValue;
    }
    if (this._provisionedThroughputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedThroughputConfig = this._provisionedThroughputConfig?.internalValue;
    }
    if (this._trafficPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficPercentage = this._trafficPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationType = undefined;
      this._externalModelConfig.internalValue = undefined;
      this._name = undefined;
      this._payPerTokenConfig.internalValue = undefined;
      this._provisionedThroughputConfig.internalValue = undefined;
      this._trafficPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationType = value.destinationType;
      this._externalModelConfig.internalValue = value.externalModelConfig;
      this._name = value.name;
      this._payPerTokenConfig.internalValue = value.payPerTokenConfig;
      this._provisionedThroughputConfig.internalValue = value.provisionedThroughputConfig;
      this._trafficPercentage = value.trafficPercentage;
    }
  }

  // destination_type - computed: true, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // external_model_config - computed: true, optional: true, required: false
  private _externalModelConfig = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfigOutputReference(this, "external_model_config");
  public get externalModelConfig() {
    return this._externalModelConfig;
  }
  public putExternalModelConfig(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsExternalModelConfig) {
    this._externalModelConfig.internalValue = value;
  }
  public resetExternalModelConfig() {
    this._externalModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalModelConfigInput() {
    return this._externalModelConfig.internalValue;
  }

  // is_deleted - computed: true, optional: false, required: false
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
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

  // pay_per_token_config - computed: true, optional: true, required: false
  private _payPerTokenConfig = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfigOutputReference(this, "pay_per_token_config");
  public get payPerTokenConfig() {
    return this._payPerTokenConfig;
  }
  public putPayPerTokenConfig(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsPayPerTokenConfig) {
    this._payPerTokenConfig.internalValue = value;
  }
  public resetPayPerTokenConfig() {
    this._payPerTokenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payPerTokenConfigInput() {
    return this._payPerTokenConfig.internalValue;
  }

  // provisioned_throughput_config - computed: true, optional: true, required: false
  private _provisionedThroughputConfig = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfigOutputReference(this, "provisioned_throughput_config");
  public get provisionedThroughputConfig() {
    return this._provisionedThroughputConfig;
  }
  public putProvisionedThroughputConfig(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsProvisionedThroughputConfig) {
    this._provisionedThroughputConfig.internalValue = value;
  }
  public resetProvisionedThroughputConfig() {
    this._provisionedThroughputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedThroughputConfigInput() {
    return this._provisionedThroughputConfig.internalValue;
  }

  // traffic_percentage - computed: true, optional: true, required: false
  private _trafficPercentage?: number; 
  public get trafficPercentage() {
    return this.getNumberAttribute('traffic_percentage');
  }
  public set trafficPercentage(value: number) {
    this._trafficPercentage = value;
  }
  public resetTrafficPercentage() {
    this._trafficPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPercentageInput() {
    return this._trafficPercentage;
  }
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsOutputReference {
    return new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#destinations DataDatabricksAiGatewayModelServices#destinations}
  */
  readonly destinations?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinations[] | cdktf.IResolvable;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsToTerraform, false)(struct!.destinations),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
    }
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplitting {
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplittingToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplitting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplittingToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplitting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplittingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplitting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplitting | cdktf.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelServicesModelServicesConfigRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#destinations DataDatabricksAiGatewayModelServices#destinations}
  */
  readonly destinations?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#fallback DataDatabricksAiGatewayModelServices#fallback}
  */
  readonly fallback?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallback;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#first_token_timeout DataDatabricksAiGatewayModelServices#first_token_timeout}
  */
  readonly firstTokenTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#traffic_splitting DataDatabricksAiGatewayModelServices#traffic_splitting}
  */
  readonly trafficSplitting?: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplitting;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsToTerraform, false)(struct!.destinations),
    fallback: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackToTerraform(struct!.fallback),
    first_token_timeout: cdktf.stringToTerraform(struct!.firstTokenTimeout),
    traffic_splitting: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplittingToTerraform(struct!.trafficSplitting),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfigRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsList",
    },
    fallback: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallback",
    },
    first_token_timeout: {
      value: cdktf.stringToHclTerraform(struct!.firstTokenTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_splitting: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplittingToHclTerraform(struct!.trafficSplitting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplitting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfigRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._fallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback?.internalValue;
    }
    if (this._firstTokenTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstTokenTimeout = this._firstTokenTimeout;
    }
    if (this._trafficSplitting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSplitting = this._trafficSplitting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
      this._fallback.internalValue = undefined;
      this._firstTokenTimeout = undefined;
      this._trafficSplitting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
      this._fallback.internalValue = value.fallback;
      this._firstTokenTimeout = value.firstTokenTimeout;
      this._trafficSplitting.internalValue = value.trafficSplitting;
    }
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // fallback - computed: true, optional: true, required: false
  private _fallback = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // first_token_timeout - computed: true, optional: true, required: false
  private _firstTokenTimeout?: string; 
  public get firstTokenTimeout() {
    return this.getStringAttribute('first_token_timeout');
  }
  public set firstTokenTimeout(value: string) {
    this._firstTokenTimeout = value;
  }
  public resetFirstTokenTimeout() {
    this._firstTokenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstTokenTimeoutInput() {
    return this._firstTokenTimeout;
  }

  // traffic_splitting - computed: true, optional: true, required: false
  private _trafficSplitting = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplittingOutputReference(this, "traffic_splitting");
  public get trafficSplitting() {
    return this._trafficSplitting;
  }
  public putTrafficSplitting(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingTrafficSplitting) {
    this._trafficSplitting.internalValue = value;
  }
  public resetTrafficSplitting() {
    this._trafficSplitting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplittingInput() {
    return this._trafficSplitting.internalValue;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#inference_table DataDatabricksAiGatewayModelServices#inference_table}
  */
  readonly inferenceTable?: DataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#rate_limits DataDatabricksAiGatewayModelServices#rate_limits}
  */
  readonly rateLimits?: DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimits[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#routing DataDatabricksAiGatewayModelServices#routing}
  */
  readonly routing?: DataDatabricksAiGatewayModelServicesModelServicesConfigRouting;
}

export function dataDatabricksAiGatewayModelServicesModelServicesConfigToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inference_table: dataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTableToTerraform(struct!.inferenceTable),
    rate_limits: cdktf.listMapper(dataDatabricksAiGatewayModelServicesModelServicesConfigRateLimitsToTerraform, false)(struct!.rateLimits),
    routing: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingToTerraform(struct!.routing),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inference_table: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTableToHclTerraform(struct!.inferenceTable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTable",
    },
    rate_limits: {
      value: cdktf.listMapperHcl(dataDatabricksAiGatewayModelServicesModelServicesConfigRateLimitsToHclTerraform, false)(struct!.rateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimitsList",
    },
    routing: {
      value: dataDatabricksAiGatewayModelServicesModelServicesConfigRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesConfigRouting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inferenceTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceTable = this._inferenceTable?.internalValue;
    }
    if (this._rateLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimits = this._rateLimits?.internalValue;
    }
    if (this._routing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inferenceTable.internalValue = undefined;
      this._rateLimits.internalValue = undefined;
      this._routing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inferenceTable.internalValue = value.inferenceTable;
      this._rateLimits.internalValue = value.rateLimits;
      this._routing.internalValue = value.routing;
    }
  }

  // inference_table - computed: true, optional: true, required: false
  private _inferenceTable = new DataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTableOutputReference(this, "inference_table");
  public get inferenceTable() {
    return this._inferenceTable;
  }
  public putInferenceTable(value: DataDatabricksAiGatewayModelServicesModelServicesConfigInferenceTable) {
    this._inferenceTable.internalValue = value;
  }
  public resetInferenceTable() {
    this._inferenceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceTableInput() {
    return this._inferenceTable.internalValue;
  }

  // rate_limits - computed: true, optional: true, required: false
  private _rateLimits = new DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimitsList(this, "rate_limits", false);
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRateLimits[] | cdktf.IResolvable) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // routing - computed: true, optional: true, required: false
  private _routing = new DataDatabricksAiGatewayModelServicesModelServicesConfigRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: DataDatabricksAiGatewayModelServicesModelServicesConfigRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }
}
export interface DataDatabricksAiGatewayModelServicesModelServicesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#workspace_id DataDatabricksAiGatewayModelServices#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiGatewayModelServicesModelServicesProviderConfigToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesProviderConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServicesProviderConfig | cdktf.IResolvable): any {
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

export class DataDatabricksAiGatewayModelServicesModelServicesProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServicesProviderConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServicesProviderConfig | cdktf.IResolvable | undefined) {
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
export interface DataDatabricksAiGatewayModelServicesModelServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#name DataDatabricksAiGatewayModelServices#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#provider_config DataDatabricksAiGatewayModelServices#provider_config}
  */
  readonly providerConfig?: DataDatabricksAiGatewayModelServicesModelServicesProviderConfig;
}

export function dataDatabricksAiGatewayModelServicesModelServicesToTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    provider_config: dataDatabricksAiGatewayModelServicesModelServicesProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksAiGatewayModelServicesModelServicesToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesModelServices): any {
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
      value: dataDatabricksAiGatewayModelServicesModelServicesProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksAiGatewayModelServicesModelServicesProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksAiGatewayModelServicesModelServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksAiGatewayModelServicesModelServices | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServicesModelServices | undefined) {
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

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataDatabricksAiGatewayModelServicesModelServicesConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // effective_owner - computed: true, optional: false, required: false
  public get effectiveOwner() {
    return this.getStringAttribute('effective_owner');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // metastore_id - computed: true, optional: false, required: false
  public get metastoreId() {
    return this.getStringAttribute('metastore_id');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksAiGatewayModelServicesModelServicesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiGatewayModelServicesModelServicesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // supported_api_types - computed: true, optional: false, required: false
  public get supportedApiTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_api_types'));
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataDatabricksAiGatewayModelServicesModelServicesList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksAiGatewayModelServicesModelServices[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksAiGatewayModelServicesModelServicesOutputReference {
    return new DataDatabricksAiGatewayModelServicesModelServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksAiGatewayModelServicesProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#workspace_id DataDatabricksAiGatewayModelServices#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksAiGatewayModelServicesProviderConfigToTerraform(struct?: DataDatabricksAiGatewayModelServicesProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksAiGatewayModelServicesProviderConfigToHclTerraform(struct?: DataDatabricksAiGatewayModelServicesProviderConfig | cdktf.IResolvable): any {
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

export class DataDatabricksAiGatewayModelServicesProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksAiGatewayModelServicesProviderConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksAiGatewayModelServicesProviderConfig | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services databricks_ai_gateway_model_services}
*/
export class DataDatabricksAiGatewayModelServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_ai_gateway_model_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksAiGatewayModelServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksAiGatewayModelServices to import
  * @param importFromId The id of the existing DataDatabricksAiGatewayModelServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksAiGatewayModelServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_ai_gateway_model_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/ai_gateway_model_services databricks_ai_gateway_model_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksAiGatewayModelServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksAiGatewayModelServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_ai_gateway_model_services',
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
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // model_services - computed: true, optional: false, required: false
  private _modelServices = new DataDatabricksAiGatewayModelServicesModelServicesList(this, "model_services", false);
  public get modelServices() {
    return this._modelServices;
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

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksAiGatewayModelServicesProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksAiGatewayModelServicesProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktf.numberToTerraform(this._pageSize),
      parent: cdktf.stringToTerraform(this._parent),
      provider_config: dataDatabricksAiGatewayModelServicesProviderConfigToTerraform(this._providerConfig.internalValue),
      view: cdktf.stringToTerraform(this._view),
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
        value: dataDatabricksAiGatewayModelServicesProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksAiGatewayModelServicesProviderConfig",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
