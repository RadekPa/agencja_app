import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema'

const makeSchema = () => z.object({
  ClientID: SortOrderSchema.optional(),
  Year: SortOrderSchema.optional(),
  PubID: SortOrderSchema.optional(),
  DateSent: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Original: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional()
}).strict();
export const tblCertPubOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblCertPubOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCertPubOrderByWithRelationInput>;
export const tblCertPubOrderByWithRelationInputObjectZodSchema = makeSchema();
