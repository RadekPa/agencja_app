import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional(),
  Login: SortOrderSchema.optional(),
  DateBegin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateEnd: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const tblPersonLoginOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblPersonLoginOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginOrderByWithRelationInput>;
export const tblPersonLoginOrderByWithRelationInputObjectZodSchema = makeSchema();
