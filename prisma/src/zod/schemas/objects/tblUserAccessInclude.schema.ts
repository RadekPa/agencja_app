import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesArgsObjectSchema as tblPlacesArgsObjectSchema } from './tblPlacesArgs.schema';
import { tblUsersArgsObjectSchema as tblUsersArgsObjectSchema } from './tblUsersArgs.schema'

const makeSchema = () => z.object({
  tblPlaces: z.union([z.boolean(), z.lazy(() => tblPlacesArgsObjectSchema)]).optional(),
  tblUsers: z.union([z.boolean(), z.lazy(() => tblUsersArgsObjectSchema)]).optional()
}).strict();
export const tblUserAccessIncludeObjectSchema: z.ZodType<Prisma.tblUserAccessInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessInclude>;
export const tblUserAccessIncludeObjectZodSchema = makeSchema();
