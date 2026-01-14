import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AuthorID: z.number().int(),
  TitleID: z.number().int()
}).strict();
export const tblTitAuthorsAuthorIDTitleIDCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsAuthorIDTitleIDCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsAuthorIDTitleIDCompoundUniqueInput>;
export const tblTitAuthorsAuthorIDTitleIDCompoundUniqueInputObjectZodSchema = makeSchema();
