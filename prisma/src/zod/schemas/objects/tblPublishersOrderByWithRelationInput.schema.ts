import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblPubISBNOrderByRelationAggregateInputObjectSchema as tblPubISBNOrderByRelationAggregateInputObjectSchema } from './tblPubISBNOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  PubID: SortOrderSchema.optional(),
  PubName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PubAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ParentPubID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblPubISBN: z.lazy(() => tblPubISBNOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const tblPublishersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblPublishersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersOrderByWithRelationInput>;
export const tblPublishersOrderByWithRelationInputObjectZodSchema = makeSchema();
