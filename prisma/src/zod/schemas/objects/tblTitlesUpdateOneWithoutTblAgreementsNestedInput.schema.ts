import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblAgreementsInputObjectSchema as tblTitlesCreateWithoutTblAgreementsInputObjectSchema } from './tblTitlesCreateWithoutTblAgreementsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblTitlesCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblTitlesCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblTitlesUpsertWithoutTblAgreementsInputObjectSchema as tblTitlesUpsertWithoutTblAgreementsInputObjectSchema } from './tblTitlesUpsertWithoutTblAgreementsInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema as tblTitlesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema } from './tblTitlesUpdateToOneWithWhereWithoutTblAgreementsInput.schema';
import { tblTitlesUpdateWithoutTblAgreementsInputObjectSchema as tblTitlesUpdateWithoutTblAgreementsInputObjectSchema } from './tblTitlesUpdateWithoutTblAgreementsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblAgreementsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblTitlesUpsertWithoutTblAgreementsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblTitlesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblTitlesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblTitlesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]).optional()
}).strict();
export const tblTitlesUpdateOneWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateOneWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateOneWithoutTblAgreementsNestedInput>;
export const tblTitlesUpdateOneWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
