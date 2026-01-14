import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.string(),
  SubClassCode: z.string(),
  CustID: z.number().int()
}).strict();
export const tblMailingListsClassCodeSubClassCodeCustIDCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblMailingListsClassCodeSubClassCodeCustIDCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsClassCodeSubClassCodeCustIDCompoundUniqueInput>;
export const tblMailingListsClassCodeSubClassCodeCustIDCompoundUniqueInputObjectZodSchema = makeSchema();
