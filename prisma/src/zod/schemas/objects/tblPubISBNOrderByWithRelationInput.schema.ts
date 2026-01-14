import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblPublishersOrderByWithRelationInputObjectSchema as tblPublishersOrderByWithRelationInputObjectSchema } from './tblPublishersOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  PubID: SortOrderSchema.optional(),
  PubISBN1: SortOrderSchema.optional(),
  PubISBN2: SortOrderSchema.optional(),
  tblPublishers: z.lazy(() => tblPublishersOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblPubISBNOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblPubISBNOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNOrderByWithRelationInput>;
export const tblPubISBNOrderByWithRelationInputObjectZodSchema = makeSchema();
