import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsUncheckedCreateNestedManyWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUncheckedCreateNestedManyWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUncheckedCreateNestedManyWithoutDictRoyAccountIntervalInput.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: z.number().int(),
  RoyAccountIntervalDesc: z.string().max(50),
  IntervalAbb: z.string().max(8).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedCreateNestedManyWithoutDictRoyAccountIntervalInputObjectSchema).optional()
}).strict();
export const dictRoyAccountIntervalUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalUncheckedCreateInput>;
export const dictRoyAccountIntervalUncheckedCreateInputObjectZodSchema = makeSchema();
