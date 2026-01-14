import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  PubID: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'PubID' must be a Decimal",
}).optional(),
  PubAbb: z.string().max(20).optional()
}).strict();
export const tblPublishersWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblPublishersWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersWhereUniqueInput>;
export const tblPublishersWhereUniqueInputObjectZodSchema = makeSchema();
