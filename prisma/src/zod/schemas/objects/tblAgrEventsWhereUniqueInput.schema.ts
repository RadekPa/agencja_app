import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  AgrEventID: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'AgrEventID' must be a Decimal",
}).optional()
}).strict();
export const tblAgrEventsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblAgrEventsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsWhereUniqueInput>;
export const tblAgrEventsWhereUniqueInputObjectZodSchema = makeSchema();
