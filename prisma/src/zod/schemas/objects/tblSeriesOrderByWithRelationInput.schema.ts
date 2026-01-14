import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './tblCustomersOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  SeriesID: SortOrderSchema.optional(),
  CustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SeriesFullName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SeriesShortName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblSeriesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblSeriesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesOrderByWithRelationInput>;
export const tblSeriesOrderByWithRelationInputObjectZodSchema = makeSchema();
