import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgreementsOrderByWithRelationInputObjectSchema as tblAgreementsOrderByWithRelationInputObjectSchema } from './tblAgreementsOrderByWithRelationInput.schema';
import { dictAgrEventsOrderByWithRelationInputObjectSchema as dictAgrEventsOrderByWithRelationInputObjectSchema } from './dictAgrEventsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  AgrEventID: SortOrderSchema.optional(),
  AgrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AgrEventCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EventDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EndDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByWithRelationInputObjectSchema).optional(),
  dictAgrEvents: z.lazy(() => dictAgrEventsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblAgrEventsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblAgrEventsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsOrderByWithRelationInput>;
export const tblAgrEventsOrderByWithRelationInputObjectZodSchema = makeSchema();
