import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema as tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsCreateWithoutTblRoyRatesInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblRoyRatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblRoyRatesInput>;
export const tblAgreementsCreateOrConnectWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
