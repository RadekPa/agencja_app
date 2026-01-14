import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { tblCustomersCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema as tblCustomersCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblClients_obsoleteInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
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
  Jurisdiction: z.string().max(200).optional().nullable(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema)
}).strict();
export const tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteCreateWithoutDictRepModesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteCreateWithoutDictRepModesInput>;
export const tblClients_obsoleteCreateWithoutDictRepModesInputObjectZodSchema = makeSchema();
