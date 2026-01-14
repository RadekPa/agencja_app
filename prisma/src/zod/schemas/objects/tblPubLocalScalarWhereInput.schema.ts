import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const tblpublocalscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPubLocalScalarWhereInputObjectSchema), z.lazy(() => tblPubLocalScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPubLocalScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPubLocalScalarWhereInputObjectSchema), z.lazy(() => tblPubLocalScalarWhereInputObjectSchema).array()]).optional(),
  PubLocalID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  LocalTitle: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  PubDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  LocalISBN: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Printrun: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  LocalEdition: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblPubLocalScalarWhereInputObjectSchema: z.ZodType<Prisma.tblPubLocalScalarWhereInput> = tblpublocalscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblPubLocalScalarWhereInput>;
export const tblPubLocalScalarWhereInputObjectZodSchema = tblpublocalscalarwhereinputSchema;
