import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubClassCode: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional()
}).strict();
export const tblTitSubClassMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitSubClassMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassMaxOrderByAggregateInput>;
export const tblTitSubClassMaxOrderByAggregateInputObjectZodSchema = makeSchema();
