import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const dictagrtemplateswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictAgrTemplatesWhereInputObjectSchema), z.lazy(() => dictAgrTemplatesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictAgrTemplatesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictAgrTemplatesWhereInputObjectSchema), z.lazy(() => dictAgrTemplatesWhereInputObjectSchema).array()]).optional(),
  Name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  FileName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional()
}).strict();
export const dictAgrTemplatesWhereInputObjectSchema: z.ZodType<Prisma.dictAgrTemplatesWhereInput> = dictagrtemplateswhereinputSchema as unknown as z.ZodType<Prisma.dictAgrTemplatesWhereInput>;
export const dictAgrTemplatesWhereInputObjectZodSchema = dictagrtemplateswhereinputSchema;
