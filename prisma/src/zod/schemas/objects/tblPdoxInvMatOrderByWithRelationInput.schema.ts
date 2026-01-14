import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  Invoice_Nr: SortOrderSchema.optional(),
  Title: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const tblPdoxInvMatOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatOrderByWithRelationInput>;
export const tblPdoxInvMatOrderByWithRelationInputObjectZodSchema = makeSchema();
