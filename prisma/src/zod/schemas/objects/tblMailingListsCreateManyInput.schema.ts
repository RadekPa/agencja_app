import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.string().max(10),
  SubClassCode: z.string().max(5),
  CustID: z.number().int()
}).strict();
export const tblMailingListsCreateManyInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateManyInput>;
export const tblMailingListsCreateManyInputObjectZodSchema = makeSchema();
