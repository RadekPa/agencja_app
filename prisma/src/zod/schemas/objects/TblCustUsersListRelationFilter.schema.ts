import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersWhereInputObjectSchema as tblCustUsersWhereInputObjectSchema } from './tblCustUsersWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tblCustUsersWhereInputObjectSchema).optional(),
  some: z.lazy(() => tblCustUsersWhereInputObjectSchema).optional(),
  none: z.lazy(() => tblCustUsersWhereInputObjectSchema).optional()
}).strict();
export const TblCustUsersListRelationFilterObjectSchema: z.ZodType<Prisma.TblCustUsersListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblCustUsersListRelationFilter>;
export const TblCustUsersListRelationFilterObjectZodSchema = makeSchema();
