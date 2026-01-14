import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatID: z.number().int().optional(),
  AgrID: z.number().int(),
  MatTypeID: z.number().int(),
  Amount: z.number(),
  Currency: z.string().max(3).optional().nullable(),
  Remarks: z.string().max(255).optional().nullable(),
  RequestDate: z.coerce.date().optional().nullable(),
  ReceiveDate: z.coerce.date().optional().nullable()
}).strict();
export const tblMaterialUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblMaterialUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMaterialUncheckedCreateInput>;
export const tblMaterialUncheckedCreateInputObjectZodSchema = makeSchema();
