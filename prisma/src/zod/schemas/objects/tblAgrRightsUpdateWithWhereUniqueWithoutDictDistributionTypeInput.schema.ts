import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUpdateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUpdateWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictDistributionTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictDistributionTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateWithWhereUniqueWithoutDictDistributionTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutDictDistributionTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutDictDistributionTypeInput>;
export const tblAgrRightsUpdateWithWhereUniqueWithoutDictDistributionTypeInputObjectZodSchema = makeSchema();
