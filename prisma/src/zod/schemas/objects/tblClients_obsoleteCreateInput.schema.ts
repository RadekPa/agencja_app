import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { tblCustomersCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema as tblCustomersCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblClients_obsoleteInput.schema';
import { dictRepModesCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema as dictRepModesCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema } from './dictRepModesCreateNestedOneWithoutTblClients_obsoleteInput.schema'

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
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema),
  dictRepModes: z.lazy(() => dictRepModesCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema).optional()
}).strict();
export const tblClients_obsoleteCreateInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteCreateInput>;
export const tblClients_obsoleteCreateInputObjectZodSchema = makeSchema();
