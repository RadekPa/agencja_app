import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblTitlesOrderByWithRelationInputObjectSchema as tblTitlesOrderByWithRelationInputObjectSchema } from './tblTitlesOrderByWithRelationInput.schema';
import { dictEventsOrderByWithRelationInputObjectSchema as dictEventsOrderByWithRelationInputObjectSchema } from './dictEventsOrderByWithRelationInput.schema';
import { dictCopyTypeOrderByWithRelationInputObjectSchema as dictCopyTypeOrderByWithRelationInputObjectSchema } from './dictCopyTypeOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  TitEventID: SortOrderSchema.optional(),
  CopyTypeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EventCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TitleID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EventDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NoOfCopies: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EndDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblTitles: z.lazy(() => tblTitlesOrderByWithRelationInputObjectSchema).optional(),
  dictEvents: z.lazy(() => dictEventsOrderByWithRelationInputObjectSchema).optional(),
  dictCopyType: z.lazy(() => dictCopyTypeOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblTitEventsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblTitEventsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsOrderByWithRelationInput>;
export const tblTitEventsOrderByWithRelationInputObjectZodSchema = makeSchema();
