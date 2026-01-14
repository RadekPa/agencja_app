import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.string().max(5),
  CustID: z.number().int()
}).strict();
export const tblMailingListsCreateManyDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateManyDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateManyDictTitMainClassInput>;
export const tblMailingListsCreateManyDictTitMainClassInputObjectZodSchema = makeSchema();
