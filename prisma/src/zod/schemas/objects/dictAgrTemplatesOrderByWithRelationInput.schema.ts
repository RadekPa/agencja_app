import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Name: SortOrderSchema.optional(),
  FileName: SortOrderSchema.optional()
}).strict();
export const dictAgrTemplatesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictAgrTemplatesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrTemplatesOrderByWithRelationInput>;
export const dictAgrTemplatesOrderByWithRelationInputObjectZodSchema = makeSchema();
