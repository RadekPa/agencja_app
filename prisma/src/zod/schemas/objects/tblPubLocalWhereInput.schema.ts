import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { TblAgreementsNullableScalarRelationFilterObjectSchema as TblAgreementsNullableScalarRelationFilterObjectSchema } from './TblAgreementsNullableScalarRelationFilter.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const tblpublocalwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPubLocalWhereInputObjectSchema), z.lazy(() => tblPubLocalWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPubLocalWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPubLocalWhereInputObjectSchema), z.lazy(() => tblPubLocalWhereInputObjectSchema).array()]).optional(),
  PubLocalID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  LocalTitle: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  PubDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  LocalISBN: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(13)]).optional().nullable(),
  Printrun: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  LocalEdition: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  tblAgreements: z.union([z.lazy(() => TblAgreementsNullableScalarRelationFilterObjectSchema), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional()
}).strict();
export const tblPubLocalWhereInputObjectSchema: z.ZodType<Prisma.tblPubLocalWhereInput> = tblpublocalwhereinputSchema as unknown as z.ZodType<Prisma.tblPubLocalWhereInput>;
export const tblPubLocalWhereInputObjectZodSchema = tblpublocalwhereinputSchema;
