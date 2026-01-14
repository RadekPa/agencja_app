import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const tmpkursyxmlwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tmpKursyXMLWhereInputObjectSchema), z.lazy(() => tmpKursyXMLWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tmpKursyXMLWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tmpKursyXMLWhereInputObjectSchema), z.lazy(() => tmpKursyXMLWhereInputObjectSchema).array()]).optional(),
  Id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  XMLData: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  LoadedDateTime: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tmpKursyXMLWhereInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLWhereInput> = tmpkursyxmlwhereinputSchema as unknown as z.ZodType<Prisma.tmpKursyXMLWhereInput>;
export const tmpKursyXMLWhereInputObjectZodSchema = tmpkursyxmlwhereinputSchema;
