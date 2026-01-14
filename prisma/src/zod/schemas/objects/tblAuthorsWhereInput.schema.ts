import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TblTitAuthorsListRelationFilterObjectSchema as TblTitAuthorsListRelationFilterObjectSchema } from './TblTitAuthorsListRelationFilter.schema'

const tblauthorswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAuthorsWhereInputObjectSchema), z.lazy(() => tblAuthorsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAuthorsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAuthorsWhereInputObjectSchema), z.lazy(() => tblAuthorsWhereInputObjectSchema).array()]).optional(),
  AuthorID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  FullName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  FirstName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  MiddleName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  LastName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  Suffix: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  PenName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  DateMod: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1000)]).optional().nullable(),
  tblTitAuthors: z.lazy(() => TblTitAuthorsListRelationFilterObjectSchema).optional()
}).strict();
export const tblAuthorsWhereInputObjectSchema: z.ZodType<Prisma.tblAuthorsWhereInput> = tblauthorswhereinputSchema as unknown as z.ZodType<Prisma.tblAuthorsWhereInput>;
export const tblAuthorsWhereInputObjectZodSchema = tblauthorswhereinputSchema;
