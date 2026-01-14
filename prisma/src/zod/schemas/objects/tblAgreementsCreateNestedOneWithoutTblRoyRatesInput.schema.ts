import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema as tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsCreateWithoutTblRoyRatesInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblRoyRatesInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblRoyRatesInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblRoyRatesInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblRoyRatesInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblAgreementsCreateNestedOneWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblRoyRatesInput>;
export const tblAgreementsCreateNestedOneWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
