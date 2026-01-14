import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutTblAdvanceInputObjectSchema as tblAgreementsCreateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsCreateWithoutTblAdvanceInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAdvanceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAdvanceInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutTblAdvanceInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblAdvanceInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblAdvanceInput>;
export const tblAgreementsCreateOrConnectWithoutTblAdvanceInputObjectZodSchema = makeSchema();
