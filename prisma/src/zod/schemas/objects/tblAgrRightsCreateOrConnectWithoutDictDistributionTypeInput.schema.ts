import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInput>;
export const tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInputObjectZodSchema = makeSchema();
