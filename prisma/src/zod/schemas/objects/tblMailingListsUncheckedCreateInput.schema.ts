import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.string().max(10),
  SubClassCode: z.string().max(5),
  CustID: z.number().int()
}).strict();
export const tblMailingListsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblMailingListsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUncheckedCreateInput>;
export const tblMailingListsUncheckedCreateInputObjectZodSchema = makeSchema();
