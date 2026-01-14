import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblPubLocalInputObjectSchema as tblAgreementsCreateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsCreateWithoutTblPubLocalInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblPubLocalInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblPubLocalInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblPubLocalInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblPubLocalInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblPubLocalInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblPubLocalInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblAgreementsCreateNestedOneWithoutTblPubLocalInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblPubLocalInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblPubLocalInput>;
export const tblAgreementsCreateNestedOneWithoutTblPubLocalInputObjectZodSchema = makeSchema();
