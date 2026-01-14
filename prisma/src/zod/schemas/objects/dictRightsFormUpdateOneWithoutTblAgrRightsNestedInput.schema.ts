import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema as dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormCreateWithoutTblAgrRightsInput.schema';
import { dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRightsFormCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictRightsFormCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictRightsFormUpsertWithoutTblAgrRightsInputObjectSchema as dictRightsFormUpsertWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUpsertWithoutTblAgrRightsInput.schema';
import { dictRightsFormWhereInputObjectSchema as dictRightsFormWhereInputObjectSchema } from './dictRightsFormWhereInput.schema';
import { dictRightsFormWhereUniqueInputObjectSchema as dictRightsFormWhereUniqueInputObjectSchema } from './dictRightsFormWhereUniqueInput.schema';
import { dictRightsFormUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema as dictRightsFormUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUpdateToOneWithWhereWithoutTblAgrRightsInput.schema';
import { dictRightsFormUpdateWithoutTblAgrRightsInputObjectSchema as dictRightsFormUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUpdateWithoutTblAgrRightsInput.schema';
import { dictRightsFormUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRightsFormUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictRightsFormCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictRightsFormUpsertWithoutTblAgrRightsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictRightsFormWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictRightsFormWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictRightsFormWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictRightsFormUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRightsFormUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRightsFormUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]).optional()
}).strict();
export const dictRightsFormUpdateOneWithoutTblAgrRightsNestedInputObjectSchema: z.ZodType<Prisma.dictRightsFormUpdateOneWithoutTblAgrRightsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormUpdateOneWithoutTblAgrRightsNestedInput>;
export const dictRightsFormUpdateOneWithoutTblAgrRightsNestedInputObjectZodSchema = makeSchema();
