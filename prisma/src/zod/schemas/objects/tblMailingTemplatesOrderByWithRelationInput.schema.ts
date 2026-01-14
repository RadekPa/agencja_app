import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TempID: SortOrderSchema.optional(),
  TempName: SortOrderSchema.optional(),
  TempPath: SortOrderSchema.optional(),
  TempSubject: SortOrderSchema.optional()
}).strict();
export const tblMailingTemplatesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblMailingTemplatesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingTemplatesOrderByWithRelationInput>;
export const tblMailingTemplatesOrderByWithRelationInputObjectZodSchema = makeSchema();
