import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema as tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsCreateWithoutTblRoyaltyInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblRoyaltyInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblRoyaltyInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblRoyaltyInput.schema';
import { tblAgreementsUpsertWithoutTblRoyaltyInputObjectSchema as tblAgreementsUpsertWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUpsertWithoutTblRoyaltyInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateToOneWithWhereWithoutTblRoyaltyInputObjectSchema as tblAgreementsUpdateToOneWithWhereWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUpdateToOneWithWhereWithoutTblRoyaltyInput.schema';
import { tblAgreementsUpdateWithoutTblRoyaltyInputObjectSchema as tblAgreementsUpdateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUpdateWithoutTblRoyaltyInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblRoyaltyInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblRoyaltyInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblRoyaltyInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblRoyaltyInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblRoyaltyInputObjectSchema).optional(),
  upsert: z.lazy(() => tblAgreementsUpsertWithoutTblRoyaltyInputObjectSchema).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateToOneWithWhereWithoutTblRoyaltyInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithoutTblRoyaltyInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblRoyaltyInputObjectSchema)]).optional()
}).strict();
export const tblAgreementsUpdateOneRequiredWithoutTblRoyaltyNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateOneRequiredWithoutTblRoyaltyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateOneRequiredWithoutTblRoyaltyNestedInput>;
export const tblAgreementsUpdateOneRequiredWithoutTblRoyaltyNestedInputObjectZodSchema = makeSchema();
