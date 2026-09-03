/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksQualityMonitorV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}
  */
  readonly objectType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#provider_config DataDatabricksQualityMonitorV2#provider_config}
  */
  readonly providerConfig?: DataDatabricksQualityMonitorV2ProviderConfig;
}
export interface DataDatabricksQualityMonitorV2AnomalyDetectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#excluded_table_full_names DataDatabricksQualityMonitorV2#excluded_table_full_names}
  */
  readonly excludedTableFullNames?: string[];
}

export function dataDatabricksQualityMonitorV2AnomalyDetectionConfigToTerraform(struct?: DataDatabricksQualityMonitorV2AnomalyDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_table_full_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedTableFullNames),
  }
}


export function dataDatabricksQualityMonitorV2AnomalyDetectionConfigToHclTerraform(struct?: DataDatabricksQualityMonitorV2AnomalyDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_table_full_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedTableFullNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorV2AnomalyDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedTableFullNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedTableFullNames = this._excludedTableFullNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorV2AnomalyDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedTableFullNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedTableFullNames = value.excludedTableFullNames;
    }
  }

  // excluded_table_full_names - computed: true, optional: true, required: false
  private _excludedTableFullNames?: string[]; 
  public get excludedTableFullNames() {
    return this.getListAttribute('excluded_table_full_names');
  }
  public set excludedTableFullNames(value: string[]) {
    this._excludedTableFullNames = value;
  }
  public resetExcludedTableFullNames() {
    this._excludedTableFullNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTableFullNamesInput() {
    return this._excludedTableFullNames;
  }

  // last_run_id - computed: true, optional: false, required: false
  public get lastRunId() {
    return this.getStringAttribute('last_run_id');
  }

  // latest_run_status - computed: true, optional: false, required: false
  public get latestRunStatus() {
    return this.getStringAttribute('latest_run_status');
  }
}
export interface DataDatabricksQualityMonitorV2ProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#workspace_id DataDatabricksQualityMonitorV2#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksQualityMonitorV2ProviderConfigToTerraform(struct?: DataDatabricksQualityMonitorV2ProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksQualityMonitorV2ProviderConfigToHclTerraform(struct?: DataDatabricksQualityMonitorV2ProviderConfig | cdktf.IResolvable): any {
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

export class DataDatabricksQualityMonitorV2ProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorV2ProviderConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksQualityMonitorV2ProviderConfig | cdktf.IResolvable | undefined) {
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
export interface DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}
  */
  readonly upperBound?: number;
}

export function dataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckToTerraform(struct?: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    upper_bound: cdktf.numberToTerraform(struct!.upperBound),
  }
}


export function dataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckToHclTerraform(struct?: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upper_bound: {
      value: cdktf.numberToHclTerraform(struct!.upperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._upperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBound = this._upperBound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
      this._upperBound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
      this._upperBound = value.upperBound;
    }
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // upper_bound - computed: true, optional: true, required: false
  private _upperBound?: number; 
  public get upperBound() {
    return this.getNumberAttribute('upper_bound');
  }
  public set upperBound(value: number) {
    this._upperBound = value;
  }
  public resetUpperBound() {
    this._upperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound;
  }
}
export interface DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#lower_bound DataDatabricksQualityMonitorV2#lower_bound}
  */
  readonly lowerBound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#upper_bound DataDatabricksQualityMonitorV2#upper_bound}
  */
  readonly upperBound?: number;
}

export function dataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckToTerraform(struct?: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    lower_bound: cdktf.numberToTerraform(struct!.lowerBound),
    upper_bound: cdktf.numberToTerraform(struct!.upperBound),
  }
}


export function dataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckToHclTerraform(struct?: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    lower_bound: {
      value: cdktf.numberToHclTerraform(struct!.lowerBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_bound: {
      value: cdktf.numberToHclTerraform(struct!.upperBound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._lowerBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBound = this._lowerBound;
    }
    if (this._upperBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBound = this._upperBound;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
      this._lowerBound = undefined;
      this._upperBound = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
      this._lowerBound = value.lowerBound;
      this._upperBound = value.upperBound;
    }
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // lower_bound - computed: true, optional: true, required: false
  private _lowerBound?: number; 
  public get lowerBound() {
    return this.getNumberAttribute('lower_bound');
  }
  public set lowerBound(value: number) {
    this._lowerBound = value;
  }
  public resetLowerBound() {
    this._lowerBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundInput() {
    return this._lowerBound;
  }

  // upper_bound - computed: true, optional: true, required: false
  private _upperBound?: number; 
  public get upperBound() {
    return this.getNumberAttribute('upper_bound');
  }
  public set upperBound(value: number) {
    this._upperBound = value;
  }
  public resetUpperBound() {
    this._upperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound;
  }
}
export interface DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#column_names DataDatabricksQualityMonitorV2#column_names}
  */
  readonly columnNames?: string[];
}

export function dataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckToTerraform(struct?: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
  }
}


export function dataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckToHclTerraform(struct?: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
    }
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }
}
export interface DataDatabricksQualityMonitorV2ValidityCheckConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#name DataDatabricksQualityMonitorV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#percent_null_validity_check DataDatabricksQualityMonitorV2#percent_null_validity_check}
  */
  readonly percentNullValidityCheck?: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#range_validity_check DataDatabricksQualityMonitorV2#range_validity_check}
  */
  readonly rangeValidityCheck?: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#uniqueness_validity_check DataDatabricksQualityMonitorV2#uniqueness_validity_check}
  */
  readonly uniquenessValidityCheck?: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck;
}

