import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.string(),
  TitleID: z.number().int()
}).strict();
export const tblTitSubClassSubClassCodeTitleIDCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblTitSubClassSubClassCodeTitleIDCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassSubClassCodeTitleIDCompoundUniqueInput>;
export const tblTitSubClassSubClassCodeTitleIDCompoundUniqueInputObjectZodSchema = makeSchema();
