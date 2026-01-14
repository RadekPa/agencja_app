import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const lkppaytypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => lkpPayTypeWhereInputObjectSchema), z.lazy(() => lkpPayTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => lkpPayTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => lkpPayTypeWhereInputObjectSchema), z.lazy(() => lkpPayTypeWhereInputObjectSchema).array()]).optional(),
  PayTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  DescriptionPL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable()
}).strict();
export const lkpPayTypeWhereInputObjectSchema: z.ZodType<Prisma.lkpPayTypeWhereInput> = lkppaytypewhereinputSchema as unknown as z.ZodType<Prisma.lkpPayTypeWhereInput>;
export const lkpPayTypeWhereInputObjectZodSchema = lkppaytypewhereinputSchema;
