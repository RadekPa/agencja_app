import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const tblmaterialwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblMaterialWhereInputObjectSchema), z.lazy(() => tblMaterialWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblMaterialWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblMaterialWhereInputObjectSchema), z.lazy(() => tblMaterialWhereInputObjectSchema).array()]).optional(),
  MatID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  MatTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Amount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  Currency: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  RequestDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  ReceiveDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tblMaterialWhereInputObjectSchema: z.ZodType<Prisma.tblMaterialWhereInput> = tblmaterialwhereinputSchema as unknown as z.ZodType<Prisma.tblMaterialWhereInput>;
export const tblMaterialWhereInputObjectZodSchema = tblmaterialwhereinputSchema;
