import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  Bil_nr: SortOrderSchema.optional(),
  Date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PayType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Nasz_inv: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Waluta: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Kwota_wp_ywu: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Kwota_inv: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tax_10_: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AUTOR: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  WYD: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OWNAB: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GRAAL_INCOME: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Transfer: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const pdxTRANSFEROrderByWithRelationInputObjectSchema: z.ZodType<Prisma.pdxTRANSFEROrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxTRANSFEROrderByWithRelationInput>;
export const pdxTRANSFEROrderByWithRelationInputObjectZodSchema = makeSchema();
