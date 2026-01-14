import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  CustID: z.number().int(),
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
export const tblClients_obsoleteCreateManyDictRepModesInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteCreateManyDictRepModesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteCreateManyDictRepModesInput>;
export const tblClients_obsoleteCreateManyDictRepModesInputObjectZodSchema = makeSchema();
