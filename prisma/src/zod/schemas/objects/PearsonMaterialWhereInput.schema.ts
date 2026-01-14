import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'

const pearsonmaterialwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PearsonMaterialWhereInputObjectSchema), z.lazy(() => PearsonMaterialWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PearsonMaterialWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PearsonMaterialWhereInputObjectSchema), z.lazy(() => PearsonMaterialWhereInputObjectSchema).array()]).optional(),
  MyNumber: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ContractID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  InvoiceNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  InvoiceDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  Publisher: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  Title: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  ISBN: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  Amount: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const PearsonMaterialWhereInputObjectSchema: z.ZodType<Prisma.PearsonMaterialWhereInput> = pearsonmaterialwhereinputSchema as unknown as z.ZodType<Prisma.PearsonMaterialWhereInput>;
export const PearsonMaterialWhereInputObjectZodSchema = pearsonmaterialwhereinputSchema;
