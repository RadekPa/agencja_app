import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessFindManySchema as tblUserAccessFindManySchema } from '../findManytblUserAccess.schema';
import { TblPlacesCountOutputTypeArgsObjectSchema as TblPlacesCountOutputTypeArgsObjectSchema } from './TblPlacesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  PlaceID: z.boolean().optional(),
  PlaceDesc: z.boolean().optional(),
  tblUserAccess: z.union([z.boolean(), z.lazy(() => tblUserAccessFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblPlacesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblPlacesSelectObjectSchema: z.ZodType<Prisma.tblPlacesSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesSelect>;
export const tblPlacesSelectObjectZodSchema = makeSchema();
