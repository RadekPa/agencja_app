import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblPubLocalInputObjectSchema as tblAgreementsCreateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsCreateWithoutTblPubLocalInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblPubLocalInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblPubLocalInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblPubLocalInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblPubLocalInput.schema';
import { tblAgreementsUpsertWithoutTblPubLocalInputObjectSchema as tblAgreementsUpsertWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUpsertWithoutTblPubLocalInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateToOneWithWhereWithoutTblPubLocalInputObjectSchema as tblAgreementsUpdateToOneWithWhereWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUpdateToOneWithWhereWithoutTblPubLocalInput.schema';
import { tblAgreementsUpdateWithoutTblPubLocalInputObjectSchema as tblAgreementsUpdateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUpdateWithoutTblPubLocalInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblPubLocalInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblPubLocalInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblPubLocalInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblPubLocalInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblPubLocalInputObjectSchema).optional(),
  upsert: z.lazy(() => tblAgreementsUpsertWithoutTblPubLocalInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateToOneWithWhereWithoutTblPubLocalInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithoutTblPubLocalInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblPubLocalInputObjectSchema)]).optional()
}).strict();
export const tblAgreementsUpdateOneWithoutTblPubLocalNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateOneWithoutTblPubLocalNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateOneWithoutTblPubLocalNestedInput>;
export const tblAgreementsUpdateOneWithoutTblPubLocalNestedInputObjectZodSchema = makeSchema();
