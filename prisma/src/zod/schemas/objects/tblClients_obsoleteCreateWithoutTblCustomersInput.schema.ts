import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
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
  dictRepModes: z.lazy(() => dictRepModesCreateNestedOneWithoutTblClients_obsoleteInputObjectSchema).optional()
}).strict();
export const tblClients_obsoleteCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteCreateWithoutTblCustomersInput>;
export const tblClients_obsoleteCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
