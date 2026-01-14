import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRightsFormWhereUniqueInputObjectSchema as dictRightsFormWhereUniqueInputObjectSchema } from './dictRightsFormWhereUniqueInput.schema';
import { dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema as dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormCreateWithoutTblAgrRightsInput.schema';
import { dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUncheckedCreateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRightsFormWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictRightsFormCreateOrConnectWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRightsFormCreateOrConnectWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormCreateOrConnectWithoutTblAgrRightsInput>;
export const dictRightsFormCreateOrConnectWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
