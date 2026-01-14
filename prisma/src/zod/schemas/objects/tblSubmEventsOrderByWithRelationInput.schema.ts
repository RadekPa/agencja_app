import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblSubmissionsOrderByWithRelationInputObjectSchema as tblSubmissionsOrderByWithRelationInputObjectSchema } from './tblSubmissionsOrderByWithRelationInput.schema';
import { dictEventsOrderByWithRelationInputObjectSchema as dictEventsOrderByWithRelationInputObjectSchema } from './dictEventsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  SubmEventID: SortOrderSchema.optional(),
  SubmID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EventCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EventDate: SortOrderSchema.optional(),
  NoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EndDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsOrderByWithRelationInputObjectSchema).optional(),
  dictEvents: z.lazy(() => dictEventsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblSubmEventsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblSubmEventsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsOrderByWithRelationInput>;
export const tblSubmEventsOrderByWithRelationInputObjectZodSchema = makeSchema();
