import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblClients_obsoleteOrderByRelationAggregateInputObjectSchema as tblClients_obsoleteOrderByRelationAggregateInputObjectSchema } from './tblClients_obsoleteOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  RepModeID: SortOrderSchema.optional(),
  RepModeDesc: SortOrderSchema.optional(),
  tblClients_obsolete: z.lazy(() => tblClients_obsoleteOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictRepModesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictRepModesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRepModesOrderByWithRelationInput>;
export const dictRepModesOrderByWithRelationInputObjectZodSchema = makeSchema();
