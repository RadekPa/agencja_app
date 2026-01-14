import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { TblAuthorsScalarRelationFilterObjectSchema as TblAuthorsScalarRelationFilterObjectSchema } from './TblAuthorsScalarRelationFilter.schema';
import { tblAuthorsWhereInputObjectSchema as tblAuthorsWhereInputObjectSchema } from './tblAuthorsWhereInput.schema';
import { TblTitlesScalarRelationFilterObjectSchema as TblTitlesScalarRelationFilterObjectSchema } from './TblTitlesScalarRelationFilter.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const tbltitauthorswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitAuthorsWhereInputObjectSchema), z.lazy(() => tblTitAuthorsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitAuthorsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitAuthorsWhereInputObjectSchema), z.lazy(() => tblTitAuthorsWhereInputObjectSchema).array()]).optional(),
  AuthorID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  TitleID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Main: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Lp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  tblAuthors: z.union([z.lazy(() => TblAuthorsScalarRelationFilterObjectSchema), z.lazy(() => tblAuthorsWhereInputObjectSchema)]).optional(),
  tblTitles: z.union([z.lazy(() => TblTitlesScalarRelationFilterObjectSchema), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional()
}).strict();
export const tblTitAuthorsWhereInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsWhereInput> = tbltitauthorswhereinputSchema as unknown as z.ZodType<Prisma.tblTitAuthorsWhereInput>;
export const tblTitAuthorsWhereInputObjectZodSchema = tbltitauthorswhereinputSchema;
