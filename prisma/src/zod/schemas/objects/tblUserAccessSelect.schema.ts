import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesArgsObjectSchema as tblPlacesArgsObjectSchema } from './tblPlacesArgs.schema';
import { tblUsersArgsObjectSchema as tblUsersArgsObjectSchema } from './tblUsersArgs.schema'

const makeSchema = () => z.object({
  Login: z.boolean().optional(),
  PlaceID: z.boolean().optional(),
  tblPlaces: z.union([z.boolean(), z.lazy(() => tblPlacesArgsObjectSchema)]).optional(),
  tblUsers: z.union([z.boolean(), z.lazy(() => tblUsersArgsObjectSchema)]).optional()
}).strict();
export const tblUserAccessSelectObjectSchema: z.ZodType<Prisma.tblUserAccessSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessSelect>;
export const tblUserAccessSelectObjectZodSchema = makeSchema();
