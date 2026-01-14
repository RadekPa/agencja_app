import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './tblCustomersOrderByWithRelationInput.schema';
import { dictRepModesOrderByWithRelationInputObjectSchema as dictRepModesOrderByWithRelationInputObjectSchema } from './dictRepModesOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  RepModeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Commission: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DefAgrDoc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Jurisdiction: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByWithRelationInputObjectSchema).optional(),
  dictRepModes: z.lazy(() => dictRepModesOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblClients_obsoleteOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteOrderByWithRelationInput>;
export const tblClients_obsoleteOrderByWithRelationInputObjectZodSchema = makeSchema();
