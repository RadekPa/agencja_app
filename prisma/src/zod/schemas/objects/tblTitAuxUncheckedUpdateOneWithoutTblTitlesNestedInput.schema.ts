import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuxCreateWithoutTblTitlesInputObjectSchema as tblTitAuxCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuxCreateWithoutTblTitlesInput.schema';
import { tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuxUncheckedCreateWithoutTblTitlesInput.schema';
import { tblTitAuxCreateOrConnectWithoutTblTitlesInputObjectSchema as tblTitAuxCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblTitAuxCreateOrConnectWithoutTblTitlesInput.schema';
import { tblTitAuxUpsertWithoutTblTitlesInputObjectSchema as tblTitAuxUpsertWithoutTblTitlesInputObjectSchema } from './tblTitAuxUpsertWithoutTblTitlesInput.schema';
import { tblTitAuxWhereInputObjectSchema as tblTitAuxWhereInputObjectSchema } from './tblTitAuxWhereInput.schema';
import { tblTitAuxWhereUniqueInputObjectSchema as tblTitAuxWhereUniqueInputObjectSchema } from './tblTitAuxWhereUniqueInput.schema';
import { tblTitAuxUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema as tblTitAuxUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema } from './tblTitAuxUpdateToOneWithWhereWithoutTblTitlesInput.schema';
import { tblTitAuxUpdateWithoutTblTitlesInputObjectSchema as tblTitAuxUpdateWithoutTblTitlesInputObjectSchema } from './tblTitAuxUpdateWithoutTblTitlesInput.schema';
import { tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblTitAuxUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitAuxCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitAuxCreateOrConnectWithoutTblTitlesInputObjectSchema).optional(),
  upsert: z.lazy(() => tblTitAuxUpsertWithoutTblTitlesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblTitAuxWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblTitAuxWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblTitAuxWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblTitAuxUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuxUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectSchema)]).optional()
}).strict();
export const tblTitAuxUncheckedUpdateOneWithoutTblTitlesNestedInputObjectSchema: z.ZodType<Prisma.tblTitAuxUncheckedUpdateOneWithoutTblTitlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxUncheckedUpdateOneWithoutTblTitlesNestedInput>;
export const tblTitAuxUncheckedUpdateOneWithoutTblTitlesNestedInputObjectZodSchema = makeSchema();
