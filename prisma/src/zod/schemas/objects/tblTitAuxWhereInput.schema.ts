import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblTitlesScalarRelationFilterObjectSchema as TblTitlesScalarRelationFilterObjectSchema } from './TblTitlesScalarRelationFilter.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const tbltitauxwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitAuxWhereInputObjectSchema), z.lazy(() => tblTitAuxWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitAuxWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitAuxWhereInputObjectSchema), z.lazy(() => tblTitAuxWhereInputObjectSchema).array()]).optional(),
  TitleID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CopyrightLine: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(200)]).optional().nullable(),
  tblTitles: z.union([z.lazy(() => TblTitlesScalarRelationFilterObjectSchema), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional()
}).strict();
export const tblTitAuxWhereInputObjectSchema: z.ZodType<Prisma.tblTitAuxWhereInput> = tbltitauxwhereinputSchema as unknown as z.ZodType<Prisma.tblTitAuxWhereInput>;
export const tblTitAuxWhereInputObjectZodSchema = tbltitauxwhereinputSchema;
