import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersArgsObjectSchema as tblUsersArgsObjectSchema } from './tblUsersArgs.schema'

const makeSchema = () => z.object({
  tblUsers: z.union([z.boolean(), z.lazy(() => tblUsersArgsObjectSchema)]).optional()
}).strict();
export const tblUserParamsIncludeObjectSchema: z.ZodType<Prisma.tblUserParamsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsInclude>;
export const tblUserParamsIncludeObjectZodSchema = makeSchema();
