import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblTitlesListRelationFilterObjectSchema as TblTitlesListRelationFilterObjectSchema } from './TblTitlesListRelationFilter.schema'

const dictcoverformatwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCoverFormatWhereInputObjectSchema), z.lazy(() => dictCoverFormatWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCoverFormatWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCoverFormatWhereInputObjectSchema), z.lazy(() => dictCoverFormatWhereInputObjectSchema).array()]).optional(),
  CoverFormatID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CoverFormatDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  tblTitles: z.lazy(() => TblTitlesListRelationFilterObjectSchema).optional()
}).strict();
export const dictCoverFormatWhereInputObjectSchema: z.ZodType<Prisma.dictCoverFormatWhereInput> = dictcoverformatwhereinputSchema as unknown as z.ZodType<Prisma.dictCoverFormatWhereInput>;
export const dictCoverFormatWhereInputObjectZodSchema = dictcoverformatwhereinputSchema;
