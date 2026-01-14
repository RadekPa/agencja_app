import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.string().max(10),
  SubClassCode: z.string().max(5)
}).strict();
export const tblMailingListsCreateManyTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateManyTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateManyTblCustomersInput>;
export const tblMailingListsCreateManyTblCustomersInputObjectZodSchema = makeSchema();
