import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsCreateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutTblRoyRatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema)])
}).strict();
export const tblAgrRightsCreateOrConnectWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutTblRoyRatesInput>;
export const tblAgrRightsCreateOrConnectWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
