import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsCreateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsCreateOrConnectWithoutTblRoyRatesInputObjectSchema as tblAgrRightsCreateOrConnectWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutTblRoyRatesInput.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgrRightsCreateOrConnectWithoutTblRoyRatesInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblAgrRightsCreateNestedOneWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateNestedOneWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateNestedOneWithoutTblRoyRatesInput>;
export const tblAgrRightsCreateNestedOneWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
