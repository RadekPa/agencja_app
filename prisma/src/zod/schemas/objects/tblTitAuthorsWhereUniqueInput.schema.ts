import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsAuthorIDTitleIDCompoundUniqueInputObjectSchema as tblTitAuthorsAuthorIDTitleIDCompoundUniqueInputObjectSchema } from './tblTitAuthorsAuthorIDTitleIDCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  AuthorID_TitleID: z.lazy(() => tblTitAuthorsAuthorIDTitleIDCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblTitAuthorsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsWhereUniqueInput>;
export const tblTitAuthorsWhereUniqueInputObjectZodSchema = makeSchema();
