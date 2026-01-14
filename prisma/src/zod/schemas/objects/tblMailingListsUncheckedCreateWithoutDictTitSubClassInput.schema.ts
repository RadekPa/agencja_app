import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.string(),
  CustID: z.number().int()
}).strict();
export const tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUncheckedCreateWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUncheckedCreateWithoutDictTitSubClassInput>;
export const tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
