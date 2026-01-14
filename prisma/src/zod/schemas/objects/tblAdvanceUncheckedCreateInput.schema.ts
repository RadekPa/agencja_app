import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvID: z.number().int().optional(),
  Inst: z.number().int(),
  AgrID: z.number().int(),
  AdvTermId: z.number().int().optional().nullable(),
  AdvTypeId: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable(),
  AdvTermDate: z.coerce.date().optional().nullable(),
  RoyID: z.number().int().optional().nullable()
}).strict();
export const tblAdvanceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblAdvanceUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceUncheckedCreateInput>;
export const tblAdvanceUncheckedCreateInputObjectZodSchema = makeSchema();
