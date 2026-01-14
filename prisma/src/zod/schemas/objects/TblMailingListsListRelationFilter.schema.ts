import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsWhereInputObjectSchema as tblMailingListsWhereInputObjectSchema } from './tblMailingListsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblMailingListsWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblMailingListsWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblMailingListsWhereInputObjectSchema).optional()
}).strict();
export const TblMailingListsListRelationFilterObjectSchema: z.ZodType<Prisma.TblMailingListsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblMailingListsListRelationFilter>;
export const TblMailingListsListRelationFilterObjectZodSchema = makeSchema();
