import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblAgreementsOrderByRelationAggregateInputObjectSchema as tblAgreementsOrderByRelationAggregateInputObjectSchema } from './tblAgreementsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  CurrID: SortOrderSchema.optional(),
  CurrDesc: SortOrderSchema.optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictCurrenciesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictCurrenciesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesOrderByWithRelationInput>;
export const dictCurrenciesOrderByWithRelationInputObjectZodSchema = makeSchema();
