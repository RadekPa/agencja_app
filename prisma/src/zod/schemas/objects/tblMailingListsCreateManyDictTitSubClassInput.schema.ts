import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.string().max(10),
  CustID: z.number().int()
}).strict();
export const tblMailingListsCreateManyDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateManyDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateManyDictTitSubClassInput>;
export const tblMailingListsCreateManyDictTitSubClassInputObjectZodSchema = makeSchema();