export function dataDatabricksQualityMonitorV2ValidityCheckConfigurationsToTerraform(struct?: DataDatabricksQualityMonitorV2ValidityCheckConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    percent_null_validity_check: dataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckToTerraform(struct!.percentNullValidityCheck),
    range_validity_check: dataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckToTerraform(struct!.rangeValidityCheck),
    uniqueness_validity_check: dataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckToTerraform(struct!.uniquenessValidityCheck),
  }
}


export function dataDatabricksQualityMonitorV2ValidityCheckConfigurationsToHclTerraform(struct?: DataDatabricksQualityMonitorV2ValidityCheckConfigurations): any {
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
    percent_null_validity_check: {
      value: dataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckToHclTerraform(struct!.percentNullValidityCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck",
    },
    range_validity_check: {
      value: dataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckToHclTerraform(struct!.rangeValidityCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck",
    },
    uniqueness_validity_check: {
      value: dataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckToHclTerraform(struct!.uniquenessValidityCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatabricksQualityMonitorV2ValidityCheckConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._percentNullValidityCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentNullValidityCheck = this._percentNullValidityCheck?.internalValue;
    }
    if (this._rangeValidityCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeValidityCheck = this._rangeValidityCheck?.internalValue;
    }
    if (this._uniquenessValidityCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniquenessValidityCheck = this._uniquenessValidityCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksQualityMonitorV2ValidityCheckConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._percentNullValidityCheck.internalValue = undefined;
      this._rangeValidityCheck.internalValue = undefined;
      this._uniquenessValidityCheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._percentNullValidityCheck.internalValue = value.percentNullValidityCheck;
      this._rangeValidityCheck.internalValue = value.rangeValidityCheck;
      this._uniquenessValidityCheck.internalValue = value.uniquenessValidityCheck;
    }
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

  // percent_null_validity_check - computed: true, optional: true, required: false
  private _percentNullValidityCheck = new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheckOutputReference(this, "percent_null_validity_check");
  public get percentNullValidityCheck() {
    return this._percentNullValidityCheck;
  }
  public putPercentNullValidityCheck(value: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsPercentNullValidityCheck) {
    this._percentNullValidityCheck.internalValue = value;
  }
  public resetPercentNullValidityCheck() {
    this._percentNullValidityCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentNullValidityCheckInput() {
    return this._percentNullValidityCheck.internalValue;
  }

  // range_validity_check - computed: true, optional: true, required: false
  private _rangeValidityCheck = new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheckOutputReference(this, "range_validity_check");
  public get rangeValidityCheck() {
    return this._rangeValidityCheck;
  }
  public putRangeValidityCheck(value: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsRangeValidityCheck) {
    this._rangeValidityCheck.internalValue = value;
  }
  public resetRangeValidityCheck() {
    this._rangeValidityCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeValidityCheckInput() {
    return this._rangeValidityCheck.internalValue;
  }

  // uniqueness_validity_check - computed: true, optional: true, required: false
  private _uniquenessValidityCheck = new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheckOutputReference(this, "uniqueness_validity_check");
  public get uniquenessValidityCheck() {
    return this._uniquenessValidityCheck;
  }
  public putUniquenessValidityCheck(value: DataDatabricksQualityMonitorV2ValidityCheckConfigurationsUniquenessValidityCheck) {
    this._uniquenessValidityCheck.internalValue = value;
  }
  public resetUniquenessValidityCheck() {
    this._uniquenessValidityCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniquenessValidityCheckInput() {
    return this._uniquenessValidityCheck.internalValue;
  }
}

export class DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksQualityMonitorV2ValidityCheckConfigurations[] | cdktf.IResolvable

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
  public get(index: number): DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference {
    return new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2 databricks_quality_monitor_v2}
*/
export class DataDatabricksQualityMonitorV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_quality_monitor_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksQualityMonitorV2 to import
  * @param importFromId The id of the existing DataDatabricksQualityMonitorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksQualityMonitorV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_quality_monitor_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/quality_monitor_v2 databricks_quality_monitor_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksQualityMonitorV2Config
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksQualityMonitorV2Config) {
    super(scope, id, {
      terraformResourceType: 'databricks_quality_monitor_v2',
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
    this._objectId = config.objectId;
    this._objectType = config.objectType;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anomaly_detection_config - computed: true, optional: false, required: false
  private _anomalyDetectionConfig = new DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference(this, "anomaly_detection_config");
  public get anomalyDetectionConfig() {
    return this._anomalyDetectionConfig;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksQualityMonitorV2ProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksQualityMonitorV2ProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // validity_check_configurations - computed: true, optional: false, required: false
  private _validityCheckConfigurations = new DataDatabricksQualityMonitorV2ValidityCheckConfigurationsList(this, "validity_check_configurations", false);
  public get validityCheckConfigurations() {
    return this._validityCheckConfigurations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      object_id: cdktf.stringToTerraform(this._objectId),
      object_type: cdktf.stringToTerraform(this._objectType),
      provider_config: dataDatabricksQualityMonitorV2ProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksQualityMonitorV2ProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksQualityMonitorV2ProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
