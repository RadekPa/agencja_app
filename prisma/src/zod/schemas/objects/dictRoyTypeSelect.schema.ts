import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsArgsObjectSchema as tblAgrRightsArgsObjectSchema } from './tblAgrRightsArgs.schema'

const makeSchema = () => z.object({
  RoyTypeID: z.boolean().optional(),
  AgrRightID: z.boolean().optional(),
  RoyTypeDesc: z.boolean().optional(),
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsArgsObjectSchema)]).optional()
}).strict();
export const dictRoyTypeSelectObjectSchema: z.ZodType<Prisma.dictRoyTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeSelect>;
export const dictRoyTypeSelectObjectZodSchema = makeSchema();
