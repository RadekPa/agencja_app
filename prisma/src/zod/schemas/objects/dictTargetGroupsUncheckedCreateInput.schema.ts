import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  TargetGroupID: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'TargetGroupID' must be a Decimal",
}),
  TargetGroupDesc: z.string().max(50).optional().nullable()
}).strict();
export const dictTargetGroupsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictTargetGroupsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTargetGroupsUncheckedCreateInput>;
export const dictTargetGroupsUncheckedCreateInputObjectZodSchema = makeSchema();
