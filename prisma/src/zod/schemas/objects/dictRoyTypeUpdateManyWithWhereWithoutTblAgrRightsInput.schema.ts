import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeScalarWhereInputObjectSchema as dictRoyTypeScalarWhereInputObjectSchema } from './dictRoyTypeScalarWhereInput.schema';
import { dictRoyTypeUpdateManyMutationInputObjectSchema as dictRoyTypeUpdateManyMutationInputObjectSchema } from './dictRoyTypeUpdateManyMutationInput.schema';
import { dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRoyTypeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => dictRoyTypeUpdateManyMutationInputObjectSchema), z.lazy(() => dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictRoyTypeUpdateManyWithWhereWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyTypeUpdateManyWithWhereWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeUpdateManyWithWhereWithoutTblAgrRightsInput>;
export const dictRoyTypeUpdateManyWithWhereWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
