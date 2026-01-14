import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './tblRoyRatesWhereUniqueInput.schema';
import { tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema as tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesCreateWithoutTblAgreementsInput.schema';
import { tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblRoyRatesCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesCreateOrConnectWithoutTblAgreementsInput>;
export const tblRoyRatesCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
