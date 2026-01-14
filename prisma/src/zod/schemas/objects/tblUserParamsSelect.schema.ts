import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersArgsObjectSchema as tblUsersArgsObjectSchema } from './tblUsersArgs.schema'

const makeSchema = () => z.object({
  Login: z.boolean().optional(),
  Name: z.boolean().optional(),
  Value: z.boolean().optional(),
  tblUsers: z.union([z.boolean(), z.lazy(() => tblUsersArgsObjectSchema)]).optional()
}).strict();
export const tblUserParamsSelectObjectSchema: z.ZodType<Prisma.tblUserParamsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsSelect>;
export const tblUserParamsSelectObjectZodSchema = makeSchema();
