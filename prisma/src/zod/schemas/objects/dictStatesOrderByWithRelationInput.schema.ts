import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictCountries_oldOrderByWithRelationInputObjectSchema as dictCountries_oldOrderByWithRelationInputObjectSchema } from './dictCountries_oldOrderByWithRelationInput.schema';
import { tblCustomersOrderByRelationAggregateInputObjectSchema as tblCustomersOrderByRelationAggregateInputObjectSchema } from './tblCustomersOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  StateID: SortOrderSchema.optional(),
  CountryID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  StateAbb: SortOrderSchema.optional(),
  StateName: SortOrderSchema.optional(),
  dictCountries_old: z.lazy(() => dictCountries_oldOrderByWithRelationInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictStatesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictStatesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesOrderByWithRelationInput>;
export const dictStatesOrderByWithRelationInputObjectZodSchema = makeSchema();
