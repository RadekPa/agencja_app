import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  SubClassCode: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional()
}).strict();
export const tblTitSubClassCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitSubClassCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCountOrderByAggregateInput>;
export const tblTitSubClassCountOrderByAggregateInputObjectZodSchema = makeSchema();
