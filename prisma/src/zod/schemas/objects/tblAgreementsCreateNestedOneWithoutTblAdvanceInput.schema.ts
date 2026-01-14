import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblAdvanceInputObjectSchema as tblAgreementsCreateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsCreateWithoutTblAdvanceInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAdvanceInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblAdvanceInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblAdvanceInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblAdvanceInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAdvanceInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblAdvanceInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblAgreementsCreateNestedOneWithoutTblAdvanceInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblAdvanceInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateNestedOneWithoutTblAdvanceInput>;
export const tblAgreementsCreateNestedOneWithoutTblAdvanceInputObjectZodSchema = makeSchema();
