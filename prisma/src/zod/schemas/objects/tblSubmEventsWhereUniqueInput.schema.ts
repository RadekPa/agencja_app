import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  SubmEventID: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'SubmEventID' must be a Decimal",
}).optional()
}).strict();
export const tblSubmEventsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblSubmEventsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsWhereUniqueInput>;
export const tblSubmEventsWhereUniqueInputObjectZodSchema = makeSchema();
