import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUpdateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUpdateWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictDistributionTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsUpsertWithWhereUniqueWithoutDictDistributionTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutDictDistributionTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutDictDistributionTypeInput>;
export const tblAgrRightsUpsertWithWhereUniqueWithoutDictDistributionTypeInputObjectZodSchema = makeSchema();
