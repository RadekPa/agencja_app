import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './dictRoyTypeWhereUniqueInput.schema';
import { dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeCreateWithoutTblAgrRightsInput.schema';
import { dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUncheckedCreateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictRoyTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyTypeCreateOrConnectWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeCreateOrConnectWithoutTblAgrRightsInput>;
export const dictRoyTypeCreateOrConnectWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
