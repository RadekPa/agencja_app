import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgreementsOrderByWithRelationInputObjectSchema as tblAgreementsOrderByWithRelationInputObjectSchema } from './tblAgreementsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  PubLocalID: SortOrderSchema.optional(),
  AgrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalTitle: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PubDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Printrun: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LocalEdition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblPubLocalOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblPubLocalOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalOrderByWithRelationInput>;
export const tblPubLocalOrderByWithRelationInputObjectZodSchema = makeSchema();
