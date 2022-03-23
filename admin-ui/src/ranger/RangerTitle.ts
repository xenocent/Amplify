import { Ranger as TRanger } from "../api/ranger/Ranger";

export const RANGER_TITLE_FIELD = "nama";

export const RangerTitle = (record: TRanger): string => {
  return record.nama || record.id;
};
