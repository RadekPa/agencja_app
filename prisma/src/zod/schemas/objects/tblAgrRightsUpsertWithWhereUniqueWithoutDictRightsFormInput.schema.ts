import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutDictRightsFormInputObjectSchema as tblAgrRightsUpdateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUpdateWithoutDictRightsFormInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictRightsFormInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictRightsFormInput.schema';
import { tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema as tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsCreateWithoutDictRightsFormInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRightsFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictRightsFormInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema)])
}).strict();
export const tblAgrRightsUpsertWithWhereUniqueWithoutDictRightsFormInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutDictRightsFormInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutDictRightsFormInput>;
export const tblAgrRightsUpsertWithWhereUniqueWithoutDictRightsFormInputObjectZodSchema = makeSchema();
