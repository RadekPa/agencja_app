import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgreementsOrderByWithRelationInputObjectSchema as tblAgreementsOrderByWithRelationInputObjectSchema } from './tblAgreementsOrderByWithRelationInput.schema';
import { tblAgrRightsOrderByWithRelationInputObjectSchema as tblAgrRightsOrderByWithRelationInputObjectSchema } from './tblAgrRightsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  Step: SortOrderSchema.optional(),
  AgrRightID: SortOrderSchema.optional(),
  AgrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CpsMax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Rate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByWithRelationInputObjectSchema).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblRoyRatesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblRoyRatesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesOrderByWithRelationInput>;
export const tblRoyRatesOrderByWithRelationInputObjectZodSchema = makeSchema();
