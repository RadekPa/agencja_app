import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateNestedManyWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsCreateNestedManyWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsCreateNestedManyWithoutDictRoyAccountIntervalInput.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: z.number().int(),
  RoyAccountIntervalDesc: z.string().max(50),
  IntervalAbb: z.string().max(8).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsCreateNestedManyWithoutDictRoyAccountIntervalInputObjectSchema).optional()
}).strict();
export const dictRoyAccountIntervalCreateInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalCreateInput>;
export const dictRoyAccountIntervalCreateInputObjectZodSchema = makeSchema();
