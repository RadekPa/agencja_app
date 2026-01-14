import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUpdateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUpdateWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictRoyAccountIntervalInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema)])
}).strict();
export const tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyAccountIntervalInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyAccountIntervalInput>;
export const tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyAccountIntervalInputObjectZodSchema = makeSchema();
