import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const tbltitauthorsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema), z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema), z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema).array()]).optional(),
  AuthorID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  TitleID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Main: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Lp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const tblTitAuthorsScalarWhereInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsScalarWhereInput> = tbltitauthorsscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblTitAuthorsScalarWhereInput>;
export const tblTitAuthorsScalarWhereInputObjectZodSchema = tbltitauthorsscalarwhereinputSchema;
