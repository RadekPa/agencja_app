import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema as dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormCreateWithoutTblAgrRightsInput.schema';
import { dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRightsFormCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictRightsFormCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictRightsFormWhereUniqueInputObjectSchema as dictRightsFormWhereUniqueInputObjectSchema } from './dictRightsFormWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictRightsFormCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  connect: z.lazy(() => dictRightsFormWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictRightsFormCreateNestedOneWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRightsFormCreateNestedOneWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormCreateNestedOneWithoutTblAgrRightsInput>;
export const dictRightsFormCreateNestedOneWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
