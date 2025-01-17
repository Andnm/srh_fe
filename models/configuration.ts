export interface ConfigurationType {
  baseFareFirst3km?: GeneralConfigData;
  fareFerAdditionalKm?: GeneralConfigData;
  driverProfit?: GeneralConfigData;
  appProfit?: GeneralConfigData;
  peakHours?: TimeConfiguration;
  nightSurcharge?: TimeConfiguration;
  waitingSurcharge?: PerMinutesConfiguration;
  weatherFee?: GeneralConfigData;
  customerCancelFee?: GeneralConfigData;
  searchRadius?: RadiusConfig;
}

export interface GeneralConfigData {
  price: number;
  isPercent: boolean;
}

export interface TimeConfiguration extends GeneralConfigData {
  time: string;
}

export interface PerMinutesConfiguration extends GeneralConfigData {
  perMinutes: number;
}

export interface RadiusConfig {
  distance: number;
  unit: string;
}
