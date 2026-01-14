import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatID: z.boolean().optional(),
  AgrID: z.boolean().optional(),
  MatTypeID: z.boolean().optional(),
  Amount: z.boolean().optional(),
  Currency: z.boolean().optional(),
  Remarks: z.boolean().optional(),
  RequestDate: z.boolean().optional(),
  ReceiveDate: z.boolean().optional()
}).strict();
export const tblMaterialSelectObjectSchema: z.ZodType<Prisma.tblMaterialSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblMaterialSelect>;
export const tblMaterialSelectObjectZodSchema = makeSchema();
