import {
  AhbapData,
  BabalaData,
  HospitalData,
  PharmacyData,
  SafePlaceData,
  SatelliteData,
  TeleteyitData,
  TwitterData,
} from "@/services/responses";

export type FeedChannelBabalaProps = BabalaData;
export type FeedChannelTwitterProps = TwitterData;
export type FeedChannelAhbapProps = AhbapData;
export type FeedChannelHospitalProps = HospitalData;
export type FeedChannelTeleteyitProps = TeleteyitData;
export type FeedChannelSatelliteProps = SatelliteData;
export type FeedChannelPharmacyProps = PharmacyData;
export type FeedChannelSafePlacesProps = SafePlaceData;
