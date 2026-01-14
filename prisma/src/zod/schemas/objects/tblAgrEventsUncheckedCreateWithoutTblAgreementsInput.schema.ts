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
}),
  AgrEventCode: z.number().int().optional().nullable(),
  EventDate: z.coerce.date().optional().nullable(),
  NoOfCopies: z.number().int().optional().nullable(),
  EndDate: z.coerce.date().optional().nullable(),
  DateMod: z.coerce.date().optional().nullable(),
  UserMod: z.string().optional().nullable()
}).strict();
export const tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsUncheckedCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsUncheckedCreateWithoutTblAgreementsInput>;
export const tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
