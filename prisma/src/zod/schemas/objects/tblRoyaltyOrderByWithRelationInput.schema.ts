import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgreementsOrderByWithRelationInputObjectSchema as tblAgreementsOrderByWithRelationInputObjectSchema } from './tblAgreementsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  RoyID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  AgrRightID: SortOrderSchema.optional(),
  RoyNr: SortOrderSchema.optional(),
  EnterDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Copies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  XRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ThisRoy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvLeft: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyDue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Pay: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblRoyaltyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblRoyaltyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyOrderByWithRelationInput>;
export const tblRoyaltyOrderByWithRelationInputObjectZodSchema = makeSchema();
