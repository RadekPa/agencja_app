import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrID: z.number().int(),
  MatTypeID: z.number().int(),
  Amount: z.number(),
  Currency: z.string().max(3).optional().nullable(),
  Remarks: z.string().max(255).optional().nullable(),
  RequestDate: z.coerce.date().optional().nullable(),
  ReceiveDate: z.coerce.date().optional().nullable()
}).strict();
export const tblMaterialCreateInputObjectSchema: z.ZodType<Prisma.tblMaterialCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMaterialCreateInput>;
export const tblMaterialCreateInputObjectZodSchema = makeSchema();
