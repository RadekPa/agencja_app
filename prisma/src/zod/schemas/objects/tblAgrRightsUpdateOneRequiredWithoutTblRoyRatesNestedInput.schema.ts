import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsCreateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsCreateOrConnectWithoutTblRoyRatesInputObjectSchema as tblAgrRightsCreateOrConnectWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutTblRoyRatesInput.schema';
import { tblAgrRightsUpsertWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUpsertWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUpsertWithoutTblRoyRatesInput.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateToOneWithWhereWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUpdateToOneWithWhereWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUpdateToOneWithWhereWithoutTblRoyRatesInput.schema';
import { tblAgrRightsUpdateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUpdateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgrRightsCreateOrConnectWithoutTblRoyRatesInputObjectSchema).optional(),
  upsert: z.lazy(() => tblAgrRightsUpsertWithoutTblRoyRatesInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblAgrRightsUpdateToOneWithWhereWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgrRightsUpdateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema)]).optional()
}).strict();
export const tblAgrRightsUpdateOneRequiredWithoutTblRoyRatesNestedInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateOneRequiredWithoutTblRoyRatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateOneRequiredWithoutTblRoyRatesNestedInput>;
export const tblAgrRightsUpdateOneRequiredWithoutTblRoyRatesNestedInputObjectZodSchema = makeSchema();
