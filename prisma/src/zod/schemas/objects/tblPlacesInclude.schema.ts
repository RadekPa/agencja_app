import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessFindManySchema as tblUserAccessFindManySchema } from '../findManytblUserAccess.schema';
import { TblPlacesCountOutputTypeArgsObjectSchema as TblPlacesCountOutputTypeArgsObjectSchema } from './TblPlacesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblUserAccess: z.union([z.boolean(), z.lazy(() => tblUserAccessFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblPlacesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblPlacesIncludeObjectSchema: z.ZodType<Prisma.tblPlacesInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesInclude>;
export const tblPlacesIncludeObjectZodSchema = makeSchema();
