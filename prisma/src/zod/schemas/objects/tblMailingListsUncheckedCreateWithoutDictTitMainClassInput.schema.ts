import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.string(),
  CustID: z.number().int()
}).strict();
export const tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUncheckedCreateWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUncheckedCreateWithoutDictTitMainClassInput>;
export const tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
