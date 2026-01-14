import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './tblRoyRatesWhereUniqueInput.schema';
import { tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesCreateWithoutTblAgrRightsInput.schema';
import { tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUncheckedCreateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const tblRoyRatesCreateOrConnectWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesCreateOrConnectWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesCreateOrConnectWithoutTblAgrRightsInput>;
export const tblRoyRatesCreateOrConnectWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
