import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
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
  DefAgrDoc: z.string().optional().nullable(),
  Jurisdiction: z.string().optional().nullable()
}).strict();
export const tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUncheckedCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUncheckedCreateWithoutTblCustomersInput>;
export const tblClients_obsoleteUncheckedCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
