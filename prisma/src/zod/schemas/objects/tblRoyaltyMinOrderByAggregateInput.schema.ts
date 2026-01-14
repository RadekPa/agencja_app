import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  RoyID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  AgrRightID: SortOrderSchema.optional(),
  RoyNr: SortOrderSchema.optional(),
  EnterDate: SortOrderSchema.optional(),
  RoyDate: SortOrderSchema.optional(),
  Copies: SortOrderSchema.optional(),
  Price: SortOrderSchema.optional(),
  RoyRate: SortOrderSchema.optional(),
  XRate: SortOrderSchema.optional(),
  ThisRoy: SortOrderSchema.optional(),
  AdvLeft: SortOrderSchema.optional(),
  RoyDue: SortOrderSchema.optional(),
  Pay: SortOrderSchema.optional(),
  AdvID: SortOrderSchema.optional()
}).strict();
export const tblRoyaltyMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblRoyaltyMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyMinOrderByAggregateInput>;
export const tblRoyaltyMinOrderByAggregateInputObjectZodSchema = makeSchema();
