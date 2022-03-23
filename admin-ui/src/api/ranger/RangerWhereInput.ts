import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RangerWhereInput = {
  id?: StringFilter;
  nama?: StringNullableFilter;
  rarity?: StringNullableFilter;
};
