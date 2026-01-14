import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { TblTitlesScalarRelationFilterObjectSchema as TblTitlesScalarRelationFilterObjectSchema } from './TblTitlesScalarRelationFilter.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { DictTitSubClassScalarRelationFilterObjectSchema as DictTitSubClassScalarRelationFilterObjectSchema } from './DictTitSubClassScalarRelationFilter.schema';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './dictTitSubClassWhereInput.schema'

const tbltitsubclasswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblTitSubClassWhereInputObjectSchema), z.lazy(() => tblTitSubClassWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblTitSubClassWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblTitSubClassWhereInputObjectSchema), z.lazy(() => tblTitSubClassWhereInputObjectSchema).array()]).optional(),
  SubClassCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(5)]).optional(),
  TitleID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  tblTitles: z.union([z.lazy(() => TblTitlesScalarRelationFilterObjectSchema), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional(),
  dictTitSubClass: z.union([z.lazy(() => DictTitSubClassScalarRelationFilterObjectSchema), z.lazy(() => dictTitSubClassWhereInputObjectSchema)]).optional()
}).strict();
export const tblTitSubClassWhereInputObjectSchema: z.ZodType<Prisma.tblTitSubClassWhereInput> = tbltitsubclasswhereinputSchema as unknown as z.ZodType<Prisma.tblTitSubClassWhereInput>;
export const tblTitSubClassWhereInputObjectZodSchema = tbltitsubclasswhereinputSchema;
