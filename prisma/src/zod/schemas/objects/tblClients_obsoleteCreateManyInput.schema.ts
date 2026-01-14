import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  CustID: z.number().int(),
  RepModeID: z.number().int().optional().nullable(),
  GraalID: z.number().int().optional().nullable(),
  Commission: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
}).optional().nullable(),
  DefAgrDoc: z.string().max(30).optional().nullable(),
  Jurisdiction: z.string().max(200).optional().nullable()
}).strict();
export const tblClients_obsoleteCreateManyInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteCreateManyInput>;
export const tblClients_obsoleteCreateManyInputObjectZodSchema = makeSchema();
