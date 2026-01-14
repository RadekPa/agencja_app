import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutTblTitlesInputObjectSchema as tblAgreementsCreateWithoutTblTitlesInputObjectSchema } from './tblAgreementsCreateWithoutTblTitlesInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblTitlesInput>;
export const tblAgreementsCreateOrConnectWithoutTblTitlesInputObjectZodSchema = makeSchema();
