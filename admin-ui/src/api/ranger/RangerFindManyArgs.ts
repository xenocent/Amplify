import { RangerWhereInput } from "./RangerWhereInput";
import { RangerOrderByInput } from "./RangerOrderByInput";

export type RangerFindManyArgs = {
  where?: RangerWhereInput;
  orderBy?: Array<RangerOrderByInput>;
  skip?: number;
  take?: number;
};
