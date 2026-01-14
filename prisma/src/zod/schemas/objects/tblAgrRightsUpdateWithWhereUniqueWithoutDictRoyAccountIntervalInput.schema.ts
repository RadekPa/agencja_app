import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUpdateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUpdateWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictRoyAccountIntervalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictRoyAccountIntervalInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyAccountIntervalInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyAccountIntervalInput>;
export const tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectZodSchema = makeSchema();
