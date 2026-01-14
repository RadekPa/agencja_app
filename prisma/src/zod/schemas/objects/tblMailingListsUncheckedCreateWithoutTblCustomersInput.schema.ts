import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.string(),
  SubClassCode: z.string()
}).strict();
export const tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblMailingListsUncheckedCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUncheckedCreateWithoutTblCustomersInput>;
export const tblMailingListsUncheckedCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
