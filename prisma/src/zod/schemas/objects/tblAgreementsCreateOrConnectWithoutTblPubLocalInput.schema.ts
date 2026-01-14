import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutTblPubLocalInputObjectSchema as tblAgreementsCreateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsCreateWithoutTblPubLocalInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblPubLocalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblPubLocalInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutTblPubLocalInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblPubLocalInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblPubLocalInput>;
export const tblAgreementsCreateOrConnectWithoutTblPubLocalInputObjectZodSchema = makeSchema();
