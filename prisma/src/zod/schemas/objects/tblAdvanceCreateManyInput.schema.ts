import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Inst: z.number().int(),
  AgrID: z.number().int(),
  AdvTermId: z.number().int().optional().nullable(),
  AdvTypeId: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable(),
  AdvTermDate: z.coerce.date().optional().nullable(),
  RoyID: z.number().int().optional().nullable()
}).strict();
export const tblAdvanceCreateManyInputObjectSchema: z.ZodType<Prisma.tblAdvanceCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceCreateManyInput>;
export const tblAdvanceCreateManyInputObjectZodSchema = makeSchema();
