import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereInputObjectSchema as tblCustContactsWhereInputObjectSchema } from './tblCustContactsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblCustContactsWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblCustContactsWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblCustContactsWhereInputObjectSchema).optional()
}).strict();
export const TblCustContactsListRelationFilterObjectSchema: z.ZodType<Prisma.TblCustContactsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblCustContactsListRelationFilter>;
export const TblCustContactsListRelationFilterObjectZodSchema = makeSchema();
