import type { IAnsLibrary } from '../app'

export interface IProcessPrice {
  item_cd?: string | null
  item_nm?: string | null
  category_div?: number | null
  material_div?: number | null
  processing_place_div?: number | null
  number_sheet_fr?: number | null
  number_sheet_to?: number | null
  color_div?: number | null
  sales_amt?: number | null
  cre_user_cd?: string | null
  cre_user_nm?: string | null
  cre_tm?: string | null
  upd_user_cd?: string | null
  upd_user_nm?: string | null
  upd_tm?: string | null
  is_new?: boolean
  idx?: number | -1
}

export interface IProcessPriceKey {
  item_cd?: string | null
  item_nm?: string | null
  category_div?: number | null
  material_div?: number | null
  processing_place_div?: number | null
  number_sheet_fr?: number | null
  number_sheet_to?: number | null
  color_div?: number | null
}

export interface IInitData {
  category_div: Array<IAnsLibrary>
  material_div: Array<IAnsLibrary>
  processing_location_div: Array<IAnsLibrary>
  number_of_color_div: Array<IAnsLibrary>
}

export interface ISearchResponse {
  data: Array<IProcessPrice>
}

export interface ISearchConditionProps {
  condition: ISearchCondition
  category_div: Array<IOption>
  material_div: Array<IOption>
  processing_location_div: Array<IOption>
}

export interface IGetInitDataResponse extends IAnsResponse {
  data: IInitData
}

export interface ITableProcessPriceProps {
  processPrices: Array<IProcessPrice>
  category_div: Array<IOption>
  material_div: Array<IOption>
  processing_location_div: Array<IOption>
  number_of_color_div: Array<IOption>
  addToDeletePrice: (price: IProcessPrice) => void
  duplicates: Object
}

export interface ISearchCondition {
  item_cd: string | null
  item_nm: string | null
  item_nm_rf?: string | null
  category_div: number | null
  material_div: number | null
  processing_location_div: number | null
}